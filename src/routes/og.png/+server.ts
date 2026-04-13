import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';
import { loadCertificateFonts } from '$lib/server/certificate-render';
import type { RequestHandler } from './$types';

const OG_IMAGE_W = 1200;
const OG_IMAGE_H = 630;
const CACHE_VERSION = 'v1';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function el(type: string, props: Record<string, unknown>): any {
	return { type, props, key: null };
}

function buildLandingOgImage() {
	return el('div', {
		style: {
			width: `${OG_IMAGE_W}px`,
			height: `${OG_IMAGE_H}px`,
			display: 'flex',
			position: 'relative',
			overflow: 'hidden',
			backgroundColor: '#0b1f33',
			fontFamily: 'Inter',
			color: '#ffffff'
		},
		children: [
			el('div', {
				style: {
					position: 'absolute',
					inset: '0',
					display: 'flex',
					background:
						'radial-gradient(circle at top left, rgba(244,191,117,0.22), transparent 34%), radial-gradient(circle at bottom right, rgba(59,130,246,0.24), transparent 30%), linear-gradient(135deg, #0b1f33 0%, #16385d 60%, #1f4e7a 100%)'
				}
			}),
			el('div', {
				style: {
					position: 'absolute',
					top: '-120px',
					right: '-100px',
					width: '320px',
					height: '320px',
					borderRadius: '9999px',
					backgroundColor: 'rgba(255,255,255,0.06)',
					display: 'flex'
				}
			}),
			el('div', {
				style: {
					position: 'absolute',
					bottom: '-90px',
					left: '-70px',
					width: '260px',
					height: '260px',
					borderRadius: '9999px',
					backgroundColor: 'rgba(245, 158, 11, 0.16)',
					display: 'flex'
				}
			}),
			el('div', {
				style: {
					position: 'relative',
					display: 'flex',
					width: '100%',
					height: '100%',
					padding: '46px 52px',
					justifyContent: 'space-between'
				},
				children: [
					el('div', {
						style: {
							width: '640px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between'
						},
						children: [
							el('div', {
								style: {
									display: 'flex',
									alignItems: 'center',
									gap: '14px'
								},
								children: [
									el('div', {
										style: {
											padding: '10px 16px',
											borderRadius: '999px',
											backgroundColor: 'rgba(245, 158, 11, 0.18)',
											border: '1px solid rgba(245, 158, 11, 0.38)',
											fontSize: '19px',
											fontWeight: 700,
											letterSpacing: '0.08em',
											textTransform: 'uppercase',
											display: 'flex'
										},
										children: 'Firman'
									}),
									el('div', {
										style: {
											padding: '10px 16px',
											borderRadius: '999px',
											backgroundColor: 'rgba(255, 255, 255, 0.1)',
											fontSize: '18px',
											fontWeight: 700,
											display: 'flex'
										},
										children: 'Gratis • Interaktif • Cocok untuk dibagikan'
									})
								]
							}),
							el('div', {
								style: {
									display: 'flex',
									flexDirection: 'column',
									gap: '18px'
								},
								children: [
									el('div', {
										style: {
											fontSize: '68px',
											lineHeight: '1.02',
											fontWeight: 800,
											letterSpacing: '-0.04em',
											display: 'flex',
											flexDirection: 'column'
										},
										children: [
											el('span', { style: { display: 'flex' }, children: 'Belajar Alkitab' }),
											el('span', {
												style: { display: 'flex', color: '#f6c66b' },
												children: 'Bersama,'
											}),
											el('span', { style: { display: 'flex' }, children: 'Tumbuh dalam Firman' })
										]
									}),
									el('div', {
										style: {
											maxWidth: '600px',
											fontSize: '24px',
											lineHeight: '1.35',
											color: 'rgba(255,255,255,0.84)',
											display: 'flex'
										},
										children:
											'Pelajaran singkat, kuis interaktif, dan perjalanan belajar yang bisa kamu jalani bersama keluarga, sahabat, atau kelompok kecil.'
									})
								]
							}),
							el('div', {
								style: {
									display: 'flex',
									alignItems: 'center',
									gap: '18px'
								},
								children: [
									el('div', {
										style: {
											padding: '16px 24px',
											borderRadius: '18px',
											backgroundColor: '#f6c66b',
											color: '#10253e',
											fontSize: '22px',
											fontWeight: 800,
											display: 'flex',
											boxShadow: '0 18px 40px rgba(0,0,0,0.18)'
										},
										children: 'Mulai Belajar Sekarang'
									}),
									el('div', {
										style: {
											fontSize: '20px',
											color: 'rgba(255,255,255,0.76)',
											display: 'flex'
										},
										children: '27 pelajaran • progres tersimpan • sertifikat'
									})
								]
							})
						]
					}),
					el('div', {
						style: {
							width: '400px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							position: 'relative'
						},
						children: [
							el('div', {
								style: {
									position: 'absolute',
									top: '6px',
									right: '0',
									padding: '12px 18px',
									borderRadius: '16px',
									backgroundColor: 'rgba(255,255,255,0.12)',
									border: '1px solid rgba(255,255,255,0.16)',
									display: 'flex',
									flexDirection: 'column',
									backdropFilter: 'blur(4px)'
								},
								children: [
									el('div', {
										style: {
											fontSize: '15px',
											textTransform: 'uppercase',
											letterSpacing: '0.12em',
											color: '#f6c66b',
											fontWeight: 700,
											display: 'flex'
										},
										children: 'Belajar bareng'
									}),
									el('div', {
										style: {
											fontSize: '20px',
											fontWeight: 700,
											marginTop: '6px',
											display: 'flex'
										},
										children: 'Bangun iman, bukan cuma pengetahuan'
									})
								]
							}),
							el('div', {
								style: {
									width: '320px',
									height: '380px',
									borderRadius: '34px',
									backgroundColor: '#f8fafc',
									boxShadow: '0 24px 60px rgba(0,0,0,0.26)',
									display: 'flex',
									flexDirection: 'column',
									padding: '22px'
								},
								children: [
									el('div', {
										style: {
											display: 'flex',
											justifyContent: 'space-between',
											alignItems: 'center'
										},
										children: [
											el('div', {
												style: {
													display: 'flex',
													flexDirection: 'column'
												},
												children: [
													el('div', {
														style: {
															fontSize: '17px',
															fontWeight: 700,
															color: '#10253e',
															display: 'flex'
														},
														children: 'Belajar Alkitab'
													}),
													el('div', {
														style: {
															fontSize: '13px',
															color: '#64748b',
															marginTop: '4px',
															display: 'flex'
														},
														children: 'Firman yang mengubahkan'
													})
												]
											}),
											el('div', {
												style: {
													width: '48px',
													height: '48px',
													borderRadius: '16px',
													backgroundColor: '#173b61',
													color: '#ffffff',
													alignItems: 'center',
													justifyContent: 'center',
													fontSize: '24px',
													display: 'flex'
												},
												children: '📖'
											})
										]
									}),
									el('div', {
										style: {
											marginTop: '18px',
											padding: '18px',
											borderRadius: '26px',
											background: 'linear-gradient(135deg, #173b61 0%, #255b8f 100%)',
											display: 'flex',
											flexDirection: 'column',
											gap: '12px'
										},
										children: [
											el('div', {
												style: {
													fontSize: '13px',
													fontWeight: 700,
													color: '#f6c66b',
													textTransform: 'uppercase',
													letterSpacing: '0.12em',
													display: 'flex'
												},
												children: 'Pelajaran unggulan'
											}),
											el('div', {
												style: {
													fontSize: '26px',
													fontWeight: 800,
													color: '#ffffff',
													lineHeight: '1.2',
													display: 'flex'
												},
												children: 'Mengapa firman Tuhan tetap relevan hari ini?'
											}),
											el('div', {
												style: {
													fontSize: '15px',
													lineHeight: '1.4',
													color: 'rgba(255,255,255,0.82)',
													display: 'flex'
												},
												children: 'Belajar singkat, jawab kuis, lalu lanjut ke pelajaran berikutnya.'
											})
										]
									}),
									el('div', {
										style: {
											marginTop: '14px',
											display: 'flex',
											flexDirection: 'column',
											gap: '10px'
										},
										children: [
											['01', 'Mulai dari dasar iman'],
											['02', 'Diskusikan bersama teman']
										].map(([index, label]) =>
											el('div', {
												style: {
													display: 'flex',
													alignItems: 'center',
													gap: '14px',
													padding: '12px 14px',
													borderRadius: '16px',
													backgroundColor: '#eef4fb'
												},
												children: [
													el('div', {
														style: {
															width: '42px',
															height: '42px',
															borderRadius: '14px',
															backgroundColor: '#d8e7f8',
															color: '#173b61',
															fontSize: '16px',
															fontWeight: 800,
															alignItems: 'center',
															justifyContent: 'center',
															display: 'flex'
														},
														children: index
													}),
													el('div', {
														style: {
															fontSize: '16px',
															fontWeight: 700,
															color: '#16324f',
															display: 'flex'
														},
														children: label
													})
												]
											})
										)
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

export const GET: RequestHandler = async ({ fetch, setHeaders }) => {
	const fonts = await loadCertificateFonts(fetch);
	const svg = await satori(buildLandingOgImage(), {
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
		ETag: `"${CACHE_VERSION}-landing-og"`
	});

	return new Response(new Uint8Array(png));
};
