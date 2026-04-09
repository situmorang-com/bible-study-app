import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
	const { user } = await parent();

	let stats = { lessonsCompleted: 0, quizzesTaken: 0, avgScore: 0 };
	let recentQuizzes: { lessonId: number; score: number; totalQuestions: number; percentage: number }[] = [];

	if (user) {
		try {
			const { db } = await import('$lib/server/db');
			const { lessonProgress, quizResults } = await import('$lib/server/schema');
			const { eq, and, desc, sql } = await import('drizzle-orm');

			// Completed lessons
			const completed = db.select().from(lessonProgress)
				.where(and(eq(lessonProgress.userId, user.id), eq(lessonProgress.completed, true)))
				.all();
			stats.lessonsCompleted = completed.length;

			// Quiz stats
			const quizStats = db
				.select({
					count: sql<number>`COUNT(*)`.as('count'),
					avg: sql<number>`AVG(${quizResults.percentage})`.as('avg'),
				})
				.from(quizResults)
				.where(eq(quizResults.userId, user.id))
				.get();

			if (quizStats) {
				stats.quizzesTaken = quizStats.count;
				stats.avgScore = quizStats.avg ?? 0;
			}

			// Recent quizzes
			recentQuizzes = db.select({
				lessonId: quizResults.lessonId,
				score: quizResults.score,
				totalQuestions: quizResults.totalQuestions,
				percentage: quizResults.percentage,
			})
			.from(quizResults)
			.where(eq(quizResults.userId, user.id))
			.orderBy(desc(quizResults.completedAt))
			.limit(5)
			.all();
		} catch {
			// DB not ready
		}
	}

	return { stats, recentQuizzes };
};
