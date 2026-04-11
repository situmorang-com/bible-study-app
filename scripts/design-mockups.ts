/**
 * One-off script: generate 4 certificate design mockups as PNGs.
 * Run with: npx tsx scripts/design-mockups.ts
 * Output: /tmp/cert-design-{1..4}.png
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';
import QRCode from 'qrcode';

const amazingFactsSvg = readFileSync('./src/lib/assets/amazing-facts-logo.svg', 'utf-8');
const adventistSvg = readFileSync('./src/lib/assets/adventist-id--black.svg', 'utf-8');

const amazingFactsDataUri = `data:image/svg+xml;base64,${Buffer.from(amazingFactsSvg).toString('base64')}`;
const adventistDataUri = `data:image/svg+xml;base64,${Buffer.from(adventistSvg).toString('base64')}`;

// Fonts
const FONT_DIR = '/tmp/cert-fonts';
const inter400 = readFileSync(`${FONT_DIR}/Inter-Regular.woff`);
const inter700 = readFileSync(`${FONT_DIR}/Inter-Bold.woff`);
const inter800 = readFileSync(`${FONT_DIR}/Inter-ExtraBold.woff`);
const playfair400 = readFileSync(`${FONT_DIR}/Playfair-Regular.woff`);
const playfair700 = readFileSync(`${FONT_DIR}/Playfair-Bold.woff`);
const playfair900 = readFileSync(`${FONT_DIR}/Playfair-Black.woff`);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fonts: any[] = [
	{ name: 'Inter', data: inter400, weight: 400, style: 'normal' },
	{ name: 'Inter', data: inter700, weight: 700, style: 'normal' },
	{ name: 'Inter', data: inter800, weight: 800, style: 'normal' },
	{ name: 'Playfair', data: playfair400, weight: 400, style: 'normal' },
	{ name: 'Playfair', data: playfair700, weight: 700, style: 'normal' },
	{ name: 'Playfair', data: playfair900, weight: 900, style: 'normal' }
];

// Shared dummy data
const DATA = {
	userName: 'Edmund Situmorang',
	lessonTitle: 'Masih Adakah yang Bisa Dipercaya?',
	issueDate: '12 April 2026',
	percentage: 90,
	certId: 'PDA-2026-000142'
};

// A4 landscape at ~150 DPI so files stay reasonable. Aspect = sqrt(2) ≈ 1.414
const W = 1400;
const H = 990;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function el(type: string, props: Record<string, unknown>): any {
	return { type, props, key: null };
}

// ─────────────────────────────────────────
// Design 1: Classic Diploma (formal tradisional)
// ─────────────────────────────────────────
function design1() {
	return el('div', {
		style: {
			width: `${W}px`,
			height: `${H}px`,
			display: 'flex',
			padding: '40px',
			backgroundColor: '#fdf8ec',
			fontFamily: 'Playfair',
			color: '#0f1f33'
		},
		children: el('div', {
			style: {
				flex: 1,
				display: 'flex',
				flexDirection: 'column',
				border: '6px double #b8852a',
				padding: '30px'
			},
			children: el('div', {
				style: {
					flex: 1,
					display: 'flex',
					flexDirection: 'column',
					border: '1px solid #b8852a',
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
							display: 'flex'
						},
						children: 'Certificate'
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
						children: DATA.userName
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
						children: `Telah menyelesaikan pelajaran "${DATA.lessonTitle}" dengan nilai ${DATA.percentage}%`
					}),
					// Footer with signatures
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
							// Gold seal in center
							el('div', {
								style: {
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center'
								},
								children: [
									el('div', {
										style: {
											width: '110px',
											height: '110px',
											borderRadius: '9999px',
											backgroundColor: '#b8852a',
											border: '3px solid #8a6318',
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
											justifyContent: 'center',
											color: '#fdf8ec'
										},
										children: [
											el('div', {
												style: {
													fontSize: '11px',
													fontFamily: 'Inter',
													fontWeight: 700,
													letterSpacing: '2px',
													display: 'flex'
												},
												children: 'OFFICIAL'
											}),
											el('div', {
												style: {
													fontSize: '11px',
													fontFamily: 'Inter',
													fontWeight: 700,
													letterSpacing: '2px',
													display: 'flex'
												},
												children: 'SEAL'
											})
										]
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
										children: DATA.issueDate
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

// ─────────────────────────────────────────
// Design 2: Modern Elegant (minimalist, clean)
// ─────────────────────────────────────────
function design2(qrDataUri: string) {
	return el('div', {
		style: {
			width: `${W}px`,
			height: `${H}px`,
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
								children: DATA.certId
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
							display: 'flex'
						},
						children: DATA.userName
					}),
					el('div', {
						style: {
							fontSize: '22px',
							color: '#4b5563',
							marginTop: '8px',
							maxWidth: '1000px',
							display: 'flex',
							lineHeight: 1.5
						},
						children: `Telah lulus pelajaran "${DATA.lessonTitle}" dengan nilai akhir ${DATA.percentage}%`
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
					// Left: date block
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
								children: DATA.issueDate
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
					// Right: QR + verify block
					el('div', {
						style: {
							display: 'flex',
							alignItems: 'center',
							gap: '14px'
						},
						children: [
							el('img', {
								src: qrDataUri,
								width: 96,
								height: 96,
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
										children: DATA.certId
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

// ─────────────────────────────────────────
// Design 3: Biblical Warm (spiritual, hand-crafted feel)
// ─────────────────────────────────────────
function design3() {
	return el('div', {
		style: {
			width: `${W}px`,
			height: `${H}px`,
			display: 'flex',
			padding: '50px',
			backgroundImage:
				'radial-gradient(circle at top left, #fffaf0 0%, #fdf3dc 55%, #f5e9c8 100%)',
			fontFamily: 'Inter',
			color: '#3b2518',
			position: 'relative'
		},
		children: el('div', {
			style: {
				flex: 1,
				display: 'flex',
				flexDirection: 'column',
				border: '2px dashed rgba(139, 90, 32, 0.55)',
				padding: '50px 80px',
				alignItems: 'center',
				textAlign: 'center',
				position: 'relative'
			},
			children: [
				// Top ornament: centered small laurel-like
				el('div', {
					style: {
						display: 'flex',
						alignItems: 'center',
						gap: '18px',
						marginBottom: '10px'
					},
					children: [
						el('div', {
							style: {
								width: '60px',
								height: '1px',
								backgroundColor: 'rgba(139, 90, 32, 0.6)',
								display: 'flex'
							}
						}),
						el('div', {
							style: {
								fontSize: '24px',
								color: '#8b5a20',
								display: 'flex'
							},
							children: '✦'
						}),
						el('div', {
							style: {
								width: '60px',
								height: '1px',
								backgroundColor: 'rgba(139, 90, 32, 0.6)',
								display: 'flex'
							}
						})
					]
				}),
				el('div', {
					style: {
						fontSize: '18px',
						fontWeight: 700,
						letterSpacing: '10px',
						textTransform: 'uppercase',
						color: '#8b5a20',
						display: 'flex'
					},
					children: 'Sertifikat Penyelesaian'
				}),
				el('div', {
					style: {
						fontSize: '64px',
						fontFamily: 'Playfair',
						fontWeight: 900,
						color: '#3b2518',
						marginTop: '12px',
						display: 'flex'
					},
					children: 'Pendalaman Alkitab'
				}),
				el('div', {
					style: {
						fontSize: '20px',
						color: '#6b5540',
						marginTop: '32px',
						display: 'flex'
					},
					children: 'Diberikan kepada hamba Tuhan yang setia'
				}),
				el('div', {
					style: {
						fontSize: '96px',
						fontFamily: 'Playfair',
						fontWeight: 700,
						color: '#3b2518',
						marginTop: '18px',
						paddingBottom: '16px',
						display: 'flex'
					},
					children: DATA.userName
				}),
				el('div', {
					style: {
						fontSize: '22px',
						color: '#6b5540',
						marginTop: '14px',
						maxWidth: '900px',
						display: 'flex',
						lineHeight: 1.5
					},
					children: `Telah menyelesaikan pelajaran "${DATA.lessonTitle}"`
				}),
				// Verse block
				el('div', {
					style: {
						marginTop: '40px',
						padding: '24px 48px',
						borderLeft: '3px solid #8b5a20',
						borderRight: '3px solid #8b5a20',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						maxWidth: '820px'
					},
					children: [
						el('div', {
							style: {
								fontSize: '22px',
								fontFamily: 'Playfair',
								fontStyle: 'italic',
								color: '#3b2518',
								display: 'flex',
								textAlign: 'center',
								lineHeight: 1.5
							},
							children: '"Selidikilah Kitab Suci, sebab kamu menyangka bahwa oleh-Nya kamu mempunyai hidup yang kekal"'
						}),
						el('div', {
							style: {
								fontSize: '14px',
								fontWeight: 700,
								letterSpacing: '4px',
								textTransform: 'uppercase',
								color: '#8b5a20',
								marginTop: '12px',
								display: 'flex'
							},
							children: '— Yohanes 5:39'
						})
					]
				}),
				// Footer date
				el('div', {
					style: {
						marginTop: '40px',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center'
					},
					children: [
						el('div', {
							style: {
								width: '280px',
								borderTop: '1px solid rgba(139, 90, 32, 0.6)',
								paddingTop: '8px',
								fontSize: '16px',
								fontWeight: 700,
								color: '#3b2518',
								display: 'flex',
								justifyContent: 'center'
							},
							children: DATA.issueDate
						}),
						el('div', {
							style: {
								fontSize: '12px',
								color: '#8b5a20',
								marginTop: '2px',
								display: 'flex'
							},
							children: 'Firman Tuhan Tetap Teguh'
						})
					]
				})
			]
		})
	});
}

// ─────────────────────────────────────────
// Design 4: Adventist Heritage (branded, official doc feel)
// ─────────────────────────────────────────
function design4() {
	return el('div', {
		style: {
			width: `${W}px`,
			height: `${H}px`,
			display: 'flex',
			flexDirection: 'column',
			backgroundColor: '#ffffff',
			fontFamily: 'Inter',
			color: '#0f1f33'
		},
		children: [
			// Navy header block
			el('div', {
				style: {
					backgroundColor: '#0f1f33',
					padding: '32px 64px',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center'
				},
				children: [
					el('img', {
						src: amazingFactsDataUri,
						width: 280,
						height: 82,
						style: { display: 'flex', filter: 'brightness(0) invert(1)' }
					}),
					el('div', {
						style: {
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'flex-end',
							color: '#ffffff'
						},
						children: [
							el('div', {
								style: {
									fontSize: '13px',
									fontWeight: 700,
									letterSpacing: '3px',
									textTransform: 'uppercase',
									color: '#e8a838',
									display: 'flex'
								},
								children: 'Pendalaman Alkitab'
							}),
							el('div', {
								style: {
									fontSize: '16px',
									fontWeight: 400,
									color: '#ffffff',
									marginTop: '4px',
									display: 'flex'
								},
								children: 'Gereja Masehi Advent Hari Ketujuh Indonesia'
							})
						]
					})
				]
			}),
			// Gold separator
			el('div', {
				style: {
					height: '6px',
					backgroundColor: '#e8a838',
					display: 'flex'
				}
			}),
			// Main body
			el('div', {
				style: {
					flex: 1,
					display: 'flex',
					padding: '60px 80px',
					gap: '60px'
				},
				children: [
					// Left: content
					el('div', {
						style: {
							flex: 1,
							display: 'flex',
							flexDirection: 'column'
						},
						children: [
							el('div', {
								style: {
									fontSize: '13px',
									fontWeight: 700,
									letterSpacing: '4px',
									textTransform: 'uppercase',
									color: '#9ca3af',
									display: 'flex'
								},
								children: 'Sertifikat ini diberikan kepada'
							}),
							el('div', {
								style: {
									fontSize: '72px',
									fontWeight: 800,
									color: '#0f1f33',
									marginTop: '10px',
									paddingBottom: '12px',
									lineHeight: 1.1,
									display: 'flex'
								},
								children: DATA.userName
							}),
							el('div', {
								style: {
									width: '120px',
									height: '4px',
									backgroundColor: '#e8a838',
									marginTop: '18px',
									display: 'flex'
								}
							}),
							el('div', {
								style: {
									fontSize: '20px',
									color: '#4b5563',
									marginTop: '26px',
									lineHeight: 1.6,
									display: 'flex',
									maxWidth: '700px'
								},
								children: `Yang dengan setia telah menyelesaikan pelajaran "${DATA.lessonTitle}" dan lulus tes ringkasan akhir.`
							}),
							// Score/date row
							el('div', {
								style: {
									display: 'flex',
									gap: '40px',
									marginTop: '40px'
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
													fontSize: '12px',
													fontWeight: 700,
													letterSpacing: '3px',
													textTransform: 'uppercase',
													color: '#9ca3af',
													display: 'flex'
												},
												children: 'Nilai Akhir'
											}),
											el('div', {
												style: {
													fontSize: '44px',
													fontWeight: 800,
													color: '#0f1f33',
													marginTop: '4px',
													display: 'flex'
												},
												children: `${DATA.percentage}%`
											})
										]
									}),
									el('div', {
										style: {
											display: 'flex',
											flexDirection: 'column'
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
												children: 'Tanggal'
											}),
											el('div', {
												style: {
													fontSize: '26px',
													fontWeight: 800,
													color: '#0f1f33',
													marginTop: '10px',
													display: 'flex'
												},
												children: DATA.issueDate
											})
										]
									})
								]
							})
						]
					}),
					// Right: QR + Verify block
					el('div', {
						style: {
							width: '240px',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'flex-start',
							paddingTop: '20px'
						},
						children: [
							// Mock QR (grid of dots)
							el('div', {
								style: {
									width: '200px',
									height: '200px',
									backgroundColor: '#0f1f33',
									padding: '14px',
									display: 'flex',
									flexWrap: 'wrap',
									gap: '4px'
								},
								children: Array.from({ length: 64 }, (_, i) =>
									el('div', {
										style: {
											width: '18px',
											height: '18px',
											backgroundColor:
												[0, 7, 56, 63, 1, 6, 8, 14, 15, 48, 49, 55, 57, 62, 20, 28, 35, 43, 21, 22, 41, 42, 30, 33].includes(
													i
												)
													? '#ffffff'
													: 'transparent',
											display: 'flex'
										}
									})
								)
							}),
							el('div', {
								style: {
									fontSize: '11px',
									fontWeight: 700,
									letterSpacing: '3px',
									textTransform: 'uppercase',
									color: '#0f1f33',
									marginTop: '12px',
									display: 'flex'
								},
								children: 'Verifikasi Sertifikat'
							}),
							el('div', {
								style: {
									fontSize: '13px',
									fontWeight: 700,
									color: '#6b7280',
									marginTop: '4px',
									display: 'flex'
								},
								children: DATA.certId
							})
						]
					})
				]
			}),
			// Navy footer block
			el('div', {
				style: {
					backgroundColor: '#0f1f33',
					padding: '18px 64px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				},
				children: el('div', {
					style: {
						fontSize: '12px',
						fontWeight: 700,
						letterSpacing: '5px',
						textTransform: 'uppercase',
						color: '#e8a838',
						display: 'flex'
					},
					children: 'Firman Tuhan Tetap Teguh · Pendalaman Alkitab · Amazing Facts'
				})
			})
		]
	});
}

// Generate QR linking to the public certificate URL
const verifyUrl = `https://firman.permohonandoa.com/sertifikat/1/${DATA.certId}`;
const qrDataUri = await QRCode.toDataURL(verifyUrl, {
	margin: 1,
	width: 256,
	color: { dark: '#0f1f33', light: '#ffffff' }
});

const designs = [{ name: 'design-2-modern-elegant-qr', tree: design2(qrDataUri) }];

for (const { name, tree } of designs) {
	console.log(`Rendering ${name}...`);
	const svg = await satori(tree, { width: W, height: H, fonts });
	const png = new Resvg(svg, { fitTo: { mode: 'width', value: W } }).render().asPng();
	const outPath = `/tmp/cert-${name}.png`;
	writeFileSync(outPath, png);
	console.log(`  → ${outPath} (${(png.length / 1024).toFixed(0)} KB)`);
}

console.log('\nDone.');
