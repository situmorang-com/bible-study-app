import { lessons } from '$lib/lessons';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, url }) => {
	const lessonId = Number.parseInt(params.lessonId, 10);
	const lesson = lessons.find((entry) => entry.id === lessonId);

	if (!lesson) {
		throw error(404, 'Pelajaran tidak ditemukan');
	}

	try {
		const { db } = await import('$lib/server/db');
		const { users, quizResults } = await import('$lib/server/schema');
		const { and, desc, eq, gte } = await import('drizzle-orm');

		const user = db
			.select({
				id: users.id,
				name: users.name,
				avatarEmoji: users.avatarEmoji
			})
			.from(users)
			.where(eq(users.id, params.userId))
			.get();

		if (!user) {
			throw error(404, 'Peserta tidak ditemukan');
		}

		const passingAttempt = db
			.select({
				score: quizResults.score,
				totalQuestions: quizResults.totalQuestions,
				percentage: quizResults.percentage,
				completedAt: quizResults.completedAt
			})
			.from(quizResults)
			.where(
				and(
					eq(quizResults.userId, params.userId),
					eq(quizResults.lessonId, lessonId),
					gte(quizResults.percentage, lesson.passThreshold ?? 70)
				)
			)
			.orderBy(desc(quizResults.percentage), desc(quizResults.completedAt))
			.get();

		if (!passingAttempt) {
			throw error(404, 'Sertifikat belum tersedia');
		}

		return {
			lesson,
			user,
			attempt: passingAttempt,
			origin: url.origin,
			certificateUrl: `${url.origin}/sertifikat/${lessonId}/${params.userId}`
		};
	} catch (err) {
		if (err && typeof err === 'object' && 'status' in err) {
			throw err;
		}

		throw error(500, 'Gagal memuat sertifikat');
	}
};
