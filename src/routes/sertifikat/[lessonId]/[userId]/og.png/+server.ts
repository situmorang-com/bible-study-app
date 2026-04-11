import { error } from '@sveltejs/kit';
import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';
import amazingFactsSvg from '$lib/assets/amazing-facts-logo.svg?raw';
import adventistSvg from '$lib/assets/adventist-id--black.svg?raw';
import { lessons } from '$lib/lessons';
import type { RequestHandler } from './$types';

const amazingFactsDataUri = `data:image/svg+xml;base64,${Buffer.from(amazingFactsSvg).toString('base64')}`;
const adventistDataUri = `data:image/svg+xml;base64,${Buffer.from(adventistSvg).toString('base64')}`;

type SatoriFont = {
	name: string;
	data: ArrayBuffer;
	weight: 400 | 700 | 800;
	style: 'normal';
};

let fontsCache: SatoriFont[] | null = null;

async function loadFonts(fetch: typeof globalThis.fetch): Promise<SatoriFont[]> {
	if (fontsCache) return fontsCache;
	const [regular, bold, extraBold] = await Promise.all([
		fetch('/fonts/Inter-Regular.woff').then((r) => r.arrayBuffer()),
		fetch('/fonts/Inter-Bold.woff').then((r) => r.arrayBuffer()),
		fetch('/fonts/Inter-ExtraBold.woff').then((r) => r.arrayBuffer())
	]);
	fontsCache = [
		{ name: 'Inter', data: regular, weight: 400, style: 'normal' },
		{ name: 'Inter', data: bold, weight: 700, style: 'normal' },
		{ name: 'Inter', data: extraBold, weight: 800, style: 'normal' }
	];
	return fontsCache;
}

function el(type: string, props: Record<string, unknown>) {
	return { type, props, key: null } as unknown;
}

