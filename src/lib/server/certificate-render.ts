import amazingFactsSvg from '$lib/assets/amazing-facts-logo.svg?raw';
import adventistSvg from '$lib/assets/adventist-id--black.svg?raw';

export const DESIGN_W = 1400;
export const DESIGN_H = 990;
export const PRINT_W = 3508;
export const OG_W = 1400;

const amazingFactsDataUri = `data:image/svg+xml;base64,${Buffer.from(amazingFactsSvg).toString('base64')}`;
const adventistDataUri = `data:image/svg+xml;base64,${Buffer.from(adventistSvg).toString('base64')}`;

export type SatoriFont = {
	name: string;
	data: ArrayBuffer;
	weight: 400 | 700 | 800;
	style: 'normal';
};

let fontsCache: SatoriFont[] | null = null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function el(type: string, props: Record<string, unknown>): any {
	return { type, props, key: null };
}

export async function loadCertificateFonts(fetch: typeof globalThis.fetch): Promise<SatoriFont[]> {
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

export function getUserNameFontSize(userName: string) {
	const normalizedLength = userName.trim().replace(/\s+/g, ' ').length;

	if (normalizedLength <= 14) return 100;
	if (normalizedLength <= 20) return 88;
	if (normalizedLength <= 26) return 76;
	if (normalizedLength <= 32) return 68;
	return 60;
}

export function buildCertId(userId: string, lessonId: number, completedAtMs: number) {
	const year = new Date(completedAtMs).getFullYear();
	const shortUser = userId.replace(/[^a-zA-Z0-9]/g, '').slice(0, 6).toUpperCase();
	return `PDA-${year}-${lessonId.toString().padStart(2, '0')}-${shortUser}`;
}

// OG image dimensions (Facebook/WhatsApp standard)
export const OG_IMAGE_W = 1200;
export const OG_IMAGE_H = 630;

export function buildOgImage(opts: {
	userName: string;
	lessonTitle: string;
	percentage: number;
	issueDate: string;
	certId: string;
	qrDataUri: string;
}) {
	const { userName, lessonTitle, percentage, issueDate, certId, qrDataUri } = opts;
	const nameFontSize = Math.min(getUserNameFontSize(userName), 64);

	return el('div', {
		style: {
			width: `${OG_IMAGE_W}px`,
			height: `${OG_IMAGE_H}px`,
			display: 'flex',
			padding: '18px',
			backgroundColor: '#ffffff',
			fontFamily: 'Playfair',
			color: '#0f1f33'
		},
		children: el('div', {
			style: {
				flex: 1,
				display: 'flex',
				flexDirection: 'column',
				borderWidth: '4px',
				borderStyle: 'solid',
				borderColor: '#b8852a',
				padding: '6px'
			},
			children: el('div', {
				style: {
					flex: 1,
					display: 'flex',
					flexDirection: 'column',
					borderWidth: '1px',
					borderStyle: 'solid',
					borderColor: '#b8852a'
				},
				children: [
					// ── Gold header band ──
					el('div', {
						style: {
							backgroundColor: '#b8852a',
							padding: '12px 36px',
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center'
						},
						children: [
							el('img', {
								src: amazingFactsDataUri,
								width: 150,
								height: 44,
								style: { display: 'flex', filter: 'brightness(0) invert(1)' }
							}),
							el('img', {
								src: adventistDataUri,
								width: 140,
								height: 44,
								style: { display: 'flex', filter: 'brightness(0) invert(1)', opacity: 0.9 }
							})
						]
					}),
					// ── Main body ──
					el('div', {
						style: {
							flex: 1,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
							padding: '16px 50px 10px'
						},
						children: [
							// Diamond divider
							el('div', {
								style: {
									display: 'flex',
									alignItems: 'center',
									gap: '10px',
									marginBottom: '10px'
								},
								children: [
									el('div', { style: { width: '100px', height: '1px', backgroundColor: '#b8852a', display: 'flex' } }),
									el('div', { style: { width: '8px', height: '8px', backgroundColor: '#b8852a', transform: 'rotate(45deg)', display: 'flex' } }),
									el('div', { style: { width: '12px', height: '12px', backgroundColor: '#b8852a', transform: 'rotate(45deg)', display: 'flex' } }),
									el('div', { style: { width: '8px', height: '8px', backgroundColor: '#b8852a', transform: 'rotate(45deg)', display: 'flex' } }),
									el('div', { style: { width: '100px', height: '1px', backgroundColor: '#b8852a', display: 'flex' } })
								]
							}),
							// SERTIFIKAT in body
							el('div', {
								style: {
									fontSize: '13px',
									fontFamily: 'Inter',
									fontWeight: 700,
									letterSpacing: '10px',
									textTransform: 'uppercase',
									color: '#b8852a',
									display: 'flex',
									marginBottom: '10px'
								},
								children: 'SERTIFIKAT'
							}),
							el('div', {
								style: {
									fontSize: '36px',
									fontWeight: 700,
									color: '#0f1f33',
									display: 'flex',
									lineHeight: 1.1
								},
								children: 'Pendalaman Alkitab'
							}),
							el('div', {
								style: {
									fontSize: '13px',
									fontFamily: 'Inter',
									fontWeight: 400,
									color: '#6b7280',
									marginTop: '12px',
									display: 'flex'
								},
								children: 'Dengan bangga diberikan kepada'
							}),
							el('div', {
								style: {
									fontSize: `${nameFontSize}px`,
									fontFamily: 'Playfair',
									fontWeight: 700,
									fontStyle: 'italic',
									color: '#0f1f33',
									marginTop: '4px',
									lineHeight: 1.05,
									display: 'flex',
									maxWidth: '1000px'
								},
								children: userName
							}),
							// Gold rule
							el('div', {
								style: {
									display: 'flex',
									alignItems: 'center',
									gap: '10px',
									marginTop: '8px'
								},
								children: [
									el('div', { style: { width: '80px', height: '1px', backgroundColor: '#d4a843', display: 'flex' } }),
									el('div', { style: { width: '6px', height: '6px', backgroundColor: '#d4a843', transform: 'rotate(45deg)', display: 'flex' } }),
									el('div', { style: { width: '80px', height: '1px', backgroundColor: '#d4a843', display: 'flex' } })
								]
							}),
							el('div', {
								style: {
									fontSize: '16px',
									fontFamily: 'Inter',
									color: '#4b5563',
									marginTop: '12px',
									maxWidth: '800px',
									display: 'flex',
									textAlign: 'center',
									lineHeight: 1.4
								},
								children: `Telah menyelesaikan pelajaran "${lessonTitle}"`
							})
						]
					}),
					// ── Footer band ──
					el('div', {
						style: {
							backgroundColor: '#f7f0e0',
							borderTop: '1px solid #b8852a',
							padding: '10px 36px',
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center'
						},
						children: [
							// Left: score + date
							el('div', {
								style: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start' },
								children: [
									el('div', {
										style: {
											fontSize: '9px',
											fontFamily: 'Inter',
											fontWeight: 700,
											letterSpacing: '2px',
											textTransform: 'uppercase',
											color: '#8a6318',
											display: 'flex'
										},
										children: `Nilai ${percentage}%`
									}),
									el('div', {
										style: {
											fontSize: '13px',
											fontFamily: 'Inter',
											fontWeight: 700,
											color: '#0f1f33',
											marginTop: '2px',
											display: 'flex'
										},
										children: issueDate
									})
								]
							}),
							// Center: QR + cert ID
							el('div', {
								style: {
									display: 'flex',
									alignItems: 'center',
									gap: '10px'
								},
								children: [
									el('img', {
										src: qrDataUri,
										width: 56,
										height: 56,
										style: { display: 'flex' }
									}),
									el('div', {
										style: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start' },
										children: [
											el('div', {
												style: {
													fontSize: '9px',
													fontFamily: 'Inter',
													fontWeight: 700,
													letterSpacing: '2px',
													textTransform: 'uppercase',
													color: '#8a6318',
													display: 'flex'
												},
												children: 'Verifikasi'
											}),
											el('div', {
												style: {
													fontSize: '10px',
													fontFamily: 'Inter',
													fontWeight: 700,
													color: '#0f1f33',
													marginTop: '2px',
													display: 'flex'
												},
												children: certId
											})
										]
									})
								]
							}),
							// Right: tagline
							el('div', {
								style: { display: 'flex', flexDirection: 'column', alignItems: 'flex-end' },
								children: el('div', {
									style: {
										fontSize: '12px',
										fontFamily: 'Playfair',
										fontStyle: 'italic',
										color: '#0f1f33',
										display: 'flex'
									},
									children: 'Firman Tuhan Tetap Teguh'
								})
							})
						]
					})
				]
			})
		})
	});
}

export function buildCertificateImage(opts: {
	userName: string;
	lessonTitle: string;
	issueDate: string;
	certId: string;
	qrDataUri: string;
}) {
	const { userName, lessonTitle, issueDate, certId, qrDataUri } = opts;
	const userNameFontSize = getUserNameFontSize(userName);

	return el('div', {
		style: {
			width: `${DESIGN_W}px`,
			height: `${DESIGN_H}px`,
			display: 'flex',
			padding: '36px',
			backgroundColor: '#ffffff',
			fontFamily: 'Playfair',
			color: '#0f1f33'
		},
		children: el('div', {
			style: {
				flex: 1,
				display: 'flex',
				flexDirection: 'column',
				borderWidth: '5px',
				borderStyle: 'solid',
				borderColor: '#b8852a',
				padding: '10px'
			},
			children: el('div', {
				style: {
					flex: 1,
					display: 'flex',
					flexDirection: 'column',
					borderWidth: '1px',
					borderStyle: 'solid',
					borderColor: '#b8852a',
					padding: '0'
				},
				children: [
					el('div', {
						style: {
							backgroundColor: '#b8852a',
							padding: '20px 60px',
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center'
						},
						children: [
							el('img', {
								src: amazingFactsDataUri,
								width: 230,
								height: 68,
								style: { display: 'flex', filter: 'brightness(0) invert(1)' }
							}),
							el('img', {
								src: adventistDataUri,
								width: 220,
								height: 68,
								style: { display: 'flex', filter: 'brightness(0) invert(1)', opacity: 0.9 }
							})
						]
					}),
					el('div', {
						style: {
							flex: 1,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							textAlign: 'center',
							padding: '88px 80px 16px'
						},
						children: [
							el('div', {
								style: {
									display: 'flex',
									alignItems: 'center',
									gap: '18px',
									marginBottom: '24px'
								},
								children: [
									el('div', { style: { width: '180px', height: '1px', backgroundColor: '#b8852a', display: 'flex' } }),
									el('div', { style: { width: '12px', height: '12px', backgroundColor: '#b8852a', transform: 'rotate(45deg)', display: 'flex' } }),
									el('div', { style: { width: '20px', height: '20px', backgroundColor: '#b8852a', transform: 'rotate(45deg)', display: 'flex' } }),
									el('div', { style: { width: '12px', height: '12px', backgroundColor: '#b8852a', transform: 'rotate(45deg)', display: 'flex' } }),
									el('div', { style: { width: '180px', height: '1px', backgroundColor: '#b8852a', display: 'flex' } })
								]
							}),
							el('div', {
								style: {
									fontSize: '34px',
									fontFamily: 'Inter',
									fontWeight: 700,
									letterSpacing: '18px',
									textTransform: 'uppercase',
									color: '#b8852a',
									display: 'flex',
									marginBottom: '22px'
								},
								children: 'SERTIFIKAT'
							}),
							el('div', {
								style: {
									fontSize: '58px',
									fontWeight: 700,
									color: '#0f1f33',
									display: 'flex',
									lineHeight: 1.1
								},
								children: 'Pendalaman Alkitab'
							}),
							el('div', {
								style: {
									fontSize: '18px',
									fontFamily: 'Inter',
									fontWeight: 400,
									color: '#6b7280',
									marginTop: '28px',
									display: 'flex'
								},
								children: 'Dengan bangga diberikan kepada'
							}),
							el('div', {
								style: {
									fontSize: `${userNameFontSize}px`,
									fontFamily: 'Playfair',
									fontWeight: 700,
									fontStyle: 'italic',
									color: '#0f1f33',
									marginTop: '10px',
									lineHeight: 1.05,
									display: 'flex',
									maxWidth: '1200px'
								},
								children: userName
							}),
							el('div', {
								style: {
									display: 'flex',
									alignItems: 'center',
									gap: '14px',
									marginTop: '16px'
								},
								children: [
									el('div', { style: { width: '120px', height: '1px', backgroundColor: '#d4a843', display: 'flex' } }),
									el('div', { style: { width: '8px', height: '8px', backgroundColor: '#d4a843', transform: 'rotate(45deg)', display: 'flex' } }),
									el('div', { style: { width: '120px', height: '1px', backgroundColor: '#d4a843', display: 'flex' } })
								]
							}),
							el('div', {
								style: {
									fontSize: '21px',
									fontFamily: 'Inter',
									color: '#4b5563',
									marginTop: '48px',
									maxWidth: '950px',
									display: 'flex',
									textAlign: 'center',
									lineHeight: 1.5
								},
								children: `Telah menyelesaikan pelajaran "${lessonTitle}"`
							})
						]
					}),
					el('div', {
						style: {
							backgroundColor: '#f7f0e0',
							borderTop: '1px solid #b8852a',
							padding: '18px 60px',
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center'
						},
						children: [
							el('div', {
								style: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start' },
								children: [
									el('div', {
										style: {
											fontSize: '11px',
											fontFamily: 'Inter',
											fontWeight: 700,
											letterSpacing: '3px',
											textTransform: 'uppercase',
											color: '#8a6318',
											display: 'flex'
										},
										children: 'Tanggal Penerbitan'
									}),
									el('div', {
										style: {
											fontSize: '18px',
											fontFamily: 'Inter',
											fontWeight: 700,
											color: '#0f1f33',
											marginTop: '4px',
											display: 'flex'
										},
										children: issueDate
									})
								]
							}),
							el('div', {
								style: {
									display: 'flex',
									alignItems: 'center',
									gap: '14px'
								},
								children: [
									el('img', {
										src: qrDataUri,
										width: 90,
										height: 90,
										style: { display: 'flex' }
									}),
									el('div', {
										style: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start' },
										children: [
											el('div', {
												style: {
													fontSize: '11px',
													fontFamily: 'Inter',
													fontWeight: 700,
													letterSpacing: '2px',
													textTransform: 'uppercase',
													color: '#8a6318',
													display: 'flex'
												},
												children: 'Verifikasi Sertifikat'
											}),
											el('div', {
												style: {
													fontSize: '13px',
													fontFamily: 'Inter',
													fontWeight: 700,
													color: '#0f1f33',
													marginTop: '4px',
													display: 'flex'
												},
												children: certId
											}),
											el('div', {
												style: {
													fontSize: '11px',
													fontFamily: 'Inter',
													color: '#6b7280',
													marginTop: '2px',
													display: 'flex'
												},
												children: 'Scan QR untuk cek keaslian'
											})
										]
									})
								]
							}),
							el('div', {
								style: { display: 'flex', flexDirection: 'column', alignItems: 'flex-end' },
								children: [
									el('div', {
										style: {
											fontSize: '11px',
											fontFamily: 'Inter',
											fontWeight: 700,
											letterSpacing: '3px',
											textTransform: 'uppercase',
											color: '#8a6318',
											display: 'flex'
										},
										children: 'Moto'
									}),
									el('div', {
										style: {
											fontSize: '16px',
											fontFamily: 'Playfair',
											fontStyle: 'italic',
											color: '#0f1f33',
											marginTop: '4px',
											display: 'flex',
											maxWidth: '280px',
											textAlign: 'right'
										},
										children: 'Firman Tuhan Tetap Teguh'
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
