import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { v4 as uuid } from 'uuid';

export const POST: RequestHandler = async ({ request, cookies }) => {
	const userId = cookies.get('userId');
	if (!userId) return json({ error: 'Not authenticated' }, { status: 401 });

	const { lessonId, currentSection } = await request.json();

	try {
		const { db } = await import('$lib/server/db');
		const { lessonProgress } = await import('$lib/server/schema');
		const { eq, and } = await import('drizzle-orm');

		const existing = db.select().from(lessonProgress)
			.where(and(eq(lessonProgress.userId, userId), eq(lessonProgress.lessonId, lessonId)))
			.get();

		if (existing) {
			db.update(lessonProgress)
				.set({ currentSection })
				.where(eq(lessonProgress.id, existing.id))
				.run();
		} else {
			db.insert(lessonProgress).values({
				id: uuid(),
				userId,
				lessonId,
				currentSection,
				completed: false
			}).run();
		}

		return json({ success: true });
	} catch (e) {
		return json({ error: 'Database error' }, { status: 500 });
	}
};
