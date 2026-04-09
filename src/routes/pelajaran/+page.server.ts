import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
	const { user } = await parent();
	let completedLessons: number[] = [];

	if (user) {
		try {
			const { db } = await import('$lib/server/db');
			const { lessonProgress } = await import('$lib/server/schema');
			const { eq, and } = await import('drizzle-orm');
			const results = db.select({ lessonId: lessonProgress.lessonId })
				.from(lessonProgress)
				.where(and(eq(lessonProgress.userId, user.id), eq(lessonProgress.completed, true)))
				.all();
			completedLessons = results.map(r => r.lessonId);
		} catch {
			// DB not ready
		}
	}

	return { completedLessons };
};
