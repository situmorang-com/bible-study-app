import { error } from '@sveltejs/kit';
import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';
import QRCode from 'qrcode';
import { PDFDocument } from 'pdf-lib';
import { lessons } from '$lib/lessons';
import {
	buildCertId,
	buildCertificateImage,
	DESIGN_H,
	DESIGN_W,
	loadCertificateFonts,
	PRINT_W
} from '$lib/server/certificate-render';
import type { RequestHandler } from './$types';

const CACHE_VERSION = 'v3';

export const GET: RequestHandler = async ({ params, fetch, url, setHeaders }) => {
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
	const tree = buildCertificateImage({
		userName: user.name,
		lessonTitle: lesson.title,
		issueDate,
		certId,
		qrDataUri
	});

	const svg = await satori(tree, {
		width: DESIGN_W,
		height: DESIGN_H,
		fonts
	});

	const pngBytes = new Resvg(svg, {
		fitTo: { mode: 'width', value: PRINT_W }
	})
		.render()
		.asPng();

	const pdfDoc = await PDFDocument.create();
	pdfDoc.setTitle(`Sertifikat Pendalaman Alkitab - ${user.name}`);
	pdfDoc.setAuthor('Pendalaman Alkitab');
	pdfDoc.setSubject(`${lesson.title} - ${certId}`);
	pdfDoc.setCreator('Pendalaman Alkitab');

	const embeddedPng = await pdfDoc.embedPng(pngBytes);
	const page = pdfDoc.addPage([842, 595]);
	page.drawImage(embeddedPng, {
		x: 0,
		y: 0,
		width: 842,
		height: 595
	});

	const pdfBytes = await pdfDoc.save();

	setHeaders({
		'Content-Type': 'application/pdf',
		'Content-Disposition': `inline; filename="sertifikat-${certId}.pdf"`,
		'Cache-Control': 'public, max-age=31536000, immutable',
		ETag: `"${CACHE_VERSION}-${certId}"`
	});

	return new Response(new Uint8Array(pdfBytes));
};
