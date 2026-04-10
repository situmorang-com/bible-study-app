import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
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
	const secure = process.env.NODE_ENV === 'production';

	if (!name || !pin) return json({ error: 'Isi nama dan PIN' }, { status: 400 });
	if (name.length < 2) return json({ error: 'Nama minimal 2 karakter' }, { status: 400 });
	if (!isValidPinFormat(pin)) return json({ error: 'PIN harus 4 digit angka' }, { status: 400 });

	try {
		const user = findUserByName(name);
		if (!user) return json({ error: 'Nama belum terdaftar. Silakan daftar dulu.' }, { status: 404 });
		if (!verifyPin(pin, user.pin)) return json({ error: 'PIN tidak sesuai untuk nama ini' }, { status: 401 });

		setAuthCookies(cookies, user, secure);

		return json({ success: true });
	} catch (e) {
		return json({ error: 'Gagal masuk' }, { status: 500 });
	}
};
