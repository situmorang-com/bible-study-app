import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
	const { user } = await parent();
	let leaderboard: { userId: string; name: string; avatarEmoji: string; avgScore: number; quizCount: number }[] = [];

	try {
		const { db } = await import('$lib/server/db');
		const { quizResults, users } = await import('$lib/server/schema');
		const { eq } = await import('drizzle-orm');

		const attempts = db
			.select({
				userId: users.id,
				name: users.name,
				avatarEmoji: users.avatarEmoji,
				lessonId: quizResults.lessonId,
				percentage: quizResults.percentage
			})
			.from(quizResults)
			.innerJoin(users, eq(quizResults.userId, users.id))
			.all();

		const bestByUserLesson = new Map<string, (typeof attempts)[number]>();
		for (const attempt of attempts) {
			const key = `${attempt.userId}:${attempt.lessonId}`;
			const current = bestByUserLesson.get(key);
			if (!current || attempt.percentage > current.percentage) {
				bestByUserLesson.set(key, attempt);
			}
		}

		const aggregated = new Map<string, { userId: string; name: string; avatarEmoji: string; scores: number[] }>();
		for (const result of bestByUserLesson.values()) {
			const current = aggregated.get(result.userId);
			if (current) {
				current.scores.push(result.percentage);
				continue;
			}

			aggregated.set(result.userId, {
				userId: result.userId,
				name: result.name,
				avatarEmoji: result.avatarEmoji,
				scores: [result.percentage]
			});
		}

		leaderboard = [...aggregated.values()]
			.map((entry) => ({
				userId: entry.userId,
				name: entry.name,
				avatarEmoji: entry.avatarEmoji,
				avgScore: entry.scores.reduce((sum, score) => sum + score, 0) / entry.scores.length,
				quizCount: entry.scores.length
			}))
			.sort((left, right) => right.avgScore - left.avgScore || right.quizCount - left.quizCount)
			.slice(0, 20);
	} catch {
		// DB not ready
	}

	return { leaderboard };
};
