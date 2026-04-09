import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ cookies }) => {
	const secure = process.env.NODE_ENV === 'production';

	cookies.delete('userId', { path: '/', secure, sameSite: 'lax' });
	cookies.delete('userName', { path: '/', secure, sameSite: 'lax' });
	cookies.delete('userAvatar', { path: '/', secure, sameSite: 'lax' });
	return json({ success: true });
};
