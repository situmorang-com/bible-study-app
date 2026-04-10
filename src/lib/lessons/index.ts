export interface LessonSection {
	title: string;
	content: string;
	verse?: string;
	verseRef?: string;
	image?: string; // emoji or icon name
	bullets?: string[];
	check?: QuizQuestion;
}

export interface QuizQuestion {
	question: string;
	options: string[];
	correctIndex: number;
	explanation: string;
}

export interface LessonSource {
	provider: string;
	series: string;
	lessonNumber: number;
	titleEn: string;
	url: string;
}

export interface Lesson {
	id: number;
	title: string;
	subtitle: string;
	icon: string;
	color: string; // tailwind gradient
	sections: LessonSection[];
	quiz: QuizQuestion[];
	finalAssessmentTitle?: string;
	finalAssessmentDescription?: string;
	passThreshold?: number;
	source: LessonSource;
}

// =============================================================================
// PELAJARAN ALKITAB AMAZING FACTS — 27 Pelajaran
// Bahasa Indonesia sederhana untuk usia 12 tahun & komunitas Tuli
// =============================================================================

const baseLessons: Omit<Lesson, 'source'>[] = [
	// =========================================================================
	// PELAJARAN 1 — Masih Adakah yang Bisa Dipercaya?
	// Based on: "Is There Anything Left You Can Trust?"
	// =========================================================================
	{
		id: 1,
		title: 'Masih Adakah yang Bisa Dipercaya?',
		subtitle: '13 langkah sederhana untuk melihat bahwa Alkitab tetap dapat dipercaya',
		icon: '📖',
		color: 'from-blue-600 to-indigo-700',
		finalAssessmentTitle: 'Ringkasan Akhir',
		finalAssessmentDescription: 'Jawab 10 pertanyaan sederhana. Kamu perlu minimal 7 jawaban benar untuk lulus.',
		passThreshold: 70,
		sections: [
			{
				title: '1. Apa kata Alkitab tentang dirinya sendiri?',
				content: 'Di dunia yang penuh janji palsu, Allah memberi satu dasar yang pasti: Firman-Nya. Alkitab berkata bahwa pesannya berasal dari Allah. Allah menuntun para penulis melalui Roh Kudus, jadi Kitab Suci tidak dapat dibatalkan.',
				verse: '"Segala tulisan yang diilhamkan Allah memang bermanfaat untuk mengajar, untuk menyatakan kesalahan, untuk memperbaiki kelakuan dan untuk mendidik orang dalam kebenaran."',
				verseRef: '2 Timotius 3:16',
				image: '🕊️',
				bullets: [
					'2 Petrus 1:21 berkata orang-orang kudus berbicara karena digerakkan Roh Kudus.',
					'Yohanes 10:35 berkata Kitab Suci tidak dapat dibatalkan.'
				],
				check: {
					question: 'Menurut Alkitab, dari siapa pesan Alkitab berasal?',
					options: ['Allah', 'Raja-raja kuno', 'Guru-guru terkenal', 'Cerita rakyat'],
					correctIndex: 0,
					explanation: 'Alkitab mengaku berasal dari Allah dan ditulis oleh manusia yang dituntun Roh Kudus.'
				}
			},
			{
				title: '2. Bagaimana Yesus menunjukkan bahwa Dia percaya Kitab Suci?',
				content: 'Saat iblis mencobai Yesus, Yesus tidak memakai ide-Nya sendiri. Yesus menjawab dengan Firman Tuhan. Yesus juga berkata bahwa Firman Allah adalah kebenaran. Jadi Yesus memperlakukan Alkitab sebagai dasar yang pasti.',
				verse: '"Firman-Mu adalah kebenaran."',
				verseRef: 'Yohanes 17:17',
				image: '✝️',
				bullets: [
					'Dalam Matius 4:4, 7, dan 10, Yesus tiga kali berkata: "Ada tertulis."',
					'Yesus memakai Kitab Suci sebagai jawaban saat dicobai.'
				],
				check: {
					question: 'Apa yang dilakukan Yesus saat dicobai?',
					options: ['Yesus mengutip Firman Tuhan', 'Yesus diam saja', 'Yesus lari dari tempat itu', 'Yesus memakai kuasa tanpa ayat'],
					correctIndex: 0,
					explanation: 'Yesus memakai Firman Tuhan sebagai jawaban yang benar.'
				}
			},
			{
				title: '3. Bagaimana nubuat membuktikan Alkitab berasal dari Allah?',
				content: 'Allah bisa memberitahukan apa yang akan terjadi sebelum itu terjadi. Nubuat yang tergenapi menjadi bukti kuat bahwa Alkitab bukan buku biasa. Allah menunjukkan akhir sejak awal.',
				verse: '"Akulah Allah ... yang memberitahukan dari mulanya hal yang kemudian."',
				verseRef: 'Yesaya 46:9-10',
				image: '🔮',
				bullets: [
					'Alkitab menubuatkan empat kerajaan besar: Babel, Media-Persia, Yunani, dan Roma.',
					'Nama Koresy disebut sebelum ia lahir sebagai penakluk Babel.',
					'Babel dinubuatkan tidak akan dihuni lagi.',
					'Mesir dinubuatkan tidak lagi memimpin bangsa-bangsa.'
				],
				check: {
					question: 'Mengapa nubuat yang tergenapi penting?',
					options: ['Karena menunjukkan Allah tahu masa depan', 'Karena membuat cerita lebih seram', 'Karena semua buku punya nubuat', 'Karena hanya cocok untuk ahli sejarah'],
					correctIndex: 0,
					explanation: 'Nubuat yang menjadi kenyataan menunjukkan bahwa Allah benar-benar berbicara melalui Alkitab.'
				}
			},
			{
				title: '4. Apakah pernyataan Alkitab tentang alam cocok dengan sains?',
				content: 'Ya. Roh Kudus yang menuntun penulis Alkitab selalu mengatakan kebenaran. Karena itu, beberapa fakta alam yang ditulis Alkitab ternyata cocok dengan ilmu pengetahuan.',
				verse: '"Dasar firman-Mu adalah kebenaran."',
				verseRef: 'Mazmur 119:160',
				image: '🌍',
				bullets: [
					'Ayub 26:7 berkata bumi digantung pada kehampaan.',
					'Yesaya 40:22 menggambarkan bumi itu bulat.',
					'Ayub 28:25 menunjukkan udara memiliki berat.'
				],
				check: {
					question: 'Fakta alam mana yang disebut Alkitab?',
					options: ['Bumi digantung pada kehampaan', 'Rumus air adalah H2O', 'Mars punya dua bulan', 'Gunung tertinggi ada di Asia'],
					correctIndex: 0,
					explanation: 'Ayub 26:7 adalah salah satu contoh fakta alam yang disebut Alkitab.'
				}
			},
			{
				title: '5. Apakah petunjuk kesehatan Alkitab masih penting sekarang?',
				content: 'Ya. Tuhan ingin manusia sehat dan kuat. Karena itu Alkitab memberi aturan hidup yang melindungi tubuh dan keluarga. Petunjuk ini masih berguna sampai sekarang.',
				verse: '"Aku berdoa, semoga engkau baik-baik dan sehat-sehat saja."',
				verseRef: '3 Yohanes 1:2',
				image: '❤️',
				bullets: [
					'Ulangan 23:12-13 mengajarkan pembuangan kotoran harus ditutup dengan tanah.',
					'1 Korintus 10:8 memperingatkan agar menjauhi percabulan.',
					'Amsal 23:29-32 memperingatkan bahaya minuman keras.'
				],
				check: {
					question: 'Petunjuk kesehatan mana yang memang diajarkan Alkitab?',
					options: ['Jauhi minuman keras', 'Minum empat galon air setiap hari', 'Lari pagi dan sore wajib', 'Semua makanan harus mentah'],
					correctIndex: 0,
					explanation: 'Alkitab jelas memperingatkan bahaya minuman keras dan hidup yang tidak suci.'
				}
			},
			{
				title: '6. Apakah catatan sejarah Alkitab benar?',
				content: 'Ya. Kadang bukti sejarah baru ditemukan jauh sesudah Alkitab ditulis. Tetapi berkali-kali arkeologi membuktikan bahwa nama orang, kota, dan bangsa dalam Alkitab memang nyata.',
				verse: '"Aku, Tuhan, berkata benar, Aku memberitakan yang lurus."',
				verseRef: 'Yesaya 45:19',
				image: '🏺',
				bullets: [
					'Bangsa Het, kota Niniwe, dan kota Sodom dulu diragukan, lalu terbukti ada.',
					'Raja Belsyazar dan Sargon dulu dianggap tidak nyata, lalu bukti sejarah ditemukan.',
					'Tulisan dan kereta pada zaman Musa akhirnya terbukti memang sudah ada.',
					'Banyak raja Israel dan Yehuda yang dulu hanya dikenal dari Alkitab kemudian muncul di catatan kuno lain.'
				],
				check: {
					question: 'Apa yang sering terjadi ketika bukti sejarah baru ditemukan?',
					options: ['Bukti baru sering menguatkan catatan Alkitab', 'Alkitab selalu dibatalkan', 'Nama-nama Alkitab makin tidak jelas', 'Semua kota Alkitab ternyata palsu'],
					correctIndex: 0,
					explanation: 'Arkeologi berulang kali menguatkan orang, tempat, dan peristiwa dalam Alkitab.'
				}
			},
			{
				title: '7. Fakta lain apa yang menunjukkan Alkitab diilhami Allah?',
				content: 'Salah satu mukjizat besar Alkitab adalah kesatuannya. Banyak penulis yang berbeda menulisnya, tetapi pesannya tetap sejalan. Ini sangat luar biasa.',
				verse: '"Segala tulisan yang diilhamkan Allah memang bermanfaat."',
				verseRef: '2 Timotius 3:16',
				image: '📚',
				bullets: [
					'Alkitab berisi 66 kitab.',
					'Ditulis di tiga benua dan dalam tiga bahasa.',
					'Ditulis oleh sekitar 40 orang dengan latar berbeda.',
					'Ditulis selama kira-kira 1.500 tahun.',
					'Walau begitu, pesan intinya tetap selaras seperti ditulis oleh satu Pikiran.'
				],
				check: {
					question: 'Apa yang membuat kesatuan Alkitab begitu ajaib?',
					options: ['Banyak penulis berbeda tetapi pesannya tetap selaras', 'Semua kitab ditulis dalam satu hari', 'Hanya satu orang menulis semuanya', 'Semua penulis tinggal di kota yang sama'],
					correctIndex: 0,
					explanation: 'Kesatuan Alkitab menunjukkan Roh Kudus menuntun semua penulisnya.'
				}
			},
			{
				title: '8. Bukti apa terlihat dari hidup orang yang percaya Firman Tuhan?',
				content: 'Hidup yang berubah adalah bukti yang sangat kuat. Orang yang sungguh-sungguh mengikuti Yesus dan taat pada Firman Tuhan dapat menjadi pribadi baru.',
				verse: '"Jadi siapa yang ada di dalam Kristus, ia adalah ciptaan baru."',
				verseRef: '2 Korintus 5:17',
				image: '✨',
				bullets: [
					'Orang mabuk bisa sadar.',
					'Orang yang hidup najis bisa menjadi murni.',
					'Orang yang takut bisa menjadi berani.',
					'Orang yang kasar bisa menjadi baik.'
				],
				check: {
					question: 'Perubahan hidup apa yang Alkitab katakan dapat terjadi?',
					options: ['Orang berdosa dapat menjadi ciptaan baru', 'Tidak ada orang yang bisa berubah', 'Perubahan hanya terjadi pada orang kaya', 'Perubahan hanya terjadi setelah tua'],
					correctIndex: 0,
					explanation: 'Firman Tuhan memiliki kuasa untuk mengubah hidup manusia.'
				}
			},
			{
				title: '9. Apa bukti dari nubuat Mesias yang digenapi oleh Yesus?',
				content: 'Perjanjian Lama menulis banyak hal tentang Mesias jauh sebelum Yesus lahir. Yesus dan Apolos memakai nubuat itu untuk menunjukkan bahwa Yesus benar-benar Mesias. Ada lebih dari 125 nubuat; berikut beberapa contohnya.',
				verse: '"Mulai dari Musa dan segala nabi, Ia menjelaskan kepada mereka apa yang tertulis tentang diri-Nya."',
				verseRef: 'Lukas 24:27',
				image: '⭐',
				bullets: [
					'Lahir di Betlehem - Mikha 5:2 -> Matius 2:1',
					'Lahir dari seorang perawan - Yesaya 7:14 -> Matius 1:18-23',
					'Datang dari garis Daud - Yeremia 23:5 -> Wahyu 22:16',
					'Menjadi sasaran pembunuhan sejak kecil - Yeremia 31:15 -> Matius 2:16-18',
					'Dikhianati teman - Mazmur 41:9 -> Yohanes 13:18-19, 26',
					'Dijual 30 keping perak - Zakharia 11:12 -> Matius 26:14-16',
					'Disalibkan - Zakharia 12:10 -> Yohanes 19:16-18, 37',
					'Pakaian-Nya diundi - Mazmur 22:18 -> Matius 27:35',
					'Tulang-Nya tidak dipatahkan - Mazmur 34:20 -> Yohanes 19:31-36',
					'Dikubur di kubur orang kaya - Yesaya 53:9 -> Matius 27:57-60',
					'Waktu kematian-Nya sudah dinubuatkan - Daniel 9:26-27; Keluaran 12:6 -> Matius 27:45-50',
					'Bangkit pada hari ketiga - Hosea 6:2 -> Kisah 10:38-40'
				],
				check: {
					question: 'Mengapa nubuat tentang Mesias sangat penting?',
					options: ['Karena menunjukkan Yesus cocok dengan janji Allah', 'Karena membuat Alkitab menjadi puisi', 'Karena hanya berguna untuk ahli sejarah', 'Karena Yesus menulis semua nubuat itu sendiri'],
					correctIndex: 0,
					explanation: 'Nubuat yang tergenapi dalam Yesus menunjukkan bahwa Yesus benar-benar Mesias yang dijanjikan.'
				}
			},
			{
				title: '10. Apa keuntungan bagi orang yang menerima Alkitab sebagai Firman Allah?',
				content: 'Orang yang percaya Firman Tuhan akan mendapat jawaban untuk banyak pertanyaan besar yang membingungkan manusia. Tuhan memberi kebenaran yang tidak bisa kita temukan sendiri hanya dengan pikiran manusia.',
				verse: '"Aku lebih berakal budi dari pada orang-orang tua, sebab aku memegang titah-titah-Mu."',
				verseRef: 'Mazmur 119:100',
				image: '🧭',
				bullets: [
					'Alkitab menegaskan Allah menciptakan dunia dalam enam hari yang nyata.',
					'Alkitab menjelaskan air bah besar pada zaman Nuh.',
					'Alkitab menjelaskan asal berbagai bahasa di menara Babel.',
					'Firman Tuhan menolong kita lebih bijaksana daripada hikmat manusia yang terbatas.'
				],
				check: {
					question: 'Apa salah satu keuntungan menerima Alkitab sebagai Firman Allah?',
					options: ['Mendapat jawaban benar untuk pertanyaan hidup', 'Tidak perlu belajar lagi', 'Bisa tahu semua rahasia dunia sekaligus', 'Bisa hidup tanpa Tuhan'],
					correctIndex: 0,
					explanation: 'Firman Tuhan memberi jawaban yang jelas untuk pertanyaan besar tentang hidup.'
				}
			},
			{
				title: '11. Peristiwa apa membuat banyak orang melihat kuasa Alkitab?',
				content: 'Bencana alam, perang, dan teror membuat banyak orang sadar bahwa dunia ini tidak aman. Alkitab sudah lebih dulu berkata bahwa menjelang akhir zaman akan ada banyak kesusahan di bumi. Karena itu, banyak orang kembali mencari kekuatan dan harapan di dalam Firman Tuhan.',
				verse: '"Di bumi bangsa-bangsa akan takut dan bingung ... laut dan gelombang berbunyi gemuruh."',
				verseRef: 'Lukas 21:25',
				image: '🌊',
				bullets: [
					'Tsunami, badai besar, dan gempa mengingatkan manusia bahwa dunia ini rapuh.',
					'Serangan teror dan peperangan menunjukkan tidak ada bangsa yang sungguh aman.',
					'Sebagian orang mulai bertanya lagi apakah dunia diciptakan oleh Allah dan apakah Firman Tuhan benar.'
				],
				check: {
					question: 'Mengapa peristiwa besar dunia membuat orang kembali melihat Alkitab?',
					options: ['Karena Alkitab memberi harapan saat dunia tidak pasti', 'Karena Alkitab menjanjikan hidup tanpa masalah hari ini', 'Karena semua bencana hilang seketika', 'Karena semua orang otomatis menjadi baik'],
					correctIndex: 0,
					explanation: 'Saat dunia terasa goyah, Firman Tuhan memberi harapan dan penjelasan yang kuat.'
				}
			},
			{
				title: '12. Mengapa Alkitab memberi peluang terbaik untuk damai dan bahagia?',
				content: 'Alkitab menjawab pertanyaan hidup yang paling penting. Alkitab menjelaskan dari mana kita berasal, mengapa kita hidup, dan apa masa depan kita bersama Tuhan. Karena itu Alkitab memberi damai, sukacita, dan arah hidup.',
				verse: '"Firman-Mu itu pelita bagi kakiku dan terang bagi jalanku."',
				verseRef: 'Mazmur 119:105',
				image: '💡',
				bullets: [
					'Dari mana saya berasal? Allah menciptakan kita menurut gambar-Nya.',
					'Mengapa saya ada di sini? Untuk mengenal Allah, menerima keselamatan dari Yesus, dan bertumbuh menjadi seperti Dia.',
					'Apa masa depan saya? Yesus akan datang kembali dan membawa umat-Nya ke rumah yang telah Dia sediakan.'
				],
				check: {
					question: 'Pertanyaan besar apa yang dijawab Alkitab?',
					options: ['Asal kita, tujuan hidup, dan masa depan', 'Hanya cara menjadi kaya', 'Hanya rahasia kerajaan kuno', 'Hanya peraturan sekolah'],
					correctIndex: 0,
					explanation: 'Alkitab menjawab pertanyaan terdalam tentang asal, tujuan, dan masa depan manusia.'
				}
			},
			{
				title: '13. Apakah kamu bersyukur Allah menjawab pertanyaan hidup?',
				content: 'Pelajaran ini mengajak kita melihat bahwa Allah tidak diam. Allah memberi Firman-Nya supaya kita mengenal kebenaran, mengenal Yesus, dan mempunyai pengharapan. Respon yang paling tepat adalah bersyukur dan mau belajar lebih dalam lagi.',
				verse: '"Aku akan datang kembali dan membawa kamu ke tempat-Ku."',
				verseRef: 'Yohanes 14:3',
				image: '🙏',
				bullets: [
					'Allah ingin kita datang kepada-Nya dengan hati terbuka.',
					'Belajar Alkitab adalah langkah untuk mengenal Yesus lebih dekat.',
					'Rasa syukur terlihat dari kemauan untuk terus belajar dan taat.'
				],
				check: {
					question: 'Apa respon terbaik setelah belajar bahwa Alkitab dapat dipercaya?',
					options: ['Bersyukur kepada Allah dan mau terus belajar', 'Mengabaikan semua yang sudah dipelajari', 'Berhenti membaca Alkitab', 'Hanya percaya kalau semua teman setuju'],
					correctIndex: 0,
					explanation: 'Respon yang sehat adalah bersyukur kepada Tuhan dan terus belajar Firman-Nya.'
				}
			}
		],
		quiz: [
			{
				question: 'Apa pengakuan utama Alkitab tentang dirinya?',
				options: ['Alkitab diilhami Allah', 'Alkitab hanya dongeng lama', 'Alkitab ditulis tanpa tuntunan Tuhan', 'Alkitab hanya untuk bangsa tertentu'],
				correctIndex: 0,
				explanation: 'Alkitab mengaku berasal dari Allah dan ditulis oleh manusia yang dituntun Roh Kudus.'
			},
			{
				question: 'Bagaimana Yesus menunjukkan bahwa Dia percaya Kitab Suci?',
				options: ['Yesus mengutip Firman Tuhan', 'Yesus menyuruh malaikat berdebat', 'Yesus membuang semua gulungan kitab', 'Yesus berkata Alkitab tidak penting'],
				correctIndex: 0,
				explanation: 'Yesus memakai Kitab Suci sebagai dasar jawaban dan mengatakannya sebagai kebenaran.'
			},
			{
				question: 'Mengapa nubuat yang tergenapi menguatkan iman kita?',
				options: ['Karena menunjukkan Allah tahu masa depan', 'Karena nubuat selalu kabur', 'Karena semua buku punya nubuat', 'Karena nubuat hanya cocok untuk mimpi'],
				correctIndex: 0,
				explanation: 'Nubuat yang menjadi kenyataan menunjukkan bahwa Allah benar-benar berbicara melalui Alkitab.'
			},
			{
				question: 'Fakta sains mana yang disebut dalam Alkitab?',
				options: ['Bumi digantung pada kehampaan', 'Planet terjauh bernama Neptunus', 'Rumus air H2O', 'Darah punya empat golongan'],
				correctIndex: 0,
				explanation: 'Ayub 26:7 adalah salah satu contoh fakta alam yang disebut Alkitab.'
			},
			{
				question: 'Petunjuk kesehatan mana yang diajarkan Alkitab?',
				options: ['Jauhi minuman keras dan percabulan', 'Wajib lari dua kali sehari', 'Minum obat setiap pagi', 'Makan hanya satu jenis makanan'],
				correctIndex: 0,
				explanation: 'Alkitab memberi prinsip kesehatan yang melindungi tubuh dan keluarga.'
			},
			{
				question: 'Apa yang sering dibuktikan oleh arkeologi?',
				options: ['Catatan orang, kota, dan bangsa dalam Alkitab memang nyata', 'Semua tokoh Alkitab adalah dongeng', 'Alkitab salah tentang sejarah', 'Tidak ada bukti apa pun tentang dunia kuno'],
				correctIndex: 0,
				explanation: 'Bukti sejarah berulang kali menguatkan catatan Alkitab.'
			},
			{
				question: 'Apa yang sangat ajaib dari Alkitab?',
				options: ['Pesannya tetap selaras walau ditulis banyak penulis', 'Semua kitab ditulis oleh satu raja', 'Semua ditulis di satu kota kecil', 'Semua kitab berisi topik yang sama persis'],
				correctIndex: 0,
				explanation: 'Kesatuan Alkitab di tengah banyak penulis dan zaman adalah bukti kuat tuntunan Roh Kudus.'
			},
			{
				question: 'Bukti hidup apa yang mendukung kebenaran Alkitab?',
				options: ['Orang bisa diubah menjadi pribadi baru', 'Tidak ada perubahan hidup sama sekali', 'Perubahan hanya terjadi pada ilmuwan', 'Perubahan hanya terjadi di masa Alkitab'],
				correctIndex: 0,
				explanation: 'Firman Tuhan terbukti hidup karena mengubah karakter manusia.'
			},
			{
				question: 'Apa yang ditunjukkan nubuat Mesias yang digenapi Yesus?',
				options: ['Yesus adalah Mesias yang dijanjikan', 'Yesus hanya guru biasa', 'Nubuat tidak penting', 'Perjanjian Lama dan Baru tidak berhubungan'],
				correctIndex: 0,
				explanation: 'Kecocokan nubuat Mesias dengan hidup Yesus menjadi bukti yang sangat kuat.'
			},
			{
				question: 'Mengapa Alkitab memberi damai dan arah hidup?',
				options: ['Karena menjawab asal, tujuan, dan masa depan kita', 'Karena membuat semua masalah hilang seketika', 'Karena hanya berisi aturan keras', 'Karena menggantikan hubungan dengan Tuhan'],
				correctIndex: 0,
				explanation: 'Alkitab menjawab pertanyaan terbesar manusia dan membawa kita kepada pengharapan di dalam Yesus.'
			}
		]
	},

	// =========================================================================
	// PELAJARAN 2–27 — Struktur lengkap (akan diisi detail per pelajaran)
	// =========================================================================
		{
			id: 2,
			title: 'Apakah Tuhan Menciptakan Iblis?',
			subtitle: '16 langkah sederhana untuk mengerti asal dosa dan akhir Setan',
			icon: '😈',
			color: 'from-red-600 to-rose-800',
			finalAssessmentTitle: 'Ringkasan Akhir',
			finalAssessmentDescription: 'Jawab 10 pertanyaan sederhana. Kamu perlu minimal 7 jawaban benar untuk lulus.',
			passThreshold: 70,
			sections: [
				{
					title: '1. Dengan siapa dosa mulai?',
					content: 'Alkitab berkata dosa tidak mulai dari Allah. Dosa mulai dari Setan. Tanpa Alkitab, kita tidak tahu dari mana kejahatan datang.',
					verse: '"Iblis telah berbuat dosa dari mulanya."',
					verseRef: '1 Yohanes 3:8',
					image: '❓',
					check: {
						question: 'Menurut Alkitab, dari siapa dosa mulai?',
						options: ['Setan', 'Adam', 'Musa', 'Malaikat Gabriel'],
						correctIndex: 0,
						explanation: 'Alkitab menjelaskan bahwa Setan adalah asal mula dosa.'
					}
				},
				{
					title: '2. Siapa nama Setan sebelum jatuh?',
					content: 'Sebelum berdosa, namanya Lusifer. Ia tinggal di surga. Jadi Setan dulunya bukan makhluk jelek, tetapi makhluk ciptaan Allah yang mulia.',
					verse: '"Betapa engkau jatuh dari langit, hai Bintang Timur, putera Fajar!"',
					verseRef: 'Yesaya 14:12',
					image: '👼',
					check: {
						question: 'Nama Setan sebelum jatuh adalah?',
						options: ['Lusifer', 'Mikael', 'Daud', 'Koresy'],
						correctIndex: 0,
						explanation: 'Sebelum jatuh, ia dikenal sebagai Lusifer dan tinggal di surga.'
					}
				},
				{
					title: '3. Dari mana asal Lusifer dan bagaimana keadaannya?',
					content: 'Lusifer diciptakan Allah. Ia penuh hikmat, sangat indah, dan dekat dengan takhta Allah. Ia adalah malaikat tinggi yang mendapat kehormatan besar.',
					verse: '"Engkau meterai kesempurnaan, penuh hikmat dan maha indah."',
					verseRef: 'Yehezkiel 28:12',
					image: '✨',
					check: {
						question: 'Bagaimana Alkitab menggambarkan Lusifer sebelum jatuh?',
						options: ['Penuh hikmat dan indah', 'Jahat sejak awal', 'Manusia biasa', 'Raja di bumi'],
						correctIndex: 0,
						explanation: 'Allah menciptakan Lusifer dengan sangat mulia, bukan jahat sejak awal.'
					}
				},
				{
					title: '4. Apa yang membuat Lusifer jatuh?',
					content: 'Kesombongan, iri hati, dan tidak puas masuk ke hatinya. Ia ingin mengambil tempat Allah dan ingin disembah. Dosa mulai dari hati yang tidak mau tunduk.',
					verse: '"Aku hendak menjadi sama dengan Yang Mahatinggi."',
					verseRef: 'Yesaya 14:14',
					image: '💔',
					check: {
						question: 'Dosa utama Lusifer adalah?',
						options: ['Sombong dan ingin seperti Allah', 'Takut pada Allah', 'Lapar', 'Tidak bisa bernyanyi'],
						correctIndex: 0,
						explanation: 'Lusifer jatuh karena kesombongan dan keinginannya untuk mengambil tempat Allah.'
					}
				},
				{
					title: '5. Apa akibat dosanya di surga?',
					content: 'Terjadi perang di surga. Lusifer menipu sepertiga malaikat dan mereka dibuang bersama dia. Setelah itu ia disebut Setan dan malaikat yang ikut dia disebut roh jahat.',
					verse: '"Maka terjadilah peperangan di sorga."',
					verseRef: 'Wahyu 12:7',
					image: '⚔️',
					check: {
						question: 'Apa yang terjadi sesudah pemberontakan Lusifer?',
						options: ['Ia dibuang dari surga', 'Ia jadi raja surga', 'Ia bertobat lalu tetap di sana', 'Tidak ada apa-apa'],
						correctIndex: 0,
						explanation: 'Karena memberontak, Setan dan para pengikutnya dibuang dari surga.'
					}
				},
				{
					title: '6. Di mana markas Setan sekarang?',
					content: 'Alkitab menunjukkan bahwa Setan bergerak di bumi. Ia membenci manusia karena manusia diciptakan menurut gambar Allah. Karena itu ia ingin menghancurkan hidup manusia.',
					verse: '"Iblis berjalan keliling sama seperti singa yang mengaum."',
					verseRef: '1 Petrus 5:8',
					image: '🌍',
					check: {
						question: 'Menurut Alkitab, Setan sekarang bekerja terutama di mana?',
						options: ['Di bumi', 'Di bulan', 'Di laut saja', 'Di surga'],
						correctIndex: 0,
						explanation: 'Setan sedang bekerja di bumi dan berusaha menipu manusia.'
					}
				},
				{
					title: '7. Apa larangan Allah di taman Eden?',
					content: 'Allah melarang Adam dan Hawa makan dari pohon pengetahuan yang baik dan jahat. Kalau mereka makan, akibatnya adalah mati. Allah memberi pilihan yang jelas.',
					verse: '"Pada hari engkau memakannya, pastilah engkau mati."',
					verseRef: 'Kejadian 2:17',
					image: '🌳',
					check: {
						question: 'Apa yang Allah larang di taman Eden?',
						options: ['Makan dari pohon terlarang', 'Tidur siang', 'Berkebun', 'Memberi nama binatang'],
						correctIndex: 0,
						explanation: 'Allah melarang mereka makan dari pohon yang dilarang-Nya.'
					}
				},
				{
					title: '8. Bagaimana Setan menipu Hawa?',
					content: 'Setan memakai ular dan berkata dua dusta besar: kamu tidak akan mati, dan buah itu akan membuatmu seperti Allah. Ia mencampur sedikit kebenaran dengan dusta supaya lebih meyakinkan.',
					verse: '"Kamu sekali-kali tidak akan mati."',
					verseRef: 'Kejadian 3:4',
					image: '🐍',
					check: {
						question: 'Salah satu dusta Setan kepada Hawa adalah?',
						options: ['Kamu tidak akan mati', 'Allah sangat mengasihi kamu', 'Jangan takut pada dosa', 'Taatlah kepada Allah'],
						correctIndex: 0,
						explanation: 'Setan berkata mereka tidak akan mati, padahal Allah berkata mereka akan mati.'
					}
				},
				{
					title: '9. Mengapa makan buah itu jadi dosa besar?',
					content: 'Masalahnya bukan sekadar buah. Masalahnya adalah mereka menolak perintah Allah dan memilih mengikuti Setan. Itu adalah pemberontakan terhadap Allah.',
					verse: '"Dosa ialah pelanggaran hukum Allah."',
					verseRef: '1 Yohanes 3:4',
					image: '🚫',
					check: {
						question: 'Mengapa makan buah itu menjadi dosa?',
						options: ['Karena itu melawan perintah Allah', 'Karena buahnya pahit', 'Karena pohonnya kecil', 'Karena hanya Hawa yang makan'],
						correctIndex: 0,
						explanation: 'Dosa terjadi karena manusia menolak perintah Allah dan memilih jalan Setan.'
					}
				},
				{
					title: '10. Cara apa saja yang dipakai Setan untuk merusak manusia?',
					content: 'Alkitab berkata Setan menipu, memfitnah, mengejar, memerangkap, dan bahkan bisa tampil seperti malaikat terang. Ia juga bisa memakai mujizat palsu dan menyalahgunakan ayat.',
					verse: '"Iblis sendiri menyamar sebagai malaikat terang."',
					verseRef: '2 Korintus 11:14',
					image: '🎭',
					bullets: ['Ia bisa memutarbalikkan ayat.', 'Ia bisa menipu dengan tampilan yang kelihatan baik.', 'Ia ingin merusak, bukan menolong.'],
					check: {
						question: 'Salah satu cara kerja Setan adalah?',
						options: ['Menyamar dan menipu', 'Membawa orang lebih dekat kepada Allah', 'Menghapus dosa manusia', 'Mengajarkan kebenaran murni'],
						correctIndex: 0,
						explanation: 'Setan bekerja dengan penipuan, topeng palsu, dan kebohongan.'
					}
				},
				{
					title: '11. Seberapa kuat penipuan Setan?',
					content: 'Banyak sekali yang tertipu. Ia menipu sepertiga malaikat, Adam dan Hawa, dan hampir seluruh dunia pada zaman Nuh. Karena itu, kita harus berpegang pada Firman Tuhan.',
					verse: '"Ia menyesatkan seluruh dunia."',
					verseRef: 'Wahyu 12:9',
					image: '🌪️',
					check: {
						question: 'Mengapa kita harus waspada terhadap Setan?',
						options: ['Karena penipuannya sangat besar', 'Karena ia tidak berbahaya', 'Karena ia hanya aktif dulu', 'Karena ia selalu jujur'],
						correctIndex: 0,
						explanation: 'Alkitab menunjukkan bahwa sangat banyak makhluk pernah tertipu olehnya.'
					}
				},
				{
					title: '12. Kapan dan di mana Setan dihukum?',
					content: 'Pada akhir zaman, Setan akan menerima hukuman di lautan api di bumi ini. Allah akan mengakhiri kejahatan secara adil. Setan tidak akan memerintah neraka untuk selamanya.',
					verse: '"Iblis ... dilemparkan ke lautan api."',
					verseRef: 'Wahyu 20:10',
					image: '🔥',
					check: {
						question: 'Apa hukuman akhir bagi Setan?',
						options: ['Dihancurkan dalam api penghakiman', 'Dibiarkan memerintah selamanya', 'Kembali ke surga', 'Menjadi malaikat baik'],
						correctIndex: 0,
						explanation: 'Setan akan dihukum oleh Allah pada akhir zaman.'
					}
				},
				{
					title: '13. Apa yang akhirnya menyelesaikan masalah dosa?',
					content: 'Semua makhluk akan mengakui bahwa Allah benar dan adil. Lalu dosa dan semua yang memilih dosa akan dimusnahkan. Dosa tidak akan bangkit lagi untuk kedua kali.',
					verse: '"Kesengsaraan tidak akan timbul dua kali."',
					verseRef: 'Nahum 1:9',
					image: '✅',
					check: {
						question: 'Apakah dosa akan muncul lagi setelah Allah menyelesaikannya?',
						options: ['Tidak', 'Ya, setiap 100 tahun', 'Hanya di bumi', 'Tidak ada jawaban di Alkitab'],
						correctIndex: 0,
						explanation: 'Allah berjanji dosa tidak akan bangkit lagi untuk kedua kali.'
					}
				},
				{
					title: '14. Siapa yang membuat akhir dosa menjadi pasti?',
					content: 'Yesuslah yang membuat kemenangan itu pasti. Melalui hidup, kematian, dan kebangkitan-Nya, Yesus menghancurkan pekerjaan Iblis. Salib adalah jaminan kemenangan Allah.',
					verse: '"Anak Allah menyatakan diri-Nya, supaya Ia membinasakan perbuatan-perbuatan Iblis."',
					verseRef: '1 Yohanes 3:8',
					image: '✝️',
					check: {
						question: 'Siapa yang memastikan pekerjaan Iblis akhirnya dihancurkan?',
						options: ['Yesus', 'Adam', 'Musa', 'Malaikat'],
						correctIndex: 0,
						explanation: 'Melalui salib dan kebangkitan, Yesus menjamin kemenangan akhir.'
					}
				},
				{
					title: '15. Bagaimana perasaan Allah kepada manusia?',
					content: 'Allah Bapa sangat mengasihi manusia. Setan suka menggambarkan Allah sebagai keras dan jauh, tetapi Yesus datang untuk menunjukkan bahwa Bapa penuh kasih, sabar, dan dekat.',
					verse: '"Bapa sendiri mengasihi kamu."',
					verseRef: 'Yohanes 16:27',
					image: '❤️',
					check: {
						question: 'Bagaimana sikap Allah kepada manusia?',
						options: ['Ia mengasihi manusia', 'Ia membenci semua orang', 'Ia tidak peduli', 'Ia hanya sayang pada malaikat'],
						correctIndex: 0,
						explanation: 'Yesus menunjukkan bahwa Bapa benar-benar mengasihi manusia.'
					}
				},
				{
					title: '16. Apakah ini kabar baik untukmu?',
					content: 'Pelajaran ini mengajak kita melihat bahwa Allah tidak menciptakan Iblis menjadi jahat. Dosa datang dari pilihan Lusifer. Tetapi kasih Allah lebih besar, dan Yesus sudah membuka jalan kemenangan.',
					verse: '"Tuhan adalah adil dalam segala jalan-Nya dan penuh kasih setia dalam segala perbuatan-Nya."',
					verseRef: 'Mazmur 145:17',
					image: '🌅',
					check: {
						question: 'Apa kabar baik utama dari pelajaran ini?',
						options: ['Kasih Allah menang atas dosa dan Setan', 'Setan lebih kuat dari Yesus', 'Dosa tidak ada jawabannya', 'Allah penyebab kejahatan'],
						correctIndex: 0,
						explanation: 'Pelajaran ini menegaskan bahwa Allah baik dan Yesus menang atas kejahatan.'
					}
				}
			],
			quiz: [
				{
					question: 'Dari siapa dosa mulai menurut Alkitab?',
					options: ['Setan', 'Adam', 'Hawa', 'Musa'],
					correctIndex: 0,
					explanation: 'Alkitab menjelaskan bahwa Setan adalah asal mula dosa.'
				},
				{
					question: 'Apa nama Setan sebelum jatuh?',
					options: ['Lusifer', 'Gabriel', 'Daniel', 'Saul'],
					correctIndex: 0,
					explanation: 'Sebelum jatuh, ia disebut Lusifer.'
				},
				{
					question: 'Apa yang membuat Lusifer jatuh?',
					options: ['Kesombongan', 'Kelaparan', 'Kelelahan', 'Kesepian'],
					correctIndex: 0,
					explanation: 'Ia jatuh karena sombong dan ingin seperti Allah.'
				},
				{
					question: 'Apa yang terjadi di surga karena pemberontakan Lusifer?',
					options: ['Perang di surga', 'Banjir besar', 'Bumi baru', 'Semua malaikat diam'],
					correctIndex: 0,
					explanation: 'Pemberontakan Lusifer memicu perang di surga.'
				},
				{
					question: 'Apa dusta Setan kepada Hawa?',
					options: ['Kamu tidak akan mati', 'Taatlah pada Allah', 'Buah ini tidak ada', 'Jangan dengarkan aku'],
					correctIndex: 0,
					explanation: 'Setan berkata mereka tidak akan mati.'
				},
				{
					question: 'Mengapa makan buah terlarang menjadi dosa?',
					options: ['Karena itu melawan perintah Allah', 'Karena warnanya salah', 'Karena taman terlalu kecil', 'Karena ular lapar'],
					correctIndex: 0,
					explanation: 'Itu adalah penolakan terhadap perintah Allah.'
				},
				{
					question: 'Salah satu cara Setan bekerja adalah?',
					options: ['Menyamar dan menipu', 'Menghapus dosa', 'Menyelamatkan manusia', 'Memberi hidup kekal'],
					correctIndex: 0,
					explanation: 'Setan menipu dengan berbagai cara, termasuk penyamaran.'
				},
				{
					question: 'Apa hukuman akhir bagi Setan?',
					options: ['Dihancurkan dalam api penghakiman', 'Dibiarkan memerintah', 'Kembali ke surga', 'Menjadi manusia'],
					correctIndex: 0,
					explanation: 'Pada akhir zaman, Setan akan menerima hukuman dari Allah.'
				},
				{
					question: 'Apakah dosa akan bangkit lagi setelah Allah mengakhirinya?',
					options: ['Tidak', 'Ya', 'Kadang-kadang', 'Hanya di surga'],
					correctIndex: 0,
					explanation: 'Allah berjanji dosa tidak akan bangkit lagi untuk kedua kali.'
				},
				{
					question: 'Siapa yang menjamin kemenangan akhir atas Iblis?',
					options: ['Yesus', 'Lusifer', 'Adam', 'Semua manusia'],
					correctIndex: 0,
					explanation: 'Melalui salib dan kebangkitan, Yesus menjamin kemenangan akhir.'
				}
			]
		},
		{
			id: 3,
			title: 'Diselamatkan dari Kematian Pasti',
			subtitle: '14 langkah sederhana tentang kasih Allah dan keselamatan dalam Yesus',
			icon: '🛟',
			color: 'from-emerald-500 to-teal-700',
			finalAssessmentTitle: 'Ringkasan Akhir',
			finalAssessmentDescription: 'Jawab 10 pertanyaan sederhana. Kamu perlu minimal 7 jawaban benar untuk lulus.',
			passThreshold: 70,
			sections: [
				{
					title: '1. Apakah Allah sungguh peduli padamu?',
					content: 'Ya. Allah berkata kamu berharga di mata-Nya. Kasih-Nya tidak habis-habis. Ia peduli pada hidupmu secara pribadi.',
					verse: '"Aku telah mengasihi engkau dengan kasih yang kekal."',
					verseRef: 'Yeremia 31:3',
					image: '❤️',
					check: {
						question: 'Apakah Allah benar-benar peduli padamu?',
						options: ['Ya, sangat peduli', 'Tidak', 'Hanya kadang-kadang', 'Hanya pada orang dewasa'],
						correctIndex: 0,
						explanation: 'Allah mengasihi dan menghargai setiap orang secara pribadi.'
					}
				},
				{
					title: '2. Bagaimana Allah menunjukkan kasih-Nya?',
					content: 'Allah menunjukkan kasih-Nya dengan mengirim Yesus. Ia rela memberi Anak-Nya supaya kita tidak binasa. Ini bukti kasih yang sangat besar.',
					verse: '"Karena begitu besar kasih Allah akan dunia ini..."',
					verseRef: 'Yohanes 3:16',
					image: '🎁',
					check: {
						question: 'Bukti terbesar kasih Allah adalah?',
						options: ['Ia mengirim Yesus', 'Ia memberi cuaca baik', 'Ia memberi uang', 'Ia membuat semua orang kaya'],
						correctIndex: 0,
						explanation: 'Kasih Allah paling jelas terlihat saat Ia memberi Yesus bagi kita.'
					}
				},
				{
					title: '3. Mengapa Allah tetap mengasihi orang berdosa?',
					content: 'Bukan karena kita layak, tetapi karena kasih-Nya tidak bersyarat. Bahkan ketika manusia berdosa, Kristus tetap mati bagi kita. Kasih Allah lebih besar dari masa lalu kita.',
					verse: '"Kristus telah mati untuk kita, ketika kita masih berdosa."',
					verseRef: 'Roma 5:8',
					image: '🤲',
					check: {
						question: 'Allah mengasihi kita karena?',
						options: ['Kasih-Nya tidak bersyarat', 'Kita selalu baik', 'Kita tidak pernah salah', 'Kita selalu kuat'],
						correctIndex: 0,
						explanation: 'Allah mengasihi karena karakter-Nya penuh kasih, bukan karena kita layak.'
					}
				},
				{
					title: '4. Apa yang dilakukan kematian Yesus bagimu?',
					content: 'Yesus mati untuk menanggung hukuman dosa kita. Ia memberi kita hak menjadi anak-anak Allah. Hidup-Nya yang benar diberikan kepada orang yang percaya kepada-Nya.',
					verse: '"Semua orang yang menerima-Nya diberi-Nya kuasa supaya menjadi anak-anak Allah."',
					verseRef: 'Yohanes 1:12',
					image: '✝️',
					check: {
						question: 'Apa yang Yesus lakukan melalui kematian-Nya?',
						options: ['Menanggung hukuman dosa kita', 'Menghapus Alkitab', 'Membuat dosa menjadi biasa', 'Meniadakan kasih karunia'],
						correctIndex: 0,
						explanation: 'Yesus mati menggantikan kita supaya kita bisa diterima Allah.'
					}
				},
				{
					title: '5. Bagaimana menerima Yesus dan pindah dari maut ke hidup?',
					content: 'Akui tiga hal: aku berdosa, aku tidak bisa selamat sendiri, dan upah dosa adalah maut. Lalu percaya tiga hal: Yesus mati bagiku, Yesus mengampuniku, dan Yesus menyelamatkanku.',
					verse: '"Barangsiapa percaya kepada-Ku, ia mempunyai hidup yang kekal."',
					verseRef: 'Yohanes 6:47',
					image: '🚪',
					check: {
						question: 'Apa langkah penting untuk menerima keselamatan?',
						options: ['Percaya kepada Yesus', 'Bayar banyak uang', 'Menjadi terkenal', 'Tidak usah mengaku dosa'],
						correctIndex: 0,
						explanation: 'Keselamatan diterima dengan percaya kepada Yesus dan menerima anugerah-Nya.'
					}
				},
				{
					title: '6. Bagaimana perasaan orang yang sudah diampuni?',
					content: 'Saat Yesus mengampuni, hati dipenuhi damai, sukacita, dan rasa diterima. Orang yang percaya tidak perlu hidup dalam rasa bersalah terus-menerus. Ada pengharapan baru.',
					verse: '"Sebab itu, kita yang dibenarkan karena iman, kita hidup dalam damai sejahtera dengan Allah."',
					verseRef: 'Roma 5:1',
					image: '😊',
					check: {
						question: 'Apa hasil dari pengampunan Tuhan dalam hati?',
						options: ['Damai dan sukacita', 'Takut selamanya', 'Tidak peduli dosa', 'Lebih sombong'],
						correctIndex: 0,
						explanation: 'Pengampunan membawa damai dan sukacita dengan Allah.'
					}
				},
				{
					title: '7. Setelah mengaku dosa, apa yang Allah lakukan?',
					content: 'Allah mengampuni dan menyucikan. Ia tidak hanya memaafkan, tetapi juga mulai membersihkan hidup kita. Itulah karya kasih karunia.',
					verse: '"Jika kita mengaku dosa kita, maka Ia setia dan adil, sehingga Ia akan mengampuni."',
					verseRef: '1 Yohanes 1:9',
					image: '🫧',
					check: {
						question: 'Saat kita mengaku dosa dengan jujur, Allah akan?',
						options: ['Mengampuni dan menyucikan', 'Menolak selalu', 'Diam saja', 'Marah tanpa akhir'],
						correctIndex: 0,
						explanation: 'Allah setia mengampuni dan menyucikan orang yang datang kepada-Nya.'
					}
				},
				{
					title: '8. Kalau diselamatkan oleh kasih karunia, mengapa masih perlu taat?',
					content: 'Ketaatan bukan untuk membeli keselamatan. Ketaatan adalah buah dari kasih. Orang yang sungguh menerima Yesus akan rindu menyenangkan Dia.',
					verse: '"Jikalau kamu mengasihi Aku, kamu akan menuruti segala perintah-Ku."',
					verseRef: 'Yohanes 14:15',
					image: '🌱',
					check: {
						question: 'Mengapa orang percaya tetap taat kepada Allah?',
						options: ['Karena mengasihi Yesus', 'Supaya bisa sombong', 'Supaya lebih hebat dari orang lain', 'Karena dipaksa manusia'],
						correctIndex: 0,
						explanation: 'Ketaatan sejati lahir dari kasih, bukan dari usaha membeli keselamatan.'
					}
				},
				{
					title: '9. Apakah keselamatan itu oleh iman dan perbuatan?',
					content: 'Keselamatan datang oleh kasih karunia melalui iman. Perbuatan baik bukan akar keselamatan, tetapi buah dari keselamatan. Orang yang sudah diselamatkan akan menghasilkan hidup yang berubah.',
					verse: '"Karena kasih karunia kamu diselamatkan oleh iman."',
					verseRef: 'Efesus 2:8',
					image: '🌿',
					check: {
						question: 'Perbuatan baik dalam hidup orang percaya adalah?',
						options: ['Buah dari iman', 'Harga untuk membeli surga', 'Pengganti Yesus', 'Hal yang tidak penting sama sekali'],
						correctIndex: 0,
						explanation: 'Perbuatan baik adalah hasil dari hati yang sudah diubahkan Tuhan.'
					}
				},
				{
					title: '10. Apakah itu berarti Sepuluh Perintah tidak sulit lagi?',
					content: 'Bila Yesus tinggal di hati, taat tidak lagi menjadi beban yang pahit. Orang percaya belajar taat karena hidup baru di dalam Kristus. Ketaatan menjadi jalan kasih.',
					verse: '"Perintah-perintah-Nya itu tidak berat."',
					verseRef: '1 Yohanes 5:3',
					image: '📜',
					check: {
						question: 'Bagi orang yang sungguh mengasihi Tuhan, perintah Allah adalah?',
						options: ['Tidak menjadi beban yang berat', 'Tidak perlu lagi', 'Selalu mustahil ditaati', 'Hanya untuk zaman dulu'],
						correctIndex: 0,
						explanation: 'Kasih kepada Tuhan membuat ketaatan menjadi jalan yang masuk akal dan penuh sukacita.'
					}
				},
				{
					title: '11. Mengapa ketaatan bukan legalisme?',
					content: 'Legalisme adalah usaha mencari selamat dengan perbuatan. Tetapi orang kudus hidup oleh darah Anak Domba dan iman kepada Yesus. Ketaatan mereka datang dari hubungan dengan Kristus.',
					verse: '"Mereka mengalahkan dia oleh darah Anak Domba."',
					verseRef: 'Wahyu 12:11',
					image: '⚖️',
					check: {
						question: 'Kapan ketaatan menjadi legalisme?',
						options: ['Saat dipakai untuk mencari keselamatan', 'Saat lahir dari kasih', 'Saat mengikuti Yesus', 'Saat orang berdoa'],
						correctIndex: 0,
						explanation: 'Legalisme terjadi saat orang mencoba diselamatkan oleh usahanya sendiri.'
					}
				},
				{
					title: '12. Bagaimana supaya iman dan kasih kepada Yesus terus bertumbuh?',
					content: 'Hubungan dengan Yesus bertumbuh lewat doa, membaca Alkitab, berjalan bersama-Nya setiap hari, dan menyangkal diri. Tanpa hubungan itu, kasih akan menjadi dingin.',
					verse: '"Selidikilah Kitab Suci."',
					verseRef: 'Yohanes 5:39',
					image: '📖',
					check: {
						question: 'Apa yang menolong hubungan dengan Yesus tetap kuat?',
						options: ['Doa dan Firman Tuhan', 'Kemalasan rohani', 'Menjauh dari Tuhan', 'Hanya ikut orang lain'],
						correctIndex: 0,
						explanation: 'Doa dan Firman Tuhan menjaga kasih kepada Kristus tetap hidup.'
					}
				},
				{
					title: '13. Bagaimana orang lain bisa tahu kamu milik Kristus?',
					content: 'Salah satu tanda penting adalah baptisan. Baptisan melambangkan mati bagi dosa, hidup baru, dan hubungan yang setia dengan Yesus. Ini tanda bahwa hidupmu milik-Nya.',
					verse: '"Kita dikuburkan bersama-sama dengan Dia oleh baptisan."',
					verseRef: 'Roma 6:4',
					image: '💧',
					check: {
						question: 'Baptisan melambangkan?',
						options: ['Hidup baru bersama Yesus', 'Sekadar mandi biasa', 'Tidak ada arti', 'Masuk kelompok manusia saja'],
						correctIndex: 0,
						explanation: 'Baptisan adalah tanda hidup baru dan kesatuan dengan Kristus.'
					}
				},
				{
					title: '14. Maukah kamu menerima Yesus sekarang?',
					content: 'Pelajaran ini berakhir dengan ajakan pribadi. Yesus mengasihi, mengampuni, dan memberi hidup baru. Ia tidak memaksa, tetapi mengundangmu datang kepada-Nya.',
					verse: '"Barangsiapa datang kepada-Ku, ia tidak akan Kubuang."',
					verseRef: 'Yohanes 6:37',
					image: '🙋',
					check: {
						question: 'Apa undangan utama pelajaran ini?',
						options: ['Datang kepada Yesus', 'Percaya pada diri sendiri saja', 'Menunda terus', 'Melupakan kasih Allah'],
						correctIndex: 0,
						explanation: 'Yesus mengundang setiap orang datang kepada-Nya dan menerima hidup baru.'
					}
				}
			],
			quiz: [
				{
					question: 'Bagaimana Allah menunjukkan kasih-Nya paling besar?',
					options: ['Dengan mengirim Yesus', 'Dengan memberi banyak uang', 'Dengan membuat semua mudah', 'Dengan meniadakan pilihan'],
					correctIndex: 0,
					explanation: 'Kasih Allah paling besar terlihat saat Ia memberi Yesus bagi kita.'
				},
				{
					question: 'Apakah Allah tetap mengasihi orang berdosa?',
					options: ['Ya', 'Tidak', 'Hanya kalau sempurna', 'Hanya kalau kaya'],
					correctIndex: 0,
					explanation: 'Kristus mati bagi kita ketika kita masih berdosa.'
				},
				{
					question: 'Apa yang Yesus lakukan di salib?',
					options: ['Menanggung hukuman dosa kita', 'Mencoba jadi terkenal', 'Menghapus kasih Allah', 'Menjadi berdosa'],
					correctIndex: 0,
					explanation: 'Yesus mati menggantikan kita.'
				},
				{
					question: 'Keselamatan diterima dengan cara apa?',
					options: ['Sebagai hadiah melalui iman', 'Dengan membeli', 'Dengan keturunan', 'Dengan jabatan'],
					correctIndex: 0,
					explanation: 'Keselamatan adalah anugerah Allah melalui iman.'
				},
				{
					question: 'Apa yang Allah lakukan saat kita mengaku dosa dengan jujur?',
					options: ['Mengampuni', 'Menolak selalu', 'Menyuruh bayar dulu', 'Membiarkan saja'],
					correctIndex: 0,
					explanation: 'Allah setia dan adil untuk mengampuni.'
				},
				{
					question: 'Mengapa orang percaya mau taat kepada Allah?',
					options: ['Karena mengasihi Yesus', 'Karena mau pamer', 'Karena dipaksa teman', 'Karena takut manusia'],
					correctIndex: 0,
					explanation: 'Ketaatan sejati lahir dari kasih kepada Kristus.'
				},
				{
					question: 'Perbuatan baik adalah apa dalam keselamatan?',
					options: ['Buah dari iman', 'Harga masuk surga', 'Pengganti salib', 'Hal utama untuk beli keselamatan'],
					correctIndex: 0,
					explanation: 'Perbuatan baik adalah hasil dari hidup yang sudah diselamatkan.'
				},
				{
					question: 'Apa yang menolong hubungan dengan Yesus terus bertumbuh?',
					options: ['Doa dan Alkitab', 'Menjauh dari gereja', 'Diam tanpa Firman', 'Menunda pertobatan'],
					correctIndex: 0,
					explanation: 'Doa dan Firman Tuhan menolong kasih kepada Yesus terus hidup.'
				},
				{
					question: 'Baptisan adalah tanda dari?',
					options: ['Hidup baru bersama Kristus', 'Permainan air', 'Tradisi kosong', 'Jalan membeli keselamatan'],
					correctIndex: 0,
					explanation: 'Baptisan melambangkan mati bagi dosa dan hidup baru dalam Kristus.'
				},
				{
					question: 'Ajakan akhir pelajaran ini adalah?',
					options: ['Menerima Yesus', 'Percaya diri sendiri saja', 'Menunggu tanpa batas', 'Tidak usah memutuskan'],
					correctIndex: 0,
					explanation: 'Yesus mengundang kita datang kepada-Nya sekarang.'
				}
			]
		},
		{
			id: 4,
			title: 'Kota Raksasa di Angkasa',
			subtitle: '17 langkah sederhana tentang kota suci dan bumi baru',
			icon: '🏰',
			color: 'from-violet-500 to-purple-700',
			finalAssessmentTitle: 'Ringkasan Akhir',
			finalAssessmentDescription: 'Jawab 10 pertanyaan sederhana. Kamu perlu minimal 7 jawaban benar untuk lulus.',
			passThreshold: 70,
			sections: [
				{
					title: '1. Siapa arsitek kota itu?',
					content: 'Kota suci itu bukan khayalan manusia. Allah sendiri yang menyiapkannya bagi umat-Nya. Kota ini nyata.',
					verse: '"Allah ... telah mempersiapkan sebuah kota bagi mereka."',
					verseRef: 'Ibrani 11:16',
					image: '🏗️',
					check: {
						question: 'Siapa yang menyiapkan kota suci itu?',
						options: ['Allah', 'Malaikat biasa', 'Raja Daud', 'Manusia di bumi'],
						correctIndex: 0,
						explanation: 'Alkitab berkata Allah yang mempersiapkan kota itu.'
					}
				},
				{
					title: '2. Di mana kota itu sekarang?',
					content: 'Sekarang kota itu ada di surga. Suatu hari nanti kota itu akan turun dari surga. Jadi saat ini kota itu sedang dipersiapkan di tempat tinggal Allah.',
					verse: '"Aku melihat kota kudus, Yerusalem Baru, turun dari sorga."',
					verseRef: 'Wahyu 21:2',
					image: '☁️',
					check: {
						question: 'Di mana Yerusalem Baru sekarang?',
						options: ['Di surga', 'Di Israel sekarang', 'Di dasar laut', 'Di padang gurun'],
						correctIndex: 0,
						explanation: 'Alkitab menunjukkan kota itu sekarang berada di surga.'
					}
				},
				{
					title: '3. Bagaimana Alkitab menggambarkan kota itu?',
					content: 'Namanya Yerusalem Baru. Kota itu sangat besar, berbentuk teratur, berdinding mulia, punya 12 gerbang mutiara, dasar dari batu indah, dan jalan emas. Kota itu bercahaya oleh kemuliaan Allah.',
					verse: '"Jalan kota itu dari emas murni, bagaikan kaca bening."',
					verseRef: 'Wahyu 21:21',
					image: '💎',
					bullets: ['Nama: Yerusalem Baru.', 'Ada 12 pintu gerbang.', 'Dasarnya penuh batu yang indah.', 'Jalannya emas murni.'],
					check: {
						question: 'Bagaimana jalan kota suci digambarkan?',
						options: ['Emas murni', 'Aspal hitam', 'Pasir putih', 'Kayu'],
						correctIndex: 0,
						explanation: 'Wahyu menggambarkan jalan kota itu dari emas murni.'
					}
				},
				{
					title: '4. Apa yang membuat warga kota itu hidup terus?',
					content: 'Di sana ada pohon kehidupan. Pohon itu memberi buah dan kehidupan yang terus-menerus. Allah memulihkan apa yang hilang sejak manusia jatuh dalam dosa.',
					verse: '"Ambillah juga dari pohon kehidupan dan hiduplah untuk selama-lamanya."',
					verseRef: 'Kejadian 3:22',
					image: '🌳',
					check: {
						question: 'Apa yang ada di kota itu untuk kehidupan kekal?',
						options: ['Pohon kehidupan', 'Gunung emas', 'Menara manusia', 'Pintu rahasia'],
						correctIndex: 0,
						explanation: 'Pohon kehidupan melambangkan hidup yang kekal dari Allah.'
					}
				},
				{
					title: '5. Apakah kota itu benar-benar turun ke bumi?',
					content: 'Ya. Yerusalem Baru akan turun ke bumi yang diperbarui. Kota itu menjadi pusat dari bumi baru.',
					verse: '"Yerusalem yang baru turun dari sorga, dari Allah."',
					verseRef: 'Wahyu 21:2',
					image: '⬇️',
					check: {
						question: 'Apa yang akan terjadi pada Yerusalem Baru?',
						options: ['Turun ke bumi baru', 'Hilang selamanya', 'Tetap kosong', 'Menjadi kota dunia sekarang'],
						correctIndex: 0,
						explanation: 'Kota itu akan turun dari surga ke bumi baru.'
					}
				},
				{
					title: '6. Apa yang terjadi pada dosa dan orang fasik?',
					content: 'Allah akan membersihkan bumi dari dosa. Semua yang memilih kejahatan akan dihancurkan. Sesudah itu Allah menciptakan bumi baru yang bersih dan suci.',
					verse: '"Kita menantikan langit yang baru dan bumi yang baru."',
					verseRef: '2 Petrus 3:13',
					image: '🔥',
					check: {
						question: 'Apa yang Allah lakukan terhadap dosa pada akhirnya?',
						options: ['Membersihkannya dari bumi', 'Menyimpannya selamanya', 'Menyuruh malaikat memeliharanya', 'Membiarkannya tumbuh'],
						correctIndex: 0,
						explanation: 'Allah akan membersihkan bumi dari dosa dan segala akibatnya.'
					}
				},
				{
					title: '7. Janji indah apa yang diberikan Allah kepada umat-Nya?',
					content: 'Allah sendiri akan tinggal bersama umat-Nya. Tidak ada bosan, tidak ada sakit, tidak ada duka, dan semua orang dipulihkan. Yang tuli akan mendengar, yang buta akan melihat.',
					verse: '"Ia akan menghapus segala air mata dari mata mereka."',
					verseRef: 'Wahyu 21:4',
					image: '🌈',
					bullets: ['Allah tinggal bersama umat-Nya.', 'Tidak ada sakit dan duka.', 'Tubuh dipulihkan dengan sempurna.'],
					check: {
						question: 'Janji besar di bumi baru adalah?',
						options: ['Tidak ada lagi air mata dan maut', 'Masih ada rumah sakit selamanya', 'Masih ada kutuk', 'Masih ada perang'],
						correctIndex: 0,
						explanation: 'Allah berjanji tidak ada lagi maut, air mata, atau dukacita.'
					}
				},
				{
					title: '8. Apa bedanya bumi baru dengan bumi sekarang?',
					content: 'Bumi baru bebas kutuk, bebas kekerasan, bebas kenajisan, dan penuh damai. Padang gersang menjadi indah. Binatang tidak saling memangsa lagi.',
					verse: '"Tidak ada lagi laknat."',
					verseRef: 'Wahyu 22:3',
					image: '🌍',
					bullets: ['Tidak ada kekerasan.', 'Tidak ada kenajisan.', 'Binatang hidup damai.', 'Alam dipulihkan.'],
					check: {
						question: 'Mana yang cocok dengan bumi baru?',
						options: ['Tidak ada kutuk lagi', 'Masih banyak kejahatan', 'Masih ada kekerasan', 'Masih ada kenajisan'],
						correctIndex: 0,
						explanation: 'Bumi baru adalah tempat tanpa kutuk dan tanpa kejahatan.'
					}
				},
				{
					title: '9. Apakah ada anak-anak di kerajaan Allah?',
					content: 'Ya, ada. Anak-anak ada di kota itu dan mereka bertumbuh dalam sukacita. Segala yang rusak karena dosa dipulihkan oleh Allah.',
					verse: '"Jalan-jalan kota itu akan penuh dengan anak-anak lelaki dan perempuan."',
					verseRef: 'Zakharia 8:5',
					image: '🧒',
					check: {
						question: 'Apakah ada anak-anak di kerajaan Allah?',
						options: ['Ya', 'Tidak', 'Hanya orang tua', 'Hanya malaikat'],
						correctIndex: 0,
						explanation: 'Alkitab menunjukkan ada anak-anak di kerajaan Allah.'
					}
				},
				{
					title: '10. Apakah orang yang dikasihi akan saling mengenal?',
					content: 'Ya. Orang-orang yang diselamatkan akan saling mengenal. Pertemuan kembali dengan orang yang kita kasihi adalah bagian dari sukacita besar di sana.',
					verse: '"Sekarang aku mengenal dengan tidak sempurna, tetapi nanti aku akan mengenal dengan sempurna."',
					verseRef: '1 Korintus 13:12',
					image: '👨‍👩‍👧',
					check: {
						question: 'Apakah orang yang diselamatkan akan saling mengenal di surga?',
						options: ['Ya', 'Tidak', 'Hanya beberapa', 'Tidak jelas sama sekali'],
						correctIndex: 0,
						explanation: 'Alkitab memberi harapan bahwa orang yang diselamatkan akan saling mengenal.'
					}
				},
				{
					title: '11. Apakah orang di sana punya tubuh nyata?',
					content: 'Yesus bangkit dengan tubuh nyata dan mulia. Orang yang diselamatkan juga akan menerima tubuh yang mulia seperti tubuh Kristus. Jadi bukan roh melayang tanpa tubuh.',
					verse: '"Roh tidak ada daging dan tulangnya, seperti yang kamu lihat ada pada-Ku."',
					verseRef: 'Lukas 24:39',
					image: '🧍',
					check: {
						question: 'Tubuh orang yang diselamatkan nanti akan seperti apa?',
						options: ['Tubuh mulia yang nyata', 'Tanpa tubuh sama sekali', 'Tubuh yang tetap sakit', 'Hanya bayangan'],
						correctIndex: 0,
						explanation: 'Kita akan menerima tubuh mulia seperti tubuh Kristus.'
					}
				},
				{
					title: '12. Apa yang akan dilakukan orang di kerajaan baru?',
					content: 'Mereka membangun rumah, menanam kebun, dan menikmati hasil kerja tangan mereka. Kehidupan di sana nyata, aktif, dan penuh sukacita.',
					verse: '"Mereka akan mendirikan rumah-rumah dan mendiaminya."',
					verseRef: 'Yesaya 65:21',
					image: '🏡',
					check: {
						question: 'Salah satu kegiatan di bumi baru adalah?',
						options: ['Membangun rumah dan menanam kebun', 'Bersembunyi dari dosa', 'Bekerja paksa', 'Menangis terus'],
						correctIndex: 0,
						explanation: 'Orang yang diselamatkan akan menikmati hidup nyata dan penuh damai.'
					}
				},
				{
					title: '13. Apa lagi yang dilakukan orang di surga?',
					content: 'Mereka bernyanyi, beribadah, menikmati alam, bertemu orang-orang yang diselamatkan, mempelajari ciptaan Allah, dan yang paling indah: melihat Yesus muka dengan muka.',
					verse: '"Mereka akan melihat wajah-Nya."',
					verseRef: 'Wahyu 22:4',
					image: '🎶',
					check: {
						question: 'Sukacita terbesar di surga adalah?',
						options: ['Melihat Yesus muka dengan muka', 'Punya rumah terbesar', 'Lebih hebat dari orang lain', 'Boleh sombong'],
						correctIndex: 0,
						explanation: 'Puncak sukacita surga adalah hidup bersama Yesus.'
					}
				},
				{
					title: '14. Bisakah bahasa manusia menggambarkan surga sepenuhnya?',
					content: 'Tidak bisa sepenuhnya. Keindahan kerajaan Allah jauh lebih besar dari bayangan manusia. Hati kita belum sanggup membayangkannya dengan lengkap.',
					verse: '"Apa yang disediakan Allah untuk mereka yang mengasihi Dia."',
					verseRef: '1 Korintus 2:9',
					image: '🤍',
					check: {
						question: 'Bisakah kita menjelaskan seluruh keindahan surga dengan sempurna sekarang?',
						options: ['Tidak', 'Ya, sepenuhnya', 'Hanya lewat lukisan', 'Hanya orang kaya yang bisa'],
						correctIndex: 0,
						explanation: 'Surga lebih indah dari yang bisa dibayangkan manusia sekarang.'
					}
				},
				{
					title: '15. Apakah kerajaan itu sedang disiapkan untukmu secara pribadi?',
					content: 'Ya. Yesus berkata Ia pergi untuk menyiapkan tempat bagimu. Undangan Allah bersifat pribadi. Ia ingin kamu ada di sana.',
					verse: '"Aku pergi ke situ untuk menyediakan tempat bagimu."',
					verseRef: 'Yohanes 14:2',
					image: '📬',
					check: {
						question: 'Apakah Yesus menyiapkan tempat bagi orang percaya secara pribadi?',
						options: ['Ya', 'Tidak', 'Hanya untuk nabi', 'Hanya untuk malaikat'],
						correctIndex: 0,
						explanation: 'Yesus sendiri berkata bahwa Ia menyiapkan tempat bagi kita.'
					}
				},
				{
					title: '16. Bagaimana mendapat kepastian masuk ke kerajaan itu?',
					content: 'Buka hati bagi Yesus, terima Dia, dan biarkan Dia membersihkan hidupmu. Saat kita tinggal di dalam Kristus, Dia memberi kuasa untuk hidup baru dan menang atas dosa.',
					verse: '"Lihat, Aku berdiri di muka pintu dan mengetok."',
					verseRef: 'Wahyu 3:20',
					image: '🚪',
					check: {
						question: 'Bagaimana seseorang dipersiapkan untuk masuk kerajaan Allah?',
						options: ['Menerima Yesus dan tinggal di dalam Dia', 'Dengan kekuatan sendiri', 'Dengan uang banyak', 'Dengan keturunan tertentu'],
						correctIndex: 0,
						explanation: 'Kepastian masuk kerajaan datang lewat hubungan dengan Yesus.'
					}
				},
				{
					title: '17. Sudahkah kamu menerima undangan Yesus?',
					content: 'Pelajaran ini berakhir dengan ajakan lembut. Allah sedang menyiapkan rumah yang indah. Ia mengundangmu untuk memilih Yesus dan hidup bersama-Nya selamanya.',
					verse: '"Barangsiapa yang mau, hendaklah ia mengambil air kehidupan dengan cuma-cuma."',
					verseRef: 'Wahyu 22:17',
					image: '🙋',
					check: {
						question: 'Apa undangan akhir dari pelajaran ini?',
						options: ['Menerima undangan Yesus', 'Menolak dan menunggu saja', 'Mencari jalan lain selain Yesus', 'Tidak perlu mengambil keputusan'],
						correctIndex: 0,
						explanation: 'Yesus mengundang setiap orang menerima hidup kekal bersama-Nya.'
					}
				}
			],
			quiz: [
				{
					question: 'Siapa yang menyiapkan kota suci bagi umat Allah?',
					options: ['Allah', 'Malaikat biasa', 'Manusia', 'Raja-raja bumi'],
					correctIndex: 0,
					explanation: 'Allah sendiri yang mempersiapkan kota suci itu.'
				},
				{
					question: 'Apa nama kota suci itu?',
					options: ['Yerusalem Baru', 'Babel', 'Roma', 'Samaria'],
					correctIndex: 0,
					explanation: 'Alkitab menyebutnya Yerusalem Baru.'
				},
				{
					question: 'Di kota itu ada apa untuk hidup kekal?',
					options: ['Pohon kehidupan', 'Pasar besar', 'Istana raja', 'Benteng perang'],
					correctIndex: 0,
					explanation: 'Pohon kehidupan melambangkan hidup kekal dari Allah.'
				},
				{
					question: 'Apa yang Allah lakukan terhadap dosa pada akhirnya?',
					options: ['Membersihkannya dari bumi', 'Menyimpannya', 'Membaginya ke semua orang', 'Menyuruh manusia mengurus sendiri'],
					correctIndex: 0,
					explanation: 'Allah akan membersihkan bumi dari dosa dan segala akibatnya.'
				},
				{
					question: 'Mana yang tidak ada lagi di bumi baru?',
					options: ['Air mata dan maut', 'Kasih', 'Sukacita', 'Penyembahan'],
					correctIndex: 0,
					explanation: 'Di bumi baru tidak ada lagi maut, air mata, dan dukacita.'
				},
				{
					question: 'Apakah orang yang diselamatkan akan saling mengenal?',
					options: ['Ya', 'Tidak', 'Hanya anak-anak', 'Hanya nabi'],
					correctIndex: 0,
					explanation: 'Alkitab memberi harapan tentang pertemuan dan pengenalan kembali.'
				},
				{
					question: 'Tubuh orang yang diselamatkan nanti seperti apa?',
					options: ['Tubuh mulia yang nyata', 'Tanpa tubuh', 'Tetap lemah dan sakit', 'Hanya bayangan'],
					correctIndex: 0,
					explanation: 'Kita akan menerima tubuh mulia seperti Kristus.'
				},
				{
					question: 'Salah satu kegiatan di bumi baru adalah?',
					options: ['Membangun rumah dan menanam kebun', 'Bersembunyi dari dosa', 'Menangis karena sakit', 'Takut pada binatang'],
					correctIndex: 0,
					explanation: 'Bumi baru berisi kehidupan damai yang nyata dan menyenangkan.'
				},
				{
					question: 'Apa sukacita terbesar di surga?',
					options: ['Melihat Yesus', 'Menjadi paling terkenal', 'Punya emas paling banyak', 'Menang atas orang lain'],
					correctIndex: 0,
					explanation: 'Sukacita terbesar adalah hidup bersama Yesus dan melihat wajah-Nya.'
				},
				{
					question: 'Bagaimana kepastian masuk kerajaan itu diterima?',
					options: ['Dengan menerima Yesus', 'Dengan uang', 'Dengan keturunan', 'Dengan kekuatan sendiri'],
					correctIndex: 0,
					explanation: 'Kepastian masuk datang melalui hubungan pribadi dengan Yesus.'
				}
			]
		},
		{
			id: 5,
			title: 'Kunci Pernikahan Bahagia',
			subtitle: '18 langkah sederhana untuk rumah tangga yang dipimpin Tuhan',
			icon: '💒',
			color: 'from-pink-500 to-rose-600',
			finalAssessmentTitle: 'Ringkasan Akhir',
			finalAssessmentDescription: 'Jawab 10 pertanyaan sederhana. Kamu perlu minimal 7 jawaban benar untuk lulus.',
			passThreshold: 70,
			sections: [
				{
					title: '1. Bangun rumah tangga sendiri',
					content: 'Allah mengajar bahwa suami dan istri harus menjadi satu rumah tangga sendiri. Mereka perlu belajar membuat keputusan bersama. Ini menolong pernikahan bertumbuh dewasa.',
					verse: '"Seorang laki-laki akan meninggalkan ayahnya dan ibunya."',
					verseRef: 'Kejadian 2:24',
					image: '🏠',
					check: {
						question: 'Prinsip awal pernikahan menurut Alkitab adalah?',
						options: ['Membangun rumah tangga sendiri', 'Selalu bergantung pada orang tua', 'Tinggal terpisah terus', 'Tidak perlu komitmen'],
						correctIndex: 0,
						explanation: 'Allah mengajar pasangan menjadi satu rumah tangga yang baru.'
					}
				},
				{
					title: '2. Teruskan masa pendekatan kasih',
					content: 'Pernikahan yang sehat perlu dipelihara. Jangan saling anggap biasa. Kasih tumbuh saat pasangan tetap saling menyenangkan, menghargai, dan menikmati waktu bersama.',
					verse: '"Hendaklah kamu saling mengasihi dengan mesra."',
					verseRef: 'Roma 12:10',
					image: '🌹',
					check: {
						question: 'Agar kasih tetap hidup dalam pernikahan, pasangan perlu?',
						options: ['Terus merawat hubungan', 'Saling mengabaikan', 'Hanya sibuk sendiri', 'Berhenti menunjukkan kasih'],
						correctIndex: 0,
						explanation: 'Kasih tidak boleh dibiarkan dingin. Ia perlu dipelihara setiap hari.'
					}
				},
				{
					title: '3. Ingat bahwa Allah yang mempersatukan',
					content: 'Pernikahan bukan sekadar kontrak manusia. Allah yang menyatukan suami dan istri. Karena itu, pasangan tidak boleh cepat menyerah saat ada kesulitan.',
					verse: '"Apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia."',
					verseRef: 'Matius 19:6',
					image: '🤝',
					check: {
						question: 'Siapa yang mempersatukan suami dan istri?',
						options: ['Allah', 'Negara', 'Teman-teman', 'Kebetulan'],
						correctIndex: 0,
						explanation: 'Alkitab menegaskan bahwa Allah mempersatukan pasangan dalam pernikahan.'
					}
				},
				{
					title: '4. Jaga pikiranmu',
					content: 'Pikiran yang salah bisa merusak pernikahan. Pikiran curiga, iri, atau ingin lari dari janji pernikahan harus ditolak. Isi pikiran dengan yang benar dan suci.',
					verse: '"Jagalah hatimu dengan segala kewaspadaan."',
					verseRef: 'Amsal 4:23',
					image: '🧠',
					check: {
						question: 'Mengapa pikiran perlu dijaga dalam pernikahan?',
						options: ['Karena pikiran memengaruhi tindakan', 'Karena pikiran tidak penting', 'Karena kasih tidak perlu dijaga', 'Karena curiga selalu baik'],
						correctIndex: 0,
						explanation: 'Apa yang dibiarkan tinggal di pikiran akan memengaruhi tindakan dan suasana rumah.'
					}
				},
				{
					title: '5. Jangan tidur sambil marah',
					content: 'Masalah kecil yang disimpan bisa menjadi besar. Allah mengajar supaya amarah tidak dibawa sampai malam. Saling mengampuni dan berkata maaf sangat penting.',
					verse: '"Janganlah matahari terbenam, sebelum padam amarahmu."',
					verseRef: 'Efesus 4:26',
					image: '🌙',
					check: {
						question: 'Apa yang baik dilakukan sebelum hari berakhir saat ada pertengkaran?',
						options: ['Berdamai dan mengampuni', 'Diam berminggu-minggu', 'Membalas', 'Mempermalukan pasangan'],
						correctIndex: 0,
						explanation: 'Allah mengajar pasangan menyelesaikan marah dengan pengampunan secepat mungkin.'
					}
				},
				{
					title: '6. Tempatkan Kristus di pusat rumah',
					content: 'Ini kunci terpenting. Bila Yesus tinggal di pusat rumah, Dia memberi damai, menghapus kepahitan, dan menolong pasangan kembali saling mengasihi.',
					verse: '"Jikalau bukan TUHAN yang membangun rumah, sia-sialah usaha orang yang membangunnya."',
					verseRef: 'Mazmur 127:1',
					image: '✝️',
					check: {
						question: 'Kunci terbesar rumah tangga bahagia adalah?',
						options: ['Kristus di pusat rumah', 'Uang banyak', 'Rumah besar', 'Tidak pernah beda pendapat'],
						correctIndex: 0,
						explanation: 'Yesus adalah dasar terkuat untuk memulihkan dan menjaga pernikahan.'
					}
				},
				{
					title: '7. Berdoalah bersama',
					content: 'Doa bersama membuka jalan bagi Allah untuk bekerja di dalam hati suami dan istri. Pasangan yang berdoa bersama belajar merendahkan diri dan mencari hikmat Tuhan.',
					verse: '"Berdoalah seorang untuk yang lain."',
					verseRef: 'Yakobus 5:16',
					image: '🙏',
					check: {
						question: 'Apa manfaat doa bersama dalam rumah tangga?',
						options: ['Membuka hati pada pertolongan Tuhan', 'Membuat pasangan makin jauh', 'Menghapus kebutuhan bicara', 'Tidak ada manfaat'],
						correctIndex: 0,
						explanation: 'Doa bersama menolong pasangan bersandar pada hikmat dan kuasa Tuhan.'
					}
				},
				{
					title: '8. Setuju bahwa perceraian bukan jawaban',
					content: 'Alkitab memandang pernikahan sebagai ikatan serius. Perceraian membawa luka besar. Bahkan saat ada luka berat, pengampunan tetap lebih indah daripada perpisahan bila pemulihan masih mungkin.',
					verse: '"Apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia."',
					verseRef: 'Matius 19:6',
					image: '🛡️',
					check: {
						question: 'Sikap dasar terhadap perceraian menurut pelajaran ini adalah?',
						options: ['Bukan jawaban utama', 'Solusi paling cepat', 'Tidak masalah', 'Selalu pilihan pertama'],
						correctIndex: 0,
						explanation: 'Allah merancang pernikahan untuk seumur hidup dan mendorong pemulihan.'
					}
				},
				{
					title: '9. Jaga lingkar keluarga tetap rapat',
					content: 'Masalah pribadi rumah tangga tidak boleh dibuka sembarangan ke luar. Kesetiaan, keterbukaan, dan tidak bermain-main dengan godaan sangat penting untuk menjaga keluarga.',
					verse: '"Jangan berzinah."',
					verseRef: 'Keluaran 20:14',
					image: '🔒',
					check: {
						question: 'Mengapa pasangan harus menjaga lingkar keluarga tetap rapat?',
						options: ['Untuk menjaga kepercayaan dan kesetiaan', 'Supaya bisa sembunyi dosa', 'Supaya tidak perlu bicara', 'Supaya orang lain takut'],
						correctIndex: 0,
						explanation: 'Keluarga perlu dijaga dengan kejujuran, kesetiaan, dan batas yang sehat.'
					}
				},
				{
					title: '10. Jadikan kasih ukuran harian',
					content: 'Kasih menurut Alkitab itu sabar, murah hati, tidak egois, dan tahan uji. Ini bukan sekadar perasaan sesaat, tetapi prinsip hidup setiap hari.',
					verse: '"Kasih itu sabar; kasih itu murah hati."',
					verseRef: '1 Korintus 13:4',
					image: '❤️',
					check: {
						question: 'Menurut Alkitab, kasih sejati itu?',
						options: ['Sabar dan murah hati', 'Cepat marah dan egois', 'Mudah menyerah', 'Hanya perasaan sesaat'],
						correctIndex: 0,
						explanation: 'Kasih sejati menurut Alkitab sabar, murah hati, dan tidak egois.'
					}
				},
				{
					title: '11. Kritik dan omelan merusak kasih',
					content: 'Mencari-cari salah pasangan terus-menerus merusak hormat dan kasih. Lebih baik belajar sabar, baik hati, dan membangun daripada menjatuhkan.',
					verse: '"Kasih itu sabar dan murah hati."',
					verseRef: '1 Korintus 13:4',
					image: '🗣️',
					check: {
						question: 'Apa yang sering merusak kasih dalam rumah tangga?',
						options: ['Kritik dan omelan terus-menerus', 'Ucapan lembut', 'Doa bersama', 'Kesabaran'],
						correctIndex: 0,
						explanation: 'Omelan dan kritik tanpa kasih bisa mematikan rasa hormat dan kehangatan.'
					}
				},
				{
					title: '12. Jangan berlebihan; hiduplah seimbang',
					content: 'Hidup rumah tangga perlu seimbang: kerja, istirahat, makan, ibadah, waktu bersama, dan penguasaan diri. Hal yang berlebihan bisa merusak kasih dan ketenangan rumah.',
					verse: '"Setiap orang yang turut mengambil bagian dalam pertandingan, menguasai dirinya dalam segala hal."',
					verseRef: '1 Korintus 9:25',
					image: '⚖️',
					check: {
						question: 'Mengapa keseimbangan penting dalam rumah tangga?',
						options: ['Karena hidup yang tidak seimbang bisa merusak hubungan', 'Karena kerja saja sudah cukup', 'Karena istirahat tidak penting', 'Karena ibadah tidak perlu'],
						correctIndex: 0,
						explanation: 'Rumah tangga yang sehat butuh keseimbangan di banyak bagian hidup.'
					}
				},
				{
					title: '13. Hormati hak pribadi pasangan',
					content: 'Suami dan istri tidak boleh saling menguasai secara salah. Privasi, rasa percaya, dan hormat pada kepribadian pasangan perlu dijaga. Kepercayaan menolong kasih bertumbuh.',
					verse: '"Hendaklah kamu saling mendahului dalam memberi hormat."',
					verseRef: 'Roma 12:10',
					image: '🪪',
					check: {
						question: 'Apa yang perlu dijaga dalam hubungan suami istri?',
						options: ['Rasa hormat dan kepercayaan', 'Kontrol berlebihan', 'Curiga terus', 'Memaksa perubahan'],
						correctIndex: 0,
						explanation: 'Pernikahan sehat dibangun dengan hormat, bukan dengan penguasaan yang salah.'
					}
				},
				{
					title: '14. Hiduplah bersih, sopan, teratur, dan rajin',
					content: 'Kebersihan, kerajinan, kesopanan, dan keteraturan rumah membawa damai. Hal-hal kecil yang diabaikan bisa menimbulkan jarak di dalam rumah tangga.',
					verse: '"Biarlah segala sesuatu berlangsung dengan sopan dan teratur."',
					verseRef: '1 Korintus 14:40',
					image: '🧹',
					check: {
						question: 'Mengapa kebersihan dan keteraturan penting dalam rumah?',
						options: ['Membantu menghadirkan damai dan hormat', 'Tidak ada pengaruh', 'Hanya urusan tamu', 'Supaya terlihat kaya'],
						correctIndex: 0,
						explanation: 'Kebersihan dan keteraturan menolong rumah terasa damai dan terhormat.'
					}
				},
				{
					title: '15. Bicaralah lembut dan baik',
					content: 'Suara keras dan kata kasar melukai hati pasangan. Jawaban yang lemah lembut memadamkan marah. Nada bicara sangat memengaruhi suasana rumah.',
					verse: '"Jawaban yang lemah lembut meredakan kegeraman."',
					verseRef: 'Amsal 15:1',
					image: '🕊️',
					check: {
						question: 'Bagaimana sebaiknya pasangan berbicara saat ada masalah?',
						options: ['Lembut dan baik', 'Keras dan kasar', 'Diam berhari-hari', 'Mengejek'],
						correctIndex: 0,
						explanation: 'Ucapan lembut membantu meredakan pertengkaran dan menjaga hati pasangan.'
					}
				},
				{
					title: '16. Bijaklah dalam soal uang',
					content: 'Uang harus dikelola bersama dengan jujur dan masuk akal. Jangan egois. Rumah tangga butuh kerja sama dan kepercayaan dalam hal keuangan.',
					verse: '"Allah mengasihi orang yang memberi dengan sukacita."',
					verseRef: '2 Korintus 9:7',
					image: '💰',
					check: {
						question: 'Sikap yang sehat dalam keuangan rumah tangga adalah?',
						options: ['Jujur dan dikelola bersama', 'Rahasia dan egois', 'Satu pihak kuasai semua tanpa bicara', 'Belanja tanpa rencana'],
						correctIndex: 0,
						explanation: 'Keuangan rumah tangga perlu dikelola dengan kerja sama dan kejujuran.'
					}
				},
				{
					title: '17. Bicarakan keputusan bersama',
					content: 'Keputusan penting sebaiknya dibicarakan dengan terbuka. Mendengar pasangan mencegah banyak kesalahan. Rumah tangga yang kuat adalah rumah tangga yang mau berdialog.',
					verse: '"Ada lebih banyak harapan bagi orang bebal daripada orang yang menganggap dirinya bijak."',
					verseRef: 'Amsal 26:12',
					image: '💬',
					check: {
						question: 'Mengapa keputusan besar perlu dibicarakan bersama?',
						options: ['Supaya ada kebijaksanaan dan saling menghargai', 'Supaya cepat marah', 'Supaya satu pihak kalah', 'Supaya tidak perlu doa'],
						correctIndex: 0,
						explanation: 'Membicarakan keputusan bersama menolong rumah tangga lebih kuat dan bijaksana.'
					}
				},
				{
					title: '18. Maukah rumah tanggamu memantulkan kasih Allah?',
					content: 'Pelajaran ini mengajak setiap pasangan membiarkan kasih Allah memimpin rumah mereka. Allah ingin rumah tangga menjadi tempat aman, setia, dan penuh sukacita.',
					verse: '"Kasih tidak berkesudahan."',
					verseRef: '1 Korintus 13:8',
					image: '🌟',
					check: {
						question: 'Apa tujuan utama pelajaran ini bagi rumah tangga?',
						options: ['Agar rumah memantulkan kasih Allah', 'Agar pasangan saling mengalahkan', 'Agar rumah hanya fokus uang', 'Agar keluarga hidup tanpa Tuhan'],
						correctIndex: 0,
						explanation: 'Allah rindu rumah tangga memantulkan kasih-Nya yang setia dan penuh sukacita.'
					}
				}
			],
			quiz: [
				{
					question: 'Siapa yang menetapkan pernikahan sejak awal?',
					options: ['Allah', 'Negara', 'Manusia', 'Teman'],
					correctIndex: 0,
					explanation: 'Allah yang merancang pernikahan sejak awal.'
				},
				{
					question: 'Agar kasih tetap hidup dalam pernikahan, pasangan perlu?',
					options: ['Terus merawat hubungan', 'Saling cuek', 'Hanya fokus kerja', 'Saling menuntut terus'],
					correctIndex: 0,
					explanation: 'Pernikahan yang sehat perlu terus dipelihara.'
				},
				{
					question: 'Kunci terbesar rumah tangga bahagia adalah?',
					options: ['Kristus di pusat rumah', 'Rumah besar', 'Banyak uang', 'Tidak pernah berbeda'],
					correctIndex: 0,
					explanation: 'Yesus di pusat rumah adalah dasar yang paling penting.'
				},
				{
					question: 'Apa yang harus dilakukan dengan amarah sebelum hari berakhir?',
					options: ['Berdamai', 'Disimpan lama', 'Dibalas', 'Diceritakan ke semua orang'],
					correctIndex: 0,
					explanation: 'Allah mengajar supaya marah tidak dipelihara.'
				},
				{
					question: 'Mengapa doa bersama penting dalam rumah tangga?',
					options: ['Membuka hati pada pertolongan Tuhan', 'Agar tidak perlu bicara', 'Agar terlihat rohani', 'Tidak penting'],
					correctIndex: 0,
					explanation: 'Doa bersama menghubungkan pasangan dengan hikmat dan kuasa Tuhan.'
				},
				{
					question: 'Sikap terhadap perceraian menurut pelajaran ini adalah?',
					options: ['Bukan jawaban utama', 'Pilihan pertama', 'Hal biasa', 'Solusi termudah'],
					correctIndex: 0,
					explanation: 'Pernikahan dirancang Allah untuk setia dan bertahan.'
				},
				{
					question: 'Apa yang merusak kasih dalam rumah tangga?',
					options: ['Kritik dan omelan terus-menerus', 'Ucapan lembut', 'Kesabaran', 'Hormatan'],
					correctIndex: 0,
					explanation: 'Omelan dan kritik tanpa kasih merusak hubungan.'
				},
				{
					question: 'Apa yang perlu dijaga dalam hubungan suami istri?',
					options: ['Kepercayaan dan hormat', 'Kontrol berlebihan', 'Curiga terus', 'Rahasia terus'],
					correctIndex: 0,
					explanation: 'Rumah tangga sehat dibangun dengan hormat dan kepercayaan.'
				},
				{
					question: 'Bagaimana pasangan sebaiknya berbicara saat ada masalah?',
					options: ['Lembut dan baik', 'Kasar dan keras', 'Mengejek', 'Diam tanpa akhir'],
					correctIndex: 0,
					explanation: 'Jawaban yang lembut membantu meredakan marah.'
				},
				{
					question: 'Tujuan akhir pelajaran ini untuk rumah tangga adalah?',
					options: ['Memantulkan kasih Allah', 'Menang atas pasangan', 'Fokus uang saja', 'Hidup tanpa Tuhan'],
					correctIndex: 0,
					explanation: 'Rumah tangga dipanggil menjadi tempat yang memantulkan kasih Allah.'
				}
			]
		},
	{
		id: 6,
		title: 'Tertulis di Batu!',
		subtitle: '10 langkah sederhana tentang hukum Allah yang penuh kasih',
		icon: '📜',
		color: 'from-stone-500 to-stone-700',
		finalAssessmentTitle: 'Ringkasan Akhir',
		finalAssessmentDescription: 'Jawab 10 pertanyaan sederhana. Kamu perlu minimal 7 jawaban benar untuk lulus.',
		passThreshold: 70,
		sections: [
			{
				title: '1. Siapa yang menulis hukum itu?',
				content: 'Sepuluh Perintah tidak ditulis oleh nabi biasa. Allah sendiri menulisnya di loh batu. Ini menunjukkan hukum itu sangat penting.',
				verse: '"Tulisan itu ialah tulisan Allah."',
				verseRef: 'Keluaran 32:16',
				image: '⛰️',
				check: {
					question: 'Siapa yang menulis Sepuluh Perintah?',
					options: ['Allah sendiri', 'Musa', 'Daud', 'Malaikat'],
					correctIndex: 0,
					explanation: 'Allah sendiri yang menulis hukum-Nya.'
				}
			},
			{
				title: '2. Mengapa hukum Allah penting?',
				content: 'Hukum Allah menunjukkan yang benar dan yang salah. Hukum itu melindungi hidup kita seperti pagar yang baik.',
				verse: '"Hukum TUHAN itu sempurna."',
				verseRef: 'Mazmur 19:8',
				image: '🛡️',
				check: {
					question: 'Mengapa hukum Allah penting?',
					options: ['Karena melindungi dan menunjukkan yang benar', 'Karena hanya untuk orang Israel dulu', 'Karena dibuat manusia', 'Karena tidak berarti'],
					correctIndex: 0,
					explanation: 'Hukum Allah menunjukkan jalan yang benar dan melindungi hidup.'
				}
			},
			{
				title: '3. Apakah hukum Allah sudah ada sebelum Sinai?',
				content: 'Ya. Dosa sudah ada sebelum Gunung Sinai, berarti hukum Allah juga sudah ada. Kain berdosa saat membunuh Habel, walau Sinai belum terjadi.',
				verse: '"Dosa ialah pelanggaran hukum Allah."',
				verseRef: '1 Yohanes 3:4',
				image: '📖',
				check: {
					question: 'Apakah hukum Allah baru mulai di Gunung Sinai?',
					options: ['Tidak', 'Ya', 'Hanya sebagian', 'Tidak jelas'],
					correctIndex: 0,
					explanation: 'Karena dosa sudah ada lebih dulu, hukum Allah juga sudah berlaku.'
				}
			},
			{
				title: '4. Apa hubungan hukum dan kasih?',
				content: 'Yesus merangkum hukum dalam dua kasih besar: kasih kepada Allah dan kasih kepada sesama. Hukum Allah adalah hukum kasih.',
				verse: '"Kasihilah Tuhan, Allahmu ... dan kasihilah sesamamu manusia."',
				verseRef: 'Matius 22:37-39',
				image: '❤️',
				check: {
					question: 'Hukum Allah pada dasarnya adalah hukum?',
					options: ['Kasih', 'Kekerasan', 'Takut', 'Kebiasaan manusia'],
					correctIndex: 0,
					explanation: 'Yesus menunjukkan bahwa inti hukum adalah kasih.'
				}
			},
			{
				title: '5. Apa isi empat perintah pertama?',
				content: 'Empat perintah pertama mengajar kita bagaimana menghormati Allah: tidak punya allah lain, tidak menyembah berhala, menghormati nama-Nya, dan mengingat Sabat.',
				verse: '"Kasihilah Tuhan, Allahmu, dengan segenap hatimu."',
				verseRef: 'Matius 22:37',
				image: '🙏',
				check: {
					question: 'Empat perintah pertama terutama mengajar tentang?',
					options: ['Kasih kepada Allah', 'Kasih kepada negara', 'Aturan perang', 'Kebiasaan makan'],
					correctIndex: 0,
					explanation: 'Empat perintah pertama berkaitan dengan hubungan kita kepada Allah.'
				}
			},
			{
				title: '6. Apa isi enam perintah terakhir?',
				content: 'Enam perintah terakhir mengajar kita bagaimana hidup dengan sesama: hormati orang tua, jangan membunuh, jangan berzinah, jangan mencuri, jangan berdusta, dan jangan iri hati.',
				verse: '"Kasihilah sesamamu manusia seperti dirimu sendiri."',
				verseRef: 'Matius 22:39',
				image: '🤝',
				check: {
					question: 'Enam perintah terakhir terutama mengajar tentang?',
					options: ['Kasih kepada sesama', 'Aturan cuaca', 'Sistem pajak', 'Jadwal ibadah saja'],
					correctIndex: 0,
					explanation: 'Bagian ini mengatur hubungan manusia dengan sesama.'
				}
			},
			{
				title: '7. Apakah hukum Allah bisa diubah?',
				content: 'Tidak. Hukum Allah lahir dari karakter-Nya yang tetap. Yang salah tidak bisa tiba-tiba menjadi benar.',
				verse: '"Lebih mudah langit dan bumi lenyap daripada satu titik dari hukum Taurat batal."',
				verseRef: 'Lukas 16:17',
				image: '🪨',
				check: {
					question: 'Apakah hukum Allah berubah-ubah?',
					options: ['Tidak', 'Ya, sering', 'Hanya pada hari tertentu', 'Tergantung pemerintah'],
					correctIndex: 0,
					explanation: 'Hukum Allah tetap karena karakter Allah juga tetap.'
				}
			},
			{
				title: '8. Apakah hukum bisa menyelamatkan kita?',
				content: 'Tidak. Hukum menunjukkan dosa, tetapi tidak bisa menghapus dosa. Seperti cermin menunjukkan kotoran, tetapi tidak bisa mencuci muka.',
				verse: '"Oleh hukum Taurat orang mengenal dosa."',
				verseRef: 'Roma 3:20',
				image: '🪞',
				check: {
					question: 'Apa fungsi hukum terhadap dosa?',
					options: ['Menunjukkan dosa', 'Menghapus dosa', 'Menyelamatkan manusia', 'Mengganti Yesus'],
					correctIndex: 0,
					explanation: 'Hukum menunjukkan dosa, tetapi hanya Yesus yang bisa menghapus dosa.'
				}
			},
			{
				title: '9. Bagaimana Yesus memandang hukum Allah?',
				content: 'Yesus tidak datang menghapus hukum, tetapi menggenapinya dan menunjukkan arti yang benar. Ia hidup taat sempurna.',
				verse: '"Aku datang bukan untuk meniadakan, melainkan untuk menggenapi."',
				verseRef: 'Matius 5:17',
				image: '✝️',
				check: {
					question: 'Apa yang Yesus lakukan terhadap hukum Allah?',
					options: ['Menggenapinya', 'Menghapusnya', 'Melupakannya', 'Menggantinya dengan tradisi'],
					correctIndex: 0,
					explanation: 'Yesus datang untuk menggenapi dan meninggikan hukum Allah.'
				}
			},
			{
				title: '10. Mengapa orang percaya tetap menaati perintah Allah?',
				content: 'Bukan untuk membeli keselamatan, tetapi karena mengasihi Yesus. Ketaatan adalah buah dari hubungan dengan Kristus.',
				verse: '"Jikalau kamu mengasihi Aku, kamu akan menuruti segala perintah-Ku."',
				verseRef: 'Yohanes 14:15',
				image: '🌱',
				check: {
					question: 'Mengapa orang percaya mau taat?',
					options: ['Karena mengasihi Yesus', 'Karena mau pamer', 'Karena ingin beli surga', 'Karena dipaksa manusia'],
					correctIndex: 0,
					explanation: 'Ketaatan sejati lahir dari kasih kepada Tuhan.'
				}
			}
		],
		quiz: [
			{ question: 'Siapa yang menulis Sepuluh Perintah?', options: ['Allah sendiri', 'Musa', 'Daud', 'Malaikat'], correctIndex: 0, explanation: 'Allah sendiri menulis hukum-Nya.' },
			{ question: 'Hukum Allah diberikan untuk?', options: ['Melindungi dan menunjukkan yang benar', 'Menghapus Alkitab', 'Mengganti kasih', 'Membuat dosa jadi kecil'], correctIndex: 0, explanation: 'Hukum Allah melindungi hidup dan menunjukkan yang benar.' },
			{ question: 'Apakah hukum Allah baru mulai di Sinai?', options: ['Tidak', 'Ya', 'Hanya di Perjanjian Baru', 'Tidak jelas'], correctIndex: 0, explanation: 'Dosa sudah ada sebelum Sinai, jadi hukum Allah juga sudah berlaku.' },
			{ question: 'Inti hukum Allah adalah?', options: ['Kasih', 'Takut', 'Kekerasan', 'Kebiasaan'], correctIndex: 0, explanation: 'Yesus merangkum hukum sebagai kasih kepada Allah dan sesama.' },
			{ question: 'Empat perintah pertama berbicara tentang?', options: ['Kasih kepada Allah', 'Kasih kepada sesama', 'Pekerjaan', 'Makanan'], correctIndex: 0, explanation: 'Empat perintah pertama mengatur hubungan dengan Allah.' },
			{ question: 'Enam perintah terakhir berbicara tentang?', options: ['Kasih kepada sesama', 'Sistem pajak', 'Bencana', 'Bahasa'], correctIndex: 0, explanation: 'Enam perintah terakhir mengatur hubungan dengan sesama.' },
			{ question: 'Apakah hukum Allah dapat diubah?', options: ['Tidak', 'Ya', 'Kadang-kadang', 'Tergantung budaya'], correctIndex: 0, explanation: 'Hukum Allah tetap karena Allah tetap.' },
			{ question: 'Fungsi hukum terhadap dosa adalah?', options: ['Menunjukkan dosa', 'Menghapus dosa', 'Menyelamatkan manusia', 'Menggantikan Yesus'], correctIndex: 0, explanation: 'Hukum menunjukkan dosa; Yesus yang menghapusnya.' },
			{ question: 'Apa yang Yesus lakukan terhadap hukum Allah?', options: ['Menggenapinya', 'Menghapusnya', 'Mengabaikannya', 'Menjualnya'], correctIndex: 0, explanation: 'Yesus datang untuk menggenapi hukum.' },
			{ question: 'Mengapa orang percaya tetap taat kepada Allah?', options: ['Karena mengasihi Yesus', 'Karena mau pamer', 'Karena takut manusia', 'Karena beli keselamatan'], correctIndex: 0, explanation: 'Ketaatan adalah buah kasih kepada Kristus.' }
		]
	},
	{
		id: 7,
		title: 'Hari yang Hilang dari Sejarah',
		subtitle: '10 langkah sederhana tentang Sabat Alkitab',
		icon: '📅',
		color: 'from-sky-500 to-blue-700',
		finalAssessmentTitle: 'Ringkasan Akhir',
		finalAssessmentDescription: 'Jawab 10 pertanyaan sederhana. Kamu perlu minimal 7 jawaban benar untuk lulus.',
		passThreshold: 70,
		sections: [
			{
				title: '1. Kapan Sabat dibuat?',
				content: 'Sabat dibuat pada minggu penciptaan. Allah berhenti pada hari ketujuh, memberkati hari itu, dan menguduskannya.',
				verse: '"Allah memberkati hari ketujuh itu dan menguduskannya."',
				verseRef: 'Kejadian 2:3',
				image: '🌅',
				check: {
					question: 'Kapan Sabat dibuat?',
					options: ['Saat penciptaan', 'Di Sinai saja', 'Sesudah Yesus bangkit', 'Pada zaman raja-raja'],
					correctIndex: 0,
					explanation: 'Sabat berasal dari minggu penciptaan.'
				}
			},
			{
				title: '2. Hari apa yang Allah kuduskan?',
				content: 'Allah menguduskan hari ketujuh, bukan hari pertama. Hari ketujuh itulah Sabat Alkitab.',
				verse: '"Hari ketujuh adalah hari Sabat TUHAN, Allahmu."',
				verseRef: 'Keluaran 20:10',
				image: '7️⃣',
				check: {
					question: 'Hari apa yang dikuduskan Allah sebagai Sabat?',
					options: ['Hari ketujuh', 'Hari pertama', 'Hari kelima', 'Semua hari sama'],
					correctIndex: 0,
					explanation: 'Alkitab jelas menunjuk hari ketujuh sebagai Sabat.'
				}
			},
			{
				title: '3. Apa isi perintah keempat?',
				content: 'Allah berkata: ingatlah dan kuduskanlah hari Sabat. Kata ingatlah penting karena manusia mudah melupakan hari kudus itu.',
				verse: '"Ingatlah dan kuduskanlah hari Sabat."',
				verseRef: 'Keluaran 20:8',
				image: '📜',
				check: {
					question: 'Perintah keempat dimulai dengan kata?',
					options: ['Ingatlah', 'Pergilah', 'Lihatlah', 'Diamlah'],
					correctIndex: 0,
					explanation: 'Allah memulai perintah Sabat dengan kata ingatlah.'
				}
			},
			{
				title: '4. Apakah Yesus memelihara Sabat?',
				content: 'Ya. Yesus beribadah pada hari Sabat seperti kebiasaan-Nya. Ia juga berkata bahwa Sabat dibuat untuk manusia.',
				verse: '"Ia masuk ke sinagoga, seperti yang biasa dilakukan-Nya pada hari Sabat."',
				verseRef: 'Lukas 4:16',
				image: '⛪',
				check: {
					question: 'Apakah Yesus memelihara Sabat?',
					options: ['Ya', 'Tidak', 'Hanya sekali', 'Hanya saat kecil'],
					correctIndex: 0,
					explanation: 'Yesus sendiri memelihara Sabat.'
				}
			},
			{
				title: '5. Apakah murid-murid juga memelihara Sabat?',
				content: 'Ya. Sesudah kebangkitan Yesus, para rasul tetap mengajar dan beribadah pada hari Sabat.',
				verse: '"Pada hari Sabat kami pergi ke luar pintu gerbang kota."',
				verseRef: 'Kisah 16:13',
				image: '👣',
				check: {
					question: 'Apakah para rasul tetap memakai Sabat?',
					options: ['Ya', 'Tidak', 'Hanya orang Yahudi', 'Tidak ada catatan'],
					correctIndex: 0,
					explanation: 'Kitab Kisah Para Rasul menunjukkan mereka tetap memakai Sabat.'
				}
			},
			{
				title: '6. Adakah ayat yang mengubah Sabat ke Minggu?',
				content: 'Tidak ada ayat Alkitab yang mengubah hari Sabat dari hari ketujuh menjadi hari pertama. Perubahan itu bukan datang dari Alkitab.',
				verse: '"Janganlah kamu menambahkan apa pun kepada firman."',
				verseRef: 'Ulangan 4:2',
				image: '🔍',
				check: {
					question: 'Apakah ada ayat yang mengubah Sabat ke Minggu?',
					options: ['Tidak ada', 'Ada di Wahyu', 'Ada di Roma', 'Ada di Kejadian'],
					correctIndex: 0,
					explanation: 'Tidak ada satu pun ayat yang memerintahkan perpindahan Sabat ke Minggu.'
				}
			},
			{
				title: '7. Untuk siapa Sabat dibuat?',
				content: 'Yesus berkata Sabat dibuat untuk manusia. Jadi Sabat adalah hadiah Allah bagi semua orang, bukan beban untuk satu bangsa saja.',
				verse: '"Hari Sabat diadakan untuk manusia."',
				verseRef: 'Markus 2:27',
				image: '🎁',
				check: {
					question: 'Sabat dibuat untuk siapa?',
					options: ['Untuk manusia', 'Hanya imam', 'Hanya orang Yahudi', 'Hanya malaikat'],
					correctIndex: 0,
					explanation: 'Yesus berkata Sabat dibuat untuk manusia.'
				}
			},
			{
				title: '8. Kapan Sabat dimulai?',
				content: 'Dalam Alkitab, hari dimulai dari matahari terbenam ke matahari terbenam. Jadi Sabat dimulai Jumat petang dan berakhir Sabtu petang.',
				verse: '"Dari petang sampai petang kamu harus merayakan Sabat."',
				verseRef: 'Imamat 23:32',
				image: '🌇',
				check: {
					question: 'Kapan Sabat dimulai menurut Alkitab?',
					options: ['Jumat petang', 'Sabtu pagi', 'Minggu pagi', 'Jumat siang'],
					correctIndex: 0,
					explanation: 'Sabat dimulai pada Jumat saat matahari terbenam.'
				}
			},
			{
				title: '9. Mengapa Sabat penting juga untuk akhir zaman?',
				content: 'Sabat adalah tanda Allah sebagai Pencipta. Di akhir zaman, penyembahan kepada Pencipta menjadi isu penting. Karena itu Sabat tetap penting.',
				verse: '"Sembahlah Dia yang telah menjadikan langit dan bumi."',
				verseRef: 'Wahyu 14:7',
				image: '🌍',
				check: {
					question: 'Mengapa Sabat penting di akhir zaman?',
					options: ['Karena terkait penyembahan kepada Pencipta', 'Karena hanya soal tradisi', 'Karena tidak ada artinya', 'Karena cuma budaya lokal'],
					correctIndex: 0,
					explanation: 'Sabat mengingatkan kita bahwa Allah adalah Pencipta.'
				}
			},
			{
				title: '10. Apakah Sabat akan tetap ada di bumi baru?',
				content: 'Ya. Alkitab berkata bahwa di bumi baru semua orang akan datang beribadah dari Sabat ke Sabat. Sabat bersifat kekal.',
				verse: '"Setiap Sabat semuanya akan datang sujud menyembah di hadapan-Ku."',
				verseRef: 'Yesaya 66:23',
				image: '🌈',
				check: {
					question: 'Apakah Sabat tetap ada di bumi baru?',
					options: ['Ya', 'Tidak', 'Hanya sementara', 'Tidak diketahui'],
					correctIndex: 0,
					explanation: 'Yesaya 66:23 menunjukkan Sabat tetap ada di bumi baru.'
				}
			}
		],
		quiz: [
			{ question: 'Kapan Sabat dibuat?', options: ['Saat penciptaan', 'Di Sinai saja', 'Sesudah kebangkitan', 'Pada zaman Daud'], correctIndex: 0, explanation: 'Sabat berasal dari minggu penciptaan.' },
			{ question: 'Hari apa yang Allah kuduskan?', options: ['Hari ketujuh', 'Hari pertama', 'Hari kedua', 'Semua hari sama'], correctIndex: 0, explanation: 'Allah menguduskan hari ketujuh.' },
			{ question: 'Perintah keempat dimulai dengan kata?', options: ['Ingatlah', 'Pergilah', 'Lihatlah', 'Datanglah'], correctIndex: 0, explanation: 'Allah memulai perintah Sabat dengan ingatlah.' },
			{ question: 'Apakah Yesus memelihara Sabat?', options: ['Ya', 'Tidak', 'Kadang-kadang', 'Tidak tercatat'], correctIndex: 0, explanation: 'Yesus memelihara Sabat seperti kebiasaan-Nya.' },
			{ question: 'Apakah para rasul juga memelihara Sabat?', options: ['Ya', 'Tidak', 'Hanya sebelum salib', 'Tidak jelas'], correctIndex: 0, explanation: 'Rasul-rasul tetap beribadah dan mengajar pada hari Sabat.' },
			{ question: 'Apakah ada ayat yang mengubah Sabat ke Minggu?', options: ['Tidak ada', 'Ada', 'Hanya satu', 'Banyak'], correctIndex: 0, explanation: 'Tidak ada ayat Alkitab yang mengubah Sabat ke Minggu.' },
			{ question: 'Sabat dibuat untuk siapa?', options: ['Untuk manusia', 'Hanya imam', 'Hanya Israel', 'Hanya malaikat'], correctIndex: 0, explanation: 'Yesus berkata Sabat dibuat untuk manusia.' },
			{ question: 'Kapan Sabat dimulai?', options: ['Jumat petang', 'Sabtu pagi', 'Minggu pagi', 'Jumat siang'], correctIndex: 0, explanation: 'Sabat dimulai dari Jumat petang sampai Sabtu petang.' },
			{ question: 'Mengapa Sabat penting di akhir zaman?', options: ['Karena terkait penyembahan kepada Pencipta', 'Karena hanya soal tradisi', 'Karena tidak penting', 'Karena urusan politik'], correctIndex: 0, explanation: 'Sabat menunjuk kepada Allah sebagai Pencipta.' },
			{ question: 'Apakah Sabat tetap ada di bumi baru?', options: ['Ya', 'Tidak', 'Sebentar saja', 'Tidak diketahui'], correctIndex: 0, explanation: 'Alkitab menunjukkan Sabat tetap dipelihara di bumi baru.' }
		]
	},
	{
		id: 8,
		title: 'Pembebasan Terakhir',
		subtitle: '10 langkah sederhana tentang kedatangan Yesus yang kedua',
		icon: '☁️',
		color: 'from-amber-500 to-orange-600',
		finalAssessmentTitle: 'Ringkasan Akhir',
		finalAssessmentDescription: 'Jawab 10 pertanyaan sederhana. Kamu perlu minimal 7 jawaban benar untuk lulus.',
		passThreshold: 70,
		sections: [
			{
				title: '1. Apakah Yesus berjanji datang kembali?',
				content: 'Ya. Yesus sendiri berjanji akan datang kembali untuk menjemput umat-Nya. Ini janji yang pasti.',
				verse: '"Aku akan datang kembali."',
				verseRef: 'Yohanes 14:3',
				image: '🌤️',
				check: { question: 'Apakah Yesus berjanji datang kembali?', options: ['Ya', 'Tidak', 'Mungkin', 'Hanya untuk murid'], correctIndex: 0, explanation: 'Yesus sendiri berjanji akan datang kembali.' }
			},
			{
				title: '2. Bagaimana Yesus akan datang?',
				content: 'Kedatangan Yesus tidak diam-diam. Ia datang dengan awan, kuasa, kemuliaan, dan semua mata akan melihat.',
				verse: '"Setiap mata akan melihat Dia."',
				verseRef: 'Wahyu 1:7',
				image: '👀',
				check: { question: 'Bagaimana Yesus datang kedua kali?', options: ['Terlihat oleh semua orang', 'Diam-diam', 'Dalam mimpi saja', 'Sebagai bayi lagi'], correctIndex: 0, explanation: 'Kedatangan Yesus akan terlihat oleh semua orang.' }
			},
			{
				title: '3. Apakah kedatangan-Nya terdengar?',
				content: 'Ya. Akan ada seruan, suara penghulu malaikat, dan bunyi sangkakala Allah. Jadi kedatangan itu bukan peristiwa rahasia.',
				verse: '"Dengan penghulu malaikat dan sangkakala Allah."',
				verseRef: '1 Tesalonika 4:16',
				image: '📣',
				check: { question: 'Apakah kedatangan Yesus akan sunyi tanpa suara?', options: ['Tidak', 'Ya', 'Hanya didengar sebagian orang', 'Hanya malaikat yang tahu'], correctIndex: 0, explanation: 'Alkitab menggambarkan kedatangan Yesus sangat terbuka dan terdengar.' }
			},
			{
				title: '4. Apa yang terjadi pada orang benar yang sudah mati?',
				content: 'Mereka dibangkitkan lebih dahulu. Orang yang mati dalam Kristus akan bangkit dengan tubuh yang mulia.',
				verse: '"Mereka yang mati dalam Kristus akan lebih dahulu bangkit."',
				verseRef: '1 Tesalonika 4:16',
				image: '🌅',
				check: { question: 'Apa yang terjadi pada orang benar yang sudah mati saat Yesus datang?', options: ['Dibangkitkan', 'Tetap di kubur', 'Menjadi roh gentayangan', 'Hilangan'], correctIndex: 0, explanation: 'Orang benar yang mati akan dibangkitkan saat Yesus datang.' }
			},
			{
				title: '5. Apa yang terjadi pada orang benar yang masih hidup?',
				content: 'Mereka akan diubahkan. Tubuh fana menjadi mulia dan mereka bersama orang yang dibangkitkan menyongsong Tuhan di udara.',
				verse: '"Kita akan diubah."',
				verseRef: '1 Korintus 15:52',
				image: '✨',
				check: { question: 'Apa yang terjadi pada orang benar yang masih hidup?', options: ['Diubahkan', 'Dibiarkan tetap fana', 'Menghilang tanpa tubuh', 'Tidak ikut'], correctIndex: 0, explanation: 'Mereka diubahkan menjadi tidak fana dan mulia.' }
			},
			{
				title: '6. Apa yang terjadi pada orang jahat saat itu?',
				content: 'Orang jahat yang hidup tidak tahan melihat kemuliaan Yesus. Kedatangan-Nya membawa penghakiman bagi yang menolak-Nya.',
				verse: '"Ia akan membinasakan dengan nafas mulut-Nya."',
				verseRef: '2 Tesalonika 2:8',
				image: '⚖️',
				check: { question: 'Apa akibat kedatangan Yesus bagi orang yang terus menolak Dia?', options: ['Penghakiman', 'Hadiah surga', 'Tidak ada akibat', 'Menjadi malaikat'], correctIndex: 0, explanation: 'Kedatangan Yesus membawa keselamatan bagi umat-Nya dan penghakiman bagi yang menolak.' }
			},
			{
				title: '7. Tanda-tanda apa mendahului kedatangan Yesus?',
				content: 'Yesus menyebut perang, gempa, kelaparan, tipu daya rohani, dan Injil diberitakan ke seluruh dunia. Semua ini menunjukkan akhir sudah dekat.',
				verse: '"Injil Kerajaan ini akan diberitakan di seluruh dunia."',
				verseRef: 'Matius 24:14',
				image: '🌍',
				check: { question: 'Salah satu tanda kedatangan Yesus adalah?', options: ['Injil diberitakan ke seluruh dunia', 'Semua orang jadi sempurna', 'Tidak ada bencana', 'Dosa hilang sendiri'], correctIndex: 0, explanation: 'Yesus menyebut pemberitaan Injil dan berbagai tanda lain.' }
			},
			{
				title: '8. Mengapa kita harus waspada terhadap kedatangan palsu?',
				content: 'Setan akan mencoba menipu lewat Kristus palsu dan mujizat palsu. Karena itu kita harus tahu ciri kedatangan Yesus yang asli: terlihat, terdengar, dan mulia.',
				verse: '"Jangan kamu percaya."',
				verseRef: 'Matius 24:23',
				image: '⚠️',
				check: { question: 'Mengapa kita harus tahu ciri kedatangan Yesus yang asli?', options: ['Supaya tidak tertipu', 'Supaya lebih takut', 'Supaya tidak perlu Alkitab', 'Supaya bisa menebak tanggal'], correctIndex: 0, explanation: 'Pengetahuan Alkitab melindungi kita dari penipuan.' }
			},
			{
				title: '9. Apakah ada orang yang tahu tanggal pastinya?',
				content: 'Tidak. Alkitab berkata tidak ada manusia yang tahu hari dan jamnya. Karena itu tugas kita bukan menebak tanggal, tetapi hidup siap setiap hari.',
				verse: '"Tentang hari dan saat itu tidak seorang pun yang tahu."',
				verseRef: 'Matius 24:36',
				image: '⏰',
				check: { question: 'Apakah manusia tahu hari dan jam kedatangan Yesus?', options: ['Tidak', 'Ya', 'Hanya nabi modern', 'Hanya orang sangat pintar'], correctIndex: 0, explanation: 'Yesus berkata tidak seorang pun tahu hari dan jamnya.' }
			},
			{
				title: '10. Bagaimana cara bersiap?',
				content: 'Tinggal di dalam Kristus, percaya pada-Nya, hidup taat, dan berjaga-jaga. Orang yang siap tidak takut akan kedatangan-Nya.',
				verse: '"Hendaklah kamu juga siap sedia."',
				verseRef: 'Matius 24:44',
				image: '🙏',
				check: { question: 'Cara terbaik bersiap untuk kedatangan Yesus adalah?', options: ['Hidup dekat dengan Yesus setiap hari', 'Menebak tanggal', 'Menunggu tanpa berubah', 'Menyimpan rasa takut'], correctIndex: 0, explanation: 'Kesiapan sejati adalah hidup dekat dengan Kristus.' }
			}
		],
		quiz: [
			{ question: 'Apakah Yesus berjanji datang kembali?', options: ['Ya', 'Tidak', 'Mungkin', 'Tidak jelas'], correctIndex: 0, explanation: 'Yesus sendiri berjanji datang kembali.' },
			{ question: 'Bagaimana kedatangan Yesus akan terlihat?', options: ['Oleh semua orang', 'Hanya oleh orang suci', 'Diam-diam', 'Hanya di satu kota'], correctIndex: 0, explanation: 'Setiap mata akan melihat Dia.' },
			{ question: 'Apakah kedatangan Yesus terdengar?', options: ['Ya', 'Tidak', 'Hanya sedikit', 'Hanya hewan yang dengar'], correctIndex: 0, explanation: 'Ada seruan dan sangkakala Allah.' },
			{ question: 'Apa yang terjadi pada orang benar yang sudah mati?', options: ['Dibangkitkan', 'Tetap tidur selamanya', 'Menjadi hantu', 'Hilangan'], correctIndex: 0, explanation: 'Mereka dibangkitkan saat Yesus datang.' },
			{ question: 'Apa yang terjadi pada orang benar yang masih hidup?', options: ['Diubahkan', 'Tetap fana', 'Ditinggalkan', 'Tidak ikut'], correctIndex: 0, explanation: 'Mereka diubahkan menjadi tidak fana.' },
			{ question: 'Apa akibat kedatangan Yesus bagi orang yang menolak-Nya?', options: ['Penghakiman', 'Hadiah surga', 'Tidak ada akibat', 'Kehidupan baru otomatis'], correctIndex: 0, explanation: 'Kedatangan-Nya membawa penghakiman bagi yang menolak.' },
			{ question: 'Salah satu tanda akhir zaman adalah?', options: ['Injil ke seluruh dunia', 'Semua orang jadi baik', 'Tidak ada bencana', 'Dosa hilang sendiri'], correctIndex: 0, explanation: 'Yesus menyebut pemberitaan Injil sebagai salah satu tanda.' },
			{ question: 'Mengapa harus tahu ciri kedatangan Yesus yang asli?', options: ['Supaya tidak tertipu', 'Supaya bisa sombong', 'Supaya tak perlu Firman', 'Supaya menebak tanggal'], correctIndex: 0, explanation: 'Pengetahuan Alkitab melindungi dari tipuan.' },
			{ question: 'Apakah ada orang yang tahu tanggal persis kedatangan Yesus?', options: ['Tidak', 'Ya', 'Beberapa orang', 'Hanya orang tua'], correctIndex: 0, explanation: 'Tidak seorang pun tahu hari dan jamnya.' },
			{ question: 'Cara terbaik bersiap adalah?', options: ['Hidup dekat dengan Yesus', 'Menebak tanggal', 'Menunggu saja', 'Takut terus'], correctIndex: 0, explanation: 'Kita dipanggil hidup siap setiap hari bersama Kristus.' }
		]
	},
	{
		id: 9,
		title: 'Kemurnian dan Kuasa!',
		subtitle: '10 langkah sederhana tentang Roh Kudus dan hidup suci',
		icon: '🔥',
		color: 'from-orange-500 to-red-600',
		finalAssessmentTitle: 'Ringkasan Akhir',
		finalAssessmentDescription: 'Jawab 10 pertanyaan sederhana. Kamu perlu minimal 7 jawaban benar untuk lulus.',
		passThreshold: 70,
		sections: [
			{
				title: '1. Siapa Roh Kudus?',
				content: 'Roh Kudus bukan sekadar tenaga. Ia adalah Pribadi ilahi yang diutus Yesus untuk menyertai umat-Nya.',
				verse: '"Ia akan memberikan kepadamu seorang Penolong yang lain."',
				verseRef: 'Yohanes 14:16',
				image: '🕊️',
				check: { question: 'Siapa Roh Kudus?', options: ['Pribadi ilahi', 'Hanya angin', 'Malaikat biasa', 'Khayalan'], correctIndex: 0, explanation: 'Roh Kudus adalah Pribadi ilahi, bukan sekadar tenaga.' }
			},
			{
				title: '2. Apa pekerjaan Roh Kudus?',
				content: 'Ia menghibur, mengajar, mengingatkan ajaran Yesus, dan memimpin kita pada kebenaran.',
				verse: '"Ia akan mengajarkan segala sesuatu kepadamu."',
				verseRef: 'Yohanes 14:26',
				image: '📚',
				check: { question: 'Salah satu pekerjaan Roh Kudus adalah?', options: ['Mengajar kebenaran', 'Menyesatkan manusia', 'Menghapus Alkitab', 'Membuat dosa baik'], correctIndex: 0, explanation: 'Roh Kudus mengajar dan memimpin ke dalam kebenaran.' }
			},
			{
				title: '3. Mengapa kita membutuhkan Roh Kudus?',
				content: 'Tanpa Roh Kudus, manusia sulit mengerti Firman dan lemah melawan dosa. Roh Kudus memberi kuasa rohani.',
				verse: '"Kamu akan menerima kuasa, kalau Roh Kudus turun ke atas kamu."',
				verseRef: 'Kisah 1:8',
				image: '💪',
				check: { question: 'Mengapa kita butuh Roh Kudus?', options: ['Untuk menerima kuasa hidup benar', 'Supaya bisa sombong', 'Supaya bebas dari doa', 'Supaya tidak perlu Alkitab'], correctIndex: 0, explanation: 'Roh Kudus memberi kuasa untuk hidup benar dan bersaksi.' }
			},
			{
				title: '4. Apa yang Roh Kudus lakukan terhadap dosa?',
				content: 'Roh Kudus menyadarkan hati tentang dosa, kebenaran, dan penghakiman. Ia menegur dengan kasih.',
				verse: '"Ia akan menginsafkan dunia akan dosa."',
				verseRef: 'Yohanes 16:8',
				image: '💡',
				check: { question: 'Apa yang Roh Kudus lakukan saat kita salah?', options: ['Menyadarkan kita', 'Mendorong kita berbuat dosa', 'Membuat hati keras', 'Tidak peduli'], correctIndex: 0, explanation: 'Roh Kudus menegur dan menyadarkan hati tentang dosa.' }
			},
			{
				title: '5. Apa itu buah Roh?',
				content: 'Buah Roh adalah karakter yang tumbuh ketika Roh Kudus tinggal di dalam kita: kasih, sukacita, damai, kesabaran, dan lainnya.',
				verse: '"Buah Roh ialah: kasih, sukacita, damai sejahtera..."',
				verseRef: 'Galatia 5:22-23',
				image: '🍇',
				check: { question: 'Buah Roh adalah?', options: ['Karakter baik yang tumbuh dari Roh Kudus', 'Daftar makanan', 'Hadiah uang', 'Aturan negara'], correctIndex: 0, explanation: 'Buah Roh adalah karakter ilahi yang bertumbuh dalam hidup orang percaya.' }
			},
			{
				title: '6. Apa bedanya buah Roh dan karunia Roh?',
				content: 'Buah Roh berbicara tentang karakter. Karunia Roh berbicara tentang kemampuan pelayanan. Keduanya penting, tetapi karakter tetap utama.',
				verse: '"Kepada tiap-tiap orang dikaruniakan penyataan Roh untuk kepentingan bersama."',
				verseRef: '1 Korintus 12:7',
				image: '🎁',
				check: { question: 'Buah Roh terutama berbicara tentang?', options: ['Karakter', 'Bakat musik', 'Harta', 'Pekerjaan'], correctIndex: 0, explanation: 'Buah Roh berbicara tentang perubahan karakter oleh Roh Kudus.' }
			},
			{
				title: '7. Bagaimana Roh Kudus menolong hidup suci?',
				content: 'Roh Kudus memberi kekuatan untuk berkata tidak pada dosa. Ia menolong kita bertumbuh dalam kemurnian dan penguasaan diri.',
				verse: '"Hiduplah oleh Roh, maka kamu tidak akan menuruti keinginan daging."',
				verseRef: 'Galatia 5:16',
				image: '🛡️',
				check: { question: 'Bagaimana Roh Kudus menolong hidup suci?', options: ['Memberi kekuatan melawan dosa', 'Membuat dosa terasa aman', 'Menyuruh ikut hawa nafsu', 'Menjauhkan kita dari kebenaran'], correctIndex: 0, explanation: 'Roh Kudus memberi kekuatan untuk menolak dosa.' }
			},
			{
				title: '8. Apakah Roh Kudus bisa disedihkan?',
				content: 'Ya. Saat orang terus menolak suara Tuhan dan hidup dalam dosa, Roh Kudus bisa disedihkan. Karena itu kita harus peka dan taat.',
				verse: '"Janganlah kamu mendukakan Roh Kudus Allah."',
				verseRef: 'Efesus 4:30',
				image: '😔',
				check: { question: 'Apa yang Alkitab larang terhadap Roh Kudus?', options: ['Mendukakan-Nya', 'Meminta-Nya menolong', 'Mendengar suara-Nya', 'Menaati-Nya'], correctIndex: 0, explanation: 'Alkitab berkata jangan mendukakan Roh Kudus.' }
			},
			{
				title: '9. Bagaimana menerima kepenuhan Roh Kudus?',
				content: 'Datang kepada Allah dengan rendah hati, minta dalam doa, percaya janji-Nya, dan serahkan hidup sepenuhnya kepada Yesus.',
				verse: '"Ia akan memberikan Roh Kudus kepada mereka yang meminta kepada-Nya."',
				verseRef: 'Lukas 11:13',
				image: '🙏',
				check: { question: 'Bagaimana menerima Roh Kudus?', options: ['Meminta kepada Allah', 'Membeli', 'Menunggu tanpa doa', 'Mencari ke dukun'], correctIndex: 0, explanation: 'Allah memberi Roh Kudus kepada orang yang meminta dengan sungguh.' }
			},
			{
				title: '10. Apa hasil hidup yang dipenuhi Roh Kudus?',
				content: 'Hidup yang dipenuhi Roh Kudus menjadi hidup yang suci, penuh kasih, berani bersaksi, dan memuliakan Yesus. Itu hidup yang kuat namun lembut.',
				verse: '"Ia akan memuliakan Aku."',
				verseRef: 'Yohanes 16:14',
				image: '🌟',
				check: { question: 'Hasil hidup yang dipenuhi Roh Kudus adalah?', options: ['Hidup suci dan memuliakan Yesus', 'Hidup liar', 'Tidak peduli dosa', 'Makin keras hati'], correctIndex: 0, explanation: 'Roh Kudus menolong hidup kita memuliakan Kristus.' }
			}
		],
		quiz: [
			{ question: 'Siapa Roh Kudus?', options: ['Pribadi ilahi', 'Angin biasa', 'Malaikat', 'Bayangan'], correctIndex: 0, explanation: 'Roh Kudus adalah Pribadi ilahi.' },
			{ question: 'Salah satu pekerjaan Roh Kudus adalah?', options: ['Mengajar kebenaran', 'Menyesatkan manusia', 'Menghapus Firman', 'Membuat dosa baik'], correctIndex: 0, explanation: 'Roh Kudus memimpin kepada kebenaran.' },
			{ question: 'Mengapa kita membutuhkan Roh Kudus?', options: ['Untuk menerima kuasa hidup benar', 'Supaya sombong', 'Supaya bebas doa', 'Supaya tak perlu Firman'], correctIndex: 0, explanation: 'Roh Kudus memberi kuasa rohani.' },
			{ question: 'Apa yang Roh Kudus lakukan terhadap dosa?', options: ['Menyadarkan hati', 'Mendorong dosa', 'Membiarkan terus', 'Membuat hati beku'], correctIndex: 0, explanation: 'Roh Kudus menginsafkan tentang dosa.' },
			{ question: 'Buah Roh berbicara tentang?', options: ['Karakter', 'Uang', 'Jabatan', 'Makanan'], correctIndex: 0, explanation: 'Buah Roh adalah karakter yang diubahkan.' },
			{ question: 'Karunia Roh berbicara tentang?', options: ['Kemampuan pelayanan', 'Dosa', 'Kutuk', 'Badan fisik'], correctIndex: 0, explanation: 'Karunia Roh adalah kemampuan untuk melayani.' },
			{ question: 'Bagaimana Roh Kudus menolong hidup suci?', options: ['Memberi kekuatan melawan dosa', 'Membuat dosa aman', 'Menjauh dari kebenaran', 'Mengikuti hawa nafsu'], correctIndex: 0, explanation: 'Roh Kudus memberi kekuatan melawan dosa.' },
			{ question: 'Apa yang tidak boleh kita lakukan terhadap Roh Kudus?', options: ['Mendukakan-Nya', 'Menaati-Nya', 'Meminta-Nya menolong', 'Mengikuti pimpinan-Nya'], correctIndex: 0, explanation: 'Alkitab melarang kita mendukakan Roh Kudus.' },
			{ question: 'Bagaimana menerima Roh Kudus?', options: ['Meminta kepada Allah', 'Membeli', 'Menunggu tanpa doa', 'Mencari kuasa lain'], correctIndex: 0, explanation: 'Allah memberi Roh Kudus kepada yang meminta.' },
			{ question: 'Hasil hidup yang dipenuhi Roh Kudus adalah?', options: ['Hidup suci dan memuliakan Yesus', 'Hidup liar', 'Tak peduli dosa', 'Makin keras hati'], correctIndex: 0, explanation: 'Roh Kudus membawa hidup yang suci dan memuliakan Kristus.' }
		]
	},
	{
		id: 10,
		title: 'Apakah Orang Mati Benar-benar Mati?',
		subtitle: '10 langkah sederhana tentang kematian menurut Alkitab',
		icon: '💤',
		color: 'from-slate-500 to-gray-700',
		finalAssessmentTitle: 'Ringkasan Akhir',
		finalAssessmentDescription: 'Jawab 10 pertanyaan sederhana. Kamu perlu minimal 7 jawaban benar untuk lulus.',
		passThreshold: 70,
		sections: [
			{
				title: '1. Apa yang terjadi saat orang mati?',
				content: 'Alkitab berkata orang mati tidak sadar. Mereka tidak tahu apa-apa sampai hari kebangkitan.',
				verse: '"Orang-orang yang mati tidak tahu apa-apa."',
				verseRef: 'Pengkhotbah 9:5',
				image: '😴',
				check: { question: 'Menurut Alkitab, orang mati sekarang?', options: ['Tidak sadar', 'Keliling melihat keluarga', 'Menjadi dewa', 'Semua langsung ke surga'], correctIndex: 0, explanation: 'Pengkhotbah berkata orang mati tidak tahu apa-apa.' }
			},
			{
				title: '2. Bagaimana manusia menjadi makhluk hidup?',
				content: 'Allah membentuk manusia dari debu dan memberi nafas hidup. Debu ditambah nafas hidup membuat manusia menjadi makhluk hidup.',
				verse: '"Manusia itu menjadi makhluk yang hidup."',
				verseRef: 'Kejadian 2:7',
				image: '🏺',
				check: { question: 'Manusia menjadi makhluk hidup dari?', options: ['Debu + nafas hidup dari Allah', 'Air + api', 'Cahaya + angin', 'Batu + air'], correctIndex: 0, explanation: 'Kejadian 2:7 menjelaskan debu tanah dan nafas hidup.' }
			},
			{
				title: '3. Apa yang terjadi saat orang mati menurut penciptaan?',
				content: 'Saat mati, debu kembali ke tanah dan nafas hidup kembali kepada Allah. Makhluk hidup berhenti hidup dan sadar.',
				verse: '"Debu kembali menjadi tanah ... dan roh kembali kepada Allah."',
				verseRef: 'Pengkhotbah 12:7',
				image: '↩️',
				check: { question: 'Saat orang mati, tubuh kembali ke?', options: ['Tanah', 'Laut', 'Langit', 'Api'], correctIndex: 0, explanation: 'Tubuh kembali ke tanah dan nafas hidup kembali kepada Allah.' }
			},
			{
				title: '4. Mengapa Yesus menyebut kematian sebagai tidur?',
				content: 'Karena orang mati tidak sadar, seperti orang yang tidur. Yesus memakai gambaran ini saat berbicara tentang Lazarus.',
				verse: '"Lazarus, sahabat kita, telah tertidur."',
				verseRef: 'Yohanes 11:11',
				image: '🛏️',
				check: { question: 'Yesus menyebut kematian seperti?', options: ['Tidur', 'Pindah rumah', 'Naik awan', 'Hilang'], correctIndex: 0, explanation: 'Yesus menyebut kematian seperti tidur.' }
			},
			{
				title: '5. Apakah orang mati bisa berkomunikasi?',
				content: 'Tidak. Mereka tidak berpikir, tidak merasakan, dan tidak berkomunikasi dengan orang hidup. Karena itu penampakan roh orang mati bukan berasal dari orang mati.',
				verse: '"Tidak ada lagi bagian mereka dalam segala sesuatu yang terjadi di bawah matahari."',
				verseRef: 'Pengkhotbah 9:6',
				image: '🚫',
				check: { question: 'Bisakah orang mati berkomunikasi dengan yang hidup?', options: ['Tidak', 'Ya', 'Kadang-kadang', 'Hanya malam hari'], correctIndex: 0, explanation: 'Alkitab menegaskan orang mati tidak ikut lagi dalam urusan orang hidup.' }
			},
			{
				title: '6. Kalau begitu, apa sumber penampakan roh?',
				content: 'Alkitab memperingatkan bahwa roh jahat bisa menipu manusia. Karena orang mati tidak sadar, penampakan seperti itu bukan berasal dari orang mati.',
				verse: '"Roh-roh setan yang mengadakan perbuatan-perbuatan ajaib."',
				verseRef: 'Wahyu 16:14',
				image: '👻',
				check: { question: 'Jika ada penampakan seperti arwah orang mati, menurut pelajaran ini itu adalah?', options: ['Tipuan roh jahat', 'Orang mati yang pulang', 'Malaikat suci', 'Hal netral'], correctIndex: 0, explanation: 'Karena orang mati tidak sadar, penampakan itu bukan berasal dari mereka.' }
			},
			{
				title: '7. Apa pengharapan orang percaya terhadap kematian?',
				content: 'Pengharapan orang percaya adalah kebangkitan. Yesus akan membangkitkan orang yang mati dalam Kristus saat Ia datang kembali.',
				verse: '"Aku akan membangkitkannya pada akhir zaman."',
				verseRef: 'Yohanes 6:40',
				image: '🌅',
				check: { question: 'Pengharapan besar orang percaya saat menghadapi kematian adalah?', options: ['Kebangkitan', 'Reinkarnasi', 'Menjadi roh gentayangan', 'Tidak ada harapan'], correctIndex: 0, explanation: 'Pengharapan Alkitab adalah kebangkitan dalam Kristus.' }
			},
			{
				title: '8. Kapan kebangkitan orang benar terjadi?',
				content: 'Saat Yesus datang kedua kali. Jadi orang benar tidak menerima tubuh mulia saat mati, tetapi saat kedatangan Yesus.',
				verse: '"Mereka yang mati dalam Kristus akan lebih dahulu bangkit."',
				verseRef: '1 Tesalonika 4:16',
				image: '☁️',
				check: { question: 'Kapan orang benar yang mati dibangkitkan?', options: ['Saat Yesus datang kembali', 'Langsung saat mati', 'Setiap tahun', 'Saat manusia berdoa'], correctIndex: 0, explanation: 'Kebangkitan terjadi saat kedatangan Yesus.' }
			},
			{
				title: '9. Mengapa orang percaya tidak perlu takut pada maut?',
				content: 'Karena Yesus sudah menang atas maut. Kematian bagi orang percaya hanyalah tidur singkat sebelum kebangkitan mulia.',
				verse: '"Maut telah ditelan dalam kemenangan."',
				verseRef: '1 Korintus 15:54',
				image: '🏆',
				check: { question: 'Mengapa orang percaya punya pengharapan saat menghadapi maut?', options: ['Karena Yesus menang atas maut', 'Karena semua orang otomatis selamat', 'Karena maut tidak nyata', 'Karena dosa tidak penting'], correctIndex: 0, explanation: 'Yesus telah mengalahkan maut melalui kebangkitan-Nya.' }
			},
			{
				title: '10. Apa ajakan pelajaran ini?',
				content: 'Percayalah kepada Yesus, sumber hidup dan kebangkitan. Dalam Dia, kematian bukan akhir. Ada pengharapan yang teguh.',
				verse: '"Akulah kebangkitan dan hidup."',
				verseRef: 'Yohanes 11:25',
				image: '✝️',
				check: { question: 'Siapa sumber kebangkitan dan hidup?', options: ['Yesus', 'Malaikat', 'Manusia', 'Tradisi'], correctIndex: 0, explanation: 'Yesus adalah kebangkitan dan hidup bagi orang percaya.' }
			}
		],
		quiz: [
			{ question: 'Menurut Alkitab, orang mati sekarang?', options: ['Tidak sadar', 'Berjalan-jalan', 'Menjadi dewa', 'Semua langsung ke surga'], correctIndex: 0, explanation: 'Pengkhotbah berkata orang mati tidak tahu apa-apa.' },
			{ question: 'Manusia menjadi makhluk hidup dari?', options: ['Debu + nafas hidup dari Allah', 'Air + api', 'Cahaya + batu', 'Angin + tanah saja'], correctIndex: 0, explanation: 'Kejadian 2:7 menjelaskan tubuh dari debu dan nafas hidup dari Allah.' },
			{ question: 'Saat mati, tubuh kembali ke?', options: ['Tanah', 'Surga', 'Laut', 'Api'], correctIndex: 0, explanation: 'Tubuh kembali ke tanah.' },
			{ question: 'Yesus menyebut kematian seperti?', options: ['Tidur', 'Pindah rumah', 'Naik awan', 'Hilang'], correctIndex: 0, explanation: 'Yesus menyebut kematian seperti tidur.' },
			{ question: 'Bisakah orang mati berkomunikasi dengan orang hidup?', options: ['Tidak', 'Ya', 'Kadang-kadang', 'Hanya malam'], correctIndex: 0, explanation: 'Alkitab berkata orang mati tidak ikut lagi dalam urusan orang hidup.' },
			{ question: 'Penampakan seperti arwah orang mati menurut pelajaran ini adalah?', options: ['Tipuan roh jahat', 'Orang mati sungguhan', 'Malaikat suci', 'Hal netral'], correctIndex: 0, explanation: 'Karena orang mati tidak sadar, penampakan itu bukan dari mereka.' },
			{ question: 'Pengharapan besar orang percaya terhadap kematian adalah?', options: ['Kebangkitan', 'Reinkarnasi', 'Jadi hantu', 'Tidak ada harapan'], correctIndex: 0, explanation: 'Pengharapan Alkitab adalah kebangkitan dalam Kristus.' },
			{ question: 'Kapan orang benar yang mati dibangkitkan?', options: ['Saat Yesus datang kembali', 'Langsung saat mati', 'Tiap tahun', 'Saat orang berdoa'], correctIndex: 0, explanation: 'Kebangkitan terjadi saat kedatangan Yesus.' },
			{ question: 'Mengapa orang percaya tidak perlu takut pada maut?', options: ['Karena Yesus menang atas maut', 'Karena semua otomatis selamat', 'Karena maut tidak nyata', 'Karena dosa kecil'], correctIndex: 0, explanation: 'Yesus sudah menang atas maut.' },
			{ question: 'Siapa sumber kebangkitan dan hidup?', options: ['Yesus', 'Malaikat', 'Manusia', 'Tradisi'], correctIndex: 0, explanation: 'Yesus adalah kebangkitan dan hidup.' }
		]
	},
	{
		id: 11,
		title: 'Apakah Iblis yang Menguasai Neraka?',
		subtitle: '8 langkah sederhana tentang hukuman akhir menurut Alkitab',
		icon: '🔥',
		color: 'from-red-700 to-red-900',
		finalAssessmentTitle: 'Ringkasan Akhir',
		finalAssessmentDescription: 'Jawab 10 pertanyaan sederhana. Kamu perlu minimal 7 jawaban benar untuk lulus.',
		passThreshold: 70,
		sections: [
			{
				title: '1. Apakah gambaran populer tentang neraka berasal dari Alkitab?',
				content: 'Banyak orang membayangkan iblis duduk di neraka sambil menyiksa orang. Alkitab tidak mengajar begitu. Gambaran itu datang dari cerita manusia, bukan dari Firman Tuhan.',
				verse: '"Percayalah kepada Tuhan dengan segenap hatimu, dan janganlah bersandar kepada pengertianmu sendiri."',
				verseRef: 'Amsal 3:5',
				image: '❌',
				check: { question: 'Gambaran iblis duduk menyiksa orang di neraka berasal dari?', options: ['Cerita manusia', 'Ajaran jelas Alkitab', 'Kata-kata Yesus', 'Sepuluh Perintah'], correctIndex: 0, explanation: 'Pelajaran ini menegaskan gambaran itu bukan dari Alkitab.' }
			},
			{
				title: '2. Untuk siapa api neraka disiapkan?',
				content: 'Yesus berkata api kekal disiapkan untuk iblis dan malaikat-malaikatnya. Ini menunjukkan iblis bukan penguasa neraka. Dia justru akan dihukum oleh Allah.',
				verse: '"Enyahlah dari hadapan-Ku ... ke dalam api yang kekal yang telah sedia untuk Iblis dan malaikat-malaikatnya."',
				verseRef: 'Matius 25:41',
				image: '😈',
				check: { question: 'Menurut Yesus, api neraka disiapkan untuk siapa?', options: ['Iblis dan malaikat-malaikatnya', 'Iblis untuk memerintah', 'Orang baik', 'Hewan'], correctIndex: 0, explanation: 'Matius 25:41 berkata api itu disiapkan untuk menghukum iblis dan malaikatnya.' }
			},
			{
				title: '3. Apakah orang jahat sedang dihukum sekarang?',
				content: 'Belum. Alkitab berkata orang jahat disimpan untuk hari penghakiman. Jadi hukuman akhir belum berlangsung sekarang.',
				verse: '"Tuhan tahu menyelamatkan orang-orang saleh dari pencobaan dan tahu menyimpan orang-orang jahat untuk dihukum pada hari penghakiman."',
				verseRef: '2 Petrus 2:9',
				image: '⏳',
				check: { question: 'Kapan orang jahat menerima hukuman akhir?', options: ['Pada hari penghakiman', 'Setiap kali orang berdosa', 'Sebelum lahir', 'Tidak pernah'], correctIndex: 0, explanation: '2 Petrus 2:9 berkata hukuman akhir ada pada hari penghakiman.' }
			},
			{
				title: '4. Kapan api penghukuman turun?',
				content: 'Api penghukuman turun sesudah 1.000 tahun, saat Setan menipu orang jahat yang dibangkitkan untuk menyerang kota Allah. Lalu api turun dari surga dan menghanguskan mereka.',
				verse: '"Lalu turunlah api dari langit dan menghanguskan mereka."',
				verseRef: 'Wahyu 20:9',
				image: '🔥',
				check: { question: 'Api penghukuman akhir turun kapan?', options: ['Sesudah 1.000 tahun', 'Setiap malam', 'Saat Yesus lahir', 'Sebelum air bah'], correctIndex: 0, explanation: 'Wahyu 20 menunjukkan api itu turun pada akhir milenium.' }
			},
			{
				title: '5. Apa upah dosa menurut Alkitab?',
				content: 'Alkitab tidak berkata upah dosa adalah hidup kekal dalam siksaan. Alkitab berkata upah dosa ialah maut. Maut berarti kematian, bukan hidup tanpa akhir.',
				verse: '"Upah dosa ialah maut, tetapi karunia Allah ialah hidup yang kekal dalam Kristus Yesus, Tuhan kita."',
				verseRef: 'Roma 6:23',
				image: '⚖️',
				check: { question: 'Upah dosa menurut Roma 6:23 adalah?', options: ['Maut', 'Kehidupan mewah', 'Siksaan hidup kekal', 'Kesempatan kedua tanpa batas'], correctIndex: 0, explanation: 'Roma 6:23 berkata dengan jelas: upah dosa ialah maut.' }
			},
			{
				title: '6. Apa arti “api kekal” dan “api yang tak terpadamkan”?',
				content: 'Api “kekal” berarti hasilnya kekal, bukan proses menyala selamanya. Contohnya Sodom dan Gomora dihukum dengan api kekal, tetapi kota itu tidak terus terbakar sampai hari ini.',
				verse: '"Kota Sodom dan Gomora ... menanggung hukuman api yang kekal."',
				verseRef: 'Yudas 1:7',
				image: '🏙️',
				check: { question: 'Apa pelajaran dari Sodom dan Gomora?', options: ['Api kekal memberi hasil yang kekal', 'Api itu masih menyala sampai sekarang', 'Tidak ada hukuman', 'Orang jahat hidup selamanya'], correctIndex: 0, explanation: 'Sodom menjadi contoh bahwa api kekal menghancurkan habis, bukan menyiksa tanpa akhir.' }
			},
			{
				title: '7. Apakah hukuman Allah adil?',
				content: 'Allah adil. Hukuman sesuai dengan perbuatan masing-masing. Tetapi tujuan Allah bukan menikmati penghukuman. Allah ingin menghapus dosa untuk selama-lamanya.',
				verse: '"Mereka akan dihakimi, masing-masing menurut perbuatannya."',
				verseRef: 'Wahyu 20:13',
				image: '📏',
				check: { question: 'Bagaimana Allah menghakimi manusia?', options: ['Dengan adil menurut perbuatan', 'Asal memilih', 'Tanpa melihat apa pun', 'Selalu sama persis untuk semua'], correctIndex: 0, explanation: 'Wahyu 20:13 menunjukkan penghakiman Allah adil dan sesuai keadaan masing-masing.' }
			},
			{
				title: '8. Apa akhir dosa, Setan, dan bumi lama?',
				content: 'Pada akhirnya Setan juga dihancurkan. Sesudah dosa dibersihkan, Allah menciptakan langit baru dan bumi baru. Penderitaan tidak akan bangkit lagi untuk kedua kalinya.',
				verse: '"Aku melihat langit yang baru dan bumi yang baru."',
				verseRef: 'Wahyu 21:1',
				image: '🌍',
				check: { question: 'Apa yang Allah lakukan setelah dosa dibersihkan?', options: ['Menciptakan bumi baru', 'Membiarkan bumi rusak', 'Menyerahkan bumi ke Setan', 'Mengulang dosa lagi'], correctIndex: 0, explanation: 'Wahyu 21:1 memberi harapan tentang langit baru dan bumi baru.' }
			}
		],
		quiz: [
			{ question: 'Siapa penguasa neraka menurut pelajaran ini?', options: ['Tidak ada, iblis juga dihukum', 'Iblis', 'Malaikat Gabriel', 'Adam'], correctIndex: 0, explanation: 'Api penghukuman disiapkan untuk iblis, bukan dikuasai olehnya.' },
			{ question: 'Untuk siapa api kekal disiapkan?', options: ['Iblis dan malaikatnya', 'Semua manusia sejak lahir', 'Hanya orang miskin', 'Orang benar'], correctIndex: 0, explanation: 'Yesus berkata api itu disiapkan untuk iblis dan malaikat-malaikatnya.' },
			{ question: 'Kapan hukuman akhir diberikan?', options: ['Pada hari penghakiman', 'Segera saat seseorang mati', 'Sebelum dunia diciptakan', 'Setiap Sabat'], correctIndex: 0, explanation: 'Orang jahat disimpan untuk dihukum pada hari penghakiman.' },
			{ question: 'Kapan api turun dari surga dalam Wahyu 20?', options: ['Sesudah 1.000 tahun', 'Sebelum air bah', 'Saat Yesus dibaptis', 'Saat Daud jadi raja'], correctIndex: 0, explanation: 'Api penghukuman turun pada akhir milenium.' },
			{ question: 'Upah dosa adalah?', options: ['Maut', 'Kemuliaan', 'Jabatan', 'Siksaan hidup kekal'], correctIndex: 0, explanation: 'Roma 6:23 berkata upah dosa ialah maut.' },
			{ question: 'Sodom dan Gomora menjadi contoh tentang?', options: ['Api kekal memberi hasil yang kekal', 'Api masih menyala sampai sekarang', 'Tidak ada hukuman', 'Semua orang selamat'], correctIndex: 0, explanation: 'Sodom menjadi contoh kehancuran total oleh hukuman Allah.' },
			{ question: 'Apakah Allah menghakimi dengan adil?', options: ['Ya', 'Tidak', 'Kadang-kadang', 'Hanya untuk bangsa tertentu'], correctIndex: 0, explanation: 'Allah menghakimi menurut perbuatan masing-masing.' },
			{ question: 'Apa yang terjadi pada Setan pada akhir zaman?', options: ['Ia dihancurkan', 'Ia memerintah selamanya', 'Ia bertobat lalu jadi malaikat', 'Ia pindah ke planet lain'], correctIndex: 0, explanation: 'Setan akhirnya dihukum dan dibinasakan.' },
			{ question: 'Mengapa Allah mengakhiri dosa?', options: ['Untuk membersihkan alam semesta', 'Untuk membuat dosa lebih kuat', 'Untuk membuat orang takut saja', 'Tanpa alasan'], correctIndex: 0, explanation: 'Allah menghapus dosa supaya damai dan kesucian kekal.' },
			{ question: 'Apa harapan sesudah dosa dibersihkan?', options: ['Bumi baru', 'Bumi dibiarkan kosong', 'Neraka abadi di bumi', 'Manusia hidup dalam dosa lagi'], correctIndex: 0, explanation: 'Allah menjanjikan langit baru dan bumi baru.' }
		]
	},
	{
		id: 12,
		title: '1.000 Tahun Damai',
		subtitle: '8 langkah sederhana tentang milenium menurut Alkitab',
		icon: '⏳',
		color: 'from-indigo-500 to-violet-700',
		finalAssessmentTitle: 'Ringkasan Akhir',
		finalAssessmentDescription: 'Jawab 10 pertanyaan sederhana. Kamu perlu minimal 7 jawaban benar untuk lulus.',
		passThreshold: 70,
		sections: [
			{
				title: '1. Apa itu milenium?',
				content: 'Milenium adalah masa 1.000 tahun yang disebut dalam Wahyu 20. Masa ini dimulai sesudah kedatangan Yesus yang kedua.',
				verse: '"Mereka hidup kembali dan mereka memerintah sebagai raja bersama-sama dengan Kristus untuk masa seribu tahun."',
				verseRef: 'Wahyu 20:4',
				image: '👑',
				check: { question: 'Berapa lama milenium?', options: ['1.000 tahun', '100 tahun', '40 tahun', '7 tahun'], correctIndex: 0, explanation: 'Wahyu 20 menyebut masa seribu tahun.' }
			},
			{
				title: '2. Apa yang terjadi pada orang benar saat Yesus datang?',
				content: 'Saat Yesus datang, orang benar yang mati dibangkitkan. Orang benar yang hidup diubahkan. Lalu mereka diangkat untuk bertemu Tuhan.',
				verse: '"Mereka yang mati dalam Kristus akan lebih dahulu bangkit."',
				verseRef: '1 Tesalonika 4:16',
				image: '☁️',
				check: { question: 'Apa yang terjadi pada orang benar yang mati saat Yesus datang?', options: ['Dibangkitkan', 'Tetap tidur selamanya', 'Menjadi roh jahat', 'Menguasai bumi'], correctIndex: 0, explanation: '1 Tesalonika 4 berkata mereka dibangkitkan lebih dahulu.' }
			},
			{
				title: '3. Di mana orang benar selama milenium?',
				content: 'Orang benar berada bersama Yesus. Mereka memerintah bersama Kristus dan melihat bahwa keputusan Allah selalu benar.',
				verse: '"Aku pergi ke situ untuk menyediakan tempat bagimu ... Aku akan datang kembali dan membawa kamu ke tempat-Ku."',
				verseRef: 'Yohanes 14:2-3',
				image: '🏠',
				check: { question: 'Selama milenium, orang benar berada di mana?', options: ['Bersama Yesus', 'Tetap di kubur', 'Di padang gurun', 'Di laut'], correctIndex: 0, explanation: 'Yesus membawa umat-Nya kepada-Nya.' }
			},
			{
				title: '4. Apa yang terjadi pada orang jahat saat Yesus datang?',
				content: 'Orang jahat yang hidup binasa oleh kemuliaan kedatangan Yesus. Orang jahat yang sudah mati tetap mati selama 1.000 tahun.',
				verse: '"Orang-orang mati yang lain tidak bangkit sebelum berakhir masa yang seribu tahun itu."',
				verseRef: 'Wahyu 20:5',
				image: '⚠️',
				check: { question: 'Apakah orang jahat dibangkitkan pada awal milenium?', options: ['Tidak', 'Ya, semua', 'Hanya sebagian', 'Hanya raja'], correctIndex: 0, explanation: 'Wahyu 20:5 berkata mereka tidak bangkit sebelum 1.000 tahun berakhir.' }
			},
			{
				title: '5. Mengapa Setan disebut terikat?',
				content: 'Setan tidak diikat dengan rantai besi. Dia terikat oleh keadaan. Tidak ada orang hidup yang bisa ia tipu, karena orang benar ada bersama Yesus dan orang jahat masih mati.',
				verse: '"Ia menangkap naga itu ... dan membelenggunya seribu tahun lamanya."',
				verseRef: 'Wahyu 20:2',
				image: '⛓️',
				check: { question: 'Mengapa Setan tidak bisa menipu selama milenium?', options: ['Tidak ada manusia hidup di bumi untuk ditipu', 'Ia menjadi baik', 'Ia tidur', 'Ia pindah ke surga'], correctIndex: 0, explanation: 'Setan terikat oleh keadaan di bumi yang kosong.' }
			},
			{
				title: '6. Bagaimana keadaan bumi selama milenium?',
				content: 'Bumi menjadi sunyi dan kosong. Tidak ada kegiatan manusia. Ini menjadi gambaran menyedihkan dari akibat dosa.',
				verse: '"Aku melihat kepada bumi, ternyata campur baur dan kosong."',
				verseRef: 'Yeremia 4:23',
				image: '🌑',
				check: { question: 'Bagaimana keadaan bumi selama milenium?', options: ['Sunyi dan kosong', 'Penuh pesta', 'Ramai ibadah', 'Lebih indah dari Eden'], correctIndex: 0, explanation: 'Bumi digambarkan sepi dan kosong selama masa itu.' }
			},
			{
				title: '7. Apa yang dilakukan orang benar selama milenium?',
				content: 'Allah memberi orang benar kesempatan untuk melihat keadilan keputusan-Nya. Mereka ikut dalam proses penghakiman dan memahami mengapa sebagian orang tidak selamat.',
				verse: '"Kepada mereka diserahkan kuasa untuk menghakimi."',
				verseRef: 'Wahyu 20:4',
				image: '📋',
				check: { question: 'Apa salah satu kegiatan orang benar selama milenium?', options: ['Melihat keadilan penghakiman Allah', 'Menanam padi di bumi', 'Diperbudak Setan', 'Tidur 1.000 tahun'], correctIndex: 0, explanation: 'Allah membuka catatan-Nya supaya umat-Nya melihat bahwa Ia selalu adil.' }
			},
			{
				title: '8. Apa yang terjadi pada akhir milenium?',
				content: 'Yerusalem Baru turun dari surga. Orang jahat dibangkitkan. Setan kembali menipu mereka untuk menyerang kota Allah. Lalu api turun dari surga, mengakhiri dosa, dan Allah menciptakan bumi baru.',
				verse: '"Lalu turunlah api dari langit dan menghanguskan mereka."',
				verseRef: 'Wahyu 20:9',
				image: '🌎',
				check: { question: 'Apa yang terjadi sesudah milenium berakhir?', options: ['Api Allah mengakhiri dosa dan bumi baru dicipta', 'Setan menang', 'Orang jahat masuk surga', 'Tidak ada perubahan'], correctIndex: 0, explanation: 'Pada akhir milenium, dosa dihancurkan dan Allah menjadikan semuanya baru.' }
			}
		],
		quiz: [
			{ question: 'Berapa lama milenium?', options: ['1.000 tahun', '100 tahun', '40 tahun', '7 tahun'], correctIndex: 0, explanation: 'Wahyu 20 menyebut masa seribu tahun.' },
			{ question: 'Kapan milenium dimulai?', options: ['Sesudah kedatangan Yesus', 'Sesudah air bah', 'Saat Adam jatuh', 'Saat Musa hidup'], correctIndex: 0, explanation: 'Milenium dimulai setelah Yesus datang kembali.' },
			{ question: 'Apa yang terjadi pada orang benar yang mati saat Yesus datang?', options: ['Mereka dibangkitkan', 'Mereka tetap mati selamanya', 'Mereka jadi malaikat', 'Mereka hilang'], correctIndex: 0, explanation: 'Orang mati dalam Kristus dibangkitkan terlebih dahulu.' },
			{ question: 'Di mana orang benar selama milenium?', options: ['Bersama Yesus', 'Tetap di bumi yang kosong', 'Di tengah lautan', 'Di kuil kafir'], correctIndex: 0, explanation: 'Yesus membawa umat-Nya kepada-Nya.' },
			{ question: 'Apa yang terjadi pada orang jahat selama milenium?', options: ['Tetap mati sampai 1.000 tahun berakhir', 'Masuk surga', 'Memerintah dunia', 'Jadi malaikat'], correctIndex: 0, explanation: 'Orang-orang mati yang lain tidak bangkit sebelum 1.000 tahun berakhir.' },
			{ question: 'Mengapa Setan terikat?', options: ['Karena tidak ada manusia hidup di bumi untuk ditipu', 'Karena ia bertobat', 'Karena ia tertidur', 'Karena malaikat lupa membuka rantai'], correctIndex: 0, explanation: 'Setan terikat oleh keadaan di bumi yang kosong.' },
			{ question: 'Bagaimana keadaan bumi selama milenium?', options: ['Sunyi dan kosong', 'Ramai dan damai', 'Penuh kota baru', 'Seperti taman Eden'], correctIndex: 0, explanation: 'Yeremia 4 menggambarkan bumi sunyi dan kosong.' },
			{ question: 'Apa yang dilakukan orang benar selama milenium?', options: ['Melihat keadilan penghakiman Allah', 'Bersenjata melawan setan', 'Membangun kerajaan dunia', 'Tidur terus'], correctIndex: 0, explanation: 'Orang benar memahami keadilan keputusan Allah.' },
			{ question: 'Apa yang terjadi pada akhir milenium?', options: ['Orang jahat dibangkitkan dan Setan menipu lagi', 'Setan masuk surga', 'Tidak ada apa-apa', 'Semua orang lenyap'], correctIndex: 0, explanation: 'Setelah 1.000 tahun, orang jahat dibangkitkan dan Setan kembali menipu.' },
			{ question: 'Apa akhir besar sesudah milenium?', options: ['Dosa dihancurkan dan bumi baru diciptakan', 'Dosa tinggal sedikit', 'Setan jadi raja', 'Semua mulai dari awal dengan dosa'], correctIndex: 0, explanation: 'Allah mengakhiri dosa dan menjadikan segala sesuatu baru.' }
		]
	},
	{
		id: 13,
		title: 'Rencana Kesehatan Gratis dari Allah',
		subtitle: '8 langkah sederhana tentang kesehatan menurut Alkitab',
		icon: '🥗',
		color: 'from-green-500 to-emerald-700',
		finalAssessmentTitle: 'Ringkasan Akhir',
		finalAssessmentDescription: 'Jawab 10 pertanyaan sederhana. Kamu perlu minimal 7 jawaban benar untuk lulus.',
		passThreshold: 70,
		sections: [
			{
				title: '1. Apakah Allah peduli pada kesehatan tubuh?',
				content: 'Ya. Allah peduli pada seluruh hidup kita, termasuk tubuh. Tuhan mau kita sehat supaya kita bisa berpikir jernih, bekerja baik, dan melayani dengan kuat.',
				verse: '"Aku berdoa, semoga engkau baik-baik dan sehat-sehat saja."',
				verseRef: '3 Yohanes 1:2',
				image: '❤️',
				check: { question: 'Apakah Allah peduli pada kesehatan tubuh kita?', options: ['Ya', 'Tidak', 'Hanya pada jiwa', 'Hanya pada orang tua'], correctIndex: 0, explanation: 'Alkitab menunjukkan Allah ingin umat-Nya baik dan sehat.' }
			},
			{
				title: '2. Mengapa tubuh disebut bait Roh Kudus?',
				content: 'Tubuh bukan milik kita sendiri. Tuhan memberi tubuh ini sebagai tempat yang berharga. Karena itu kita tidak boleh merusaknya dengan kebiasaan yang salah.',
				verse: '"Tubuhmu adalah bait Roh Kudus."',
				verseRef: '1 Korintus 6:19',
				image: '🏛️',
				check: { question: 'Tubuh kita disebut apa dalam Alkitab?', options: ['Bait Roh Kudus', 'Mesin biasa', 'Mainan', 'Rumah kosong'], correctIndex: 0, explanation: 'Tubuh kita berharga karena disebut bait Roh Kudus.' }
			},
			{
				title: '3. Makanan apa yang mula-mula Allah berikan?',
				content: 'Di taman Eden, Allah memberi manusia buah, biji-bijian, dan makanan dari tumbuhan. Ini menunjukkan Tuhan memberi makanan sederhana yang mendukung kesehatan.',
				verse: '"Lihatlah, Aku memberikan kepadamu segala tumbuh-tumbuhan yang berbiji di seluruh bumi dan segala pohon-pohonan yang buahnya berbiji; itulah akan menjadi makananmu."',
				verseRef: 'Kejadian 1:29',
				image: '🍎',
				check: { question: 'Makanan asli yang Allah berikan di Eden terutama adalah?', options: ['Makanan dari tumbuhan', 'Rokok dan kopi', 'Permen', 'Minuman keras'], correctIndex: 0, explanation: 'Kejadian 1:29 menunjukkan pola makanan sederhana dari tumbuhan.' }
			},
			{
				title: '4. Apakah Alkitab membedakan makanan yang bersih dan najis?',
				content: 'Ya. Dalam Imamat 11, Allah membedakan binatang yang boleh dimakan dan yang tidak. Aturan ini diberikan untuk kebaikan manusia, bukan untuk menyusahkan.',
				verse: '"Bedakanlah antara yang najis dan yang tahir."',
				verseRef: 'Imamat 11:47',
				image: '🚫',
				check: { question: 'Imamat 11 mengajar kita untuk?', options: ['Membedakan yang bersih dan najis', 'Makan semua tanpa pikir', 'Tidak perlu peduli makanan', 'Hanya makan manis'], correctIndex: 0, explanation: 'Allah memberi perbedaan makanan untuk melindungi umat-Nya.' }
			},
			{
				title: '5. Mengapa racun seperti alkohol dan narkoba harus dijauhi?',
				content: 'Apa pun yang merusak tubuh dan pikiran harus dijauhi. Alkohol, narkoba, dan kebiasaan merusak lainnya membuat manusia sulit berpikir benar dan sulit memilih yang baik.',
				verse: '"Anggur adalah pencemooh, minuman keras adalah peribut."',
				verseRef: 'Amsal 20:1',
				image: '🚭',
				check: { question: 'Mengapa zat yang merusak harus dijauhi?', options: ['Karena merusak tubuh dan pikiran', 'Karena terlihat keren', 'Karena membuat iman kuat', 'Karena netral saja'], correctIndex: 0, explanation: 'Allah ingin kita menjaga tubuh dan pikiran tetap bersih.' }
			},
			{
				title: '6. Apa saja kebiasaan sehat yang menolong hidup kita?',
				content: 'Tuhan memberi prinsip hidup sehat: air yang cukup, udara segar, sinar matahari, gerak badan, istirahat, makanan baik, penguasaan diri, dan percaya kepada Allah. Prinsip-prinsip ini sederhana tetapi kuat.',
				verse: '"Segala perkara dapat kutanggung di dalam Dia yang memberi kekuatan kepadaku."',
				verseRef: 'Filipi 4:13',
				image: '💧',
				check: { question: 'Salah satu kebiasaan sehat yang benar adalah?', options: ['Istirahat cukup', 'Kurang tidur terus', 'Minum racun', 'Makan sembarangan'], correctIndex: 0, explanation: 'Istirahat yang cukup adalah bagian dari hidup sehat.' }
			},
			{
				title: '7. Mengapa kesehatan penting untuk hidup rohani?',
				content: 'Tubuh yang lebih sehat menolong pikiran lebih jernih. Pikiran yang jernih menolong kita memahami Firman Tuhan dan mengambil keputusan yang lebih baik.',
				verse: '"Apapun juga yang kamu perbuat, perbuatlah untuk kemuliaan Allah."',
				verseRef: '1 Korintus 10:31',
				image: '🧠',
				check: { question: 'Mengapa kesehatan menolong hidup rohani?', options: ['Karena pikiran lebih jernih untuk mengikuti Tuhan', 'Karena membuat kita sombong', 'Karena doa jadi tidak perlu', 'Karena aturan gereja saja'], correctIndex: 0, explanation: 'Tubuh dan pikiran yang sehat menolong kita memuliakan Allah.' }
			},
			{
				title: '8. Bisakah Tuhan menolong kita berubah?',
				content: 'Ya. Banyak orang merasa sulit meninggalkan kebiasaan lama. Tetapi Tuhan memberi kuasa untuk berubah. Kita tidak berjuang sendirian.',
				verse: '"Aku sanggup melakukan segala sesuatu di dalam Dia yang memberi kekuatan kepadaku."',
				verseRef: 'Filipi 4:13',
				image: '🙏',
				check: { question: 'Siapa yang memberi kita kekuatan untuk berubah?', options: ['Tuhan', 'Kebiasaan lama', 'Iblis', 'Takdir'], correctIndex: 0, explanation: 'Tuhan sanggup memberi kekuatan untuk hidup lebih sehat.' }
			}
		],
		quiz: [
			{ question: 'Apakah Allah peduli pada kesehatan tubuh?', options: ['Ya', 'Tidak', 'Hanya sedikit', 'Hanya untuk dokter'], correctIndex: 0, explanation: 'Allah mau kita baik dan sehat.' },
			{ question: 'Tubuh kita disebut?', options: ['Bait Roh Kudus', 'Mesin', 'Mainan', 'Rumah kosong'], correctIndex: 0, explanation: 'Tubuh orang percaya disebut bait Roh Kudus.' },
			{ question: 'Makanan asli di Eden terutama berasal dari?', options: ['Tumbuhan', 'Racun', 'Minuman keras', 'Makanan najis'], correctIndex: 0, explanation: 'Allah memberi makanan sederhana dari tumbuhan.' },
			{ question: 'Apakah Alkitab membedakan makanan bersih dan najis?', options: ['Ya', 'Tidak', 'Hanya di zaman modern', 'Hanya untuk imam'], correctIndex: 0, explanation: 'Imamat 11 mengajarkan perbedaan itu.' },
			{ question: 'Mengapa zat perusak harus dijauhi?', options: ['Karena merusak tubuh dan pikiran', 'Karena membuat kita lebih kudus', 'Karena tidak ada efek', 'Karena murah'], correctIndex: 0, explanation: 'Allah melarang hal yang merusak tubuh dan pikiran.' },
			{ question: 'Salah satu prinsip hidup sehat adalah?', options: ['Istirahat cukup', 'Kurang tidur', 'Makan sembarangan', 'Tidak pernah bergerak'], correctIndex: 0, explanation: 'Istirahat cukup adalah prinsip dasar kesehatan.' },
			{ question: 'Mengapa kesehatan penting untuk rohani?', options: ['Menolong pikiran jernih', 'Supaya boleh sombong', 'Supaya tidak perlu doa', 'Karena hanya tradisi'], correctIndex: 0, explanation: 'Pikiran yang jernih menolong kita mengikuti Tuhan.' },
			{ question: 'Apa tujuan menjaga tubuh?', options: ['Memuliakan Allah', 'Pamer kekuatan', 'Mencari pujian', 'Menjadi terkenal'], correctIndex: 0, explanation: 'Segala sesuatu dilakukan untuk kemuliaan Allah.' },
			{ question: 'Apakah Tuhan bisa menolong mengubah kebiasaan buruk?', options: ['Ya', 'Tidak', 'Jarang', 'Hanya jika kaya'], correctIndex: 0, explanation: 'Tuhan memberi kekuatan untuk berubah.' },
			{ question: 'Pelajaran kesehatan ini terutama menunjukkan bahwa?', options: ['Allah mengasihi dan melindungi kita', 'Allah ingin menghukum', 'Aturan lebih penting dari kasih', 'Tubuh tidak penting'], correctIndex: 0, explanation: 'Aturan kesehatan adalah perlindungan kasih dari Allah.' }
		]
	},
	{
		id: 14,
		title: 'Apakah Ketaatan itu Legalisme?',
		subtitle: '8 langkah sederhana tentang kasih karunia dan ketaatan',
		icon: '⚖️',
		color: 'from-teal-500 to-cyan-700',
		finalAssessmentTitle: 'Ringkasan Akhir',
		finalAssessmentDescription: 'Jawab 10 pertanyaan sederhana. Kamu perlu minimal 7 jawaban benar untuk lulus.',
		passThreshold: 70,
		sections: [
			{
				title: '1. Bagaimana manusia diselamatkan?',
				content: 'Alkitab jelas: kita diselamatkan oleh kasih karunia melalui iman kepada Yesus. Keselamatan bukan hasil usaha manusia. Tidak ada orang yang bisa membeli surga dengan perbuatan baik.',
				verse: '"Sebab karena kasih karunia kamu diselamatkan oleh iman; itu bukan hasil usahamu, tetapi pemberian Allah."',
				verseRef: 'Efesus 2:8',
				image: '🎁',
				check: { question: 'Kita diselamatkan oleh?', options: ['Kasih karunia Allah melalui iman', 'Perbuatan baik kita', 'Uang', 'Keturunan'], correctIndex: 0, explanation: 'Keselamatan adalah pemberian Allah, bukan hasil usaha manusia.' }
			},
			{
				title: '2. Untuk apa hukum Allah berguna?',
				content: 'Hukum Allah tidak menyelamatkan, tetapi hukum menunjukkan dosa. Seperti cermin menunjukkan wajah kotor, hukum menunjukkan apa yang salah dalam hidup kita.',
				verse: '"Oleh hukum Taurat orang mengenal dosa."',
				verseRef: 'Roma 3:20',
				image: '🪞',
				check: { question: 'Apa fungsi hukum Allah?', options: ['Menunjukkan dosa', 'Menghapus dosa sendiri', 'Menyelamatkan tanpa Yesus', 'Membuat dosa jadi baik'], correctIndex: 0, explanation: 'Hukum menunjukkan dosa, tetapi hanya Yesus yang menyelamatkan.' }
			},
			{
				title: '3. Apakah kasih karunia membatalkan hukum?',
				content: 'Tidak. Kasih karunia tidak menghapus pentingnya ketaatan. Justru kasih karunia mengajar kita hidup benar dan menjauh dari dosa.',
				verse: '"Jadi bagaimana? Apakah kami akan berbuat dosa, karena kami tidak berada di bawah hukum Taurat, tetapi di bawah kasih karunia? Sekali-kali tidak!"',
				verseRef: 'Roma 6:15',
				image: '📜',
				check: { question: 'Apakah kasih karunia memberi izin untuk terus berdosa?', options: ['Tidak', 'Ya', 'Kadang-kadang', 'Hanya untuk orang baru'], correctIndex: 0, explanation: 'Kasih karunia tidak memberi izin untuk hidup dalam dosa.' }
			},
			{
				title: '4. Mengapa orang yang mengasihi Yesus mau taat?',
				content: 'Ketaatan sejati lahir dari kasih. Ketika hati mengenal kasih Yesus, hati itu rindu menyenangkan Tuhan. Jadi ketaatan adalah jawaban kasih, bukan usaha membeli keselamatan.',
				verse: '"Jikalau kamu mengasihi Aku, kamu akan menuruti segala perintah-Ku."',
				verseRef: 'Yohanes 14:15',
				image: '❤️',
				check: { question: 'Mengapa orang percaya mau taat?', options: ['Karena mengasihi Yesus', 'Supaya membeli surga', 'Supaya dipuji orang', 'Karena terpaksa'], correctIndex: 0, explanation: 'Yesus menghubungkan ketaatan dengan kasih kepada-Nya.' }
			},
			{
				title: '5. Apa itu legalisme?',
				content: 'Legalisme adalah usaha menaati aturan supaya diselamatkan. Itu salah. Ketaatan Alkitabiah berbeda: kita taat karena sudah menerima kasih karunia Allah.',
				image: '🔑',
				check: { question: 'Apa arti legalisme dalam pelajaran ini?', options: ['Berusaha selamat dengan perbuatan', 'Mengasihi Yesus', 'Percaya pada Alkitab', 'Menerima kasih karunia'], correctIndex: 0, explanation: 'Legalisme adalah usaha menyelamatkan diri dengan perbuatan.' }
			},
			{
				title: '6. Apakah iman sejati menghasilkan perubahan?',
				content: 'Ya. Iman sejati tidak tinggal diam. Iman hidup menghasilkan buah. Kalau seseorang berkata percaya tetapi sama sekali tidak mau berubah, ada sesuatu yang salah.',
				verse: '"Iman tanpa perbuatan-perbuatan adalah mati."',
				verseRef: 'Yakobus 2:26',
				image: '🌱',
				check: { question: 'Iman tanpa perbuatan disebut?', options: ['Mati', 'Sempurna', 'Cukup', 'Kuat'], correctIndex: 0, explanation: 'Yakobus berkata iman tanpa perbuatan adalah mati.' }
			},
			{
				title: '7. Siapa yang memberi kuasa untuk taat?',
				content: 'Kita tidak sanggup hidup benar dengan kekuatan sendiri. Allah bekerja di dalam hati melalui Roh Kudus. Dia memberi kemauan dan kekuatan untuk taat.',
				verse: '"Karena Allahlah yang mengerjakan di dalam kamu baik kemauan maupun pekerjaan menurut kerelaan-Nya."',
				verseRef: 'Filipi 2:13',
				image: '💪',
				check: { question: 'Siapa yang memberi kita kuasa untuk taat?', options: ['Allah', 'Kekuatan diri sendiri saja', 'Iblis', 'Nasib'], correctIndex: 0, explanation: 'Allah bekerja di dalam kita untuk mau dan mampu melakukan yang benar.' }
			},
			{
				title: '8. Apa ajakan pelajaran ini?',
				content: 'Datanglah kepada Yesus dan terima kasih karunia-Nya. Lalu hiduplah dalam iman yang aktif, kasih yang nyata, dan ketaatan yang lahir dari hati yang sudah diselamatkan.',
				verse: '"Inilah kasih kepada Allah, yaitu, bahwa kita menuruti perintah-perintah-Nya."',
				verseRef: '1 Yohanes 5:3',
				image: '🙌',
				check: { question: 'Ketaatan yang benar lahir dari?', options: ['Hati yang mengasihi Allah', 'Rasa bangga', 'Keinginan dipuji', 'Takut manusia'], correctIndex: 0, explanation: 'Ketaatan sejati lahir dari kasih kepada Allah.' }
			}
		],
		quiz: [
			{ question: 'Kita diselamatkan oleh?', options: ['Kasih karunia Allah melalui iman', 'Perbuatan baik', 'Uang', 'Jasa keluarga'], correctIndex: 0, explanation: 'Keselamatan adalah pemberian Allah melalui iman.' },
			{ question: 'Apa fungsi hukum Allah?', options: ['Menunjukkan dosa', 'Menyelamatkan tanpa Yesus', 'Menghapus hati baru', 'Membuat dosa jadi baik'], correctIndex: 0, explanation: 'Hukum menunjukkan dosa, bukan menyelamatkan.' },
			{ question: 'Apakah kasih karunia memberi izin untuk terus berdosa?', options: ['Tidak', 'Ya', 'Kadang-kadang', 'Hanya bagi orang tertentu'], correctIndex: 0, explanation: 'Kasih karunia menuntun kepada hidup baru, bukan dosa.' },
			{ question: 'Mengapa orang percaya taat?', options: ['Karena mengasihi Yesus', 'Supaya membeli surga', 'Supaya dipuji', 'Karena takut manusia'], correctIndex: 0, explanation: 'Ketaatan sejati lahir dari kasih kepada Yesus.' },
			{ question: 'Apa arti legalisme?', options: ['Berusaha selamat dengan perbuatan', 'Kasih kepada Allah', 'Syukur kepada Yesus', 'Percaya Alkitab'], correctIndex: 0, explanation: 'Legalisme adalah mencoba menyelamatkan diri dengan usaha sendiri.' },
			{ question: 'Iman tanpa perbuatan adalah?', options: ['Mati', 'Sempurna', 'Kuat', 'Cukup'], correctIndex: 0, explanation: 'Yakobus 2:26 menyebutnya mati.' },
			{ question: 'Siapa memberi kekuatan untuk taat?', options: ['Allah', 'Diri sendiri saja', 'Iblis', 'Takdir'], correctIndex: 0, explanation: 'Allah bekerja di dalam kita untuk hidup benar.' },
			{ question: 'Ketaatan adalah akar atau buah keselamatan?', options: ['Buah', 'Akar', 'Pengganti Yesus', 'Syarat membeli anugerah'], correctIndex: 0, explanation: 'Ketaatan adalah buah dari hubungan dengan Tuhan.' },
			{ question: 'Kasih kepada Allah terlihat lewat?', options: ['Ketaatan', 'Kesombongan', 'Harta', 'Kemalasan'], correctIndex: 0, explanation: 'Kasih kepada Allah dinyatakan dalam hidup taat.' },
			{ question: 'Apa ajakan pelajaran ini?', options: ['Terima kasih karunia dan hiduplah taat', 'Andalkan diri sendiri', 'Abaikan hukum', 'Pilih dosa'], correctIndex: 0, explanation: 'Keselamatan diterima oleh iman dan menghasilkan hidup taat.' }
		]
	},

	// =========================================================================
	// PELAJARAN LANJUTAN — Nubuat & Doktrin (15–27)
	// =========================================================================
	{
		id: 15,
		title: 'Siapakah Antikristus?',
		subtitle: '8 langkah sederhana mengenali kuasa antikristus',
		icon: '🔍',
		color: 'from-red-500 to-rose-700',
		finalAssessmentTitle: 'Ringkasan Akhir',
		finalAssessmentDescription: 'Jawab 10 pertanyaan sederhana. Kamu perlu minimal 7 jawaban benar untuk lulus.',
		passThreshold: 70,
		sections: [
			{
				title: '1. Dari mana kita mengenal antikristus?',
				content: 'Kita tidak mengenal antikristus dari film, rumor, atau cerita seram. Kita harus belajar dari Alkitab. Daniel dan Wahyu memberi tanda-tanda yang jelas.',
				verse: '"Firman-Mu itu pelita bagi kakiku dan terang bagi jalanku."',
				verseRef: 'Mazmur 119:105',
				image: '🎬',
				check: { question: 'Kita harus mengenal antikristus dari?', options: ['Alkitab', 'Film', 'Rumor', 'Mimpi aneh'], correctIndex: 0, explanation: 'Alkitab adalah sumber yang aman untuk mengenal kebenaran.' }
			},
			{
				title: '2. Antikristus adalah satu orang atau satu kuasa?',
				content: 'Pelajaran ini menunjukkan antikristus bukan sekadar satu orang jahat sesaat. Alkitab menunjuk pada satu kuasa atau sistem yang bekerja melawan kebenaran Allah dalam waktu panjang.',
				verse: '"Ia akan mengucapkan perkataan yang menentang Yang Mahatinggi dan akan menganiaya orang-orang kudus milik Yang Mahatinggi. Ia berusaha untuk mengubah waktu dan hukum."',
				verseRef: 'Daniel 7:25',
				image: '📖',
				check: { question: 'Menurut pelajaran ini, antikristus terutama digambarkan sebagai?', options: ['Satu kuasa atau sistem', 'Seekor hewan biasa', 'Satu anak kecil', 'Sebuah kota'], correctIndex: 0, explanation: 'Daniel menggambarkan satu kuasa yang bekerja lama dan memiliki ciri khusus.' }
			},
			{
				title: '3. Dari mana kuasa ini muncul?',
				content: 'Dalam Daniel 7, tanduk kecil muncul dari antara sepuluh tanduk pada binatang keempat. Ini menunjukkan kuasa itu muncul dari wilayah kerajaan Roma yang terpecah.',
				verse: '"Aku memperhatikan tanduk-tanduk itu, maka tampak muncul di antaranya suatu tanduk lain, suatu tanduk kecil."',
				verseRef: 'Daniel 7:8',
				image: '🗺️',
				check: { question: 'Tanduk kecil muncul dari antara berapa tanduk?', options: ['Sepuluh', 'Dua', 'Tiga', 'Dua belas'], correctIndex: 0, explanation: 'Daniel 7 menunjukkan tanduk kecil muncul di antara sepuluh tanduk.' }
			},
			{
				title: '4. Apa yang terjadi saat kuasa itu muncul?',
				content: 'Tiga tanduk dicabut di depannya. Ini menandakan perubahan besar dan pertentangan kekuasaan saat kuasa itu bertumbuh.',
				verse: '"Tiga dari tanduk-tanduk yang dahulu itu dicabut sampai ke akar-akarnya."',
				verseRef: 'Daniel 7:8',
				image: '🌱',
				check: { question: 'Berapa tanduk yang dicabut saat tanduk kecil muncul?', options: ['Tiga', 'Satu', 'Tujuh', 'Sepuluh'], correctIndex: 0, explanation: 'Daniel 7 menyebut tiga tanduk dicabut.' }
			},
			{
				title: '5. Apa sikap kuasa ini terhadap Allah?',
				content: 'Kuasa ini berbicara melawan Allah dan meninggikan diri. Antikristus selalu mencoba mengambil tempat yang seharusnya milik Kristus saja.',
				verse: '"Ia akan mengucapkan perkataan yang menentang Yang Mahatinggi."',
				verseRef: 'Daniel 7:25',
				image: '🗣️',
				check: { question: 'Apa salah satu ciri antikristus terhadap Allah?', options: ['Berbicara menentang Allah', 'Selalu rendah hati', 'Melayani tanpa nama', 'Menghapus dosa manusia'], correctIndex: 0, explanation: 'Daniel berkata kuasa itu menentang Yang Mahatinggi.' }
			},
			{
				title: '6. Bagaimana kuasa ini memperlakukan umat Tuhan?',
				content: 'Antikristus tidak hanya menyebarkan ajaran salah. Ia juga menganiaya orang-orang kudus. Sejarah menunjukkan ada masa panjang umat setia mengalami tekanan dan kekerasan.',
				verse: '"Ia akan menganiaya orang-orang kudus milik Yang Mahatinggi."',
				verseRef: 'Daniel 7:25',
				image: '⛓️',
				check: { question: 'Bagaimana antikristus memperlakukan umat Tuhan?', options: ['Menganiaya mereka', 'Melindungi mereka', 'Mengajar mereka Firman murni', 'Memberi kebebasan penuh'], correctIndex: 0, explanation: 'Daniel 7 berkata kuasa ini menganiaya orang kudus.' }
			},
			{
				title: '7. Apa yang ingin diubah oleh kuasa ini?',
				content: 'Daniel berkata kuasa ini berusaha mengubah waktu dan hukum. Pelajaran ini menekankan bahwa manusia tidak berhak mengubah hukum Allah.',
				image: '📜',
				check: { question: 'Apa yang berusaha diubah oleh antikristus?', options: ['Waktu dan hukum Allah', 'Nama semua kota', 'Bahasa semua bangsa', 'Matahari dan bulan'], correctIndex: 0, explanation: 'Salah satu ciri utama adalah usaha mengubah waktu dan hukum Allah.' }
			},
			{
				title: '8. Mengapa Allah membuka identitas antikristus?',
				content: 'Tujuan Allah bukan menakut-nakuti, tetapi melindungi umat-Nya dari penipuan. Yesus ingin kita berdiri pada kebenaran Firman dan setia kepada-Nya sampai akhir.',
				verse: '"Kamu akan mengetahui kebenaran, dan kebenaran itu akan memerdekakan kamu."',
				verseRef: 'Yohanes 8:32',
				image: '🛡️',
				check: { question: 'Mengapa Allah memberi pelajaran tentang antikristus?', options: ['Untuk melindungi dari penipuan', 'Untuk membuat orang panik', 'Untuk hiburan', 'Untuk menebak nama orang'], correctIndex: 0, explanation: 'Kebenaran Alkitab melindungi kita dari penipuan rohani.' }
			}
		],
		quiz: [
			{ question: 'Sumber aman untuk mengenal antikristus adalah?', options: ['Alkitab', 'Film', 'Rumor', 'Cerita internet'], correctIndex: 0, explanation: 'Kita harus belajar dari Alkitab.' },
			{ question: 'Antikristus terutama digambarkan sebagai?', options: ['Satu kuasa atau sistem', 'Seekor hewan kebun', 'Satu bayi', 'Satu kota modern'], correctIndex: 0, explanation: 'Daniel menunjukkan kuasa yang bekerja dalam waktu panjang.' },
			{ question: 'Tanduk kecil muncul dari antara berapa tanduk?', options: ['Sepuluh', 'Dua', 'Tiga', 'Empat puluh'], correctIndex: 0, explanation: 'Tanduk kecil muncul di antara sepuluh tanduk.' },
			{ question: 'Berapa tanduk dicabut saat tanduk kecil muncul?', options: ['Tiga', 'Satu', 'Lima', 'Sepuluh'], correctIndex: 0, explanation: 'Daniel 7 menyebut tiga tanduk dicabut.' },
			{ question: 'Apa salah satu sikap kuasa ini kepada Allah?', options: ['Berbicara melawan Allah', 'Tunduk penuh pada Firman', 'Mengajar kebenaran murni', 'Menghapus semua dosa'], correctIndex: 0, explanation: 'Kuasa ini menentang Yang Mahatinggi.' },
			{ question: 'Apa yang dilakukan kuasa ini kepada umat Tuhan?', options: ['Menganiaya', 'Melindungi penuh', 'Menghidupkan semua orang mati', 'Membuat bumi baru'], correctIndex: 0, explanation: 'Daniel menyebut kuasa ini menganiaya orang kudus.' },
			{ question: 'Apa yang berusaha diubah oleh antikristus?', options: ['Waktu dan hukum Allah', 'Isi Injil menjadi empat puluh kitab', 'Nama malaikat', 'Musim bumi'], correctIndex: 0, explanation: 'Daniel 7:25 menyorot usaha mengubah waktu dan hukum.' },
			{ question: 'Tujuan Allah membuka identitas antikristus adalah?', options: ['Melindungi umat dari penipuan', 'Menakuti anak-anak', 'Memberi teka-teki', 'Membuat orang putus asa'], correctIndex: 0, explanation: 'Allah memberi terang supaya umat-Nya tidak tertipu.' },
			{ question: 'Sikap yang benar saat belajar tentang antikristus adalah?', options: ['Tetap berpegang pada Yesus dan Firman', 'Panik', 'Menebak-nebak sembarang orang', 'Mengikuti tradisi buta'], correctIndex: 0, explanation: 'Keselamatan ada dalam Yesus dan Firman-Nya.' },
			{ question: 'Pelajaran ini terutama mengajak kita untuk?', options: ['Setia pada kebenaran Alkitab', 'Takut berlebihan', 'Mengejar rumor', 'Mengabaikan nubuatan'], correctIndex: 0, explanation: 'Tujuan pelajaran ini adalah kesetiaan pada kebenaran Allah.' }
		]
	},
	{
		id: 16,
		title: 'Pesan Malaikat dari Angkasa',
		subtitle: '8 langkah sederhana tentang tiga pesan malaikat',
		icon: '👼',
		color: 'from-yellow-500 to-amber-600',
		finalAssessmentTitle: 'Ringkasan Akhir',
		finalAssessmentDescription: 'Jawab 10 pertanyaan sederhana. Kamu perlu minimal 7 jawaban benar untuk lulus.',
		passThreshold: 70,
		sections: [
			{
				title: '1. Mengapa ada tiga malaikat di Wahyu 14?',
				content: 'Wahyu 14 menunjukkan tiga malaikat yang membawa pesan penting untuk seluruh dunia. Ini adalah berita terakhir dari Allah sebelum Yesus datang kembali.',
				verse: '"Dan aku melihat seorang malaikat lain terbang di tengah-tengah langit dan ia membawa Injil yang kekal."',
				verseRef: 'Wahyu 14:6',
				image: '📢',
				check: { question: 'Pesan tiga malaikat ditujukan untuk siapa?', options: ['Untuk seluruh dunia', 'Hanya satu bangsa', 'Hanya malaikat', 'Hanya raja-raja'], correctIndex: 0, explanation: 'Wahyu 14 menunjukkan berita ini untuk semua bangsa, suku, bahasa, dan kaum.' }
			},
			{
				title: '2. Apa isi pesan malaikat pertama?',
				content: 'Malaikat pertama membawa Injil yang kekal. Lalu ia memanggil manusia untuk takut akan Allah, memuliakan Dia, dan siap menghadapi penghakiman.',
				verse: '"Takutlah akan Allah dan muliakanlah Dia, karena telah tiba saat penghakiman-Nya, dan sembahlah Dia yang telah menjadikan langit dan bumi."',
				verseRef: 'Wahyu 14:7',
				image: '1️⃣',
				check: { question: 'Apa salah satu isi pesan malaikat pertama?', options: ['Takut akan Allah dan muliakan Dia', 'Takut pada manusia', 'Cari tanda aneh', 'Abaikan penghakiman'], correctIndex: 0, explanation: 'Pesan pertama memanggil kita menghormati Allah dan memuliakan-Nya.' }
			},
			{
				title: '3. Apa arti “takut akan Allah”?',
				content: 'Takut akan Allah bukan berarti panik kepada Tuhan. Artinya menghormati Allah, menaruh Dia di tempat tertinggi, dan memilih taat kepada-Nya.',
				verse: '"Takut akan TUHAN adalah permulaan pengetahuan."',
				verseRef: 'Amsal 1:7',
				image: '🙌',
				check: { question: 'Takut akan Allah berarti?', options: ['Menghormati dan taat kepada-Nya', 'Panik lalu lari', 'Membenci Tuhan', 'Takut pada gelap'], correctIndex: 0, explanation: 'Takut akan Allah berarti hormat dan tunduk kepada-Nya.' }
			},
			{
				title: '4. Mengapa manusia dipanggil memuliakan Allah?',
				content: 'Memuliakan Allah berarti menyerahkan hidup kita kepada-Nya. Kita memuliakan Tuhan lewat pilihan, perkataan, dan cara hidup yang bersih serta setia.',
				verse: '"Muliakanlah Allah dengan tubuhmu!"',
				verseRef: '1 Korintus 6:20',
				image: '✨',
				check: { question: 'Salah satu cara memuliakan Allah adalah?', options: ['Menyerahkan hidup kepada-Nya', 'Hidup sembarangan', 'Mengabaikan Firman', 'Memilih dosa'], correctIndex: 0, explanation: 'Memuliakan Allah berarti hidup yang menghormati Dia.' }
			},
			{
				title: '5. Mengapa pesan pertama menekankan Allah sebagai Pencipta?',
				content: 'Pesan pertama memanggil manusia menyembah Dia yang menjadikan langit dan bumi. Ini mengingatkan bahwa hanya Allah yang layak disembah, bukan kuasa lain.',
				verse: '"Sembahlah Dia yang telah menjadikan langit dan bumi."',
				verseRef: 'Wahyu 14:7',
				image: '🌍',
				check: { question: 'Mengapa hanya Allah layak disembah?', options: ['Karena Dia Pencipta', 'Karena semua manusia memilih-Nya', 'Karena tradisi lama', 'Karena ada patung-Nya'], correctIndex: 0, explanation: 'Pesan malaikat pertama menekankan Allah sebagai Pencipta.' }
			},
			{
				title: '6. Apa arti Babel sudah rubuh?',
				content: 'Babel melambangkan kebingungan agama, yaitu campuran kebenaran dan ajaran manusia. Allah memanggil umat-Nya keluar dari kebingungan itu dan kembali kepada Firman.',
				verse: '"Sudah rubuh, sudah rubuh Babel, kota besar itu."',
				verseRef: 'Wahyu 14:8',
				image: '2️⃣',
				check: { question: 'Babel melambangkan apa?', options: ['Kebingungan agama', 'Kota surga', 'Bangsa Israel', 'Taman Eden'], correctIndex: 0, explanation: 'Babel adalah lambang ajaran campuran yang menyesatkan.' }
			},
			{
				title: '7. Apa isi pesan malaikat ketiga?',
				content: 'Malaikat ketiga memberi peringatan keras supaya manusia tidak menyembah binatang dan tidak menerima tandanya. Ini adalah panggilan untuk tetap setia kepada Allah saat ujian terakhir datang.',
				verse: '"Jikalau seorang menyembah binatang dan patungnya itu ... ia akan minum dari anggur murka Allah."',
				verseRef: 'Wahyu 14:9-10',
				image: '3️⃣',
				check: { question: 'Pesan malaikat ketiga memperingatkan kita supaya?', options: ['Tidak menyembah binatang dan menerima tandanya', 'Takut pada semua orang', 'Menyembah malaikat', 'Menolak Injil'], correctIndex: 0, explanation: 'Pesan ketiga memanggil kita tetap setia kepada Allah.' }
			},
			{
				title: '8. Siapa umat Allah di akhir zaman?',
				content: 'Wahyu 14 menunjukkan umat Allah sebagai orang yang sabar, menuruti perintah Allah, dan memiliki iman kepada Yesus. Tiga pesan malaikat mempersiapkan dunia untuk kedatangan Kristus.',
				verse: '"Yang menuruti perintah Allah dan iman kepada Yesus."',
				verseRef: 'Wahyu 14:12',
				image: '📬',
				check: { question: 'Ciri umat Allah di Wahyu 14 adalah?', options: ['Menuruti perintah Allah dan iman kepada Yesus', 'Mengikuti semua tradisi manusia', 'Menolak Alkitab', 'Tidak peduli kebenaran'], correctIndex: 0, explanation: 'Wahyu 14:12 menggambarkan kesetiaan kepada Allah dan iman kepada Yesus.' }
			}
		],
		quiz: [
			{ question: 'Ada berapa malaikat dalam pesan Wahyu 14?', options: ['Tiga', 'Satu', 'Dua', 'Tujuh'], correctIndex: 0, explanation: 'Ada tiga malaikat dengan tiga pesan penting.' },
			{ question: 'Pesan ini ditujukan kepada?', options: ['Seluruh dunia', 'Satu kota', 'Satu keluarga', 'Hanya malaikat'], correctIndex: 0, explanation: 'Berita ini untuk semua bangsa, suku, bahasa, dan kaum.' },
			{ question: 'Apa yang dibawa malaikat pertama?', options: ['Injil yang kekal', 'Pedang', 'Emas', 'Tanda rahasia'], correctIndex: 0, explanation: 'Wahyu 14:6 menyebut Injil yang kekal.' },
			{ question: 'Takut akan Allah berarti?', options: ['Menghormati dan taat kepada-Nya', 'Panik kepada Tuhan', 'Lari dari gereja', 'Takut pada manusia'], correctIndex: 0, explanation: 'Takut akan Allah berarti hormat dan tunduk.' },
			{ question: 'Apa yang harus kita lakukan kepada Allah?', options: ['Memuliakan Dia', 'Melupakan Dia', 'Menyamakan Dia dengan manusia', 'Mengganti perintah-Nya'], correctIndex: 0, explanation: 'Pesan pertama memanggil kita memuliakan Allah.' },
			{ question: 'Mengapa Allah layak disembah?', options: ['Karena Dia Pencipta', 'Karena manusia memilih-Nya', 'Karena tradisi lama', 'Karena ada gambar-Nya'], correctIndex: 0, explanation: 'Hanya Pencipta yang layak menerima sembah.' },
			{ question: 'Babel melambangkan?', options: ['Kebingungan agama', 'Taman surga', 'Kota Daud', 'Langit baru'], correctIndex: 0, explanation: 'Babel adalah lambang ajaran campuran.' },
			{ question: 'Pesan malaikat ketiga memperingatkan tentang?', options: ['Binatang dan tandanya', 'Gempa biasa', 'Laut merah', 'Perjalanan Paulus'], correctIndex: 0, explanation: 'Pesan ketiga memperingatkan terhadap penyembahan binatang.' },
			{ question: 'Ciri umat Allah di akhir zaman adalah?', options: ['Menuruti perintah Allah dan iman kepada Yesus', 'Menolak Alkitab', 'Hidup tanpa doa', 'Mengikuti semua tradisi manusia'], correctIndex: 0, explanation: 'Wahyu 14:12 menegaskan dua ciri itu.' },
			{ question: 'Tiga pesan malaikat mempersiapkan dunia untuk?', options: ['Kedatangan Yesus', 'Banjir Nuh', 'Pembuatan bait baru di bumi', 'Kekuasaan Babel'], correctIndex: 0, explanation: 'Pesan ini adalah persiapan akhir sebelum Yesus datang.' }
		]
	},
	{
		id: 17,
		title: 'Allah yang Menggambar Rencana',
		subtitle: '8 langkah sederhana tentang bait suci dan keselamatan',
		icon: '🏛️',
		color: 'from-amber-600 to-yellow-700',
		finalAssessmentTitle: 'Ringkasan Akhir',
		finalAssessmentDescription: 'Jawab 10 pertanyaan sederhana. Kamu perlu minimal 7 jawaban benar untuk lulus.',
		passThreshold: 70,
		sections: [
			{
				title: '1. Mengapa Allah memberi bait suci?',
				content: 'Allah menyuruh Musa membuat bait suci supaya umat-Nya mengerti rencana keselamatan. Bait suci adalah pelajaran bergambar tentang pekerjaan Yesus.',
				verse: '"Buatlah semuanya itu menurut contoh yang ditunjukkan kepadamu di atas gunung itu."',
				verseRef: 'Keluaran 25:40',
				image: '⛺',
				check: { question: 'Mengapa Allah memberi bait suci?', options: ['Untuk mengajar rencana keselamatan', 'Hanya untuk hiasan', 'Supaya Israel kaya', 'Untuk menyembah patung'], correctIndex: 0, explanation: 'Bait suci adalah model pelajaran tentang keselamatan.' }
			},
			{
				title: '2. Bait suci di bumi adalah model dari apa?',
				content: 'Bait suci di bumi bukan yang utama. Itu hanya salinan atau bayangan dari bait suci sejati di surga, tempat Yesus sekarang melayani.',
				verse: '"Mereka melayani dalam apa yang merupakan gambaran dan bayangan dari apa yang ada di sorga."',
				verseRef: 'Ibrani 8:5',
				image: '🌤️',
				check: { question: 'Bait suci di bumi adalah bayangan dari?', options: ['Bait suci di surga', 'Istana raja', 'Kota Babel', 'Taman Eden'], correctIndex: 0, explanation: 'Ibrani 8 menjelaskan bahwa bait di bumi adalah bayangan dari yang di surga.' }
			},
			{
				title: '3. Apa arti mezbah korban?',
				content: 'Di halaman ada mezbah korban. Domba yang dikorbankan menunjuk kepada Yesus, Anak Domba Allah, yang mati menggantikan orang berdosa.',
				verse: '"Lihatlah Anak domba Allah, yang menghapus dosa dunia!"',
				verseRef: 'Yohanes 1:29',
				image: '🐑',
				check: { question: 'Domba korban melambangkan siapa?', options: ['Yesus', 'Musa', 'Harun', 'Daud'], correctIndex: 0, explanation: 'Yesus adalah Anak Domba Allah yang mati untuk dosa dunia.' }
			},
			{
				title: '4. Apa arti bejana pembasuhan?',
				content: 'Sesudah mezbah ada tempat pembasuhan. Ini mengingatkan bahwa Tuhan bukan hanya mengampuni, tetapi juga membersihkan hidup kita.',
				verse: '"Ia menyelamatkan kita ... oleh permandian kelahiran kembali dan oleh pembaharuan yang dikerjakan oleh Roh Kudus."',
				verseRef: 'Titus 3:5',
				image: '💧',
				check: { question: 'Pembasuhan di bait suci melambangkan?', options: ['Pembersihan dari Tuhan', 'Permainan air', 'Hiasan biasa', 'Ujian tentara'], correctIndex: 0, explanation: 'Air pembasuhan menunjuk pada pembersihan yang Tuhan kerjakan.' }
			},
			{
				title: '5. Apa arti perabot di Ruang Kudus?',
				content: 'Kaki dian mengingatkan bahwa Yesus adalah terang dunia. Roti sajian mengingatkan bahwa Yesus memberi hidup. Mezbah dupa mengingatkan bahwa doa kita naik kepada Allah melalui Kristus.',
				verse: '"Akulah terang dunia."',
				verseRef: 'Yohanes 8:12',
				image: '🕯️',
				check: { question: 'Kaki dian di ruang kudus mengingatkan kita bahwa Yesus adalah?', options: ['Terang dunia', 'Raja Babel', 'Prajurit Roma', 'Air bah'], correctIndex: 0, explanation: 'Perabot ruang kudus menunjuk pada pelayanan Yesus.' }
			},
			{
				title: '6. Apa arti Ruang Maha Kudus?',
				content: 'Di ruang paling dalam ada tabut perjanjian dengan hukum Allah. Di atasnya ada tutup pendamaian. Ini menunjukkan hukum Allah tetap penting, tetapi belas kasihan-Nya juga tersedia bagi orang berdosa.',
				verse: '"Di dalam tabut itu haruslah kautaruh loh hukum."',
				verseRef: 'Keluaran 25:16',
				image: '📜',
				check: { question: 'Di dalam tabut perjanjian ada apa?', options: ['Hukum Allah', 'Emas saja', 'Pedang raja', 'Peta Kanaan'], correctIndex: 0, explanation: 'Tabut berisi loh hukum Allah.' }
			},
			{
				title: '7. Apa arti Hari Pendamaian?',
				content: 'Ada satu hari istimewa saat bait suci dibersihkan. Ini melambangkan pekerjaan penghakiman dan pembersihan dosa yang Tuhan lakukan dengan sempurna.',
				verse: '"Lalu tempat kudus itu akan dipulihkan dalam keadaan yang wajar."',
				verseRef: 'Daniel 8:14',
				image: '📋',
				check: { question: 'Hari Pendamaian menolong kita mengerti tentang?', options: ['Pembersihan dosa dan penghakiman', 'Pesta panen biasa', 'Perjalanan ke Mesir', 'Perang Israel'], correctIndex: 0, explanation: 'Hari Pendamaian menunjuk pada pekerjaan pembersihan rohani oleh Tuhan.' }
			},
			{
				title: '8. Apa yang Yesus lakukan sekarang?',
				content: 'Yesus sekarang melayani sebagai Imam Besar kita di surga. Ia menjadi Pengantara, menerima doa kita, dan menerapkan manfaat korban-Nya bagi umat yang percaya.',
				verse: '"Kita mempunyai Imam Besar yang demikian, yang duduk di sebelah kanan takhta Yang Mahabesar di sorga."',
				verseRef: 'Ibrani 8:1',
				image: '🙏',
				check: { question: 'Apa pelayanan Yesus sekarang?', options: ['Imam Besar kita di surga', 'Tertidur', 'Menjadi malaikat', 'Menghentikan doa'], correctIndex: 0, explanation: 'Ibrani 8 menunjukkan Yesus adalah Imam Besar kita.' }
			}
		],
		quiz: [
			{ question: 'Mengapa Allah memberi bait suci?', options: ['Untuk mengajar rencana keselamatan', 'Hanya untuk hiasan', 'Supaya bangsa lain takut', 'Untuk menyembah malaikat'], correctIndex: 0, explanation: 'Bait suci adalah pelajaran bergambar tentang keselamatan.' },
			{ question: 'Bait suci di bumi adalah bayangan dari?', options: ['Bait suci di surga', 'Istana Daud', 'Babel', 'Rumah Musa'], correctIndex: 0, explanation: 'Yang asli ada di surga.' },
			{ question: 'Mezbah korban menunjuk kepada?', options: ['Salib Yesus', 'Air bah', 'Gunung Sinai', 'Kerajaan Romawi'], correctIndex: 0, explanation: 'Korban domba menunjuk pada kematian Yesus.' },
			{ question: 'Domba korban melambangkan?', options: ['Yesus', 'Musa', 'Elia', 'Yeremia'], correctIndex: 0, explanation: 'Yesus adalah Anak Domba Allah.' },
			{ question: 'Pembasuhan melambangkan?', options: ['Pembersihan dari Tuhan', 'Permainan air', 'Hiasan halaman', 'Perjalanan laut'], correctIndex: 0, explanation: 'Tuhan bukan hanya mengampuni, tetapi juga membersihkan.' },
			{ question: 'Kaki dian mengingatkan bahwa Yesus adalah?', options: ['Terang dunia', 'Pintu kota', 'Roti harian', 'Pedang perang'], correctIndex: 0, explanation: 'Yesus adalah terang dunia.' },
			{ question: 'Di dalam tabut ada?', options: ['Hukum Allah', 'Emas saja', 'Tombak', 'Peta'], correctIndex: 0, explanation: 'Tabut menyimpan loh hukum Allah.' },
			{ question: 'Hari Pendamaian menunjuk kepada?', options: ['Pembersihan dosa dan penghakiman', 'Pesta olahraga', 'Perayaan panen', 'Pembuatan kemah'], correctIndex: 0, explanation: 'Hari itu melambangkan pembersihan dan penghakiman.' },
			{ question: 'Yesus sekarang melayani sebagai?', options: ['Imam Besar', 'Prajurit', 'Raja Babel', 'Penulis kitab baru'], correctIndex: 0, explanation: 'Yesus adalah Imam Besar kita di surga.' },
			{ question: 'Pelajaran bait suci terutama menolong kita melihat?', options: ['Rencana keselamatan melalui Yesus', 'Peta kota kuno', 'Tradisi manusia', 'Ramalan cuaca'], correctIndex: 0, explanation: 'Setiap bagian bait suci menunjuk pada pekerjaan Yesus.' }
		]
	},
	{
		id: 18,
		title: 'Tepat Waktu!',
		subtitle: '8 langkah sederhana tentang nubuat waktu Daniel',
		icon: '⏰',
		color: 'from-blue-600 to-indigo-700',
		finalAssessmentTitle: 'Ringkasan Akhir',
		finalAssessmentDescription: 'Jawab 10 pertanyaan sederhana. Kamu perlu minimal 7 jawaban benar untuk lulus.',
		passThreshold: 70,
		sections: [
			{
				title: '1. Mengapa nubuat waktu itu penting?',
				content: 'Allah tidak hanya memberi tahu apa yang akan terjadi, tetapi juga kapan. Nubuat waktu menunjukkan bahwa Firman Tuhan sangat tepat dan dapat dipercaya.',
				verse: '"Pada waktu yang ditentukan penglihatan itu akan berbicara."',
				verseRef: 'Habakuk 2:3',
				image: '⏳',
				check: { question: 'Apa yang dibuktikan nubuat waktu?', options: ['Firman Tuhan tepat dan dapat dipercaya', 'Allah sering salah', 'Tanggal lebih penting dari iman', 'Alkitab cuma tebakan'], correctIndex: 0, explanation: 'Nubuat waktu menunjukkan ketepatan Firman Tuhan.' }
			},
			{
				title: '2. Bagaimana hari dipahami dalam nubuat ini?',
				content: 'Dalam nubuat tertentu, satu hari melambangkan satu tahun. Prinsip ini membantu kita memahami masa nubuatan yang panjang di Daniel.',
				verse: '"Aku menentukan bagimu satu hari untuk satu tahun."',
				verseRef: 'Yehezkiel 4:6',
				image: '📅',
				check: { question: 'Dalam pelajaran ini, satu hari nubuatan dipahami sebagai?', options: ['Satu tahun', 'Satu minggu', 'Satu jam', 'Seribu hari'], correctIndex: 0, explanation: 'Prinsip hari-tahun dipakai untuk nubuatan waktu tertentu.' }
			},
			{
				title: '3. Kapan nubuat 2.300 tahun dimulai?',
				content: 'Nubuat besar ini dimulai saat keluar perintah untuk membangun kembali Yerusalem. Titik awal itu adalah tahun 457 SM.',
				verse: '"Dari saat firman itu keluar, yakni bahwa Yerusalem akan dipulihkan dan dibangun kembali."',
				verseRef: 'Daniel 9:25',
				image: '🏗️',
				check: { question: 'Titik awal nubuat 2.300 tahun adalah?', options: ['Perintah membangun kembali Yerusalem', 'Air bah', 'Kelahiran Musa', 'Pembuangan ke Mesir'], correctIndex: 0, explanation: 'Daniel 9 memberi titik awal pada perintah pemulihan Yerusalem.' }
			},
			{
				title: '4. Apa arti 70 minggu dalam Daniel 9?',
				content: 'Tujuh puluh minggu adalah bagian awal dari nubuat besar itu. Masa ini khusus ditetapkan bagi bangsa Yahudi dan terutama menunjuk kepada pekerjaan Mesias.',
				verse: '"Tujuh puluh kali tujuh masa telah ditetapkan atas bangsamu."',
				verseRef: 'Daniel 9:24',
				image: '📜',
				check: { question: '70 minggu terutama ditetapkan untuk siapa?', options: ['Bangsa Yahudi', 'Bangsa Mesir', 'Bangsa Romawi', 'Semua binatang'], correctIndex: 0, explanation: 'Daniel 9:24 berkata masa itu ditetapkan atas bangsamu, yaitu bangsa Daniel.' }
			},
			{
				title: '5. Kapan Mesias akan tampil?',
				content: 'Nubuat ini menunjuk dengan tepat kepada saat Yesus dibaptis dan diurapi untuk memulai pelayanan-Nya. Ini terjadi pada tahun 27 M.',
				verse: '"Sampai pada seorang yang telah diurapi, seorang raja."',
				verseRef: 'Daniel 9:25',
				image: '✝️',
				check: { question: 'Nubuat 70 minggu menunjuk kepada munculnya siapa?', options: ['Mesias', 'Nebukadnezar', 'Koresy', 'Yudas'], correctIndex: 0, explanation: 'Nubuat ini menunjuk dengan tepat kepada Yesus, Sang Mesias.' }
			},
			{
				title: '6. Kapan Yesus mati menurut nubuat itu?',
				content: 'Daniel menubuatkan bahwa di tengah minggu terakhir, Mesias akan dihentikan. Ini menunjuk kepada kematian Yesus di salib pada tahun 31 M.',
				verse: '"Pada pertengahan tujuh masa itu ia akan menghentikan korban sembelihan."',
				verseRef: 'Daniel 9:27',
				image: '🩸',
				check: { question: 'Di tengah minggu terakhir, apa yang terjadi pada Mesias?', options: ['Ia mati bagi dosa', 'Ia jadi raja dunia', 'Ia pindah ke Roma', 'Ia menolak semua orang'], correctIndex: 0, explanation: 'Kematian Yesus membuat sistem korban binatang kehilangan makna.' }
			},
			{
				title: '7. Apa yang terjadi setelah masa 70 minggu berakhir?',
				content: 'Setelah masa khusus bagi bangsa Yahudi berakhir, berita Injil dibawa lebih luas kepada bangsa-bangsa lain. Allah tetap membuka jalan keselamatan bagi semua orang.',
				verse: '"Aku telah menentukan engkau menjadi terang bagi bangsa-bangsa lain."',
				verseRef: 'Kisah 13:47',
				image: '🌐',
				check: { question: 'Setelah masa khusus bagi bangsa Yahudi selesai, Injil dibawa kepada?', options: ['Semua bangsa', 'Tidak kepada siapa pun', 'Hanya raja-raja', 'Hanya imam'], correctIndex: 0, explanation: 'Keselamatan dibuka bagi seluruh dunia.' }
			},
			{
				title: '8. Apa yang terjadi pada akhir 2.300 tahun?',
				content: 'Pada akhir nubuat 2.300 tahun, dimulailah pekerjaan pembersihan bait suci surgawi. Pelajaran ini menghubungkannya dengan dimulainya penghakiman di surga pada tahun 1844.',
				verse: '"Sampai lewat dua ribu tiga ratus petang dan pagi, lalu tempat kudus itu akan dipulihkan."',
				verseRef: 'Daniel 8:14',
				image: '🛡️',
				check: { question: 'Menurut pelajaran ini, apa yang dimulai pada akhir 2.300 tahun?', options: ['Pembersihan bait suci surgawi', 'Banjir besar baru', 'Kerajaan Babel', 'Tidur 1.000 tahun'], correctIndex: 0, explanation: 'Daniel 8:14 menunjuk pada pemulihan atau pembersihan tempat kudus.' }
			}
		],
		quiz: [
			{ question: 'Apa yang dibuktikan nubuat waktu?', options: ['Firman Tuhan tepat', 'Allah sering salah', 'Iman tidak penting', 'Tanggal lebih besar dari Yesus'], correctIndex: 0, explanation: 'Nubuat waktu menunjukkan ketepatan Firman Allah.' },
			{ question: 'Dalam pelajaran ini, satu hari nubuatan dipahami sebagai?', options: ['Satu tahun', 'Satu jam', 'Satu minggu', 'Seribu tahun'], correctIndex: 0, explanation: 'Prinsip hari-tahun dipakai untuk menjelaskan nubuatan ini.' },
			{ question: 'Titik awal nubuat 2.300 tahun adalah?', options: ['Perintah membangun kembali Yerusalem', 'Penciptaan', 'Air bah', 'Kerajaan Saul'], correctIndex: 0, explanation: 'Daniel 9 memberikan titik awal itu.' },
			{ question: '70 minggu adalah bagian dari?', options: ['Nubuat 2.300 tahun', 'Sepuluh perintah', 'Air bah', 'Milenium'], correctIndex: 0, explanation: '70 minggu adalah bagian awal dari nubuat besar itu.' },
			{ question: '70 minggu terutama ditetapkan untuk?', options: ['Bangsa Yahudi', 'Bangsa Mesir', 'Bangsa Romawi', 'Semua malaikat'], correctIndex: 0, explanation: 'Daniel berkata masa itu ditetapkan atas bangsamu.' },
			{ question: 'Nubuat itu menunjuk kepada munculnya siapa?', options: ['Mesias', 'Nebukadnezar', 'Firaun', 'Yudas'], correctIndex: 0, explanation: 'Nubuat ini menunjuk kepada Yesus.' },
			{ question: 'Apa yang terjadi di tengah minggu terakhir?', options: ['Yesus mati bagi dosa', 'Babel bangkit', 'Musa kembali', 'Air bah datang'], correctIndex: 0, explanation: 'Kematian Yesus digenapi tepat pada waktunya.' },
			{ question: 'Sesudah masa khusus bagi bangsa Yahudi selesai, Injil dibawa kepada?', options: ['Semua bangsa', 'Tidak kepada siapa pun', 'Hanya imam', 'Hanya tentara'], correctIndex: 0, explanation: 'Keselamatan ditawarkan kepada seluruh dunia.' },
			{ question: 'Apa yang dimulai pada akhir 2.300 tahun menurut pelajaran ini?', options: ['Pembersihan bait suci surgawi', 'Pembangunan bahtera', 'Kerajaan Daud', 'Penciptaan bumi'], correctIndex: 0, explanation: 'Daniel 8:14 mengarah pada pemulihan tempat kudus.' },
			{ question: 'Pelajaran “Tepat Waktu!” terutama mengajak kita untuk?', options: ['Percaya pada ketepatan Firman Tuhan', 'Takut pada angka', 'Menebak semua tanggal baru', 'Melupakan Yesus'], correctIndex: 0, explanation: 'Tujuan nubuat adalah memperkuat iman kepada Tuhan.' }
		]
	},
	{
		id: 19,
		title: 'Penghakiman Terakhir',
		subtitle: '8 langkah sederhana tentang penghakiman Allah',
		icon: '⚖️',
		color: 'from-gray-600 to-slate-800',
		finalAssessmentTitle: 'Ringkasan Akhir',
		finalAssessmentDescription: 'Jawab 10 pertanyaan sederhana. Kamu perlu minimal 7 jawaban benar untuk lulus.',
		passThreshold: 70,
		sections: [
			{
				title: '1. Mengapa harus ada penghakiman?',
				content: 'Penghakiman menunjukkan bahwa Allah adil. Di dunia ini banyak kejahatan yang belum selesai. Pada akhirnya Tuhan akan menegakkan keadilan dengan sempurna.',
				verse: '"Karena kita semua harus menghadap takhta pengadilan Kristus."',
				verseRef: '2 Korintus 5:10',
				image: '⚖️',
				check: { question: 'Mengapa penghakiman diperlukan?', options: ['Supaya keadilan Allah dinyatakan', 'Supaya Allah terlihat seram', 'Karena Tuhan lupa', 'Tanpa alasan'], correctIndex: 0, explanation: 'Penghakiman menegaskan bahwa Allah adil.' }
			},
			{
				title: '2. Siapa Hakim dunia?',
				content: 'Hakim yang benar bukan manusia biasa, tetapi Allah sendiri. Karena itu penghakiman-Nya tidak salah dan tidak dapat dibeli.',
				verse: '"Allah akan menghakimi dunia dengan adil."',
				verseRef: 'Kisah 17:31',
				image: '👑',
				check: { question: 'Siapa Hakim dunia?', options: ['Allah', 'Manusia biasa', 'Iblis', 'Malaikat jahat'], correctIndex: 0, explanation: 'Allah adalah Hakim yang adil atas seluruh dunia.' }
			},
			{
				title: '3. Kapan penghakiman dimulai?',
				content: 'Alkitab menunjukkan ada fase penghakiman yang terjadi sebelum kedatangan Yesus yang kedua. Ini sesuai dengan pesan malaikat pertama: saat penghakiman-Nya telah tiba.',
				verse: '"Telah tiba saat penghakiman-Nya."',
				verseRef: 'Wahyu 14:7',
				image: '⏰',
				check: { question: 'Menurut pelajaran ini, penghakiman Allah dimulai kapan?', options: ['Sebelum Yesus datang kembali', 'Sesudah bumi baru selesai', 'Tidak pernah dimulai', 'Hanya setelah semua orang mati'], correctIndex: 0, explanation: 'Wahyu 14 menunjukkan saat penghakiman sudah tiba sebelum kedatangan Kristus.' }
			},
			{
				title: '4. Apa itu buku-buku catatan?',
				content: 'Wahyu menggambarkan adanya buku-buku catatan dan kitab kehidupan. Ini menunjukkan bahwa Allah mengetahui hidup setiap orang dengan sempurna.',
				verse: '"Buku-buku dibuka. Dan dibuka juga sebuah buku lain, yaitu kitab kehidupan."',
				verseRef: 'Wahyu 20:12',
				image: '📚',
				check: { question: 'Apa yang dibuka dalam penghakiman menurut Wahyu 20:12?', options: ['Buku-buku catatan dan kitab kehidupan', 'Peta dunia', 'Surat Roma', 'Peti emas'], correctIndex: 0, explanation: 'Wahyu 20:12 menyebut buku-buku catatan dan kitab kehidupan.' }
			},
			{
				title: '5. Siapa Pembela kita?',
				content: 'Kabar baiknya, kita tidak berdiri sendiri dalam penghakiman. Yesus adalah Pengantara kita. Ia membela semua orang yang datang kepada-Nya dengan iman.',
				verse: '"Jika seorang berbuat dosa, kita mempunyai seorang pengantara pada Bapa, yaitu Yesus Kristus, yang adil."',
				verseRef: '1 Yohanes 2:1',
				image: '🛡️',
				check: { question: 'Siapa Pembela kita dalam penghakiman?', options: ['Yesus Kristus', 'Diri sendiri', 'Iblis', 'Tetangga'], correctIndex: 0, explanation: 'Yesus adalah Pengantara dan Pembela umat-Nya.' }
			},
			{
				title: '6. Apa yang terjadi pada dosa yang diakui?',
				content: 'Saat seseorang sungguh bertobat dan percaya kepada Yesus, dosanya diampuni. Kristus menutupi orang percaya dengan kebenaran-Nya sendiri.',
				verse: '"Jika kita mengaku dosa kita, maka Ia adalah setia dan adil, sehingga Ia akan mengampuni segala dosa kita."',
				verseRef: '1 Yohanes 1:9',
				image: '🧼',
				check: { question: 'Apa yang Tuhan lakukan pada dosa yang diakui?', options: ['Mengampuni', 'Menyimpan untuk diejek', 'Menambahkannya', 'Melupakan orang itu'], correctIndex: 0, explanation: 'Allah mengampuni orang yang mengaku dosa dengan sungguh.' }
			},
			{
				title: '7. Apa yang terjadi selama milenium?',
				content: 'Selama milenium, orang benar melihat keadilan keputusan Allah. Mereka memahami bahwa semua keputusan Tuhan benar dan penuh kasih.',
				verse: '"Kepada mereka diserahkan kuasa untuk menghakimi."',
				verseRef: 'Wahyu 20:4',
				image: '📋',
				check: { question: 'Selama milenium, orang benar melihat apa?', options: ['Keadilan keputusan Allah', 'Film sejarah dunia', 'Cara iblis menang', 'Penghapusan Firman'], correctIndex: 0, explanation: 'Allah membuka keputusan-Nya agar umat-Nya melihat bahwa Ia adil.' }
			},
			{
				title: '8. Apa akhir penghakiman?',
				content: 'Pada akhir penghakiman, dosa dan orang jahat menerima hukuman yang adil. Lalu Allah menciptakan dunia yang baru. Bagi orang yang ada di dalam Yesus, penghakiman adalah kabar baik, bukan ancaman.',
				verse: '"Sekarang tidak ada penghukuman bagi mereka yang ada di dalam Kristus Yesus."',
				verseRef: 'Roma 8:1',
				image: '🌅',
				check: { question: 'Bagi orang yang ada di dalam Yesus, penghakiman adalah?', options: ['Kabar baik', 'Tidak ada harapan', 'Kekalahan pasti', 'Rahasia kosong'], correctIndex: 0, explanation: 'Di dalam Kristus tidak ada penghukuman.' }
			}
		],
		quiz: [
			{ question: 'Mengapa ada penghakiman?', options: ['Supaya keadilan Allah dinyatakan', 'Supaya Allah terlihat kejam', 'Karena Tuhan bingung', 'Tanpa alasan'], correctIndex: 0, explanation: 'Penghakiman menunjukkan keadilan Allah.' },
			{ question: 'Siapa Hakim dunia?', options: ['Allah', 'Iblis', 'Manusia biasa', 'Nasib'], correctIndex: 0, explanation: 'Allah akan menghakimi dunia dengan adil.' },
			{ question: 'Kapan penghakiman dimulai menurut pelajaran ini?', options: ['Sebelum Yesus datang kembali', 'Sesudah bumi baru', 'Tidak pernah', 'Sesudah semua orang lupa'], correctIndex: 0, explanation: 'Pesan malaikat pertama berkata saat penghakiman-Nya telah tiba.' },
			{ question: 'Apa yang dibuka dalam penghakiman?', options: ['Buku-buku catatan', 'Gudang harta', 'Gunung-gunung', 'Laut Merah'], correctIndex: 0, explanation: 'Wahyu 20 menyebut buku-buku catatan.' },
			{ question: 'Apa nama buku penting lain dalam penghakiman?', options: ['Kitab kehidupan', 'Kitab perang', 'Kitab pertanian', 'Kitab geografi'], correctIndex: 0, explanation: 'Kitab kehidupan disebut bersama buku-buku lain.' },
			{ question: 'Siapa Pembela kita?', options: ['Yesus Kristus', 'Diri sendiri', 'Malaikat jahat', 'Tidak ada'], correctIndex: 0, explanation: 'Yesus adalah Pengantara kita pada Bapa.' },
			{ question: 'Apa yang Tuhan lakukan pada dosa yang diakui?', options: ['Mengampuni', 'Menambah', 'Menertawakan', 'Menyembunyikan tanpa solusi'], correctIndex: 0, explanation: 'Allah setia mengampuni dosa yang diakui.' },
			{ question: 'Selama milenium, orang benar memahami?', options: ['Keadilan keputusan Allah', 'Cara berdosa', 'Cara setan menang', 'Rahasia sihir'], correctIndex: 0, explanation: 'Orang benar melihat bahwa Allah selalu adil.' },
			{ question: 'Apa akhir penghakiman bagi dosa?', options: ['Dosa diakhiri dengan adil', 'Dosa dibiarkan hidup', 'Dosa jadi raja', 'Dosa dianggap bagus'], correctIndex: 0, explanation: 'Pada akhir penghakiman, dosa diakhiri.' },
			{ question: 'Bagi orang dalam Kristus, penghakiman adalah?', options: ['Kabar baik', 'Takdir gelap', 'Kekalahan pasti', 'Tidak berarti apa-apa'], correctIndex: 0, explanation: 'Roma 8:1 memberi pengharapan bagi orang yang ada dalam Kristus.' }
		]
	},
	{
		id: 20,
		title: 'Tanda Binatang',
		subtitle: '8 langkah sederhana tentang ujian kesetiaan akhir zaman',
		icon: '⚠️',
		color: 'from-red-600 to-red-800',
		finalAssessmentTitle: 'Ringkasan Akhir',
		finalAssessmentDescription: 'Jawab 10 pertanyaan sederhana. Kamu perlu minimal 7 jawaban benar untuk lulus.',
		passThreshold: 70,
		sections: [
			{
				title: '1. Apakah tanda binatang itu microchip atau tato?',
				content: 'Pelajaran ini menekankan bahwa tanda binatang bukan sekadar benda fisik seperti chip atau tato. Intinya adalah soal penyembahan, kesetiaan, dan otoritas.',
				verse: '"Ia menyebabkan ... mereka diberi tanda pada tangan kanannya atau pada dahinya."',
				verseRef: 'Wahyu 13:16',
				image: '🤔',
				check: { question: 'Menurut pelajaran ini, tanda binatang terutama berbicara tentang?', options: ['Kesetiaan dan penyembahan', 'Teknologi semata', 'Tato seni', 'Makanan'], correctIndex: 0, explanation: 'Masalah utamanya adalah siapa yang kita taati dan sembah.' }
			},
			{
				title: '2. Apa arti dahi dan tangan dalam pelajaran ini?',
				content: 'Dahi melambangkan pikiran atau keputusan. Tangan melambangkan tindakan. Jadi ujian akhir menyentuh apa yang kita percaya dan apa yang kita lakukan.',
				image: '🧠',
				check: { question: 'Dalam pelajaran ini, dahi melambangkan?', options: ['Pikiran dan keputusan', 'Kekuatan otot', 'Uang', 'Bangsa tertentu'], correctIndex: 0, explanation: 'Dahi menunjuk pada keyakinan dan pilihan hati.' }
			},
			{
				title: '3. Apa tanda Allah?',
				content: 'Allah juga mempunyai tanda. Alkitab menyebut Sabat sebagai tanda antara Allah dan umat-Nya. Tanda ini menunjukkan bahwa Allah adalah Pencipta dan Tuhan yang menguduskan umat-Nya.',
				verse: '"Sabat-Ku harus kamu pelihara, sebab itulah peringatan antara Aku dan kamu."',
				verseRef: 'Keluaran 31:13',
				image: '📅',
				check: { question: 'Apa tanda Allah yang disebut dalam pelajaran ini?', options: ['Sabat', 'Kalung emas', 'Gedung gereja', 'Bendera'], correctIndex: 0, explanation: 'Keluaran 31:13 menyebut Sabat sebagai tanda antara Allah dan umat-Nya.' }
			},
			{
				title: '4. Mengapa Sabat begitu penting dalam pelajaran ini?',
				content: 'Sabat menunjukkan siapa Pencipta kita. Karena itu pertentangan akhir menyentuh penyembahan yang benar dan otoritas siapa yang kita ikuti.',
				verse: '"Hari ketujuh adalah hari Sabat TUHAN, Allahmu."',
				verseRef: 'Keluaran 20:10',
				image: '🌅',
				check: { question: 'Sabat mengingatkan kita bahwa Allah adalah?', options: ['Pencipta', 'Salah satu guru', 'Raja Babel', 'Manusia biasa'], correctIndex: 0, explanation: 'Sabat menunjuk kepada Allah sebagai Pencipta.' }
			},
			{
				title: '5. Apa inti ujian akhir zaman?',
				content: 'Ujian terakhir bukan terutama soal kenyamanan. Intinya adalah apakah kita akan menaati Allah atau perintah manusia saat keduanya bertentangan.',
				verse: '"Kita harus lebih taat kepada Allah dari pada kepada manusia."',
				verseRef: 'Kisah 5:29',
				image: '🔀',
				check: { question: 'Inti ujian akhir zaman adalah?', options: ['Taat kepada Allah atau manusia', 'Pilih negara mana', 'Pilih bahasa mana', 'Pilih cuaca mana'], correctIndex: 0, explanation: 'Ujian akhir menyentuh soal otoritas tertinggi dalam hidup.' }
			},
			{
				title: '6. Apa itu gambaran binatang?',
				content: 'Gambaran binatang berbicara tentang sistem yang meniru cara kerja kuasa jahat sebelumnya, terutama saat agama dan negara bekerja sama memaksa ibadah.',
				verse: '"Ia menyuruh penduduk bumi, supaya mereka mendirikan patung untuk binatang itu."',
				verseRef: 'Wahyu 13:14',
				image: '🗿',
				check: { question: 'Gambaran binatang menunjuk pada?', options: ['Sistem paksaan dalam penyembahan', 'Patung taman biasa', 'Gedung sekolah', 'Tanda cuaca'], correctIndex: 0, explanation: 'Masalahnya adalah paksaan dalam urusan ibadah dan kesetiaan.' }
			},
			{
				title: '7. Mengapa Allah memberi peringatan ini?',
				content: 'Allah memperingatkan bukan untuk menakuti, tetapi untuk menyelamatkan. Tuhan ingin semua orang mengerti ujian yang akan datang dan berdiri di pihak kebenaran.',
				verse: '"Janganlah takut, hai kawanan kecil! Karena Bapamu telah berkenan memberikan kamu Kerajaan itu."',
				verseRef: 'Lukas 12:32',
				image: '🛡️',
				check: { question: 'Mengapa Allah memberi peringatan tentang tanda binatang?', options: ['Untuk mempersiapkan dan melindungi umat-Nya', 'Untuk hiburan', 'Untuk membuat putus asa', 'Tanpa alasan'], correctIndex: 0, explanation: 'Peringatan ini adalah tanda kasih Allah.' }
			},
			{
				title: '8. Bagaimana kita bisa tetap setia?',
				content: 'Orang yang mengenal Yesus dan memegang Firman tidak perlu hidup dalam ketakutan. Tuhan sanggup menjaga umat-Nya tetap setia pada saat ujian datang.',
				verse: '"Di sini dituntut ketekunan orang-orang kudus, yang menuruti perintah Allah dan iman kepada Yesus."',
				verseRef: 'Wahyu 14:12',
				image: '🙏',
				check: { question: 'Bagaimana umat Allah digambarkan dalam Wahyu 14:12?', options: ['Menuruti perintah Allah dan iman kepada Yesus', 'Mengikuti semua tekanan dunia', 'Menolak Firman', 'Tidak peduli penyembahan'], correctIndex: 0, explanation: 'Kesetiaan sejati lahir dari iman kepada Yesus dan ketaatan kepada Allah.' }
			}
		],
		quiz: [
			{ question: 'Tanda binatang terutama berbicara tentang?', options: ['Kesetiaan dan penyembahan', 'Teknologi semata', 'Tato seni', 'Makanan najis'], correctIndex: 0, explanation: 'Masalah utamanya adalah otoritas dan penyembahan.' },
			{ question: 'Dahi dalam pelajaran ini melambangkan?', options: ['Pikiran dan keputusan', 'Kekuatan tubuh', 'Uang', 'Suku bangsa'], correctIndex: 0, explanation: 'Dahi menunjuk pada keyakinan dan keputusan.' },
			{ question: 'Tangan dalam pelajaran ini melambangkan?', options: ['Tindakan', 'Bahasa', 'Keluarga', 'Cuaca'], correctIndex: 0, explanation: 'Tangan menunjuk pada tindakan yang dilakukan.' },
			{ question: 'Apa tanda Allah menurut pelajaran ini?', options: ['Sabat', 'Kalung salib', 'Gedung ibadah', 'Topi khusus'], correctIndex: 0, explanation: 'Sabat disebut sebagai tanda antara Allah dan umat-Nya.' },
			{ question: 'Sabat mengingatkan kita bahwa Allah adalah?', options: ['Pencipta', 'Dosen besar', 'Raja Babel', 'Manusia hebat'], correctIndex: 0, explanation: 'Sabat terkait langsung dengan Allah sebagai Pencipta.' },
			{ question: 'Inti ujian akhir zaman adalah?', options: ['Taat kepada Allah atau manusia', 'Pilih benua', 'Pilih bahasa', 'Pilih makanan'], correctIndex: 0, explanation: 'Pertanyaan besarnya adalah siapa yang kita taati.' },
			{ question: 'Gambaran binatang menunjuk pada?', options: ['Sistem paksaan dalam penyembahan', 'Patung taman', 'Mainan anak', 'Peta dunia'], correctIndex: 0, explanation: 'Itu menunjuk pada paksaan dalam urusan ibadah.' },
			{ question: 'Mengapa Allah memberi peringatan ini?', options: ['Untuk mempersiapkan dan melindungi', 'Untuk hiburan', 'Untuk menipu', 'Untuk menghina'], correctIndex: 0, explanation: 'Peringatan ini lahir dari kasih Allah.' },
			{ question: 'Siapa yang sanggup menjaga umat tetap setia?', options: ['Tuhan', 'Diri sendiri saja', 'Iblis', 'Pemerintah'], correctIndex: 0, explanation: 'Kesetiaan sejati datang dari hubungan dengan Tuhan.' },
			{ question: 'Ciri umat Allah menurut Wahyu 14:12 adalah?', options: ['Menuruti perintah Allah dan iman kepada Yesus', 'Mengikuti semua tekanan dunia', 'Menolak Alkitab', 'Tidak peduli ibadah'], correctIndex: 0, explanation: 'Inilah gambaran umat yang setia pada akhir zaman.' }
		]
	},
	{
		id: 21,
		title: 'Amerika dalam Nubuat Alkitab',
		subtitle: '4 langkah sederhana tentang kuasa dari bumi di Wahyu 13',
		icon: '🗽',
		color: 'from-blue-700 to-blue-900',
		finalAssessmentTitle: 'Ringkasan Akhir',
		finalAssessmentDescription: 'Jawab 10 pertanyaan sederhana. Kamu perlu minimal 7 jawaban benar untuk lulus.',
		passThreshold: 70,
		sections: [
			{
				title: '1. Nubuat tentang bangsa-bangsa',
				content: 'Alkitab meramalkan munculnya bangsa-bangsa besar dalam sejarah. Di Wahyu 13, ada "binatang dari bumi" yang muncul di wilayah baru, berpenduduk sedikit, dengan dua tanduk (seperti domba). Banyak pelajar Alkitab melihat ini sebagai gambaran Amerika Serikat.',
				verse: '"Dan aku melihat seekor binatang lain keluar dari dalam bumi. Ia mempunyai dua tanduk sama seperti tanduk anak domba."',
				verseRef: 'Wahyu 13:11',
				image: '🌎',
				check: { question: 'Binatang kedua di Wahyu 13 muncul dari mana?', options: ['Dari bumi', 'Dari laut', 'Dari langit', 'Dari padang gurun'], correctIndex: 0, explanation: 'Wahyu 13:11 berkata kuasa ini muncul dari bumi.' }
			},
			{
				title: '2. Dua tanduk: kebebasan',
				content: 'Dua tanduk seperti domba melambangkan dua prinsip mulia: kebebasan beragama dan kebebasan sipil. Amerika didirikan atas prinsip-prinsip ini — tempat di mana orang bebas beribadah tanpa paksaan pemerintah.',
				image: '🕊️',
				check: { question: 'Dua tanduk seperti domba melambangkan?', options: ['Kebebasan beragama dan sipil', 'Kekuatan militer', 'Kekayaan besar', 'Dua nabi'], correctIndex: 0, explanation: 'Pelajaran ini menghubungkan dua tanduk dengan dua kebebasan besar.' }
			},
			{
				title: '3. Perubahan yang mengejutkan',
				content: 'Tapi nubuat berkata binatang itu kemudian "berbicara seperti naga." Artinya, bangsa yang awalnya berdiri untuk kebebasan akan berubah dan mulai memaksakan aturan keagamaan. Kebebasan beragama akan terancam.',
				image: '🐉',
				check: { question: 'Apa arti berbicara seperti naga dalam pelajaran ini?', options: ['Mulai memaksakan aturan yang menindas', 'Menjadi bangsa penuh kasih', 'Diam dan netral', 'Hanya berubah lambang'], correctIndex: 0, explanation: 'Bahasa naga menunjuk pada tindakan keras dan pemaksaan.' }
			},
			{
				title: '4. Pelajaran untuk kita',
				content: 'Nubuat ini mengajarkan bahwa kita tidak boleh menaruh harapan pada pemerintah manusia mana pun. Hanya Kerajaan Allah yang kekal dan sempurna. Tugas kita adalah setia kepada Allah apapun yang terjadi di dunia.',
				verse: '"Kita harus lebih taat kepada Allah dari pada kepada manusia."',
				verseRef: 'Kisah 5:29',
				image: '👑',
				check: { question: 'Kepada siapa kesetiaan tertinggi orang percaya?', options: ['Allah', 'Pemerintah mana pun', 'Tokoh terkenal', 'Diri sendiri'], correctIndex: 0, explanation: 'Kisah 5:29 menegaskan kita harus lebih taat kepada Allah.' }
			}
		],
		quiz: [
			{ question: 'Binatang kedua di Wahyu 13 muncul dari?', options: ['Bumi', 'Laut', 'Langit', 'Gunung'], correctIndex: 0, explanation: 'Kuasa ini digambarkan muncul dari bumi.' },
			{ question: 'Kemunculan dari bumi dipahami sebagai?', options: ['Wilayah baru dan relatif sepi', 'Kerajaan lama yang padat', 'Surga', 'Kota Babel'], correctIndex: 0, explanation: 'Pelajaran ini memahaminya sebagai wilayah baru.' },
			{ question: 'Kuasa ini memiliki berapa tanduk seperti anak domba?', options: ['Dua', 'Satu', 'Tiga', 'Sepuluh'], correctIndex: 0, explanation: 'Wahyu 13:11 menyebut dua tanduk seperti anak domba.' },
			{ question: 'Dua tanduk itu melambangkan?', options: ['Kebebasan beragama dan sipil', 'Perang dan ekonomi', 'Laut dan darat', 'Raja dan imam'], correctIndex: 0, explanation: 'Ini melambangkan dua kebebasan besar.' },
			{ question: 'Apa arti “berbicara seperti naga”?', options: ['Mulai memaksakan aturan yang menindas', 'Menjadi makin lembut', 'Tetap netral', 'Hanya mengganti lambang'], correctIndex: 0, explanation: 'Bahasa naga menunjuk pada tindakan keras dan pemaksaan.' },
			{ question: 'Apa risiko besar yang ditekankan pelajaran ini?', options: ['Kebebasan beragama terancam', 'Semua negara hilang', 'Tidak ada lagi bahasa', 'Gunung pindah'], correctIndex: 0, explanation: 'Nubuat ini memperingatkan ancaman terhadap kebebasan beragama.' },
			{ question: 'Apakah orang percaya boleh menaruh harapan tertinggi pada pemerintah?', options: ['Tidak', 'Ya', 'Hanya saat damai', 'Hanya saat krisis'], correctIndex: 0, explanation: 'Harapan tertinggi hanya pada Kerajaan Allah.' },
			{ question: 'Kerajaan yang benar-benar kekal adalah?', options: ['Kerajaan Allah', 'Kerajaan manusia', 'Kerajaan dagang', 'Kerajaan media'], correctIndex: 0, explanation: 'Hanya Kerajaan Allah yang kekal dan sempurna.' },
			{ question: 'Kepada siapa kita harus lebih taat?', options: ['Allah', 'Manusia', 'Diri sendiri', 'Tradisi'], correctIndex: 0, explanation: 'Kita harus lebih taat kepada Allah daripada kepada manusia.' },
			{ question: 'Pelajaran ini terutama mengajak kita untuk?', options: ['Tetap setia kepada Allah', 'Takut pada semua pemerintah', 'Abaikan nubuat', 'Ikut arus dunia'], correctIndex: 0, explanation: 'Fokusnya adalah kesetiaan kepada Allah di tengah perubahan dunia.' }
		]
	},
	{
		id: 22,
		title: 'Wanita yang "Lain"',
		subtitle: '4 langkah sederhana tentang Babel dalam kitab Wahyu',
		icon: '👸',
		color: 'from-purple-600 to-purple-800',
		finalAssessmentTitle: 'Ringkasan Akhir',
		finalAssessmentDescription: 'Jawab 10 pertanyaan sederhana. Kamu perlu minimal 7 jawaban benar untuk lulus.',
		passThreshold: 70,
		sections: [
			{
				title: '1. Dua wanita di Wahyu',
				content: 'Di kitab Wahyu ada dua wanita. Dalam nubuat, "wanita" melambangkan gereja/umat Allah. Wanita pertama berpakaian matahari (Wahyu 12) — gereja sejati Allah. Wanita kedua berpakaian ungu dan merah (Wahyu 17) — gereja yang murtad.',
				image: '👩',
				check: { question: 'Dalam nubuat Wahyu, wanita melambangkan?', options: ['Gereja atau umat', 'Negara saja', 'Gunung', 'Bintang'], correctIndex: 0, explanation: 'Pelajaran ini menjelaskan bahwa wanita adalah lambang gereja atau umat.' }
			},
			{
				title: '2. Babel: kebingungan agama',
				content: 'Wanita kedua disebut "Babel Besar." Babel berarti kebingungan. Ini melambangkan sistem keagamaan yang mencampurkan kebenaran Alkitab dengan tradisi manusia. Allah memanggil umat-Nya untuk keluar dari kebingungan ini.',
				verse: '"Keluarlah dari padanya, hai umat-Ku, supaya kamu jangan mengambil bagian dalam dosa-dosanya."',
				verseRef: 'Wahyu 18:4',
				image: '🏚️',
				check: { question: 'Apa arti Babel dalam pelajaran ini?', options: ['Kebingungan agama', 'Kedamaian sempurna', 'Kota surga', 'Kerajaan Daud'], correctIndex: 0, explanation: 'Babel melambangkan campuran kebenaran dan kesalahan.' }
			},
			{
				title: '3. Ciri-ciri Babel',
				content: 'Babel dicirikan oleh: mengubah hukum Allah, mengajarkan ajaran yang tidak sesuai Alkitab, campuran agama dan politik, dan menganiaya orang-orang yang setia kepada kebenaran. Ini bukan tentang orang-orangnya, tapi SISTEM-nya.',
				image: '📋',
				check: { question: 'Pelajaran ini menilai Babel terutama sebagai?', options: ['Sistem yang menyimpang', 'Satu keluarga', 'Bangunan tua saja', 'Kelompok malaikat'], correctIndex: 0, explanation: 'Fokusnya pada sistem keagamaan yang menyimpang, bukan pada individu tertentu.' }
			},
			{
				title: '4. Allah memanggil umat-Nya',
				content: 'Allah punya anak-anak yang tulus di semua gereja. Panggilan-Nya bukan untuk menghakimi orang, tapi untuk mengajak semua orang kembali kepada kebenaran Alkitab yang murni. Kasih dan kebenaran berjalan bersama.',
				image: '📢',
				check: { question: 'Apa panggilan Allah kepada umat-Nya?', options: ['Keluar dari kebingungan dan kembali pada Firman', 'Menghakimi semua orang', 'Diam saja', 'Mengikuti semua tradisi'], correctIndex: 0, explanation: 'Allah memanggil umat-Nya keluar dari Babel dan kembali kepada kebenaran.' }
			}
		],
		quiz: [
			{ question: 'Dalam nubuat, wanita melambangkan?', options: ['Gereja atau umat', 'Negara saja', 'Gunung', 'Pedang'], correctIndex: 0, explanation: 'Wanita adalah lambang umat atau gereja.' },
			{ question: 'Di Wahyu ada berapa wanita utama yang dibandingkan dalam pelajaran ini?', options: ['Dua', 'Satu', 'Tiga', 'Empat'], correctIndex: 0, explanation: 'Pelajaran ini menyorot dua wanita yang berbeda.' },
			{ question: 'Babel berarti?', options: ['Kebingungan', 'Kemenangan', 'Keheningan', 'Kesembuhan'], correctIndex: 0, explanation: 'Babel melambangkan kebingungan rohani.' },
			{ question: 'Babel mencampur apa?', options: ['Kebenaran Alkitab dan tradisi manusia', 'Air dan api', 'Bangsa dan bahasa', 'Siang dan malam'], correctIndex: 0, explanation: 'Masalah Babel adalah campuran kebenaran dan kesalahan.' },
			{ question: 'Pelajaran ini menilai Babel terutama sebagai?', options: ['Sistem yang menyimpang', 'Satu keluarga', 'Gedung kuno', 'Kelompok anak-anak'], correctIndex: 0, explanation: 'Ini berbicara tentang sistem, bukan sekadar orang-orangnya.' },
			{ question: 'Salah satu ciri Babel adalah?', options: ['Mencampur agama dan politik', 'Tunduk penuh pada Firman', 'Selalu sederhana', 'Tak pernah menekan siapa pun'], correctIndex: 0, explanation: 'Pelajaran ini menyorot campuran agama dan politik.' },
			{ question: 'Apakah Allah punya anak-anak yang tulus di berbagai tempat?', options: ['Ya', 'Tidak', 'Hanya di satu kota', 'Hanya di zaman lama'], correctIndex: 0, explanation: 'Allah memiliki anak-anak yang tulus di banyak tempat.' },
			{ question: 'Apa panggilan Allah dalam Wahyu 18:4?', options: ['Keluar dari Babel', 'Tetap di Babel', 'Abaikan semuanya', 'Sembunyikan iman'], correctIndex: 0, explanation: 'Allah memanggil umat-Nya keluar dari Babel.' },
			{ question: 'Bagaimana kita harus memperlakukan orang saat membahas Babel?', options: ['Dengan kasih dan kebenaran', 'Dengan hinaan', 'Dengan kebencian', 'Dengan kebohongan'], correctIndex: 0, explanation: 'Kasih dan kebenaran harus berjalan bersama.' },
			{ question: 'Tujuan pelajaran ini adalah?', options: ['Kembali kepada kebenaran Alkitab', 'Membesarkan tradisi manusia', 'Menghakimi semua orang', 'Membuat bingung'], correctIndex: 0, explanation: 'Allah mengajak kita kembali pada Firman yang murni.' }
		]
	},
	{
		id: 23,
		title: 'Mempelai Kristus',
		subtitle: '4 langkah sederhana tentang gereja sejati Allah',
		icon: '💍',
		color: 'from-rose-400 to-pink-600',
		finalAssessmentTitle: 'Ringkasan Akhir',
		finalAssessmentDescription: 'Jawab 10 pertanyaan sederhana. Kamu perlu minimal 7 jawaban benar untuk lulus.',
		passThreshold: 70,
		sections: [
			{
				title: '1. Gereja sebagai mempelai',
				content: 'Alkitab menggambarkan gereja sejati sebagai "mempelai" Kristus — indah, setia, dan murni. Gereja yang sejati mengasihi Yesus dan menaati semua perintah-Nya berdasarkan Alkitab.',
				verse: '"Marilah kita bersukacita dan bersorak-sorai dan memuliakan Dia! Karena hari perkawinan Anak Domba telah tiba."',
				verseRef: 'Wahyu 19:7',
				image: '👰',
				check: { question: 'Gereja sejati digambarkan sebagai?', options: ['Mempelai Kristus', 'Perusahaan besar', 'Tentara Romawi', 'Pasar'], correctIndex: 0, explanation: 'Alkitab menggambarkan gereja sejati sebagai mempelai Kristus.' }
			},
			{
				title: '2. Ciri-ciri gereja sejati',
				content: 'Wahyu 12:17 memberikan dua ciri utama gereja Allah di akhir zaman: (1) Menuruti perintah-perintah Allah (termasuk Sabat), dan (2) Memiliki kesaksian Yesus (roh nubuat). Ini adalah dua penanda yang jelas.',
				verse: '"Mereka yang menuruti perintah-perintah Allah dan memiliki kesaksian Yesus."',
				verseRef: 'Wahyu 12:17',
				image: '✅',
				check: { question: 'Salah satu ciri gereja sejati adalah?', options: ['Menuruti perintah Allah', 'Mengejar popularitas', 'Menolak Alkitab', 'Mengubah Injil'], correctIndex: 0, explanation: 'Wahyu 12:17 menegaskan ketaatan kepada perintah Allah.' }
			},
			{
				title: '3. Bukan tentang nama gereja',
				content: 'Yang penting bukan nama gerejanya, tapi apakah gereja itu mengajarkan dan mengikuti SELURUH kebenaran Alkitab. Allah mencari orang-orang yang tulus hati dan mau mengikut Dia sepenuhnya.',
				image: '💡',
				check: { question: 'Apa yang lebih penting daripada nama gereja?', options: ['Mengikuti seluruh kebenaran Alkitab', 'Ukuran gedung', 'Jumlah anggota', 'Musik yang terkenal'], correctIndex: 0, explanation: 'Yang terutama adalah kesetiaan kepada seluruh kebenaran Firman.' }
			},
			{
				title: '4. Panggilan untuk bergabung',
				content: 'Allah mengundang setiap orang untuk bergabung dengan umat-Nya yang setia — orang-orang yang mengasihi Yesus dan menaati seluruh kebenaran-Nya. Ini bukan tentang kesempurnaan, tapi tentang arah hidup kita.',
				image: '🤝',
				check: { question: 'Allah mengundang kita untuk?', options: ['Bergabung dengan umat-Nya yang setia', 'Hidup sendiri tanpa gereja', 'Mengejar nama besar', 'Menghindari kebenaran'], correctIndex: 0, explanation: 'Allah memanggil orang percaya untuk berdiri bersama umat yang setia.' }
			}
		],
		quiz: [
			{ question: 'Gereja sejati digambarkan sebagai?', options: ['Mempelai Kristus', 'Perusahaan', 'Tentara dagang', 'Kerajaan dunia'], correctIndex: 0, explanation: 'Gereja sejati adalah mempelai Kristus.' },
			{ question: 'Mempelai Kristus berarti gereja harus?', options: ['Setia kepada Yesus', 'Populer saja', 'Kaya raya', 'Netral terhadap kebenaran'], correctIndex: 0, explanation: 'Mempelai berbicara tentang kasih dan kesetiaan kepada Kristus.' },
			{ question: 'Salah satu ciri gereja akhir zaman adalah?', options: ['Menuruti perintah Allah', 'Mengabaikan Firman', 'Hanya besar jumlahnya', 'Tidak peduli hidup suci'], correctIndex: 0, explanation: 'Wahyu 12:17 menegaskan ketaatan kepada perintah Allah.' },
			{ question: 'Ciri lain gereja akhir zaman adalah?', options: ['Memiliki kesaksian Yesus', 'Memiliki gedung tertinggi', 'Mempunyai banyak uang', 'Selalu disukai dunia'], correctIndex: 0, explanation: 'Wahyu 12:17 juga menyebut kesaksian Yesus.' },
			{ question: 'Apa yang lebih penting daripada nama gereja?', options: ['Kesetiaan pada seluruh kebenaran Alkitab', 'Logo gereja', 'Musik paling ramai', 'Banyak cabang'], correctIndex: 0, explanation: 'Yang utama adalah kesetiaan kepada Firman Tuhan.' },
			{ question: 'Apakah Allah mencari orang yang tulus?', options: ['Ya', 'Tidak', 'Hanya tokoh besar', 'Hanya yang sempurna'], correctIndex: 0, explanation: 'Allah mencari hati yang tulus dan mau mengikuti-Nya.' },
			{ question: 'Apa ajakan pelajaran ini?', options: ['Bergabung dengan umat Allah yang setia', 'Hidup sendirian tanpa persekutuan', 'Ikut tradisi tanpa Firman', 'Cari gereja paling terkenal'], correctIndex: 0, explanation: 'Allah mengundang kita berdiri bersama umat yang setia.' },
			{ question: 'Apakah panggilan Allah menuntut kesempurnaan instan?', options: ['Tidak, tetapi arah hidup yang benar', 'Ya, harus sempurna dulu', 'Hanya untuk pendeta', 'Hanya untuk orang tua'], correctIndex: 0, explanation: 'Fokusnya adalah arah hidup yang setia kepada Yesus.' },
			{ question: 'Gereja sejati terutama mengasihi siapa?', options: ['Yesus', 'Dunia', 'Diri sendiri', 'Uang'], correctIndex: 0, explanation: 'Gereja sejati mengasihi dan mengikuti Yesus.' },
			{ question: 'Pelajaran ini terutama menolong kita mencari?', options: ['Umat yang setia pada Yesus dan Firman', 'Gedung terbesar', 'Panggung terbaik', 'Tempat paling nyaman'], correctIndex: 0, explanation: 'Fokusnya adalah gereja yang setia kepada Yesus dan Firman.' }
		]
	},
	{
		id: 24,
		title: 'Apakah Allah Mengilhami Peramal?',
		subtitle: '4 langkah sederhana tentang bahaya okultisme',
		icon: '🔮',
		color: 'from-violet-700 to-indigo-900',
		finalAssessmentTitle: 'Ringkasan Akhir',
		finalAssessmentDescription: 'Jawab 10 pertanyaan sederhana. Kamu perlu minimal 7 jawaban benar untuk lulus.',
		passThreshold: 70,
		sections: [
			{
				title: '1. Daya tarik hal gaib',
				content: 'Banyak orang tertarik dengan ramalan, horoskop, dan hal-hal gaib. Mereka ingin tahu masa depan atau berkomunikasi dengan orang mati. Tapi Alkitab sangat jelas: ini BERBAHAYA!',
				image: '⚠️',
				check: { question: 'Apakah ramalan dan hal gaib dianggap aman dalam pelajaran ini?', options: ['Tidak', 'Ya', 'Kadang-kadang aman', 'Hanya untuk hiburan'], correctIndex: 0, explanation: 'Pelajaran ini menegaskan bahwa hal gaib berbahaya.' }
			},
			{
				title: '2. Allah melarang okultisme',
				content: 'Allah dengan tegas melarang semua bentuk okultisme: meramal, sihir, berkomunikasi dengan "arwah," membaca bintang untuk nasib, dan sejenisnya. Mengapa? Karena semua itu berasal dari Setan, bukan dari Allah.',
				verse: '"Janganlah ada padamu seorang yang menenung, seorang peramal, seorang ahli nujum, seorang penyihir, seorang pemantera, ataupun seorang yang bertanya kepada arwah."',
				verseRef: 'Ulangan 18:10-11',
				image: '🚫',
				check: { question: 'Apa sikap Allah terhadap okultisme?', options: ['Allah melarangnya', 'Allah mendukungnya', 'Allah netral', 'Allah hanya diam'], correctIndex: 0, explanation: 'Ulangan 18 dengan tegas melarang semua bentuk okultisme.' }
			},
			{
				title: '3. “Arwah” sebenarnya iblis',
				content: 'Ingat pelajaran sebelumnya: orang mati tidak tahu apa-apa! Jadi "arwah" yang muncul di sesi spiritisme sebenarnya adalah iblis yang menyamar. Setan bisa menyamar menjadi siapa saja untuk menipu.',
				verse: '"Iblis sendiri menyamar sebagai malaikat terang."',
				verseRef: '2 Korintus 11:14',
				image: '😈',
				check: { question: 'Menurut pelajaran ini, “arwah” dalam spiritisme sebenarnya adalah?', options: ['Iblis yang menyamar', 'Orang mati sungguhan', 'Malaikat suci', 'Khayalan kosong saja'], correctIndex: 0, explanation: 'Setan dapat menyamar untuk menipu manusia.' }
			},
			{
				title: '4. Sumber bimbingan yang benar',
				content: 'Kita tidak perlu peramal atau horoskop. Allah memberikan Alkitab dan Roh Kudus untuk membimbing hidup kita. Firman Allah jauh lebih dapat dipercaya dari ramalan mana pun!',
				verse: '"Firman-Mu itu pelita bagi kakiku dan terang bagi jalanku."',
				verseRef: 'Mazmur 119:105',
				image: '💡',
				check: { question: 'Sumber bimbingan yang benar adalah?', options: ['Alkitab dan Roh Kudus', 'Horoskop', 'Peramal', 'Kartu tarot'], correctIndex: 0, explanation: 'Firman Tuhan dan Roh Kudus adalah bimbingan yang benar.' }
			}
		],
		quiz: [
			{ question: 'Apakah hal gaib dinilai aman dalam pelajaran ini?', options: ['Tidak', 'Ya', 'Kadang aman', 'Tergantung tren'], correctIndex: 0, explanation: 'Pelajaran ini menegaskan bahayanya.' },
			{ question: 'Apa sikap Allah terhadap okultisme?', options: ['Melarangnya', 'Mendukungnya', 'Tidak peduli', 'Menawarkannya'], correctIndex: 0, explanation: 'Allah melarang semua bentuk okultisme.' },
			{ question: 'Ulangan 18 melarang?', options: ['Ramalan, sihir, dan bertanya kepada arwah', 'Doa', 'Belajar Alkitab', 'Kerja jujur'], correctIndex: 0, explanation: 'Bagian itu tegas melarang praktek-praktek okultisme.' },
			{ question: 'Mengapa okultisme berbahaya?', options: ['Karena berasal dari Setan, bukan dari Allah', 'Karena terlalu mahal', 'Karena terlalu kuno', 'Karena sulit dipelajari'], correctIndex: 0, explanation: 'Sumbernya bukan Allah melainkan kuasa jahat.' },
			{ question: 'Apakah orang mati berkomunikasi dengan manusia hidup?', options: ['Tidak', 'Ya', 'Selalu', 'Hanya malam'], correctIndex: 0, explanation: 'Pelajaran sebelumnya menegaskan orang mati tidak sadar.' },
			{ question: 'Maka “arwah” spiritisme sebenarnya adalah?', options: ['Iblis yang menyamar', 'Orang mati sungguhan', 'Malaikat suci', 'Kerabat jauh'], correctIndex: 0, explanation: 'Setan dapat menyamar sebagai malaikat terang.' },
			{ question: 'Apa contoh sumber palsu yang harus dijauhi?', options: ['Horoskop', 'Alkitab', 'Doa', 'Nasihat rohani yang alkitabiah'], correctIndex: 0, explanation: 'Horoskop termasuk bentuk bimbingan palsu.' },
			{ question: 'Sumber bimbingan yang benar adalah?', options: ['Alkitab dan Roh Kudus', 'Kartu tarot', 'Peramal', 'Dukun'], correctIndex: 0, explanation: 'Firman Tuhan dan Roh Kudus adalah penuntun yang benar.' },
			{ question: 'Firman Tuhan disebut sebagai?', options: ['Pelita dan terang', 'Tebakan manusia', 'Mainan rohani', 'Rahasia gelap'], correctIndex: 0, explanation: 'Mazmur 119:105 menyebut Firman sebagai pelita dan terang.' },
			{ question: 'Pelajaran ini mengajak kita untuk?', options: ['Menolak okultisme dan mencari Tuhan', 'Mencoba hal gaib secukupnya', 'Percaya ramalan', 'Hidup tanpa Firman'], correctIndex: 0, explanation: 'Kita dipanggil menjauhi kuasa gelap dan mengikuti terang Tuhan.' }
		]
	},
	{
		id: 25,
		title: 'Dalam Tuhan Kita Percaya',
		subtitle: '4 langkah sederhana tentang penatalayanan dan persepuluhan',
		icon: '💰',
		color: 'from-emerald-600 to-green-700',
		finalAssessmentTitle: 'Ringkasan Akhir',
		finalAssessmentDescription: 'Jawab 10 pertanyaan sederhana. Kamu perlu minimal 7 jawaban benar untuk lulus.',
		passThreshold: 70,
		sections: [
			{
				title: '1. Segala sesuatu milik Allah',
				content: 'Semua yang kita miliki sebenarnya milik Allah — uang, kesehatan, waktu, kemampuan. Kita hanyalah "manajer" (pengelola) yang dipercaya Allah untuk mengurus milik-Nya. Ini disebut penatalayanan.',
				verse: '"TUHAN punya bumi dan segala isinya."',
				verseRef: 'Mazmur 24:1',
				image: '🌍',
				check: { question: 'Siapa pemilik sejati dari segala sesuatu?', options: ['Allah', 'Manusia', 'Pemerintah', 'Orang kaya'], correctIndex: 0, explanation: 'Mazmur 24:1 menegaskan bumi dan isinya milik Tuhan.' }
			},
			{
				title: '2. Persepuluhan: mengembalikan milik Allah',
				content: 'Allah meminta kita mengembalikan sepersepuluh (10%) dari penghasilan kita. Ini bukan sumbangan — ini mengembalikan apa yang memang milik Allah. Persepuluhan menunjukkan bahwa kita percaya Allah sebagai Pemilik segalanya.',
				verse: '"Bawalah seluruh persembahan persepuluhan itu ke dalam rumah perbendaharaan."',
				verseRef: 'Maleakhi 3:10',
				image: '🏦',
				check: { question: 'Berapa bagian persepuluhan?', options: ['10%', '5%', '50%', '1%'], correctIndex: 0, explanation: 'Persepuluhan adalah sepersepuluh dari penghasilan.' }
			},
			{
				title: '3. Janji Allah untuk pemberi',
				content: 'Allah berjanji bahwa Dia akan memberkati orang yang setia dalam persepuluhan. Dia berkata: "Ujilah Aku!" Ini satu-satunya tempat Allah mengajak kita menguji-Nya. Banyak orang sudah membuktikan kesetiaan Allah!',
				verse: '"Ujilah Aku, apakah Aku tidak membukakan bagimu tingkap-tingkap langit dan mencurahkan berkat kepadamu sampai berkelimpahan."',
				verseRef: 'Maleakhi 3:10',
				image: '🌧️',
				check: { question: 'Apa janji Allah bagi orang yang setia?', options: ['Berkat dari Tuhan', 'Tidak ada apa-apa', 'Kutuk pasti', 'Selalu kaya mendadak'], correctIndex: 0, explanation: 'Maleakhi 3:10 berisi janji berkat Tuhan.' }
			},
			{
				title: '4. Murah hati seperti Allah',
				content: 'Selain persepuluhan, Allah juga ingin kita menjadi orang yang murah hati. Memberi kepada orang miskin, mendukung pekerjaan Allah, dan membantu sesama. Orang yang memberi justru lebih diberkati dari yang menerima!',
				verse: '"Adalah lebih berbahagia memberi dari pada menerima."',
				verseRef: 'Kisah 20:35',
				image: '🤲',
				check: { question: 'Menurut Kisah 20:35, apa yang lebih berbahagia?', options: ['Memberi', 'Menerima', 'Menyimpan', 'Meminjam'], correctIndex: 0, explanation: 'Yesus mengajar bahwa memberi lebih berbahagia daripada menerima.' }
			}
		],
		quiz: [
			{ question: 'Siapa pemilik sejati segala sesuatu?', options: ['Allah', 'Manusia', 'Bank', 'Pemerintah'], correctIndex: 0, explanation: 'Semua yang kita punya pada dasarnya milik Allah.' },
			{ question: 'Kita adalah apa atas milik Allah?', options: ['Pengelola', 'Pemilik mutlak', 'Hakim', 'Pencipta'], correctIndex: 0, explanation: 'Kita hanyalah penatalayan atau pengelola.' },
			{ question: 'Persepuluhan berarti?', options: ['Sepersepuluh', 'Seperlima', 'Separuh', 'Semua uang'], correctIndex: 0, explanation: 'Persepuluhan adalah 10%.' },
			{ question: 'Persepuluhan terutama menunjukkan bahwa kita?', options: ['Percaya Allah pemilik segalanya', 'Takut bank', 'Ingin dipuji', 'Ingin kaya cepat'], correctIndex: 0, explanation: 'Persepuluhan menyatakan iman kepada Allah sebagai Pemilik.' },
			{ question: 'Maleakhi 3:10 berisi ajakan untuk?', options: ['Setia mengembalikan persepuluhan', 'Menyimpan semuanya', 'Mengabaikan rumah Tuhan', 'Berhenti memberi'], correctIndex: 0, explanation: 'Allah memanggil umat-Nya setia dalam persepuluhan.' },
			{ question: 'Apa janji Allah bagi yang setia?', options: ['Berkat dari Tuhan', 'Tidak ada janji', 'Kutuk pasti', 'Selalu tanpa masalah'], correctIndex: 0, explanation: 'Allah menjanjikan berkat-Nya.' },
			{ question: 'Selain persepuluhan, Allah ingin kita menjadi?', options: ['Murah hati', 'Kikir', 'Sombong', 'Tak peduli sesama'], correctIndex: 0, explanation: 'Allah ingin umat-Nya punya hati murah.' },
			{ question: 'Salah satu wujud kemurahan hati adalah?', options: ['Membantu sesama', 'Menutup hati', 'Mengabaikan orang susah', 'Pamer kekayaan'], correctIndex: 0, explanation: 'Kemurahan hati terlihat dari bantuan nyata kepada sesama.' },
			{ question: 'Menurut Kisah 20:35, yang lebih berbahagia adalah?', options: ['Memberi', 'Menerima', 'Meminjam', 'Menghitung uang'], correctIndex: 0, explanation: 'Yesus berkata memberi lebih berbahagia.' },
			{ question: 'Pelajaran ini terutama mengajak kita untuk?', options: ['Percaya Tuhan dengan harta dan hidup', 'Mengabdi pada uang', 'Takut memberi', 'Hanya memikirkan diri sendiri'], correctIndex: 0, explanation: 'Penatalayanan adalah hidup yang percaya kepada Allah.' }
		]
	},
	{
		id: 26,
		title: 'Kasih yang Mengubahkan',
		subtitle: '5 langkah sederhana tentang hidup baru dalam kasih Allah',
		icon: '🦋',
		color: 'from-pink-500 to-purple-600',
		finalAssessmentTitle: 'Ringkasan Akhir',
		finalAssessmentDescription: 'Jawab 10 pertanyaan sederhana. Kamu perlu minimal 7 jawaban benar untuk lulus.',
		passThreshold: 70,
		sections: [
			{
				title: '1. Kasih Allah tidak pernah berubah',
				content: 'Apapun yang sudah kamu lakukan, kasih Allah tetap sama. Dia tidak mengasihi kamu karena kamu baik. Dia mengasihi kamu karena DIA baik. Tidak ada dosa yang terlalu besar untuk diampuni Allah.',
				verse: '"Aku mengasihi engkau dengan kasih yang kekal, sebab itu Aku melanjutkan kasih setia-Ku kepadamu."',
				verseRef: 'Yeremia 31:3',
				image: '❤️',
				check: { question: 'Apakah kasih Allah berubah-ubah?', options: ['Tidak', 'Ya', 'Hanya saat kita baik', 'Hanya untuk orang tertentu'], correctIndex: 0, explanation: 'Kasih Allah bersumber dari karakter-Nya yang tetap.' }
			},
			{
				title: '2. Lahir baru',
				content: 'Yesus berkata kita harus "lahir baru" — bukan secara fisik, tapi secara rohani. Ini artinya membiarkan Roh Kudus mengubah hati dan pikiran kita dari dalam. Orang lama mati, orang baru hidup!',
				verse: '"Jikalau seorang tidak dilahirkan kembali, ia tidak dapat melihat Kerajaan Allah."',
				verseRef: 'Yohanes 3:3',
				image: '🔄',
				check: { question: 'Lahir baru berarti?', options: ['Perubahan hati oleh Roh Kudus', 'Menjadi bayi lagi', 'Pindah rumah', 'Ganti nama'], correctIndex: 0, explanation: 'Lahir baru adalah perubahan rohani dari dalam.' }
			},
			{
				title: '3. Proses perubahan',
				content: 'Perubahan hidup tidak terjadi dalam semalam. Ini proses setiap hari — disebut "pengudusan." Setiap hari kita belajar lebih mirip Yesus. Kadang jatuh, tapi selalu bangkit lagi dengan pertolongan Allah.',
				verse: '"Kita semua mencerminkan kemuliaan Tuhan dengan wajah yang tidak berselubung. Dan kita diubah menjadi serupa dengan gambar-Nya."',
				verseRef: '2 Korintus 3:18',
				image: '🪜',
				check: { question: 'Proses menjadi makin mirip Yesus disebut?', options: ['Pengudusan', 'Pamer rohani', 'Ramalan', 'Keberuntungan'], correctIndex: 0, explanation: 'Pengudusan adalah pertumbuhan rohani setiap hari.' }
			},
			{
				title: '4. Dari ulat menjadi kupu-kupu',
				content: 'Bayangkan ulat bulu yang masuk ke kepompong dan keluar menjadi kupu-kupu yang indah. Begitulah kasih Allah mengubah kita! Kita mungkin merasa seperti ulat sekarang, tapi Allah sedang mengerjakan sesuatu yang indah dalam hidup kita.',
				image: '🦋',
				check: { question: 'Gambaran ulat menjadi kupu-kupu melukiskan?', options: ['Perubahan hidup oleh kasih Allah', 'Perjalanan wisata', 'Pergantian musim', 'Dongeng biasa'], correctIndex: 0, explanation: 'Kasih Allah sanggup mengubah hidup yang lemah menjadi indah.' }
			},
			{
				title: '5. Bagikan kasih-Nya',
				content: 'Ketika kasih Allah mengubah hidupmu, kamu pasti ingin membagikannya kepada orang lain. Ceritakan apa yang Yesus sudah lakukan untukmu. Kasih yang kamu terima akan mengalir melalui kamu untuk memberkati orang lain.',
				verse: '"Kita mengasihi, karena Allah lebih dahulu mengasihi kita."',
				verseRef: '1 Yohanes 4:19',
				image: '🌊',
				check: { question: 'Mengapa kita bisa mengasihi orang lain?', options: ['Karena Allah lebih dahulu mengasihi kita', 'Karena dipaksa', 'Karena manusia selalu baik', 'Karena ingin dipuji'], correctIndex: 0, explanation: 'Kasih kita lahir sebagai jawaban atas kasih Allah.' }
			}
		],
		quiz: [
			{ question: 'Apakah kasih Allah berubah-ubah?', options: ['Tidak', 'Ya', 'Hanya saat kita taat', 'Hanya saat kita sukses'], correctIndex: 0, explanation: 'Kasih Allah tetap karena karakter-Nya tetap.' },
			{ question: 'Apakah ada dosa yang terlalu besar untuk diampuni Allah?', options: ['Tidak ada', 'Ada banyak', 'Hanya dosa kecil diampuni', 'Tergantung suasana'], correctIndex: 0, explanation: 'Kasih dan pengampunan Allah lebih besar dari dosa manusia yang bertobat.' },
			{ question: 'Lahir baru berarti?', options: ['Perubahan hati oleh Roh Kudus', 'Menjadi bayi lagi', 'Pindah kota', 'Ganti nama'], correctIndex: 0, explanation: 'Lahir baru adalah perubahan rohani.' },
			{ question: 'Siapa yang mengubah hati kita?', options: ['Roh Kudus', 'Nasib', 'Uang', 'Popularitas'], correctIndex: 0, explanation: 'Roh Kudus bekerja mengubah hati dan pikiran.' },
			{ question: 'Proses menjadi makin mirip Yesus disebut?', options: ['Pengudusan', 'Permainan', 'Sihir', 'Ramalan'], correctIndex: 0, explanation: 'Pengudusan adalah pertumbuhan rohani harian.' },
			{ question: 'Apakah perubahan hidup biasanya terjadi seketika penuh?', options: ['Tidak, ini proses', 'Ya, selalu instan', 'Hanya untuk nabi', 'Tidak pernah terjadi'], correctIndex: 0, explanation: 'Pertumbuhan rohani adalah proses hari demi hari.' },
			{ question: 'Gambaran ulat menjadi kupu-kupu melukiskan?', options: ['Perubahan oleh kasih Allah', 'Cuaca', 'Olahraga', 'Pekerjaan tangan'], correctIndex: 0, explanation: 'Allah sanggup mengubah hidup dengan indah.' },
			{ question: 'Saat jatuh, orang percaya harus?', options: ['Bangkit lagi dengan pertolongan Tuhan', 'Menyerah', 'Menjauh dari Yesus', 'Menyalahkan Tuhan'], correctIndex: 0, explanation: 'Tuhan menolong kita bangkit dan bertumbuh lagi.' },
			{ question: 'Mengapa kita bisa mengasihi orang lain?', options: ['Karena Allah lebih dahulu mengasihi kita', 'Karena dipaksa', 'Karena ingin pujian', 'Karena manusia sempurna'], correctIndex: 0, explanation: 'Kasih kita adalah jawaban atas kasih Allah.' },
			{ question: 'Pelajaran ini terutama menunjukkan bahwa?', options: ['Kasih Allah mengubah hidup', 'Perubahan itu mustahil', 'Kita harus kuat sendiri', 'Hanya orang hebat yang bisa berubah'], correctIndex: 0, explanation: 'Kasih Allah yang bekerja mengubah hidup manusia.' }
		]
	},
	{
		id: 27,
		title: 'Tidak Ada Jalan Kembali',
		subtitle: '6 langkah sederhana untuk mengambil keputusan bagi Yesus',
		icon: '🚀',
		color: 'from-indigo-600 to-blue-800',
		finalAssessmentTitle: 'Ringkasan Akhir',
		finalAssessmentDescription: 'Jawab 10 pertanyaan sederhana. Kamu perlu minimal 7 jawaban benar untuk lulus.',
		passThreshold: 70,
		sections: [
			{
				title: '1. Kamu sudah belajar banyak!',
				content: 'Selamat! Kamu sudah menyelesaikan 27 pelajaran Alkitab! Kamu sudah belajar tentang kasih Allah, rencana keselamatan, nubuat, dan kebenaran-kebenaran penting lainnya. Sekarang pertanyaannya: apa yang akan kamu lakukan dengan semua ini?',
				image: '🎓',
				check: { question: 'Setelah belajar banyak hal tentang Alkitab, apa yang perlu dilakukan?', options: ['Mengambil keputusan', 'Melupakan semuanya', 'Diam tanpa respon', 'Mencari hiburan lain'], correctIndex: 0, explanation: 'Pengetahuan Firman menuntut tanggapan hati dan keputusan.' }
			},
			{
				title: '2. Saatnya memutuskan',
				content: 'Setiap orang harus membuat keputusan: ikut Yesus atau tidak. Tidak ada posisi "netral" — tidak memilih berarti menolak. Tapi ingat: memilih Yesus adalah keputusan TERBAIK yang pernah kamu buat!',
				verse: '"Pilihlah pada hari ini kepada siapa kamu akan beribadah. Tetapi aku dan seisi rumahku, kami akan beribadah kepada TUHAN!"',
				verseRef: 'Yosua 24:15',
				image: '🔀',
				check: { question: 'Apa keputusan terpenting yang ditekankan pelajaran ini?', options: ['Mengikut Yesus', 'Memilih rumah', 'Memilih pakaian', 'Memilih liburan'], correctIndex: 0, explanation: 'Pilihan untuk mengikut Yesus adalah keputusan hidup terbesar.' }
			},
			{
				title: '3. Baptisan: langkah iman',
				content: 'Jika kamu belum dibaptis, pertimbangkan untuk mengambil langkah iman ini. Baptisan adalah pernyataan publik bahwa kamu memilih mengikut Yesus. Kamu "dikuburkan" dalam air (hidup lama) dan bangkit dari air (hidup baru).',
				verse: '"Kita telah dikuburkan bersama-sama dengan Dia oleh baptisan dalam kematian, supaya kita hidup dalam hidup yang baru."',
				verseRef: 'Roma 6:4',
				image: '💧',
				check: { question: 'Baptisan melambangkan?', options: ['Hidup lama mati dan hidup baru dimulai', 'Mandi biasa', 'Masuk organisasi', 'Permainan air'], correctIndex: 0, explanation: 'Roma 6:4 menjelaskan makna baptisan sebagai hidup baru dalam Kristus.' }
			},
			{
				title: '4. Bergabung dengan keluarga Allah',
				content: 'Iman Kristen bukan perjalanan sendiri. Kamu membutuhkan keluarga rohani — gereja yang mengajarkan seluruh kebenaran Alkitab. Bergabunglah dengan komunitas yang mendukung pertumbuhanmu.',
				verse: '"Janganlah kita menjauhkan diri dari pertemuan-pertemuan ibadah kita."',
				verseRef: 'Ibrani 10:25',
				image: '🏠',
				check: { question: 'Apakah iman Kristen dijalani sendirian?', options: ['Tidak', 'Ya', 'Hanya untuk pendeta', 'Hanya saat muda'], correctIndex: 0, explanation: 'Kita membutuhkan keluarga rohani dan persekutuan umat Tuhan.' }
			},
			{
				title: '5. Kebiasaan harian',
				content: 'Untuk bertumbuh dalam iman, bangun kebiasaan harian: (1) Baca Alkitab setiap hari, (2) Berdoa setiap pagi dan malam, (3) Bagikan imanmu kepada orang lain, (4) Pelihara hari Sabat, (5) Hidup sehat untuk kemuliaan Allah.',
				image: '📅',
				check: { question: 'Salah satu kebiasaan harian orang percaya adalah?', options: ['Baca Alkitab dan berdoa', 'Menghindari Firman', 'Menjauh dari ibadah', 'Hidup tanpa tujuan'], correctIndex: 0, explanation: 'Pertumbuhan rohani memerlukan kebiasaan harian yang sehat.' }
			},
			{
				title: '6. Sampai jumpa di surga!',
				content: 'Perjalanan ini bukan akhir — ini baru permulaan! Yesus sedang menyiapkan tempat untukmu di surga. Suatu hari nanti, kita akan berjumpa dengan Yesus muka dengan muka. Tidak ada sukacita yang lebih besar dari itu. Terus ikut Yesus — tidak ada jalan kembali!',
				verse: '"Aku yakin, bahwa Dia yang memulai pekerjaan yang baik di antara kamu, akan meneruskannya sampai pada hari Kristus Yesus."',
				verseRef: 'Filipi 1:6',
				image: '🌅',
				check: { question: 'Apakah perjalanan dengan Yesus berakhir di lesson 27?', options: ['Tidak, ini baru permulaan', 'Ya, sudah selesai semua', 'Hanya sampai baptisan', 'Hanya untuk guru Alkitab'], correctIndex: 0, explanation: 'Filipi 1:6 menegaskan Tuhan meneruskan pekerjaan-Nya dalam hidup kita.' }
			}
		],
		quiz: [
			{ question: 'Setelah belajar banyak dari Alkitab, kita perlu?', options: ['Mengambil keputusan bagi Yesus', 'Melupakan semuanya', 'Menunggu tanpa respon', 'Hidup seperti biasa'], correctIndex: 0, explanation: 'Firman Tuhan meminta jawaban hati.' },
			{ question: 'Keputusan terpenting dalam hidup adalah?', options: ['Mengikut Yesus', 'Memilih rumah', 'Memilih mobil', 'Memilih warna baju'], correctIndex: 0, explanation: 'Mengikut Yesus adalah keputusan paling besar.' },
			{ question: 'Apakah ada posisi benar-benar netral terhadap Yesus?', options: ['Tidak', 'Ya', 'Hanya untuk anak-anak', 'Hanya saat sibuk'], correctIndex: 0, explanation: 'Tidak memilih pun pada akhirnya adalah penolakan.' },
			{ question: 'Baptisan melambangkan?', options: ['Hidup lama mati dan hidup baru dimulai', 'Mandi biasa', 'Permainan air', 'Upacara kosong'], correctIndex: 0, explanation: 'Baptisan adalah lambang hidup baru bersama Kristus.' },
			{ question: 'Iman Kristen dijalani bersama?', options: ['Keluarga Allah', 'Tidak butuh siapa-siapa', 'Hanya lewat internet', 'Tanpa ibadah'], correctIndex: 0, explanation: 'Kita butuh persekutuan dan keluarga rohani.' },
			{ question: 'Salah satu kebiasaan harian penting adalah?', options: ['Baca Alkitab dan berdoa', 'Menjauh dari Firman', 'Hidup tanpa arah', 'Menghindari ibadah'], correctIndex: 0, explanation: 'Pertumbuhan rohani perlu kebiasaan harian yang sehat.' },
			{ question: 'Apakah membagikan iman termasuk kebiasaan orang percaya?', options: ['Ya', 'Tidak', 'Hanya untuk pendeta', 'Hanya untuk guru'], correctIndex: 0, explanation: 'Orang percaya dipanggil membagikan kabar baik.' },
			{ question: 'Apa yang Yesus sedang lakukan sekarang menurut pelajaran ini?', options: ['Menyiapkan tempat bagi kita', 'Melupakan kita', 'Tidur', 'Tidak melakukan apa-apa'], correctIndex: 0, explanation: 'Yesus menyiapkan tempat bagi umat-Nya.' },
			{ question: 'Setelah lesson 27, perjalanan rohani adalah?', options: ['Baru permulaan', 'Sudah selesai total', 'Tidak penting lagi', 'Boleh berhenti'], correctIndex: 0, explanation: 'Perjalanan dengan Yesus terus berlanjut.' },
			{ question: 'Pelajaran terakhir ini terutama mengajak kita untuk?', options: ['Berkomitmen penuh mengikut Yesus', 'Menunda keputusan', 'Kembali ke hidup lama', 'Takut mengambil langkah'], correctIndex: 0, explanation: 'Ini adalah ajakan untuk setia mengikut Yesus tanpa mundur.' }
		]
	}
];

