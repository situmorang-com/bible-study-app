import { error } from '@sveltejs/kit';
import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';
import QRCode from 'qrcode';
import { PDFDocument } from 'pdf-lib';
import amazingFactsSvg from '$lib/assets/amazing-facts-logo.svg?raw';
import adventistSvg from '$lib/assets/adventist-id--black.svg?raw';
import { lessons } from '$lib/lessons';
import type { RequestHandler } from './$types';

const amazingFactsDataUri = `data:image/svg+xml;base64,${Buffer.from(amazingFactsSvg).toString('base64')}`;
const adventistDataUri = `data:image/svg+xml;base64,${Buffer.from(adventistSvg).toString('base64')}`;

// A4 landscape canvas (aspect ~1.414). We render the design at this size and
// resvg scales it up to 300 DPI for print.
const DESIGN_W = 1400;
const DESIGN_H = 990;
// A4 landscape at 300 DPI = 3508 × 2480
const PRINT_W = 3508;

type SatoriFont = {
	name: string;
	data: ArrayBuffer;
	weight: 400 | 700 | 800;
	style: 'normal';
};

let fontsCache: SatoriFont[] | null = null;

async function loadFonts(fetch: typeof globalThis.fetch): Promise<SatoriFont[]> {
	if (fontsCache) return fontsCache;
	const [inter400, inter700, inter800, playfair700] = await Promise.all([
		fetch('/fonts/Inter-Regular.woff').then((r) => r.arrayBuffer()),
		fetch('/fonts/Inter-Bold.woff').then((r) => r.arrayBuffer()),
		fetch('/fonts/Inter-ExtraBold.woff').then((r) => r.arrayBuffer()),
		fetch('/fonts/Playfair-Bold.woff').then((r) => r.arrayBuffer())
	]);
	fontsCache = [
		{ name: 'Inter', data: inter400, weight: 400, style: 'normal' },
		{ name: 'Inter', data: inter700, weight: 700, style: 'normal' },
		{ name: 'Inter', data: inter800, weight: 800, style: 'normal' },
		{ name: 'Playfair', data: playfair700, weight: 700, style: 'normal' }
	];
	return fontsCache;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function el(type: string, props: Record<string, unknown>): any {
	return { type, props, key: null };
}

function buildCertificate(opts: {
	userName: string;
	lessonTitle: string;
	percentage: number;
	issueDate: string;
	certId: string;
	qrDataUri: string;
}) {
	const { userName, lessonTitle, issueDate, certId, qrDataUri } = opts;

	return el('div', {
		style: {
			width: `${DESIGN_W}px`,
			height: `${DESIGN_H}px`,
			display: 'flex',
			padding: '40px',
			backgroundColor: '#fdf8ec',
			fontFamily: 'Playfair',
			color: '#0f1f33',
			position: 'relative'
		},
		children: el('div', {
			style: {
				flex: 1,
				display: 'flex',
				flexDirection: 'column',
				borderWidth: '6px',
				borderStyle: 'double',
				borderColor: '#b8852a',
				padding: '30px'
			},
			children: el('div', {
				style: {
					flex: 1,
					display: 'flex',
					flexDirection: 'column',
					borderWidth: '1px',
					borderStyle: 'solid',
					borderColor: '#b8852a',
					padding: '60px 80px',
					alignItems: 'center',
					textAlign: 'center',
					position: 'relative'
				},
				children: [
					// Decorative diamonds at top
					el('div', {
						style: {
							display: 'flex',
							gap: '14px',
							alignItems: 'center',
							marginBottom: '20px'
						},
						children: [
							el('div', {
								style: {
									width: '14px',
									height: '14px',
									backgroundColor: '#b8852a',
									transform: 'rotate(45deg)',
									display: 'flex'
								}
							}),
							el('div', {
								style: {
									width: '240px',
									height: '1px',
									backgroundColor: '#b8852a',
									display: 'flex'
								}
							}),
							el('div', {
								style: {
									width: '20px',
									height: '20px',
									backgroundColor: '#b8852a',
									transform: 'rotate(45deg)',
									display: 'flex'
								}
							}),
							el('div', {
								style: {
									width: '240px',
									height: '1px',
									backgroundColor: '#b8852a',
									display: 'flex'
								}
							}),
							el('div', {
								style: {
									width: '14px',
									height: '14px',
									backgroundColor: '#b8852a',
									transform: 'rotate(45deg)',
									display: 'flex'
								}
							})
						]
					}),
					el('div', {
						style: {
							fontSize: '22px',
							fontWeight: 400,
							letterSpacing: '14px',
							textTransform: 'uppercase',
							color: '#b8852a',
							marginTop: '10px',
							display: 'flex',
							fontFamily: 'Inter'
						},
						children: 'SERTIFIKAT'
					}),
					el('div', {
						style: {
							fontSize: '72px',
							fontWeight: 900,
							color: '#0f1f33',
							marginTop: '4px',
							display: 'flex'
						},
						children: 'Pendalaman Alkitab'
					}),
					el('div', {
						style: {
							fontSize: '20px',
							fontFamily: 'Inter',
							fontWeight: 400,
							color: '#6b7280',
							marginTop: '30px',
							display: 'flex'
						},
						children: 'Dengan bangga diberikan kepada'
					}),
					el('div', {
						style: {
							fontSize: '96px',
							fontFamily: 'Playfair',
							fontWeight: 700,
							fontStyle: 'italic',
							color: '#0f1f33',
							marginTop: '20px',
							paddingBottom: '12px',
							display: 'flex'
						},
						children: userName
					}),
					el('div', {
						style: {
							width: '520px',
							height: '1px',
							backgroundColor: '#b8852a',
							display: 'flex'
						}
					}),
					el('div', {
						style: {
							fontSize: '22px',
							fontFamily: 'Inter',
							color: '#4b5563',
							marginTop: '30px',
							maxWidth: '900px',
							display: 'flex',
							textAlign: 'center'
						},
						children: `Telah menyelesaikan pelajaran "${lessonTitle}"`
					}),
					// Footer with signatures and QR
					el('div', {
						style: {
							marginTop: '80px',
							display: 'flex',
							justifyContent: 'space-between',
							width: '100%',
							alignItems: 'flex-end'
						},
						children: [
							el('div', {
								style: {
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center'
								},
								children: [
									el('div', {
										style: {
											width: '260px',
											borderTop: '1px solid #0f1f33',
											paddingTop: '8px',
											fontSize: '14px',
											fontFamily: 'Inter',
											fontWeight: 700,
											color: '#0f1f33',
											display: 'flex',
											justifyContent: 'center'
										},
										children: 'Amazing Facts'
									}),
									el('div', {
										style: {
											fontSize: '12px',
											fontFamily: 'Inter',
											color: '#6b7280',
											marginTop: '2px',
											display: 'flex'
										},
										children: 'Penyelenggara'
									})
								]
							}),
							// Center: QR
							el('div', {
								style: {
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center'
								},
								children: [
									el('img', {
										src: qrDataUri,
										width: 100,
										height: 100,
										style: { display: 'flex', marginBottom: '8px' }
									}),
									el('div', {
										style: {
											fontSize: '11px',
											fontFamily: 'Inter',
											fontWeight: 700,
											color: '#6b7280',
											marginTop: '2px',
											display: 'flex'
										},
										children: certId
									})
								]
							}),
							el('div', {
								style: {
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center'
								},
								children: [
									el('div', {
										style: {
											width: '260px',
											borderTop: '1px solid #0f1f33',
											paddingTop: '8px',
											fontSize: '14px',
											fontFamily: 'Inter',
											fontWeight: 700,
											color: '#0f1f33',
											display: 'flex',
											justifyContent: 'center'
										},
										children: issueDate
									}),
									el('div', {
										style: {
											fontSize: '12px',
											fontFamily: 'Inter',
											color: '#6b7280',
											marginTop: '2px',
											display: 'flex'
										},
										children: 'Tanggal Penerbitan'
									})
								]
							})
						]
					})
				]
			})
		})
	});
}

function buildCertId(userId: string, lessonId: number, completedAtMs: number): string {
	const year = new Date(completedAtMs).getFullYear();
	const shortUser = userId.replace(/[^a-zA-Z0-9]/g, '').slice(0, 6).toUpperCase();
	return `PDA-${year}-${lessonId.toString().padStart(2, '0')}-${shortUser}`;
}

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
			`SELECT score, total_questions AS totalQuestions, percentage, completed_at AS completedAt
			 FROM quiz_results
			 WHERE user_id = ? AND lesson_id = ? AND percentage >= ?
			 ORDER BY percentage DESC, completed_at DESC
			 LIMIT 1`
		)
		.get(params.userId, lessonId, lesson.passThreshold ?? 70) as
		| { score: number; totalQuestions: number; percentage: number; completedAt: number }
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

	const fonts = await loadFonts(fetch);

	const tree = buildCertificate({
		userName: user.name,
		lessonTitle: lesson.title,
		percentage: Math.round(attempt.percentage),
		issueDate,
		certId,
		qrDataUri
	});

	const svg = await satori(tree, {
		width: DESIGN_W,
		height: DESIGN_H,
		fonts
	});

	// Render to print-quality PNG at 300 DPI equivalent
	const pngBytes = new Resvg(svg, {
		fitTo: { mode: 'width', value: PRINT_W }
	})
		.render()
		.asPng();

	// Embed in an A4 landscape PDF
	const pdfDoc = await PDFDocument.create();
	pdfDoc.setTitle(`Sertifikat Pendalaman Alkitab - ${user.name}`);
	pdfDoc.setAuthor('Pendalaman Alkitab');
	pdfDoc.setSubject(`${lesson.title} - ${certId}`);
	pdfDoc.setCreator('Pendalaman Alkitab');

	const embeddedPng = await pdfDoc.embedPng(pngBytes);
	// A4 landscape in points (72 DPI): 842 × 595
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
		'Cache-Control': 'public, max-age=31536000, immutable'
	});

	return new Response(new Uint8Array(pdfBytes));
};
