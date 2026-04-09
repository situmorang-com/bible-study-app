import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const userId = cookies.get('userId');
	const userName = cookies.get('userName');
	const userAvatar = cookies.get('userAvatar');

	return {
		user: userId ? { id: userId, name: userName ?? 'Pengguna', avatarEmoji: userAvatar ?? '📖' } : null
	};
};
