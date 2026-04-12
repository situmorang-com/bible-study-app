import { lessons } from '$lib/lessons';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, parent, url }) => {
	const lessonId = parseInt(params.id);
	const lesson = lessons.find(l => l.id === lessonId);
	const reviewMode = url.searchParams.get('review') === '1';
	const retryMode = url.searchParams.get('retry') === '1';
	const startFromBeginning = reviewMode || retryMode;

	if (!lesson) {
		throw error(404, 'Pelajaran tidak ditemukan');
	}

	const { user } = await parent();
	let progress = { currentSection: 0, lastViewedSection: 0, completed: false };
	let bestQuizScore: number | null = null;
	let certificateUrl: string | null = null;

	if (user) {
		certificateUrl = `${url.origin}/sertifikat/${lessonId}/${user.id}`;
		try {
			const { db } = await import('$lib/server/db');
			const { lessonProgress, quizResults } = await import('$lib/server/schema');
			const { eq, and, desc } = await import('drizzle-orm');

			const prog = db.select().from(lessonProgress)
				.where(and(eq(lessonProgress.userId, user.id), eq(lessonProgress.lessonId, lessonId)))
				.get();

			if (prog) {
				progress = {
					currentSection: prog.currentSection,
					lastViewedSection: prog.lastViewedSection,
					completed: !!prog.completed
				};
			}

			const quiz = db.select({ percentage: quizResults.percentage })
				.from(quizResults)
				.where(and(eq(quizResults.userId, user.id), eq(quizResults.lessonId, lessonId)))
				.orderBy(desc(quizResults.percentage))
				.get();

			if (quiz) {
				bestQuizScore = quiz.percentage;
			}
		} catch {
			// DB not ready
		}
	}

	return {
		lesson,
		progress,
		bestQuizScore,
		certificateUrl,
		origin: url.origin,
		startFromBeginning,
		reviewMode
	};
};
