import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { v4 as uuid } from 'uuid';

export const POST: RequestHandler = async ({ request, cookies }) => {
	const userId = cookies.get('userId');
	if (!userId) return json({ error: 'Not authenticated' }, { status: 401 });

	const { lessonId, score, totalQuestions } = await request.json();
	const percentage = (score / totalQuestions) * 100;

	try {
		const { db } = await import('$lib/server/db');
		const { quizResults, lessonProgress } = await import('$lib/server/schema');
		const { eq, and } = await import('drizzle-orm');

		// Save quiz result
		db.insert(quizResults).values({
			id: uuid(),
			userId,
			lessonId,
			score,
			totalQuestions,
			percentage,
			completedAt: new Date()
		}).run();

		// Mark lesson as completed if score >= 70%
		if (percentage >= 70) {
			const existing = db.select().from(lessonProgress)
				.where(and(eq(lessonProgress.userId, userId), eq(lessonProgress.lessonId, lessonId)))
				.get();

			if (existing) {
				db.update(lessonProgress)
					.set({ completed: true, completedAt: new Date() })
					.where(eq(lessonProgress.id, existing.id))
					.run();
			} else {
				db.insert(lessonProgress).values({
					id: uuid(),
					userId,
					lessonId,
					currentSection: 0,
					completed: true,
					completedAt: new Date()
				}).run();
			}
		}

		return json({ success: true, percentage });
	} catch (e) {
		return json({ error: 'Database error' }, { status: 500 });
	}
};
