import { lessons } from '$lib/lessons';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
	const { user } = await parent();

	let progressCount = 0;
	let completedLessonIds: number[] = [];
	let startedLessonIds: number[] = [];
	let continueLessonHref = '/pelajaran';
	let hasLearningHistory = false;

	if (user) {
		try {
			const { db } = await import('$lib/server/db');
			const { lessonProgress } = await import('$lib/server/schema');
			const { eq, and, desc } = await import('drizzle-orm');
			const allProgress = db
				.select({
					lessonId: lessonProgress.lessonId,
					completed: lessonProgress.completed,
					updatedAt: lessonProgress.updatedAt
				})
				.from(lessonProgress)
				.where(eq(lessonProgress.userId, user.id))
				.all();

			const completedProgress = allProgress.filter((result) => result.completed);
			const startedProgress = allProgress.filter((result) => !result.completed);
			progressCount = completedProgress.length;
			completedLessonIds = completedProgress.map((result) => result.lessonId);
			startedLessonIds = startedProgress.map((result) => result.lessonId);

			const lastProgress = db
				.select({
					lessonId: lessonProgress.lessonId,
					completed: lessonProgress.completed
				})
				.from(lessonProgress)
				.where(eq(lessonProgress.userId, user.id))
				.orderBy(desc(lessonProgress.updatedAt))
				.get();

			if (allProgress.length > 0) {
				hasLearningHistory = true;
			}

			if (lastProgress?.completed === false) {
				continueLessonHref = `/pelajaran/${lastProgress.lessonId}`;
			} else {
				const completedSet = new Set(completedLessonIds);
				const firstUnfinishedLesson = lessons.find((lesson) => !completedSet.has(lesson.id));
				if (firstUnfinishedLesson) {
					continueLessonHref = `/pelajaran/${firstUnfinishedLesson.id}`;
				} else if (lastProgress) {
					continueLessonHref = `/pelajaran/${lastProgress.lessonId}`;
				}
			}
		} catch {
			// DB not ready yet
		}
	}

	return { progressCount, completedLessonIds, startedLessonIds, continueLessonHref, hasLearningHistory };
};
