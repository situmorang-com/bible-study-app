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
	const { userName, lessonTitle, percentage, issueDate, certId, qrDataUri } = opts;

	return el('div', {
		style: {
			width: `${DESIGN_W}px`,
			height: `${DESIGN_H}px`,
			display: 'flex',
			flexDirection: 'column',
			padding: '80px 100px',
			backgroundColor: '#ffffff',
			fontFamily: 'Inter',
			color: '#0f1f33',
			position: 'relative'
		},
		children: [
			// Top accent bar
			el('div', {
				style: {
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					height: '8px',
					backgroundColor: '#e8a838',
					display: 'flex'
				}
			}),
			// Header
			el('div', {
				style: {
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center'
				},
				children: [
					el('img', {
						src: amazingFactsDataUri,
						width: 260,
						height: 76,
						style: { display: 'flex' }
					}),
					el('div', {
						style: {
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'flex-end'
						},
						children: [
							el('div', {
								style: {
									fontSize: '12px',
									fontWeight: 700,
									letterSpacing: '3px',
									textTransform: 'uppercase',
									color: '#9ca3af',
									display: 'flex'
								},
								children: 'Certificate No.'
							}),
							el('div', {
								style: {
									fontSize: '16px',
									fontWeight: 700,
									color: '#0f1f33',
									marginTop: '4px',
									display: 'flex'
								},
								children: certId
							})
						]
					})
				]
			}),
			// Body
			el('div', {
				style: {
					flex: 1,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'flex-start',
					marginTop: '40px'
				},
				children: [
					el('div', {
						style: {
							fontSize: '14px',
							fontWeight: 700,
							letterSpacing: '6px',
							textTransform: 'uppercase',
							color: '#e8a838',
							display: 'flex'
						},
						children: 'Sertifikat Penyelesaian'
					}),
					el('div', {
						style: {
							fontSize: '48px',
							fontWeight: 800,
							color: '#0f1f33',
							marginTop: '8px',
							display: 'flex'
						},
						children: 'Pendalaman Alkitab'
					}),
					el('div', {
						style: {
							width: '80px',
							height: '3px',
							backgroundColor: '#e8a838',
							marginTop: '40px',
							display: 'flex'
						}
					}),
					el('div', {
						style: {
							fontSize: '18px',
							color: '#6b7280',
							marginTop: '20px',
							display: 'flex'
						},
						children: 'Diberikan kepada'
					}),
					el('div', {
						style: {
							fontSize: '88px',
							fontFamily: 'Playfair',
							fontWeight: 700,
							color: '#0f1f33',
							marginTop: '6px',
							paddingBottom: '18px',
							display: 'flex',
							maxWidth: '1200px',
							lineHeight: 1.1
						},
						children: userName
					}),
					el('div', {
						style: {
							fontSize: '22px',
							color: '#4b5563',
							marginTop: '8px',
							maxWidth: '1100px',
							display: 'flex',
							lineHeight: 1.5
						},
						children: `Telah lulus pelajaran "${lessonTitle}" dengan nilai akhir ${percentage}%`
					})
				]
			}),
			// Footer
			el('div', {
				style: {
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'flex-end',
					marginTop: '40px',
					paddingTop: '24px',
					borderTop: '1px solid #e5e7eb',
					gap: '40px'
				},
				children: [
					// Left: date
					el('div', {
						style: { display: 'flex', flexDirection: 'column' },
						children: [
							el('div', {
								style: {
									fontSize: '12px',
									fontWeight: 700,
									letterSpacing: '3px',
									textTransform: 'uppercase',
									color: '#9ca3af',
									display: 'flex'
								},
								children: 'Tanggal'
							}),
							el('div', {
								style: {
									fontSize: '18px',
									fontWeight: 700,
									color: '#0f1f33',
									marginTop: '4px',
									display: 'flex'
								},
								children: issueDate
							})
						]
					}),
					// Center: Adventist logo
					el('img', {
						src: adventistDataUri,
						width: 240,
						height: 62,
						style: { display: 'flex', opacity: 0.85 }
					}),
					// Right: QR + verify
					el('div', {
						style: {
							display: 'flex',
							alignItems: 'center',
							gap: '14px'
						},
						children: [
							el('img', {
								src: qrDataUri,
								width: 110,
								height: 110,
								style: { display: 'flex' }
							}),
							el('div', {
								style: {
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'flex-start'
								},
								children: [
									el('div', {
										style: {
											fontSize: '11px',
											fontWeight: 700,
											letterSpacing: '3px',
											textTransform: 'uppercase',
											color: '#9ca3af',
											display: 'flex'
										},
										children: 'Verifikasi'
									}),
									el('div', {
										style: {
											fontSize: '13px',
											fontWeight: 700,
											color: '#0f1f33',
											marginTop: '4px',
											display: 'flex'
										},
										children: 'Scan untuk cek'
									}),
									el('div', {
										style: {
											fontSize: '11px',
											color: '#6b7280',
											marginTop: '2px',
											display: 'flex'
										},
										children: certId
									})
								]
							})
						]
					})
				]
			})
		]
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
