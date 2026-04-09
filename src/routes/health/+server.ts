import { json } from '@sveltejs/kit';
import { sqlite } from '$lib/server/db';

export const GET = async () => {
	sqlite.prepare('SELECT 1').get();

	return json({ ok: true });
};
