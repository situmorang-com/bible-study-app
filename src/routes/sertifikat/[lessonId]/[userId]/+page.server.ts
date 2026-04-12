import { lessons } from '$lib/lessons';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const CERTIFICATE_ASSET_VERSION = 'v4';

export const load: PageServerLoad = async ({ params, url }) => {
	const lessonId = Number.parseInt(params.lessonId, 10);
	const lesson = lessons.find((entry) => entry.id === lessonId);

	if (!lesson) {
		throw error(404, 'Pelajaran tidak ditemukan');
	}

	try {
		const { sqlite } = await import('$lib/server/db');

		const user = sqlite
			.prepare('SELECT id, name, avatar_emoji AS avatarEmoji FROM users WHERE id = ?')
			.get(params.userId) as
			| { id: string; name: string; avatarEmoji: string }
			| undefined;

		if (!user) {
			throw error(404, 'Peserta tidak ditemukan');
		}

		const passingAttempt = sqlite
			.prepare(
				`SELECT score,
				        total_questions AS totalQuestions,
				        percentage,
				        completed_at AS completedAt
				 FROM quiz_results
				 WHERE user_id = ? AND lesson_id = ? AND percentage >= ?
				 ORDER BY percentage DESC, completed_at DESC
				 LIMIT 1`
			)
			.get(params.userId, lessonId, lesson.passThreshold ?? 70) as
			| { score: number; totalQuestions: number; percentage: number; completedAt: number }
			| undefined;

		if (!passingAttempt) {
			throw error(404, 'Sertifikat belum tersedia');
		}

		// completed_at may be Unix seconds (DB default) or ms (new inserts). Normalize to ms.
		const completedAtMs =
			passingAttempt.completedAt < 1e12
				? passingAttempt.completedAt * 1000
				: passingAttempt.completedAt;

		return {
			lesson,
			user,
			attempt: { ...passingAttempt, completedAt: completedAtMs },
			origin: url.origin,
			certificateUrl: `${url.origin}/sertifikat/${lessonId}/${params.userId}`,
			ogImageUrl: `${url.origin}/sertifikat/${lessonId}/${params.userId}/og.png?v=${CERTIFICATE_ASSET_VERSION}`,
			printPdfUrl: `/sertifikat/${lessonId}/${params.userId}/print.pdf?v=${CERTIFICATE_ASSET_VERSION}`
		};
	} catch (err) {
		if (err && typeof err === 'object' && 'status' in err) {
			throw err;
		}

		throw error(500, 'Gagal memuat sertifikat');
	}
};
