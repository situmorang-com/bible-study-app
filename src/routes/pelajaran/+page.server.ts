import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
	const { user } = await parent();
	let completedLessons: number[] = [];
	let startedLessons: number[] = [];

	if (user) {
		try {
			const { db } = await import('$lib/server/db');
			const { lessonProgress } = await import('$lib/server/schema');
			const { eq } = await import('drizzle-orm');
			const results = db.select({ lessonId: lessonProgress.lessonId, completed: lessonProgress.completed })
				.from(lessonProgress)
				.where(eq(lessonProgress.userId, user.id))
				.all();
			completedLessons = results.filter((r) => r.completed).map((r) => r.lessonId);
			startedLessons = results.filter((r) => !r.completed).map((r) => r.lessonId);
		} catch {
			// DB not ready
		}
	}

	return { completedLessons, startedLessons };
};