function buildCertificate(opts: {
	userName: string;
	lessonTitle: string;
	percentage: number;
	issueDate: string;
}) {
	const { userName, lessonTitle, percentage, issueDate } = opts;

	return el('div', {
		style: {
			width: '1200px',
			height: '630px',
			display: 'flex',
			flexDirection: 'column',
			padding: '64px',
			fontFamily: 'Inter',
			color: '#0f1f33',
			backgroundImage:
				'radial-gradient(circle at top left, #ffffff 0%, #fff8eb 45%, #f7eedd 100%)',
			position: 'relative'
		},
		children: [
			// Soft decorative glow – top left
			el('div', {
				style: {
					position: 'absolute',
					top: '-80px',
					left: '-80px',
					width: '320px',
					height: '320px',
					borderRadius: '9999px',
					backgroundColor: 'rgba(232, 168, 56, 0.22)',
					filter: 'blur(80px)',
					display: 'flex'
				}
			}),
			// Soft decorative glow – bottom right
			el('div', {
				style: {
					position: 'absolute',
					bottom: '-100px',
					right: '-80px',
					width: '320px',
					height: '320px',
					borderRadius: '9999px',
					backgroundColor: 'rgba(45, 90, 142, 0.18)',
					filter: 'blur(80px)',
					display: 'flex'
				}
			}),
			// Header with logos
			el('div', {
				style: {
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					width: '100%'
				},
				children: [
					el('img', {
						src: amazingFactsDataUri,
						width: 272,
						height: 80,
						style: { display: 'flex' }
					}),
					el('img', {
						src: adventistDataUri,
						width: 240,
						height: 64,
						style: { display: 'flex', opacity: 0.85 }
					})
				]
			}),
			// Center block
			el('div', {
				style: {
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					textAlign: 'center',
					marginTop: '32px',
					flex: 1
				},
				children: [
					el('div', {
						style: {
							fontSize: '18px',
							fontWeight: 700,
							letterSpacing: '8px',
							textTransform: 'uppercase',
							color: 'rgba(30, 58, 95, 0.7)',
							display: 'flex'
						},
						children: 'Sertifikat Penyelesaian'
					}),
					el('div', {
						style: {
							fontSize: '40px',
							fontWeight: 800,
							color: '#0f1f33',
							marginTop: '12px',
							display: 'flex'
						},
						children: 'Pendalaman Alkitab'
					}),
					el('div', {
						style: {
							fontSize: '22px',
							color: '#4b5563',
							marginTop: '18px',
							display: 'flex'
						},
						children: 'Diberikan kepada'
					}),
					el('div', {
						style: {
							fontSize: '64px',
							fontWeight: 800,
							color: '#0f1f33',
							marginTop: '10px',
							lineHeight: 1.2,
							paddingBottom: '12px',
							display: 'flex',
							maxWidth: '1040px'
						},
						children: userName
					}),
					el('div', {
						style: {
							fontSize: '24px',
							color: '#4b5563',
							marginTop: '18px',
							maxWidth: '940px',
							display: 'flex',
							textAlign: 'center'
						},
						children: `Telah lulus pelajaran "${lessonTitle}"`
					})
				]
			}),
			// Bottom row: score + date
			el('div', {
				style: {
					display: 'flex',
					gap: '24px',
					marginTop: '28px'
				},
				children: [
					el('div', {
						style: {
							flex: 1,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							padding: '20px 28px',
							borderRadius: '20px',
							backgroundColor: 'rgba(255, 255, 255, 0.82)',
							border: '1px solid rgba(232, 168, 56, 0.35)'
						},
						children: [
							el('div', {
								style: {
									fontSize: '14px',
									fontWeight: 700,
									letterSpacing: '4px',
									textTransform: 'uppercase',
									color: '#6b7280',
									display: 'flex'
								},
								children: 'Nilai Akhir'
							}),
							el('div', {
								style: {
									fontSize: '56px',
									fontWeight: 800,
									color: '#0f1f33',
									marginTop: '6px',
									display: 'flex'
								},
								children: `${percentage}%`
							})
						]
					}),
					el('div', {
						style: {
							flex: 1,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							padding: '20px 28px',
							borderRadius: '20px',
							backgroundColor: 'rgba(255, 255, 255, 0.82)',
							border: '1px solid rgba(45, 90, 142, 0.25)'
						},
						children: [
							el('div', {
								style: {
									fontSize: '14px',
									fontWeight: 700,
									letterSpacing: '4px',
									textTransform: 'uppercase',
									color: '#6b7280',
									display: 'flex'
								},
								children: 'Tanggal'
							}),
							el('div', {
								style: {
									fontSize: '32px',
									fontWeight: 800,
									color: '#0f1f33',
									marginTop: '8px',
									display: 'flex'
								},
								children: issueDate
							}),
							el('div', {
								style: {
									fontSize: '16px',
									color: '#6b7280',
									marginTop: '2px',
									display: 'flex'
								},
								children: 'Sertifikat digital'
							})
						]
					})
				]
			}),
			// Footer tagline
			el('div', {
				style: {
					marginTop: '24px',
					paddingTop: '18px',
					borderTop: '1px dashed rgba(30, 58, 95, 0.25)',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%'
				},
				children: el('div', {
					style: {
						fontSize: '16px',
						fontWeight: 700,
						letterSpacing: '6px',
						textTransform: 'uppercase',
						color: 'rgba(30, 58, 95, 0.65)',
						display: 'flex'
					},
					children: 'Firman Tuhan Tetap Teguh'
				})
			})
		]
	});
}

export const GET: RequestHandler = async ({ params, fetch, setHeaders }) => {
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

	// completedAt is stored as Unix seconds (DB default `unixepoch()`). Convert to ms for Date.
	const completedAtMs =
		attempt.completedAt < 1e12 ? attempt.completedAt * 1000 : attempt.completedAt;
	const issueDate = new Intl.DateTimeFormat('id-ID', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	}).format(new Date(completedAtMs));

	const fonts = await loadFonts(fetch);

	const tree = buildCertificate({
		userName: user.name,
		lessonTitle: lesson.title,
		percentage: Math.round(attempt.percentage),
		issueDate
	});

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const svg = await satori(tree as any, {
		width: 1200,
		height: 630,
		fonts
	});

	const png = new Resvg(svg, {
		fitTo: { mode: 'width', value: 1200 }
	})
		.render()
		.asPng();

	setHeaders({
		'Content-Type': 'image/png',
		'Cache-Control': 'public, max-age=31536000, immutable'
	});

	return new Response(new Uint8Array(png));
};
