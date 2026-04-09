import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
	const { user } = await parent();

	let progressCount = 0;

	if (user) {
		try {
			const { db } = await import('$lib/server/db');
			const { lessonProgress } = await import('$lib/server/schema');
			const { eq, and } = await import('drizzle-orm');
			const results = db.select().from(lessonProgress)
				.where(and(eq(lessonProgress.userId, user.id), eq(lessonProgress.completed, true)))
				.all();
			progressCount = results.length;
		} catch {
			// DB not ready yet
		}
	}

	return { progressCount };
};
