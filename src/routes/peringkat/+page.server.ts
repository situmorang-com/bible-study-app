import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
	const { user } = await parent();
	let leaderboard: { userId: string; name: string; avatarEmoji: string; avgScore: number; quizCount: number }[] = [];

	try {
		const { db } = await import('$lib/server/db');
		const { quizResults, users } = await import('$lib/server/schema');
		const { eq, desc, sql } = await import('drizzle-orm');

		const results = db
			.select({
				userId: users.id,
				name: users.name,
				avatarEmoji: users.avatarEmoji,
				avgScore: sql<number>`AVG(${quizResults.percentage})`.as('avg_score'),
				quizCount: sql<number>`COUNT(${quizResults.id})`.as('quiz_count'),
			})
			.from(quizResults)
			.innerJoin(users, eq(quizResults.userId, users.id))
			.groupBy(users.id)
			.orderBy(desc(sql`avg_score`))
			.limit(20)
			.all();

		leaderboard = results;
	} catch {
		// DB not ready
	}

	return { leaderboard };
};
