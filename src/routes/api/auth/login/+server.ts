import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import bcrypt from 'bcryptjs';

export const POST: RequestHandler = async ({ request, cookies }) => {
	const { name, pin } = await request.json();
	const secure = process.env.NODE_ENV === 'production';

	if (!name || !pin) return json({ error: 'Isi nama dan PIN' }, { status: 400 });

	try {
		const { db } = await import('$lib/server/db');
		const { users } = await import('$lib/server/schema');
		const { eq } = await import('drizzle-orm');

		const user = db.select().from(users).where(eq(users.name, name)).get();
		if (!user) return json({ error: 'Nama tidak ditemukan' }, { status: 401 });

		const validPin = bcrypt.compareSync(pin, user.pin);
		if (!validPin) return json({ error: 'PIN salah' }, { status: 401 });

		cookies.set('userId', user.id, {
			path: '/',
			maxAge: 60 * 60 * 24 * 365,
			httpOnly: true,
			sameSite: 'lax',
			secure
		});
		cookies.set('userName', user.name, {
			path: '/',
			maxAge: 60 * 60 * 24 * 365,
			httpOnly: false,
			sameSite: 'lax',
			secure
		});
		cookies.set('userAvatar', user.avatarEmoji, {
			path: '/',
			maxAge: 60 * 60 * 24 * 365,
			httpOnly: false,
			sameSite: 'lax',
			secure
		});

		return json({ success: true });
	} catch (e) {
		return json({ error: 'Gagal masuk' }, { status: 500 });
	}
};
