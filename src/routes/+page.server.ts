import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
	const { user } = await parent();

	let progressCount = 0;
	let completedLessonIds: number[] = [];
	let lastLessonHref = '/pelajaran';
	let hasLearningHistory = false;

	if (user) {
		try {
			const { db } = await import('$lib/server/db');
			const { lessonProgress } = await import('$lib/server/schema');
			const { eq, and, desc } = await import('drizzle-orm');
			const results = db.select().from(lessonProgress)
				.where(and(eq(lessonProgress.userId, user.id), eq(lessonProgress.completed, true)))
				.all();
			progressCount = results.length;
			completedLessonIds = results.map((result) => result.lessonId);

			const lastProgress = db
				.select({
					lessonId: lessonProgress.lessonId
				})
				.from(lessonProgress)
				.where(eq(lessonProgress.userId, user.id))
				.orderBy(desc(lessonProgress.updatedAt))
				.get();

			if (lastProgress) {
				hasLearningHistory = true;
				lastLessonHref = `/pelajaran/${lastProgress.lessonId}`;
			}
		} catch {
			// DB not ready yet
		}
	}

	return { progressCount, completedLessonIds, lastLessonHref, hasLearningHistory };
};
