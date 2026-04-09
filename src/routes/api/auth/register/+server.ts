import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcryptjs';

export const POST: RequestHandler = async ({ request, cookies }) => {
	const { name, pin, avatarEmoji } = await request.json();
	const secure = process.env.NODE_ENV === 'production';

	if (!name || name.length < 2) return json({ error: 'Nama minimal 2 karakter' }, { status: 400 });
	if (!pin || pin.length !== 4) return json({ error: 'PIN harus 4 digit' }, { status: 400 });

	try {
		const { db } = await import('$lib/server/db');
		const { users } = await import('$lib/server/schema');
		const { eq } = await import('drizzle-orm');

		// Check if name exists
		const existing = db.select().from(users).where(eq(users.name, name)).get();
		if (existing) return json({ error: 'Nama sudah digunakan' }, { status: 400 });

		const hashedPin = bcrypt.hashSync(pin, 10);
		const id = uuid();

		db.insert(users).values({
			id,
			name,
			pin: hashedPin,
			avatarEmoji: avatarEmoji || '📖',
			createdAt: new Date()
		}).run();

		// Set cookies
		cookies.set('userId', id, {
			path: '/',
			maxAge: 60 * 60 * 24 * 365,
			httpOnly: true,
			sameSite: 'lax',
			secure
		});
		cookies.set('userName', name, {
			path: '/',
			maxAge: 60 * 60 * 24 * 365,
			httpOnly: false,
			sameSite: 'lax',
			secure
		});
		cookies.set('userAvatar', avatarEmoji || '📖', {
			path: '/',
			maxAge: 60 * 60 * 24 * 365,
			httpOnly: false,
			sameSite: 'lax',
			secure
		});

		return json({ success: true });
	} catch (e) {
		return json({ error: 'Gagal mendaftar' }, { status: 500 });
	}
};