export const lessonSourceMetadataById: Record<number, LessonSource> = {
	1: {
		provider: 'Amazing Facts',
		series: 'Bible Study Guides',
		lessonNumber: 1,
		titleEn: 'Is There Anything Left You Can Trust?',
		url: 'https://www.amazingfacts.org/study/bible-study-guides/is-there-anything-left-you-can-trust/'
	},
	2: {
		provider: 'Amazing Facts',
		series: 'Bible Study Guides',
		lessonNumber: 2,
		titleEn: 'Did God Create the Devil?',
		url: 'https://www.amazingfacts.org/study/bible-study-guides/did-god-create-the-devil/'
	},
	3: {
		provider: 'Amazing Facts',
		series: 'Bible Study Guides',
		lessonNumber: 3,
		titleEn: 'Saved from Certain Death',
		url: 'https://www.amazingfacts.org/study/bible-study-guides/saved-from-certain-death/'
	},
	4: {
		provider: 'Amazing Facts',
		series: 'Bible Study Guides',
		lessonNumber: 4,
		titleEn: 'A Colossal City in Space',
		url: 'https://www.amazingfacts.org/study/bible-study-guides/a-colossal-city-in-space/'
	},
	5: {
		provider: 'Amazing Facts',
		series: 'Bible Study Guides',
		lessonNumber: 5,
		titleEn: 'Keys for a Happy Marriage',
		url: 'https://www.amazingfacts.org/study/bible-study-guides/keys-for-a-happy-marriage/'
	},
	6: {
		provider: 'Amazing Facts',
		series: 'Bible Study Guides',
		lessonNumber: 6,
		titleEn: 'Written in Stone!',
		url: 'https://www.amazingfacts.org/study/bible-study-guides/written-in-stone/'
	},
	7: {
		provider: 'Amazing Facts',
		series: 'Bible Study Guides',
		lessonNumber: 7,
		titleEn: 'The Lost Day of History',
		url: 'https://www.amazingfacts.org/study/bible-study-guides/the-lost-day-of-history/'
	},
	8: {
		provider: 'Amazing Facts',
		series: 'Bible Study Guides',
		lessonNumber: 8,
		titleEn: 'Ultimate Deliverance',
		url: 'https://www.amazingfacts.org/study/bible-study-guides/ultimate-deliverance/'
	},
	9: {
		provider: 'Amazing Facts',
		series: 'Bible Study Guides',
		lessonNumber: 9,
		titleEn: 'Purity and Power!',
		url: 'https://www.amazingfacts.org/study/bible-study-guides/purity-and-power/'
	},
	10: {
		provider: 'Amazing Facts',
		series: 'Bible Study Guides',
		lessonNumber: 10,
		titleEn: 'Are the Dead Really Dead?',
		url: 'https://www.amazingfacts.org/study/bible-study-guides/are-the-dead-really-dead/'
	},
	11: {
		provider: 'Amazing Facts',
		series: 'Bible Study Guides',
		lessonNumber: 11,
		titleEn: 'Is the Devil in Charge of Hell?',
		url: 'https://www.amazingfacts.org/study/bible-study-guides/is-the-devil-in-charge-of-hell/'
	},
	12: {
		provider: 'Amazing Facts',
		series: 'Bible Study Guides',
		lessonNumber: 12,
		titleEn: '1,000 Years of Peace',
		url: 'https://www.amazingfacts.org/study/bible-study-guides/1000-years-of-peace/'
	},
	13: {
		provider: 'Amazing Facts',
		series: 'Bible Study Guides',
		lessonNumber: 13,
		titleEn: "God's Free Health Plan",
		url: 'https://www.amazingfacts.org/study/bible-study-guides/gods-free-health-plan/'
	},
	14: {
		provider: 'Amazing Facts',
		series: 'Bible Study Guides',
		lessonNumber: 14,
		titleEn: 'Is Obedience Legalism?',
		url: 'https://www.amazingfacts.org/study/bible-study-guides/is-obedience-legalism/'
	},
	15: {
		provider: 'Amazing Facts',
		series: 'Bible Study Guides',
		lessonNumber: 15,
		titleEn: 'Who Is the Antichrist?',
		url: 'https://www.amazingfacts.org/study/bible-study-guides/who-is-the-antichrist/'
	},
	16: {
		provider: 'Amazing Facts',
		series: 'Bible Study Guides',
		lessonNumber: 16,
		titleEn: 'Angel Messages from Space',
		url: 'https://www.amazingfacts.org/study/bible-study-guides/angel-messages-from-space/'
	},
	17: {
		provider: 'Amazing Facts',
		series: 'Bible Study Guides',
		lessonNumber: 17,
		titleEn: 'God Drew the Plans',
		url: 'https://www.amazingfacts.org/study/bible-study-guides/god-drew-the-plans/'
	},
	18: {
		provider: 'Amazing Facts',
		series: 'Bible Study Guides',
		lessonNumber: 18,
		titleEn: 'Right on Time!',
		url: 'https://www.amazingfacts.org/study/bible-study-guides/right-on-time-prophetic-appointments-revealed/'
	},
	19: {
		provider: 'Amazing Facts',
		series: 'Bible Study Guides',
		lessonNumber: 19,
		titleEn: 'The Final Judgment',
		url: 'https://www.amazingfacts.org/study/bible-study-guides/the-final-judgment/'
	},
	20: {
		provider: 'Amazing Facts',
		series: 'Bible Study Guides',
		lessonNumber: 20,
		titleEn: 'The Mark of the Beast',
		url: 'https://www.amazingfacts.org/study/bible-study-guides/the-mark-of-the-beast/'
	},
	21: {
		provider: 'Amazing Facts',
		series: 'Bible Study Guides',
		lessonNumber: 21,
		titleEn: 'The USA in Bible Prophecy',
		url: 'https://www.amazingfacts.org/study/bible-study-guides/the-usa-in-bible-prophecy/'
	},
	22: {
		provider: 'Amazing Facts',
		series: 'Bible Study Guides',
		lessonNumber: 22,
		titleEn: 'The Other Woman',
		url: 'https://www.amazingfacts.org/study/bible-study-guides/the-other-woman/'
	},
	23: {
		provider: 'Amazing Facts',
		series: 'Bible Study Guides',
		lessonNumber: 23,
		titleEn: 'The Bride of Christ',
		url: 'https://www.amazingfacts.org/study/bible-study-guides/the-bride-of-christ/'
	},
	24: {
		provider: 'Amazing Facts',
		series: 'Bible Study Guides',
		lessonNumber: 24,
		titleEn: 'Does God Inspire Astrologers and Psychics?',
		url: 'https://www.amazingfacts.org/study/bible-study-guides/does-god-inspire-astrologers-and-psychics/'
	},
	25: {
		provider: 'Amazing Facts',
		series: 'Bible Study Guides',
		lessonNumber: 25,
		titleEn: 'In God We Trust?',
		url: 'https://www.amazingfacts.org/study/bible-study-guides/in-god-we-trust/'
	},
	26: {
		provider: 'Amazing Facts',
		series: 'Bible Study Guides',
		lessonNumber: 26,
		titleEn: 'A Love that Transforms',
		url: 'https://www.amazingfacts.org/study/bible-study-guides/a-love-that-transforms/'
	},
	27: {
		provider: 'Amazing Facts',
		series: 'Bible Study Guides',
		lessonNumber: 27,
		titleEn: 'No Turning Back',
		url: 'https://www.amazingfacts.org/study/bible-study-guides/no-turning-back/'
	}
};

export const lessons: Lesson[] = baseLessons.map((lesson) => ({
	...lesson,
	source: lessonSourceMetadataById[lesson.id]
}));
