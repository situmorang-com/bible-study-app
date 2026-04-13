import { error } from '@sveltejs/kit';
import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';
import QRCode from 'qrcode';
import { lessons } from '$lib/lessons';
import {
	buildCertId,
	buildOgImage,
	loadCertificateFonts,
	OG_IMAGE_H,
	OG_IMAGE_W
} from '$lib/server/certificate-render';
import type { RequestHandler } from './$types';

const CACHE_VERSION = 'v5';

export const GET: RequestHandler = async ({ params, fetch, setHeaders, url }) => {
	const lessonId = Number.parseInt(params.lessonId, 10);
	const lesson = lessons.find((entry) => entry.id === lessonId);

	if (!lesson) {
		throw error(404, 'Pelajaran tidak ditemukan');
	}

	const { sqlite } = await import('$lib/server/db');

	const user = sqlite
		.prepare('SELECT id, name FROM users WHERE id = ?')
		.get(params.userId) as { id: string; name: string } | undefined;

	if (!user) {
		throw error(404, 'Peserta tidak ditemukan');
	}

	const attempt = sqlite
		.prepare(
			`SELECT percentage, completed_at AS completedAt
			 FROM quiz_results
			 WHERE user_id = ? AND lesson_id = ? AND percentage >= ?
			 ORDER BY percentage DESC, completed_at DESC
			 LIMIT 1`
		)
		.get(params.userId, lessonId, lesson.passThreshold ?? 70) as
		| { percentage: number; completedAt: number }
		| undefined;

	if (!attempt) {
		throw error(404, 'Sertifikat belum tersedia');
	}

	const completedAtMs =
		attempt.completedAt < 1e12 ? attempt.completedAt * 1000 : attempt.completedAt;

	const issueDate = new Intl.DateTimeFormat('id-ID', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	}).format(new Date(completedAtMs));

	const certId = buildCertId(user.id, lessonId, completedAtMs);
	const verifyUrl = `${url.origin}/sertifikat/${lessonId}/${user.id}`;
	const qrDataUri = await QRCode.toDataURL(verifyUrl, {
		margin: 1,
		width: 512,
		color: { dark: '#0f1f33', light: '#ffffff' }
	});

	const fonts = await loadCertificateFonts(fetch);
	const tree = buildOgImage({
		userName: user.name,
		lessonTitle: lesson.title,
		percentage: Math.round(attempt.percentage),
		issueDate,
		certId,
		qrDataUri
	});

	const svg = await satori(tree, {
		width: OG_IMAGE_W,
		height: OG_IMAGE_H,
		fonts
	});

	const png = new Resvg(svg, {
		fitTo: { mode: 'width', value: OG_IMAGE_W }
	})
		.render()
		.asPng();

	setHeaders({
		'Content-Type': 'image/png',
		'Cache-Control': 'public, max-age=31536000, immutable',
		ETag: `"${CACHE_VERSION}-${certId}"`
	});

	return new Response(new Uint8Array(png));
};
