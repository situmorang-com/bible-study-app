import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcryptjs';
import {
	findUserByName,
	isValidPinFormat,
	normalizeName,
	normalizePin,
	setAuthCookies,
	verifyPin
} from '$lib/server/auth';

export const POST: RequestHandler = async ({ request, cookies }) => {
	const body = await request.json();
	const name = normalizeName(body.name);
	const pin = normalizePin(body.pin);
	const avatarEmoji = typeof body.avatarEmoji === 'string' ? body.avatarEmoji : undefined;
	const secure = process.env.NODE_ENV === 'production';

	if (!name || name.length < 2) return json({ error: 'Nama minimal 2 karakter' }, { status: 400 });
	if (!isValidPinFormat(pin)) return json({ error: 'PIN harus 4 digit angka' }, { status: 400 });

	try {
		const { db } = await import('$lib/server/db');
		const { users } = await import('$lib/server/schema');

		const existing = findUserByName(name);
		if (existing) {
			if (!verifyPin(pin, existing.pin)) {
				return json(
					{ error: 'Nama sudah terdaftar. Gunakan PIN yang sesuai atau pakai nama lain.' },
					{ status: 409 }
				);
			}

			setAuthCookies(cookies, existing, secure);
			return json({ success: true, mode: 'login' });
		}

		const hashedPin = bcrypt.hashSync(pin, 10);
		const id = uuid();
		const user = {
			id,
			name,
			avatarEmoji: avatarEmoji || '📖'
		};

		db.insert(users).values({
			id,
			name,
			pin: hashedPin,
			avatarEmoji: user.avatarEmoji,
			createdAt: new Date()
		}).run();

		setAuthCookies(cookies, user, secure);

		return json({ success: true, mode: 'register' });
	} catch (e) {
		return json({ error: 'Gagal mendaftar' }, { status: 500 });
	}
};
