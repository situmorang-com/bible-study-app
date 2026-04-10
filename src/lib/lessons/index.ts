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
}

// =============================================================================
// PELAJARAN ALKITAB AMAZING FACTS — 27 Pelajaran
// Bahasa Indonesia sederhana untuk usia 12 tahun & komunitas Tuli
// =============================================================================

export const lessons: Lesson[] = [
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
		subtitle: 'Dari mana asal kejahatan di dunia ini?',
		icon: '😈',
		color: 'from-red-600 to-rose-800',
		sections: [
			{
				title: 'Pertanyaan Besar',
				content: 'Pernahkah kamu bertanya: Kalau Tuhan itu baik, mengapa ada kejahatan? Mengapa ada perang, penyakit, dan kesedihan? Ini adalah pertanyaan yang sangat penting. Jawabannya ada di Alkitab.',
				image: '❓'
			},
			{
				title: 'Malaikat yang Paling Indah',
				content: 'Dulu di surga, ada malaikat yang paling indah namanya Lusifer. Dia sangat pintar dan cantik. Allah menciptakan dia sempurna. Tapi suatu hari, Lusifer mulai sombong dan iri kepada Allah.',
				verse: '"Engkau yang tadinya penuh hikmat dan maha indah! Engkau bersifat sempurna sejak hari penciptaanmu sampai terdapat kecurangan padamu."',
				verseRef: 'Yehezkiel 28:12,15',
				image: '👼'
			},
			{
				title: 'Dosa Pertama: Kesombongan',
				content: 'Lusifer ingin menjadi sama seperti Allah. Dia tidak mau taat. Dia mulai membisikkan kebohongan kepada malaikat-malaikat lain supaya mereka ikut melawan Allah. Sepertiga malaikat memilih ikut Lusifer.',
				verse: '"Nah, engkau berkata dalam hatimu: Aku hendak naik ke langit. Aku hendak mendirikan takhtaku mengatasi bintang-bintang Allah."',
				verseRef: 'Yesaya 14:13',
				image: '💔'
			},
			{
				title: 'Perang di Surga',
				content: 'Terjadi perang di surga! Mikael (Yesus) dan malaikat-malaikat-Nya melawan Lusifer (yang sekarang disebut Setan) dan malaikat-malaikatnya. Setan kalah dan dibuang dari surga ke bumi.',
				verse: '"Maka terjadilah peperangan di sorga. Mikael dan malaikat-malaikatnya berperang melawan naga itu."',
				verseRef: 'Wahyu 12:7',
				image: '⚔️'
			},
			{
				title: 'Setan di Bumi',
				content: 'Setelah dibuang ke bumi, Setan menipu Adam dan Hawa di taman Eden. Dia menyamar sebagai ular dan membuat mereka tidak taat kepada Allah. Sejak saat itu, dosa masuk ke dunia.',
				verse: '"Si ular purba itu, yang disebut Iblis atau Setan, yang menyesatkan seluruh dunia."',
				verseRef: 'Wahyu 12:9',
				image: '🐍'
			},
			{
				title: 'Mengapa Allah Tidak Langsung Membunuh Setan?',
				content: 'Allah punya alasan yang bijak. Kalau Allah langsung menghancurkan Setan, malaikat lain akan takut dan melayani Allah karena takut, bukan karena kasih. Allah ingin semua makhluk melihat sendiri akibat buruk dari dosa. Allah ingin kita memilih Dia karena kasih.',
				image: '🤔'
			},
			{
				title: 'Yesus Sudah Menang!',
				content: 'Kabar baiknya: Yesus sudah mengalahkan Setan di kayu salib! Suatu hari nanti, dosa dan Setan akan dihancurkan selamanya. Tidak akan ada lagi penderitaan, air mata, atau kematian. Allah akan membuat semuanya baru!',
				verse: '"Ia akan menghapus segala air mata dari mata mereka, dan maut tidak akan ada lagi."',
				verseRef: 'Wahyu 21:4',
				image: '🏆'
			}
		],
		quiz: [
			{
				question: 'Siapa nama malaikat yang memberontak melawan Allah?',
				options: ['Mikael', 'Gabriel', 'Lusifer', 'Rafael'],
				correctIndex: 2,
				explanation: 'Lusifer adalah malaikat paling indah yang menjadi sombong dan memberontak melawan Allah.'
			},
			{
				question: 'Apa dosa pertama Lusifer?',
				options: ['Mencuri', 'Kesombongan — ingin menjadi seperti Allah', 'Berbohong', 'Malas'],
				correctIndex: 1,
				explanation: 'Lusifer ingin menjadi sama seperti Allah. Kesombongan adalah dosa pertama di alam semesta.'
			},
			{
				question: 'Berapa bagian malaikat yang ikut Lusifer memberontak?',
				options: ['Setengah', 'Sepertiga', 'Seperempat', 'Semua'],
				correctIndex: 1,
				explanation: 'Sepertiga malaikat memilih ikut Lusifer melawan Allah (Wahyu 12:4).'
			},
			{
				question: 'Mengapa Allah tidak langsung menghancurkan Setan?',
				options: ['Allah tidak cukup kuat', 'Supaya malaikat melayani karena kasih, bukan takut', 'Allah tidak peduli', 'Setan bersembunyi'],
				correctIndex: 1,
				explanation: 'Allah ingin semua makhluk memilih Dia karena kasih, bukan karena takut.'
			},
			{
				question: 'Siapa yang sudah mengalahkan Setan?',
				options: ['Malaikat Gabriel', 'Manusia', 'Yesus di kayu salib', 'Belum ada'],
				correctIndex: 2,
				explanation: 'Yesus sudah mengalahkan Setan di kayu salib! Dan suatu hari Setan akan dihancurkan selamanya.'
			}
		]
	},
	{
		id: 3,
		title: 'Diselamatkan dari Kematian Pasti',
		subtitle: 'Rencana keselamatan yang luar biasa dari Allah',
		icon: '🛟',
		color: 'from-emerald-500 to-teal-700',
		sections: [
			{
				title: 'Masalah Besar Manusia',
				content: 'Semua manusia punya masalah yang sama: DOSA. Dosa adalah melanggar hukum Allah. Setiap kita pernah berbohong, marah, iri, atau egois. Upah dosa adalah maut — artinya dosa membawa kematian kekal.',
				verse: '"Karena semua orang telah berbuat dosa dan telah kehilangan kemuliaan Allah."',
				verseRef: 'Roma 3:23',
				image: '💔'
			},
			{
				title: 'Kita Tidak Bisa Menyelamatkan Diri Sendiri',
				content: 'Bayangkan kamu jatuh ke lubang yang sangat dalam. Kamu tidak bisa keluar sendiri, tidak peduli seberapa kuat kamu mencoba. Begitulah dosa. Perbuatan baik kita tidak cukup untuk menyelamatkan kita. Kita butuh seseorang dari luar untuk menolong.',
				image: '🕳️'
			},
			{
				title: 'Allah Punya Rencana',
				content: 'Sebelum dunia diciptakan, Allah sudah tahu manusia akan berdosa. Dan Dia sudah menyiapkan rencana penyelamatan! Allah begitu mengasihi kita sehingga Dia mengirimkan Anak-Nya yang tunggal, Yesus Kristus, untuk mati menggantikan kita.',
				verse: '"Karena begitu besar kasih Allah akan dunia ini, sehingga Ia telah mengaruniakan Anak-Nya yang tunggal, supaya setiap orang yang percaya kepada-Nya tidak binasa, melainkan beroleh hidup yang kekal."',
				verseRef: 'Yohanes 3:16',
				image: '❤️'
			},
			{
				title: 'Yesus Mati Menggantikan Kita',
				content: 'Yesus tidak pernah berdosa sekalipun. Dia sempurna. Tapi Dia rela mati di kayu salib untuk menanggung hukuman dosa kita. Bayangkan: kamu yang bersalah, tapi Yesus yang dihukum. Itu namanya kasih yang luar biasa!',
				verse: '"Akan tetapi Allah menunjukkan kasih-Nya kepada kita, oleh karena Kristus telah mati untuk kita, ketika kita masih berdosa."',
				verseRef: 'Roma 5:8',
				image: '✝️'
			},
			{
				title: 'Keselamatan itu Gratis!',
				content: 'Keselamatan tidak bisa dibeli dengan uang atau didapatkan dengan perbuatan baik. Keselamatan adalah HADIAH gratis dari Allah. Yang perlu kamu lakukan hanyalah: percaya kepada Yesus, mengaku dosamu, dan menerima pengampunan-Nya.',
				verse: '"Sebab karena kasih karunia kamu diselamatkan oleh iman; itu bukan hasil usahamu, tetapi pemberian Allah."',
				verseRef: 'Efesus 2:8',
				image: '🎁'
			},
			{
				title: 'Tiga Langkah Sederhana',
				content: '1. AKUI bahwa kamu berdosa dan butuh Juru Selamat. 2. PERCAYA bahwa Yesus sudah mati untuk dosamu dan bangkit dari kematian. 3. TERIMA Yesus sebagai Tuhan dan Juru Selamatmu. Sesederhana itu! Allah tidak mempersulit. Dia ingin menyelamatkanmu!',
				verse: '"Jika kita mengaku dosa kita, maka Ia adalah setia dan adil, sehingga Ia akan mengampuni segala dosa kita."',
				verseRef: '1 Yohanes 1:9',
				image: '🪜'
			},
			{
				title: 'Hidup Baru di Dalam Yesus',
				content: 'Ketika kamu menerima Yesus, kamu menjadi ciptaan baru! Hidup lamamu sudah berlalu. Allah memberikan kamu kekuatan untuk hidup benar. Kamu tidak sempurna, tapi Allah terus membimbingmu setiap hari. Dia tidak pernah menyerah padamu!',
				verse: '"Jadi siapa yang ada di dalam Kristus, ia adalah ciptaan baru: yang lama sudah berlalu, sesungguhnya yang baru sudah datang."',
				verseRef: '2 Korintus 5:17',
				image: '🦋'
			}
		],
		quiz: [
			{
				question: 'Apa upah (akibat) dari dosa menurut Alkitab?',
				options: ['Kekayaan', 'Kebahagiaan', 'Maut (kematian)', 'Kesehatan'],
				correctIndex: 2,
				explanation: 'Roma 6:23 mengatakan upah dosa adalah maut — dosa membawa kematian kekal.'
			},
			{
				question: 'Apakah kita bisa menyelamatkan diri sendiri dengan perbuatan baik?',
				options: ['Ya, kalau rajin', 'Tidak, keselamatan adalah hadiah dari Allah', 'Ya, kalau banyak uang', 'Tergantung'],
				correctIndex: 1,
				explanation: 'Efesus 2:8: Keselamatan adalah pemberian Allah melalui iman, bukan hasil usaha kita.'
			},
			{
				question: 'Mengapa Yesus mati di kayu salib?',
				options: ['Karena Dia berdosa', 'Untuk menanggung hukuman dosa kita', 'Karena Dia lemah', 'Tanpa alasan'],
				correctIndex: 1,
				explanation: 'Yesus tidak pernah berdosa. Dia mati menggantikan kita karena kasih-Nya yang besar.'
			},
			{
				question: 'Apa yang terjadi ketika kita menerima Yesus?',
				options: ['Tidak ada perubahan', 'Kita menjadi ciptaan baru', 'Kita menjadi malaikat', 'Kita langsung sempurna'],
				correctIndex: 1,
				explanation: '2 Korintus 5:17: Siapa yang ada di dalam Kristus adalah ciptaan baru!'
			},
			{
				question: 'Ayat mana yang menjadi "ayat emas" tentang keselamatan?',
				options: ['Kejadian 1:1', 'Yohanes 3:16', 'Mazmur 23:1', 'Wahyu 1:1'],
				correctIndex: 1,
				explanation: 'Yohanes 3:16: "Karena begitu besar kasih Allah akan dunia ini..." — ayat paling terkenal tentang keselamatan!'
			}
		]
	},
	{
		id: 4,
		title: 'Kota Raksasa di Angkasa',
		subtitle: 'Surga itu nyata! Seperti apa surga?',
		icon: '🏰',
		color: 'from-violet-500 to-purple-700',
		sections: [
			{
				title: 'Surga Itu Nyata!',
				content: 'Surga bukan dongeng atau khayalan. Surga adalah tempat nyata yang Allah siapkan untuk orang-orang yang percaya kepada-Nya. Yesus sendiri yang berkata bahwa Dia pergi ke surga untuk menyiapkan tempat bagi kita.',
				verse: '"Di rumah Bapa-Ku banyak tempat tinggal. Aku pergi ke situ untuk menyediakan tempat bagimu."',
				verseRef: 'Yohanes 14:2',
				image: '🌟'
			},
			{
				title: 'Kota Yerusalem Baru',
				content: 'Alkitab menggambarkan sebuah kota yang luar biasa indah bernama Yerusalem Baru. Kota ini akan turun dari surga ke bumi yang baru. Kota ini sangat besar — panjang, lebar, dan tingginya sama: sekitar 2.200 kilometer! Itu lebih besar dari pulau Kalimantan!',
				verse: '"Dan aku melihat kota yang kudus, Yerusalem yang baru, turun dari sorga, dari Allah."',
				verseRef: 'Wahyu 21:2',
				image: '🏙️'
			},
			{
				title: 'Terbuat dari Emas dan Permata',
				content: 'Jalan-jalan di kota itu terbuat dari emas murni yang bening seperti kaca. Tembok kotanya terbuat dari permata yang indah-indah. Ada 12 pintu gerbang, masing-masing terbuat dari satu mutiara besar. Tidak ada tempat di bumi yang bisa menandingi keindahan surga!',
				verse: '"Jalan-jalan kota itu dari emas murni bagaikan kaca bening."',
				verseRef: 'Wahyu 21:21',
				image: '💎'
			},
			{
				title: 'Sungai dan Pohon Kehidupan',
				content: 'Di tengah kota ada sungai air kehidupan yang jernih seperti kristal. Di tepi sungai itu ada pohon kehidupan yang berbuah 12 macam buah — setiap bulan buah yang berbeda! Daunnya untuk menyembuhkan bangsa-bangsa.',
				verse: '"Lalu ia menunjukkan kepadaku sungai air kehidupan, yang jernih bagaikan kristal."',
				verseRef: 'Wahyu 22:1-2',
				image: '🌳'
			},
			{
				title: 'Tidak Ada Lagi Kesedihan',
				content: 'Di surga tidak ada yang menangis. Tidak ada yang sakit. Tidak ada yang meninggal. Tidak ada yang kesepian atau takut. Allah sendiri akan menghapus setiap air mata dari mata kita. Semua penderitaan akan berakhir selamanya!',
				verse: '"Ia akan menghapus segala air mata dari mata mereka, dan maut tidak akan ada lagi; tidak akan ada lagi perkabungan, atau ratap tangis, atau dukacita."',
				verseRef: 'Wahyu 21:4',
				image: '😊'
			},
			{
				title: 'Kehidupan Luar Biasa di Bumi Baru',
				content: 'Di bumi baru, kita akan membangun rumah dan tinggal di dalamnya. Kita akan menanam kebun dan makan hasilnya. Serigala dan domba akan bermain bersama. Anak kecil bisa bermain dengan singa tanpa takut. Dunia akan kembali indah seperti taman Eden!',
				verse: '"Mereka akan mendirikan rumah-rumah dan mendiaminya; mereka akan menanami kebun-kebun anggur dan memakan buahnya."',
				verseRef: 'Yesaya 65:21',
				image: '🏡'
			},
			{
				title: 'Kamu Bisa Ada di Sana!',
				content: 'Allah ingin KAMU ada di surga! Dia tidak ingin seorang pun binasa. Yang perlu kamu lakukan adalah percaya kepada Yesus dan hidup mengikuti-Nya. Surga bukan untuk orang sempurna — surga untuk orang yang percaya kepada Yesus.',
				verse: '"Lihatlah, Aku menjadikan segala sesuatu baru!"',
				verseRef: 'Wahyu 21:5',
				image: '🙋'
			}
		],
		quiz: [
			{
				question: 'Apa nama kota suci yang akan turun dari surga?',
				options: ['Roma', 'Babel', 'Yerusalem Baru', 'Betlehem'],
				correctIndex: 2,
				explanation: 'Yerusalem Baru adalah kota suci yang akan turun dari surga ke bumi baru (Wahyu 21:2).'
			},
			{
				question: 'Jalan-jalan di kota surga terbuat dari apa?',
				options: ['Aspal', 'Batu', 'Emas murni', 'Perak'],
				correctIndex: 2,
				explanation: 'Wahyu 21:21: Jalan-jalan kota itu dari emas murni bagaikan kaca bening!'
			},
			{
				question: 'Apa yang TIDAK ADA di surga?',
				options: ['Kebahagiaan', 'Kematian dan air mata', 'Pohon kehidupan', 'Sungai kristal'],
				correctIndex: 1,
				explanation: 'Wahyu 21:4: Maut, air mata, perkabungan, dan dukacita tidak ada lagi di surga!'
			},
			{
				question: 'Pohon kehidupan berbuah berapa macam?',
				options: ['3 macam', '7 macam', '12 macam', '1 macam'],
				correctIndex: 2,
				explanation: 'Pohon kehidupan berbuah 12 macam — setiap bulan buah yang berbeda (Wahyu 22:2).'
			},
			{
				question: 'Surga dipersiapkan untuk siapa?',
				options: ['Hanya orang kaya', 'Hanya pendeta', 'Semua yang percaya kepada Yesus', 'Hanya malaikat'],
				correctIndex: 2,
				explanation: 'Allah ingin semua orang diselamatkan! Surga untuk setiap orang yang percaya kepada Yesus.'
			}
		]
	},
	{
		id: 5,
		title: 'Kunci Pernikahan Bahagia',
		subtitle: 'Rencana Allah untuk keluarga yang penuh kasih',
		icon: '💒',
		color: 'from-pink-500 to-rose-600',
		sections: [
			{
				title: 'Allah Menciptakan Pernikahan',
				content: 'Pernikahan bukan ide manusia — itu adalah ide Allah! Di taman Eden, Allah menciptakan Adam dan Hawa dan menyatukan mereka sebagai suami istri. Allah ingin keluarga menjadi tempat yang penuh kasih, kebahagiaan, dan keamanan.',
				verse: '"Sebab itu seorang laki-laki akan meninggalkan ayahnya dan ibunya dan bersatu dengan isterinya, sehingga keduanya menjadi satu daging."',
				verseRef: 'Kejadian 2:24',
				image: '💑'
			},
			{
				title: 'Kasih yang Sejati',
				content: 'Kasih sejati bukan hanya perasaan yang datang dan pergi. Kasih sejati adalah pilihan untuk setia, sabar, dan baik setiap hari. Alkitab memberikan gambaran indah tentang kasih yang sesungguhnya.',
				verse: '"Kasih itu sabar; kasih itu murah hati; ia tidak cemburu. Ia tidak memegahkan diri dan tidak sombong."',
				verseRef: '1 Korintus 13:4',
				image: '❤️'
			},
			{
				title: 'Yesus di Pusat Keluarga',
				content: 'Kunci keluarga bahagia adalah menempatkan Yesus di pusat keluarga. Ketika suami dan istri sama-sama mengikut Yesus, mereka saling mengasihi, mengampuni, dan mendukung. Keluarga yang berdoa bersama, tetap bersama!',
				image: '🙏'
			},
			{
				title: 'Saling Menghormati',
				content: 'Dalam keluarga Kristen, suami dan istri saling menghormati. Anak-anak menghormati orang tua. Dan orang tua membesarkan anak-anak dengan kasih, bukan dengan kemarahan. Setiap orang dalam keluarga berharga.',
				verse: '"Hendaklah kamu saling mengasihi sebagai saudara dan saling mendahului dalam memberi hormat."',
				verseRef: 'Roma 12:10',
				image: '🤝'
			},
			{
				title: 'Pengampunan dalam Keluarga',
				content: 'Tidak ada keluarga yang sempurna. Semua orang pernah membuat kesalahan. Yang penting adalah saling mengampuni, seperti Allah mengampuni kita. Pengampunan adalah lem yang merekatkan keluarga.',
				verse: '"Hendaklah kamu saling mengampuni, sebagaimana Allah di dalam Kristus telah mengampuni kamu."',
				verseRef: 'Efesus 4:32',
				image: '🫂'
			}
		],
		quiz: [
			{
				question: 'Siapa yang menciptakan pernikahan?',
				options: ['Manusia', 'Pemerintah', 'Allah', 'Gereja'],
				correctIndex: 2,
				explanation: 'Allah sendiri yang menciptakan pernikahan di taman Eden ketika Dia menyatukan Adam dan Hawa.'
			},
			{
				question: 'Menurut 1 Korintus 13:4, kasih itu...?',
				options: ['Egois dan sombong', 'Sabar dan murah hati', 'Marah dan cemburu', 'Lemah dan takut'],
				correctIndex: 1,
				explanation: 'Kasih itu sabar dan murah hati — bukan perasaan sesaat tapi pilihan setiap hari.'
			},
			{
				question: 'Apa kunci keluarga bahagia?',
				options: ['Banyak uang', 'Rumah besar', 'Yesus di pusat keluarga', 'Tidak pernah bertengkar'],
				correctIndex: 2,
				explanation: 'Ketika Yesus menjadi pusat keluarga, semua anggota belajar mengasihi dan mengampuni.'
			},
			{
				question: 'Apa "lem" yang merekatkan keluarga?',
				options: ['Uang', 'Pengampunan', 'Aturan ketat', 'Hadiah'],
				correctIndex: 1,
				explanation: 'Pengampunan merekatkan keluarga — karena tidak ada keluarga yang sempurna.'
			}
		]
	},
	{
		id: 6,
		title: 'Tertulis di Batu!',
		subtitle: 'Sepuluh Perintah Allah yang kekal',
		icon: '📜',
		color: 'from-stone-500 to-stone-700',
		sections: [
			{
				title: 'Hukum yang Ditulis Allah Sendiri',
				content: 'Di Gunung Sinai, Allah menulis Sepuluh Perintah dengan jari-Nya sendiri di atas dua loh batu! Ini satu-satunya bagian Alkitab yang ditulis langsung oleh Allah. Itu menunjukkan betapa pentingnya perintah-perintah ini.',
				verse: '"Loh-loh itu ialah pekerjaan Allah dan tulisan itu ialah tulisan Allah, terukir pada loh-loh itu."',
				verseRef: 'Keluaran 32:16',
				image: '⛰️'
			},
			{
				title: 'Hukum Kasih, Bukan Hukuman',
				content: 'Sepuluh Perintah bukan daftar larangan yang membosankan. Itu adalah petunjuk hidup dari Allah yang mengasihi kita. Seperti rambu lalu lintas yang melindungi kita di jalan, hukum Allah melindungi kita dari celaka.',
				verse: '"Kasihilah Tuhan, Allahmu, dengan segenap hatimu dan kasihilah sesamamu manusia seperti dirimu sendiri."',
				verseRef: 'Matius 22:37-39',
				image: '❤️'
			},
			{
				title: '4 Perintah Pertama: Kasih kepada Allah',
				content: 'Perintah 1-4 mengajar kita cara mengasihi Allah: (1) Jangan ada allah lain, (2) Jangan membuat patung berhala, (3) Jangan menyebut nama Allah dengan sembarangan, (4) Ingat dan kuduskan hari Sabat. Ini tentang hubungan kita dengan Allah.',
				image: '🙏'
			},
			{
				title: '6 Perintah Terakhir: Kasih kepada Sesama',
				content: 'Perintah 5-10 mengajar kita cara mengasihi sesama: (5) Hormati orang tua, (6) Jangan membunuh, (7) Jangan berzinah, (8) Jangan mencuri, (9) Jangan bersaksi dusta, (10) Jangan mengingini milik orang lain.',
				image: '🤝'
			},
			{
				title: 'Cermin, Bukan Tangga',
				content: 'Hukum Allah seperti cermin — menunjukkan noda di wajah kita (dosa). Tapi cermin tidak bisa membersihkan noda itu. Hanya Yesus yang bisa membersihkan dosa kita. Hukum menunjukkan kita butuh Yesus!',
				verse: '"Jadi hukum Taurat adalah penuntun bagi kita sampai Kristus datang."',
				verseRef: 'Galatia 3:24',
				image: '🪞'
			},
			{
				title: 'Yesus dan Hukum Allah',
				content: 'Yesus berkata bahwa Dia tidak datang untuk menghapus hukum Allah, tapi untuk menggenapi (melaksanakan dengan sempurna). Kalau kita mengasihi Yesus, kita akan senang hati menaati perintah-Nya.',
				verse: '"Jikalau kamu mengasihi Aku, kamu akan menuruti segala perintah-Ku."',
				verseRef: 'Yohanes 14:15',
				image: '✝️'
			}
		],
		quiz: [
			{
				question: 'Siapa yang menulis Sepuluh Perintah?',
				options: ['Musa', 'Allah sendiri dengan jari-Nya', 'Para nabi', 'Malaikat'],
				correctIndex: 1,
				explanation: 'Keluaran 32:16: Tulisan itu adalah tulisan Allah sendiri, terukir pada loh batu!'
			},
			{
				question: 'Sepuluh Perintah dibagi menjadi dua bagian tentang apa?',
				options: ['Baik dan buruk', 'Kasih kepada Allah dan kasih kepada sesama', 'Surga dan bumi', 'Dulu dan sekarang'],
				correctIndex: 1,
				explanation: '4 perintah pertama tentang kasih kepada Allah, 6 perintah terakhir tentang kasih kepada sesama.'
			},
			{
				question: 'Hukum Allah diibaratkan seperti apa?',
				options: ['Tangga ke surga', 'Cermin yang menunjukkan dosa', 'Senjata', 'Mainan'],
				correctIndex: 1,
				explanation: 'Hukum seperti cermin — menunjukkan dosa kita, tapi hanya Yesus yang bisa membersihkannya.'
			},
			{
				question: 'Apakah Yesus menghapus Sepuluh Perintah?',
				options: ['Ya', 'Tidak, Dia menggenapkannya', 'Hanya sebagian', 'Tidak jelas'],
				correctIndex: 1,
				explanation: 'Yesus datang bukan untuk menghapus hukum, tapi untuk menggenapi dan melaksanakannya sempurna.'
			}
		]
	},
	{
		id: 7,
		title: 'Hari yang Hilang dari Sejarah',
		subtitle: 'Hari Sabat — hari istirahat yang dilupakan',
		icon: '📅',
		color: 'from-sky-500 to-blue-700',
		sections: [
			{
				title: 'Allah Menciptakan Hari Sabat',
				content: 'Pada minggu pertama penciptaan, Allah bekerja selama enam hari dan beristirahat pada hari ketujuh. Dia memberkati hari itu dan menjadikannya kudus. Hari ketujuh itu adalah hari Sabtu, bukan Minggu.',
				verse: '"Maka Allah memberkati hari ketujuh itu dan menguduskannya, karena pada hari itulah Ia berhenti dari segala pekerjaan penciptaan."',
				verseRef: 'Kejadian 2:3',
				image: '🌅'
			},
			{
				title: 'Perintah Keempat',
				content: 'Dari Sepuluh Perintah, perintah keempat berkata: "Ingatlah dan kuduskanlah hari Sabat." Kata "ingatlah" menunjukkan bahwa Allah tahu manusia akan melupakan hari ini. Dan memang, kebanyakan orang sudah lupa!',
				verse: '"Ingatlah dan kuduskanlah hari sabat."',
				verseRef: 'Keluaran 20:8',
				image: '📜'
			},
			{
				title: 'Yesus Memelihara Hari Sabat',
				content: 'Yesus pergi ke sinagoga (tempat ibadah) setiap hari Sabat. Itu kebiasaan-Nya. Yesus juga berkata bahwa Dia adalah Tuhan atas hari Sabat. Kalau Yesus memelihara Sabat, bukankah kita juga harus?',
				verse: '"Lalu Ia masuk ke sinagoga, seperti yang biasa dilakukan-Nya pada hari Sabat."',
				verseRef: 'Lukas 4:16',
				image: '⛪'
			},
			{
				title: 'Kapan Sabat Diubah?',
				content: 'Dalam Alkitab, tidak ada satu ayat pun yang mengatakan hari ibadah diubah dari Sabtu ke Minggu. Perubahan ini terjadi ratusan tahun setelah Yesus, dilakukan oleh manusia, bukan oleh Allah. Allah tidak pernah mengubah hari Sabat-Nya.',
				image: '🔍'
			},
			{
				title: 'Sabat adalah Tanda Kasih',
				content: 'Hari Sabat adalah hadiah dari Allah untuk kita. Itu adalah waktu khusus untuk beristirahat, beribadah, dan mendekat kepada Allah dan keluarga. Sabat dimulai dari Jumat matahari terbenam sampai Sabtu matahari terbenam.',
				verse: '"Sabat diadakan untuk manusia, bukan manusia untuk Sabat."',
				verseRef: 'Markus 2:27',
				image: '🎁'
			},
			{
				title: 'Sabat di Surga Nanti',
				content: 'Di bumi baru nanti, semua orang akan tetap memelihara hari Sabat! Sabat bukan hanya untuk zaman dulu, tapi untuk selamanya. Hari Sabat akan terus menjadi tanda kasih antara Allah dan umat-Nya.',
				verse: '"Setiap Sabat semuanya akan datang sujud menyembah di hadapan-Ku."',
				verseRef: 'Yesaya 66:23',
				image: '🌈'
			}
		],
		quiz: [
			{
				question: 'Hari keberapa yang Allah kuduskan sebagai Sabat?',
				options: ['Hari pertama', 'Hari kelima', 'Hari ketujuh', 'Hari keenam'],
				correctIndex: 2,
				explanation: 'Allah memberkati dan menguduskan hari ketujuh (Sabtu) sebagai hari Sabat (Kejadian 2:3).'
			},
			{
				question: 'Apakah ada ayat Alkitab yang mengubah Sabat ke hari Minggu?',
				options: ['Ya, di Wahyu', 'Ya, di Roma', 'Tidak ada', 'Ya, di Matius'],
				correctIndex: 2,
				explanation: 'Tidak ada satu pun ayat Alkitab yang mengubah hari Sabat dari Sabtu ke Minggu.'
			},
			{
				question: 'Apa kebiasaan Yesus pada hari Sabat?',
				options: ['Bekerja', 'Pergi ke sinagoga untuk beribadah', 'Tidur seharian', 'Berlibur'],
				correctIndex: 1,
				explanation: 'Lukas 4:16: Yesus pergi ke sinagoga pada hari Sabat, seperti kebiasaan-Nya.'
			},
			{
				question: 'Kapan hari Sabat dimulai?',
				options: ['Sabtu pagi', 'Jumat matahari terbenam', 'Minggu pagi', 'Jumat pagi'],
				correctIndex: 1,
				explanation: 'Sabat dimulai dari Jumat matahari terbenam sampai Sabtu matahari terbenam.'
			},
			{
				question: 'Apakah hari Sabat akan ada di bumi baru?',
				options: ['Tidak', 'Ya, selamanya', 'Mungkin', 'Hanya kadang-kadang'],
				correctIndex: 1,
				explanation: 'Yesaya 66:23: Di bumi baru, semua orang akan tetap memelihara Sabat selamanya!'
			}
		]
	},
	{
		id: 8,
		title: 'Pembebasan Terakhir',
		subtitle: 'Kedatangan Yesus kedua kali yang mulia',
		icon: '☁️',
		color: 'from-amber-500 to-orange-600',
		sections: [
			{
				title: 'Janji yang Pasti',
				content: 'Sebelum Yesus naik ke surga, Dia berjanji akan datang kembali! Dua malaikat berkata kepada murid-murid: "Yesus ini akan datang kembali dengan cara yang sama seperti kamu melihat Dia naik ke surga." Ini bukan mungkin — ini PASTI!',
				verse: '"Aku akan datang kembali dan membawa kamu ke tempat-Ku."',
				verseRef: 'Yohanes 14:3',
				image: '🌤️'
			},
			{
				title: 'Semua Mata akan Melihat',
				content: 'Kedatangan Yesus bukan diam-diam. Seluruh dunia akan melihat Dia datang di awan-awan dengan kemuliaan besar! Akan ada suara sangkakala yang keras dan terang yang sangat terang. Tidak ada yang bisa melewatkan momen ini.',
				verse: '"Setiap mata akan melihat Dia."',
				verseRef: 'Wahyu 1:7',
				image: '👀'
			},
			{
				title: 'Orang Mati Dibangkitkan',
				content: 'Ketika Yesus datang, orang-orang benar yang sudah meninggal akan dibangkitkan! Mereka akan mendapat tubuh baru yang sempurna — tidak bisa sakit atau mati lagi. Bayangkan bertemu kembali dengan orang-orang yang kamu kasihi!',
				verse: '"Mereka yang mati dalam Kristus akan lebih dahulu bangkit."',
				verseRef: '1 Tesalonika 4:16',
				image: '🌈'
			},
			{
				title: 'Tanda-Tanda Kedatangan-Nya',
				content: 'Yesus memberikan tanda-tanda supaya kita tahu kedatangan-Nya sudah dekat: gempa bumi di mana-mana, perang antar bangsa, penyakit menular, kelaparan, dan Injil diberitakan ke seluruh dunia. Semua ini sudah terjadi sekarang!',
				verse: '"Dan Injil Kerajaan ini akan diberitakan di seluruh dunia menjadi kesaksian bagi semua bangsa, sesudah itu barulah tiba kesudahannya."',
				verseRef: 'Matius 24:14',
				image: '🌍'
			},
			{
				title: 'Hati-hati dengan Tipuan!',
				content: 'Yesus memperingatkan bahwa Setan akan berusaha menipu orang dengan kedatangan palsu. Akan ada orang yang mengaku sebagai Kristus. Tapi ingat: Yesus yang asli datang di AWAN-AWAN dan setiap mata akan melihat. Kalau ada yang bilang "Kristus ada di sini" — itu palsu!',
				verse: '"Jikalau orang berkata kepadamu: Lihat, Mesias ada di sini, atau Mesias ada di sana, jangan kamu percaya."',
				verseRef: 'Matius 24:23',
				image: '⚠️'
			},
			{
				title: 'Bersiaplah Sekarang!',
				content: 'Tidak ada yang tahu hari dan jam kedatangan Yesus. Bisa besok, bisa tahun depan. Yang penting: kita harus siap setiap saat. Caranya? Percaya kepada Yesus, baca Alkitab, berdoa, dan hidup mengikut-Nya setiap hari.',
				verse: '"Hendaklah kamu juga siap sedia, sebab Anak Manusia datang pada saat yang tidak kamu duga."',
				verseRef: 'Matius 24:44',
				image: '⏰'
			}
		],
		quiz: [
			{
				question: 'Bagaimana Yesus akan datang kedua kalinya?',
				options: ['Diam-diam', 'Hanya dalam hati', 'Di awan-awan, dilihat semua orang', 'Melalui telepon'],
				correctIndex: 2,
				explanation: 'Wahyu 1:7: Setiap mata akan melihat Dia datang di awan-awan dengan kemuliaan besar!'
			},
			{
				question: 'Apa yang terjadi pada orang benar yang sudah mati saat Yesus datang?',
				options: ['Tetap di kubur', 'Dibangkitkan dengan tubuh baru', 'Menjadi malaikat', 'Dilupakan'],
				correctIndex: 1,
				explanation: '1 Tesalonika 4:16: Orang yang mati dalam Kristus akan bangkit dengan tubuh baru!'
			},
			{
				question: 'Mana yang BUKAN tanda kedatangan Yesus?',
				options: ['Gempa bumi', 'Perang', 'Semua orang jadi baik', 'Injil diberitakan ke seluruh dunia'],
				correctIndex: 2,
				explanation: 'Tanda kedatangan Yesus termasuk bencana dan kejahatan yang makin bertambah, bukan semua orang jadi baik.'
			},
			{
				question: 'Apakah kita tahu kapan persisnya Yesus datang?',
				options: ['Ya, tahun 2030', 'Ya, besok', 'Tidak ada yang tahu', 'Sudah dihitung'],
				correctIndex: 2,
				explanation: 'Matius 24:44: Anak Manusia datang pada saat yang tidak kita duga. Kita harus siap setiap saat!'
			}
		]
	},
	{
		id: 9,
		title: 'Kemurnian dan Kuasa!',
		subtitle: 'Roh Kudus dan kehidupan yang suci',
		icon: '🔥',
		color: 'from-orange-500 to-red-600',
		sections: [
			{
				title: 'Siapa Roh Kudus?',
				content: 'Roh Kudus adalah Pribadi ketiga dari Allah Tritunggal. Dia bukan hanya "kekuatan" — Dia adalah Pribadi Allah yang hidup bersama kita setiap hari. Yesus menyebut Roh Kudus sebagai "Penghibur" yang akan menemani kita.',
				verse: '"Aku akan minta kepada Bapa, dan Ia akan memberikan kepadamu seorang Penolong yang lain, supaya Ia menyertai kamu selama-lamanya."',
				verseRef: 'Yohanes 14:16',
				image: '🕊️'
			},
			{
				title: 'Pekerjaan Roh Kudus',
				content: 'Roh Kudus punya banyak tugas: Dia mengajar kita memahami Alkitab, mengingatkan kita saat kita berbuat salah, memberikan kekuatan untuk melawan godaan, dan menghibur kita saat sedih. Tanpa Roh Kudus, kita tidak bisa hidup benar.',
				verse: '"Tetapi Penghibur, yaitu Roh Kudus, Dialah yang akan mengajarkan segala sesuatu kepadamu."',
				verseRef: 'Yohanes 14:26',
				image: '📚'
			},
			{
				title: 'Buah Roh Kudus',
				content: 'Ketika Roh Kudus tinggal di dalam kita, hidup kita menghasilkan "buah" yang indah: kasih, sukacita, damai sejahtera, kesabaran, kemurahan, kebaikan, kesetiaan, kelemahlembutan, dan penguasaan diri. Ini bukti bahwa Roh Kudus bekerja!',
				verse: '"Tetapi buah Roh ialah: kasih, sukacita, damai sejahtera, kesabaran, kemurahan, kebaikan, kesetiaan, kelemahlembutan, penguasaan diri."',
				verseRef: 'Galatia 5:22-23',
				image: '🍇'
			},
			{
				title: 'Hidup Suci dengan Kuasa Allah',
				content: 'Hidup suci bukan berarti kita sempurna. Artinya kita berusaha mengikuti Yesus dengan pertolongan Roh Kudus. Ketika kita tergoda, Roh Kudus memberikan kekuatan untuk berkata "TIDAK" kepada dosa.',
				verse: '"Kamu akan menerima kuasa, kalau Roh Kudus turun ke atas kamu."',
				verseRef: 'Kisah 1:8',
				image: '💪'
			},
			{
				title: 'Minta Roh Kudus Setiap Hari',
				content: 'Yesus berkata bahwa Allah Bapa senang memberikan Roh Kudus kepada orang yang meminta. Setiap pagi, berdoalah: "Allah, isilah aku dengan Roh Kudus hari ini." Dia akan menjawab doa itu!',
				verse: '"Jika kamu yang jahat tahu memberi pemberian yang baik kepada anak-anakmu, apalagi Bapamu yang di sorga! Ia akan memberikan Roh Kudus kepada mereka yang meminta kepada-Nya."',
				verseRef: 'Lukas 11:13',
				image: '🙏'
			}
		],
		quiz: [
			{
				question: 'Siapakah Roh Kudus?',
				options: ['Hanya kekuatan', 'Malaikat', 'Pribadi ketiga dari Allah Tritunggal', 'Bayangan'],
				correctIndex: 2,
				explanation: 'Roh Kudus adalah Pribadi Allah — bukan hanya kekuatan, tapi Pribadi yang hidup bersama kita.'
			},
			{
				question: 'Mana yang BUKAN buah Roh Kudus?',
				options: ['Kasih', 'Kesabaran', 'Kemarahan', 'Penguasaan diri'],
				correctIndex: 2,
				explanation: 'Kemarahan bukan buah Roh! Buah Roh termasuk kasih, sukacita, damai sejahtera, kesabaran, dll.'
			},
			{
				question: 'Apa yang harus kita lakukan untuk menerima Roh Kudus?',
				options: ['Bayar uang', 'Minta kepada Allah', 'Tidak bisa didapat', 'Menunggu saja'],
				correctIndex: 1,
				explanation: 'Lukas 11:13: Allah akan memberikan Roh Kudus kepada mereka yang meminta!'
			}
		]
	},
	{
		id: 10,
		title: 'Apakah Orang Mati Benar-benar Mati?',
		subtitle: 'Kebenaran Alkitab tentang kematian',
		icon: '💤',
		color: 'from-slate-500 to-gray-700',
		sections: [
			{
				title: 'Apa yang Terjadi Saat Kita Mati?',
				content: 'Banyak orang bingung tentang kematian. Ada yang bilang orang mati langsung ke surga atau neraka. Ada yang bilang arwah berkeliaran. Tapi apa kata Alkitab? Alkitab mengatakan orang mati itu seperti TIDUR. Mereka tidak sadar dan tidak merasakan apa-apa.',
				verse: '"Orang-orang yang hidup tahu bahwa mereka akan mati, tetapi orang-orang yang mati tidak tahu apa-apa."',
				verseRef: 'Pengkhotbah 9:5',
				image: '😴'
			},
			{
				title: 'Bagaimana Manusia Diciptakan',
				content: 'Untuk mengerti kematian, kita harus mengerti penciptaan. Allah membentuk tubuh Adam dari tanah, lalu meniupkan nafas kehidupan. Tanah + Nafas Allah = Jiwa yang Hidup. Saat mati, prosesnya terbalik: nafas kembali ke Allah, tubuh kembali ke tanah.',
				verse: '"Ketika itulah TUHAN Allah membentuk manusia itu dari debu tanah dan menghembuskan nafas hidup ke dalam hidungnya; demikianlah manusia itu menjadi makhluk yang hidup."',
				verseRef: 'Kejadian 2:7',
				image: '🏺'
			},
			{
				title: 'Yesus Menyebut Kematian "Tidur"',
				content: 'Ketika sahabat Yesus, Lazarus, meninggal, Yesus berkata: "Lazarus, sahabat kita, telah tertidur." Murid-murid bingung. Lalu Yesus menjelaskan: "Lazarus sudah mati." Yesus menyebut kematian sebagai tidur karena orang mati tidak sadar — mereka menunggu kebangkitan.',
				verse: '"Lazarus, sahabat kita, telah tertidur, tetapi Aku pergi ke sana untuk membangunkan dia."',
				verseRef: 'Yohanes 11:11',
				image: '🛏️'
			},
			{
				title: 'Orang Mati Tidak Bisa Berkomunikasi',
				content: 'Alkitab sangat jelas: orang mati tidak tahu apa-apa, tidak bisa berpikir, dan tidak bisa berkomunikasi. Jadi kalau ada "hantu" atau "arwah" yang muncul, itu BUKAN orang mati! Itu adalah tipuan iblis.',
				verse: '"Kasih mereka, kebencian mereka dan kecemburuan mereka sudah lama hilang, dan tidak ada lagi bagian mereka dalam segala sesuatu yang terjadi di bawah matahari."',
				verseRef: 'Pengkhotbah 9:6',
				image: '🚫'
			},
			{
				title: 'Pengharapan Kebangkitan',
				content: 'Kabar baiknya: kematian bukan akhir! Ketika Yesus datang kedua kali, Dia akan membangkitkan semua orang benar yang sudah mati. Mereka akan mendapat tubuh baru yang sempurna dan hidup selamanya!',
				verse: '"Sebab Tuhan sendiri akan turun dari sorga dan mereka yang mati dalam Kristus akan lebih dahulu bangkit."',
				verseRef: '1 Tesalonika 4:16',
				image: '🌅'
			},
			{
				title: 'Maut Sudah Dikalahkan!',
				content: 'Yesus sudah mengalahkan maut ketika Dia bangkit dari kubur pada hari ketiga! Karena Yesus hidup, kita juga akan hidup. Maut tidak perlu ditakuti oleh orang percaya. Itu hanya "tidur" singkat sebelum kebangkitan yang mulia.',
				verse: '"Maut telah ditelan dalam kemenangan. Hai maut, di manakah kemenanganmu?"',
				verseRef: '1 Korintus 15:54-55',
				image: '🏆'
			}
		],
		quiz: [
			{
				question: 'Alkitab menyebut kematian sebagai apa?',
				options: ['Perjalanan ke surga', 'Tidur', 'Pindah ke dunia lain', 'Penghukuman'],
				correctIndex: 1,
				explanation: 'Yesus sendiri menyebut kematian sebagai "tidur" — orang mati tidak sadar sampai kebangkitan.'
			},
			{
				question: 'Menurut Pengkhotbah 9:5, apa yang diketahui orang mati?',
				options: ['Segalanya', 'Masa depan', 'Tidak tahu apa-apa', 'Hanya hal baik'],
				correctIndex: 2,
				explanation: 'Orang mati tidak tahu apa-apa — mereka "tidur" menunggu kedatangan Yesus.'
			},
			{
				question: 'Dari apa manusia diciptakan menurut Kejadian 2:7?',
				options: ['Cahaya', 'Air', 'Debu tanah + nafas Allah', 'Batu'],
				correctIndex: 2,
				explanation: 'Allah membentuk manusia dari debu tanah dan menghembuskan nafas hidup — jadilah jiwa yang hidup.'
			},
			{
				question: 'Kapan orang benar yang sudah mati akan bangkit?',
				options: ['Langsung setelah mati', 'Saat Yesus datang kedua kali', 'Tidak akan bangkit', 'Setiap tahun'],
				correctIndex: 1,
				explanation: '1 Tesalonika 4:16: Orang yang mati dalam Kristus akan bangkit saat Yesus datang kedua kali!'
			},
			{
				question: 'Kalau ada "hantu" yang muncul, itu sebenarnya apa?',
				options: ['Arwah orang mati', 'Tipuan iblis', 'Malaikat', 'Bayangan biasa'],
				correctIndex: 1,
				explanation: 'Orang mati tidak bisa muncul atau berkomunikasi. "Hantu" adalah tipuan iblis untuk menipu kita.'
			}
		]
	},
	{
		id: 11,
		title: 'Apakah Iblis yang Menguasai Neraka?',
		subtitle: 'Kebenaran mengejutkan tentang neraka',
		icon: '🔥',
		color: 'from-red-700 to-red-900',
		sections: [
			{
				title: 'Gambar yang Salah tentang Neraka',
				content: 'Banyak orang membayangkan iblis duduk di neraka sambil menyiksa orang dengan garpu. Itu SALAH! Gambar itu bukan dari Alkitab, tapi dari dongeng dan film. Alkitab mengajarkan sesuatu yang sangat berbeda tentang neraka.',
				image: '❌'
			},
			{
				title: 'Neraka Belum Ada Sekarang',
				content: 'Menurut Alkitab, penghakiman terakhir belum terjadi. Neraka (api yang menghancurkan) baru akan ada setelah Yesus datang kedua kali dan setelah 1.000 tahun. Jadi sekarang, tidak ada orang yang sedang "di neraka."',
				verse: '"Tuhan tahu menyelamatkan orang-orang saleh dari pencobaan dan tahu menyimpan orang-orang jahat untuk dihukum pada hari penghakiman."',
				verseRef: '2 Petrus 2:9',
				image: '⏳'
			},
			{
				title: 'Allah yang Adil dan Penuh Kasih',
				content: 'Apakah Allah yang penuh kasih akan menyiksa orang selamanya tanpa akhir? TIDAK! Allah itu adil. Hukuman sesuai dengan perbuatan. Api neraka akan menghancurkan orang jahat — bukan menyiksa mereka tanpa akhir.',
				verse: '"Upah dosa ialah maut, tetapi karunia Allah ialah hidup yang kekal dalam Kristus Yesus, Tuhan kita."',
				verseRef: 'Roma 6:23',
				image: '⚖️'
			},
			{
				title: 'Iblis Juga Akan Dihancurkan',
				content: 'Iblis bukan penguasa neraka — dia akan DIHUKUM di neraka! Api itu disiapkan untuk iblis dan malaikat-malaikatnya. Di akhir, Setan sendiri akan dihancurkan selamanya.',
				verse: '"Maka Aku menyalakan api dari tengah-tengahmu yang akan memakan habis engkau."',
				verseRef: 'Yehezkiel 28:18',
				image: '😈'
			},
			{
				title: 'Bumi Baru yang Bersih',
				content: 'Setelah api menghancurkan semua dosa dan kejahatan, Allah akan menciptakan bumi baru yang bersih dan indah. Tidak ada lagi dosa, penderitaan, atau kematian. Semuanya akan menjadi baru dan sempurna!',
				verse: '"Aku melihat langit yang baru dan bumi yang baru."',
				verseRef: 'Wahyu 21:1',
				image: '🌍'
			}
		],
		quiz: [
			{
				question: 'Apakah iblis menguasai neraka?',
				options: ['Ya', 'Tidak — iblis akan dihukum di neraka', 'Iblis dan Allah berbagi', 'Tidak ada neraka'],
				correctIndex: 1,
				explanation: 'Iblis tidak menguasai neraka. Dia sendiri akan dihancurkan oleh api (Yehezkiel 28:18).'
			},
			{
				question: 'Apakah api neraka menyiksa orang selamanya?',
				options: ['Ya, tanpa akhir', 'Tidak — api itu menghancurkan/memusnahkan', 'Tergantung', 'Tidak jelas'],
				correctIndex: 1,
				explanation: 'Upah dosa adalah MAUT (kematian), bukan siksaan tanpa akhir. Allah itu adil dan penuh kasih.'
			},
			{
				question: 'Kapan neraka (penghakiman akhir) akan terjadi?',
				options: ['Sudah terjadi', 'Saat mati', 'Setelah kedatangan kedua dan 1.000 tahun', 'Tidak akan terjadi'],
				correctIndex: 2,
				explanation: '2 Petrus 2:9: Orang jahat disimpan untuk dihukum pada hari penghakiman yang akan datang.'
			},
			{
				question: 'Apa yang akan Allah lakukan setelah dosa dihancurkan?',
				options: ['Meninggalkan bumi', 'Menciptakan bumi baru', 'Membiarkan bumi kosong', 'Membuat neraka permanen'],
				correctIndex: 1,
				explanation: 'Wahyu 21:1: Allah akan menciptakan langit baru dan bumi baru yang sempurna!'
			}
		]
	},
	{
		id: 12,
		title: '1.000 Tahun Damai',
		subtitle: 'Apa yang terjadi selama milenium?',
		icon: '⏳',
		color: 'from-indigo-500 to-violet-700',
		sections: [
			{
				title: 'Milenium: 1.000 Tahun',
				content: 'Setelah Yesus datang kedua kali, akan ada periode 1.000 tahun yang disebut "milenium." Selama waktu itu, orang-orang benar akan di surga bersama Yesus, dan bumi akan kosong dan gelap.',
				verse: '"Mereka hidup kembali dan mereka memerintah sebagai raja bersama-sama dengan Kristus untuk masa seribu tahun."',
				verseRef: 'Wahyu 20:4',
				image: '👑'
			},
			{
				title: 'Orang Benar di Surga',
				content: 'Selama 1.000 tahun, orang-orang benar akan berada di surga. Di sana mereka akan memeriksa catatan-catatan Allah untuk memahami mengapa beberapa orang tidak diselamatkan. Allah terbuka — Dia tidak menyembunyikan apa-apa.',
				verse: '"Lalu aku melihat takhta-takhta dan orang-orang yang duduk di atasnya; dan kepada mereka diserahkan kuasa untuk menghakimi."',
				verseRef: 'Wahyu 20:4',
				image: '📋'
			},
			{
				title: 'Setan Terikat di Bumi',
				content: 'Selama 1.000 tahun, Setan akan "terikat" di bumi yang kosong. Dia tidak bisa menipu siapa pun karena semua orang benar di surga dan orang jahat sudah mati. Setan hanya bisa memikirkan apa yang sudah dia lakukan.',
				verse: '"Lalu aku melihat seorang malaikat turun dari sorga memegang kunci jurang maut. Ia menangkap naga itu dan membelenggunya seribu tahun lamanya."',
				verseRef: 'Wahyu 20:1-2',
				image: '⛓️'
			},
			{
				title: 'Setelah 1.000 Tahun',
				content: 'Setelah 1.000 tahun, Yerusalem Baru turun dari surga ke bumi. Orang jahat dibangkitkan. Setan mencoba menyerang kota Allah untuk terakhir kalinya. Tapi api dari surga turun dan menghancurkan mereka semua.',
				verse: '"Lalu turunlah api dari sorga dan menghanguskan mereka."',
				verseRef: 'Wahyu 20:9',
				image: '🔥'
			},
			{
				title: 'Bumi Baru Selamanya',
				content: 'Setelah semua dosa dan kejahatan dihancurkan, Allah menciptakan bumi baru! Tidak ada lagi dosa, Setan, penderitaan, atau kematian. Kita akan hidup bersama Allah selamanya dalam damai dan sukacita yang tidak pernah berakhir!',
				verse: '"Lihatlah, Aku menjadikan segala sesuatu baru!"',
				verseRef: 'Wahyu 21:5',
				image: '🌎'
			}
		],
		quiz: [
			{
				question: 'Berapa lama periode milenium?',
				options: ['100 tahun', '500 tahun', '1.000 tahun', '10.000 tahun'],
				correctIndex: 2,
				explanation: 'Milenium berarti 1.000 tahun — periode antara kedatangan kedua dan penghakiman akhir.'
			},
			{
				question: 'Di mana orang benar selama 1.000 tahun?',
				options: ['Di bumi', 'Di surga bersama Yesus', 'Di bulan', 'Di neraka'],
				correctIndex: 1,
				explanation: 'Wahyu 20:4: Orang benar memerintah bersama Kristus selama 1.000 tahun di surga.'
			},
			{
				question: 'Apa yang terjadi dengan Setan selama milenium?',
				options: ['Dia bebas', 'Dia di surga', 'Dia terikat di bumi yang kosong', 'Dia sudah musnah'],
				correctIndex: 2,
				explanation: 'Setan terikat di bumi yang kosong — tidak bisa menipu siapa pun selama 1.000 tahun.'
			},
			{
				question: 'Apa yang terjadi setelah 1.000 tahun?',
				options: ['Setan menang', 'Dosa dan Setan dihancurkan, bumi baru diciptakan', 'Tidak ada yang terjadi', 'Milenium kedua'],
				correctIndex: 1,
				explanation: 'Api dari surga menghancurkan Setan dan dosa, lalu Allah menciptakan bumi baru selamanya!'
			}
		]
	},
	{
		id: 13,
		title: 'Rencana Kesehatan Gratis dari Allah',
		subtitle: 'Tubuh kita adalah bait Roh Kudus',
		icon: '🥗',
		color: 'from-green-500 to-emerald-700',
		sections: [
			{
				title: 'Allah Peduli Kesehatanmu',
				content: 'Allah bukan hanya peduli dengan jiwamu, tapi juga tubuhmu! Tubuhmu adalah bait (rumah) Roh Kudus. Merawat tubuh dengan baik adalah cara menghormati Allah. Dia memberikan rencana kesehatan gratis di dalam Alkitab!',
				verse: '"Atau tidak tahukah kamu, bahwa tubuhmu adalah bait Roh Kudus?"',
				verseRef: '1 Korintus 6:19',
				image: '🏛️'
			},
			{
				title: 'Makanan Terbaik dari Allah',
				content: 'Di taman Eden, Allah memberikan makanan terbaik: buah-buahan, sayuran, kacang-kacangan, dan biji-bijian. Inilah makanan asli yang dirancang Allah untuk tubuh kita. Semakin dekat makananmu dengan rancangan Allah, semakin sehat kamu!',
				verse: '"Lihatlah, Aku memberikan kepadamu segala tumbuh-tumbuhan yang berbiji di seluruh bumi dan segala pohon-pohonan yang buahnya berbiji; itulah akan menjadi makananmu."',
				verseRef: 'Kejadian 1:29',
				image: '🍎'
			},
			{
				title: 'Makanan yang Harus Dihindari',
				content: 'Alkitab juga menuliskan binatang yang tidak boleh dimakan (Imamat 11). Misalnya: babi, kerang, udang, dan binatang pemakan bangkai. Ilmu pengetahuan modern membuktikan bahwa binatang-binatang ini memang kurang sehat. Allah tahu duluan!',
				image: '🚫'
			},
			{
				title: '8 Prinsip Kesehatan',
				content: 'Ada 8 resep kesehatan yang mudah diingat: (1) Air putih yang cukup, (2) Udara segar, (3) Sinar matahari, (4) Olahraga teratur, (5) Istirahat cukup, (6) Makanan sehat, (7) Menghindari racun (rokok, alkohol, narkoba), (8) Percaya kepada Allah.',
				image: '💧'
			},
			{
				title: 'Hindari Racun',
				content: 'Alkitab mengajarkan kita untuk menjauhi alkohol, rokok, dan segala sesuatu yang merusak tubuh. Ini bukan aturan yang membosankan — ini perlindungan dari Allah! Dia ingin kamu sehat dan bahagia.',
				verse: '"Anggur adalah pencemooh, minuman keras adalah peribut, tidaklah bijak orang yang terhuyung-huyung karenanya."',
				verseRef: 'Amsal 20:1',
				image: '🚭'
			},
			{
				title: 'Semua untuk Kemuliaan Allah',
				content: 'Apapun yang kita makan dan minum, lakukanlah untuk kemuliaan Allah. Bukan karena takut, tapi karena kasih. Tubuh yang sehat membantu pikiran yang jernih untuk belajar tentang Allah.',
				verse: '"Apapun juga yang kamu perbuat, perbuatlah untuk kemuliaan Allah."',
				verseRef: '1 Korintus 10:31',
				image: '🌿'
			}
		],
		quiz: [
			{
				question: 'Tubuh kita disebut apa dalam Alkitab?',
				options: ['Mesin', 'Bait Roh Kudus', 'Mainan', 'Robot'],
				correctIndex: 1,
				explanation: '1 Korintus 6:19: Tubuh kita adalah bait (rumah) Roh Kudus — sangat berharga!'
			},
			{
				question: 'Apa makanan asli yang Allah berikan di taman Eden?',
				options: ['Daging', 'Buah, sayur, kacang, dan biji-bijian', 'Roti saja', 'Ikan'],
				correctIndex: 1,
				explanation: 'Kejadian 1:29: Allah memberikan tumbuh-tumbuhan dan buah-buahan sebagai makanan manusia.'
			},
			{
				question: 'Mengapa Allah melarang makanan tertentu?',
				options: ['Untuk menghukum', 'Untuk melindungi kesehatan kita', 'Tanpa alasan', 'Supaya lapar'],
				correctIndex: 1,
				explanation: 'Allah memberi aturan makanan karena kasih — Dia mau melindungi kesehatan kita!'
			},
			{
				question: 'Apa yang harus kita hindari menurut Alkitab?',
				options: ['Air putih', 'Buah-buahan', 'Alkohol dan rokok', 'Sayuran'],
				correctIndex: 2,
				explanation: 'Alkitab mengajarkan untuk menjauhi alkohol, rokok, dan segala yang merusak tubuh.'
			}
		]
	},
	{
		id: 14,
		title: 'Apakah Ketaatan itu Legalisme?',
		subtitle: 'Hubungan antara kasih karunia dan ketaatan',
		icon: '⚖️',
		color: 'from-teal-500 to-cyan-700',
		sections: [
			{
				title: 'Diselamatkan oleh Kasih Karunia',
				content: 'Hal pertama yang harus kamu ingat: kita TIDAK bisa diselamatkan oleh perbuatan baik atau ketaatan kita. Keselamatan adalah 100% hadiah gratis dari Allah melalui iman kepada Yesus. Tidak ada yang bisa "membeli" surga.',
				verse: '"Sebab karena kasih karunia kamu diselamatkan oleh iman; itu bukan hasil usahamu, tetapi pemberian Allah."',
				verseRef: 'Efesus 2:8',
				image: '🎁'
			},
			{
				title: 'Lalu Mengapa Taat?',
				content: 'Kalau keselamatan gratis, mengapa harus taat? Jawabannya sederhana: karena KASIH! Ketika kamu mengasihi seseorang, kamu senang melakukan apa yang membuatnya bahagia. Begitu juga dengan Allah — kalau kamu mengasihi-Nya, kamu senang menaati-Nya.',
				verse: '"Jikalau kamu mengasihi Aku, kamu akan menuruti segala perintah-Ku."',
				verseRef: 'Yohanes 14:15',
				image: '❤️'
			},
			{
				title: 'Perbedaan Legalisme dan Ketaatan',
				content: 'LEGALISME = menaati aturan supaya diselamatkan (salah!). KETAATAN = menaati karena sudah diselamatkan dan mengasihi Allah (benar!). Bayangkan: kamu tidak membantu ibu supaya dia mengasihimu. Kamu membantu KARENA kamu mengasihi dia.',
				image: '🔑'
			},
			{
				title: 'Iman Tanpa Perbuatan Mati',
				content: 'Iman yang sejati selalu menghasilkan perbuatan baik. Kalau seseorang bilang "aku percaya Yesus" tapi hidupnya tidak berubah sama sekali, ada yang salah. Iman yang hidup menghasilkan buah ketaatan.',
				verse: '"Sebab seperti tubuh tanpa roh adalah mati, demikian jugalah iman tanpa perbuatan-perbuatan adalah mati."',
				verseRef: 'Yakobus 2:26',
				image: '🌱'
			},
			{
				title: 'Kuasa untuk Taat',
				content: 'Berita baiknya: kita tidak perlu taat dengan kekuatan sendiri! Allah memberikan Roh Kudus untuk membantu kita. Dia yang memberikan keinginan dan kekuatan untuk melakukan apa yang benar.',
				verse: '"Karena Allahlah yang mengerjakan di dalam kamu baik kemauan maupun pekerjaan menurut kerelaan-Nya."',
				verseRef: 'Filipi 2:13',
				image: '💪'
			}
		],
		quiz: [
			{
				question: 'Kita diselamatkan oleh apa?',
				options: ['Perbuatan baik', 'Uang', 'Kasih karunia Allah melalui iman', 'Keberuntungan'],
				correctIndex: 2,
				explanation: 'Efesus 2:8: Keselamatan 100% pemberian Allah melalui iman, bukan usaha kita.'
			},
			{
				question: 'Mengapa orang Kristen menaati Allah?',
				options: ['Supaya diselamatkan', 'Karena takut neraka', 'Karena mengasihi Allah', 'Karena dipaksa'],
				correctIndex: 2,
				explanation: 'Yohanes 14:15: Kita taat karena KASIH, bukan untuk mendapat keselamatan.'
			},
			{
				question: 'Apa itu legalisme?',
				options: ['Menaati karena kasih', 'Menaati supaya diselamatkan', 'Tidak menaati sama sekali', 'Membaca hukum'],
				correctIndex: 1,
				explanation: 'Legalisme = menaati aturan dengan tujuan menyelamatkan diri sendiri. Itu salah — keselamatan adalah hadiah!'
			},
			{
				question: 'Iman tanpa perbuatan adalah...?',
				options: ['Sempurna', 'Mati', 'Cukup', 'Kuat'],
				correctIndex: 1,
				explanation: 'Yakobus 2:26: Iman tanpa perbuatan adalah mati — iman sejati menghasilkan buah ketaatan.'
			}
		]
	},

	// =========================================================================
	// PELAJARAN LANJUTAN — Nubuat & Doktrin (15–27)
	// =========================================================================
	{
		id: 15,
		title: 'Siapakah Antikristus?',
		subtitle: 'Kebenaran Alkitab yang mengejutkan',
		icon: '🔍',
		color: 'from-red-500 to-rose-700',
		sections: [
			{
				title: 'Bukan Film Hollywood',
				content: 'Banyak film menggambarkan Antikristus sebagai satu orang menakutkan di masa depan. Tapi Alkitab memberikan gambaran yang berbeda dan lebih detail. Alkitab memberikan banyak petunjuk yang jelas supaya kita bisa mengenali Antikristus.',
				image: '🎬'
			},
			{
				title: 'Petunjuk dari Daniel dan Wahyu',
				content: 'Kitab Daniel dan Wahyu memberikan banyak ciri-ciri Antikristus. Ini bukan satu orang, tapi sebuah SISTEM kekuasaan yang menentang dan mengubah hukum Allah. Alkitab menyebutnya "tanduk kecil" di Daniel dan "binatang" di Wahyu.',
				verse: '"Ia akan mengucapkan perkataan yang menentang Yang Mahatinggi dan akan menganiaya orang-orang kudus milik Yang Mahatinggi. Ia berusaha untuk mengubah waktu dan hukum."',
				verseRef: 'Daniel 7:25',
				image: '📖'
			},
			{
				title: 'Mengubah Hukum Allah',
				content: 'Salah satu ciri utama Antikristus adalah berusaha mengubah hukum dan waktu Allah. Ingat perintah keempat tentang hari Sabat? Ada kekuasaan yang mengaku telah mengubah hari ibadah dari Sabtu ke Minggu — tanpa izin dari Alkitab.',
				image: '📜'
			},
			{
				title: 'Yesus Melindungi Umat-Nya',
				content: 'Jangan takut! Tujuan Alkitab mengungkapkan Antikristus bukan untuk menakut-nakuti, tapi untuk MELINDUNGI kita dari penipuan. Yesus berkata: "Aku sudah memberitahukannya kepadamu sebelumnya." Allah ingin kita siap, bukan ketakutan.',
				verse: '"Kamu akan mengetahui kebenaran, dan kebenaran itu akan memerdekakan kamu."',
				verseRef: 'Yohanes 8:32',
				image: '🛡️'
			}
		],
		quiz: [
			{
				question: 'Antikristus dalam Alkitab adalah...?',
				options: ['Satu orang menakutkan', 'Sistem kekuasaan yang menentang hukum Allah', 'Makhluk luar angkasa', 'Hanya cerita dongeng'],
				correctIndex: 1,
				explanation: 'Alkitab menggambarkan Antikristus sebagai sistem kekuasaan yang mengubah hukum dan waktu Allah.'
			},
			{
				question: 'Apa ciri utama Antikristus menurut Daniel 7:25?',
				options: ['Sangat kaya', 'Berusaha mengubah waktu dan hukum Allah', 'Sangat tampan', 'Bisa terbang'],
				correctIndex: 1,
				explanation: 'Daniel 7:25: Ia berusaha untuk mengubah waktu dan hukum — termasuk hari Sabat.'
			},
			{
				question: 'Mengapa Allah mengungkapkan identitas Antikristus?',
				options: ['Untuk menakut-nakuti', 'Untuk melindungi kita dari penipuan', 'Tanpa alasan', 'Untuk hiburan'],
				correctIndex: 1,
				explanation: 'Allah mengungkapkan kebenaran untuk melindungi dan memerdekakan kita (Yohanes 8:32).'
			}
		]
	},
	{
		id: 16,
		title: 'Pesan Malaikat dari Angkasa',
		subtitle: 'Tiga pesan penting untuk dunia terakhir',
		icon: '👼',
		color: 'from-yellow-500 to-amber-600',
		sections: [
			{
				title: 'Tiga Malaikat di Wahyu 14',
				content: 'Dalam Wahyu 14, ada tiga malaikat yang membawa pesan penting untuk seluruh dunia sebelum Yesus datang. Pesan ini sangat penting karena ini peringatan terakhir Allah untuk umat manusia!',
				verse: '"Dan aku melihat seorang malaikat lain terbang di tengah-tengah langit dan ia membawa Injil yang kekal."',
				verseRef: 'Wahyu 14:6',
				image: '📢'
			},
			{
				title: 'Pesan Pertama: Takut akan Allah',
				content: 'Malaikat pertama berkata: "Takutlah akan Allah dan muliakanlah Dia, karena telah tiba saat penghakiman-Nya." Ini mengajak kita untuk menghormati Allah, menyembah Dia sebagai Pencipta, dan bersiap untuk penghakiman.',
				verse: '"Takutlah akan Allah dan muliakanlah Dia, karena telah tiba saat penghakiman-Nya, dan sembahlah Dia yang telah menjadikan langit dan bumi."',
				verseRef: 'Wahyu 14:7',
				image: '1️⃣'
			},
			{
				title: 'Pesan Kedua: Babel Sudah Rubuh',
				content: 'Malaikat kedua mengumumkan: "Sudah rubuh, sudah rubuh Babel." Babel melambangkan kebingungan agama — campuran ajaran yang benar dan salah. Allah memanggil umat-Nya keluar dari kebingungan ini.',
				verse: '"Sudah rubuh, sudah rubuh Babel, kota besar itu."',
				verseRef: 'Wahyu 14:8',
				image: '2️⃣'
			},
			{
				title: 'Pesan Ketiga: Jangan Menyembah Binatang',
				content: 'Malaikat ketiga memperingatkan: jangan menyembah binatang atau menerima tandanya. Ini peringatan serius tentang mengikuti sistem keagamaan yang menentang hukum Allah. Pilihlah untuk setia kepada Allah!',
				image: '3️⃣'
			},
			{
				title: 'Pesan untuk Kita Hari Ini',
				content: 'Tiga pesan malaikat ini bukan hanya untuk masa lalu atau masa depan — ini untuk SEKARANG! Allah sedang memanggil orang-orang di seluruh dunia untuk kembali kepada kebenaran Alkitab dan bersiap untuk kedatangan Yesus.',
				image: '📬'
			}
		],
		quiz: [
			{
				question: 'Ada berapa malaikat yang membawa pesan di Wahyu 14?',
				options: ['1', '2', '3', '7'],
				correctIndex: 2,
				explanation: 'Ada tiga malaikat yang membawa tiga pesan penting untuk dunia sebelum Yesus datang.'
			},
			{
				question: 'Apa pesan malaikat pertama?',
				options: ['Jangan makan', 'Takut akan Allah dan muliakan Dia', 'Lari dari bumi', 'Tidur lebih banyak'],
				correctIndex: 1,
				explanation: 'Wahyu 14:7: Takut akan Allah, muliakan Dia, dan sembah Dia sebagai Pencipta!'
			},
			{
				question: '"Babel" dalam Wahyu melambangkan apa?',
				options: ['Kota yang indah', 'Kebingungan agama', 'Tempat berlibur', 'Surga'],
				correctIndex: 1,
				explanation: 'Babel berarti "kebingungan" — campuran ajaran benar dan salah yang Allah mau kita tinggalkan.'
			}
		]
	},
	{
		id: 17,
		title: 'Allah yang Menggambar Rencana',
		subtitle: 'Bait suci dan rencana keselamatan',
		icon: '🏛️',
		color: 'from-amber-600 to-yellow-700',
		sections: [
			{
				title: 'Model Surga di Bumi',
				content: 'Allah memerintahkan Musa membangun Bait Suci (kemah suci) di padang gurun. Ini bukan bangunan biasa — ini adalah model kecil dari Bait Suci di surga! Setiap bagiannya mengajarkan tentang rencana Allah untuk menyelamatkan kita.',
				verse: '"Buatlah semuanya itu menurut contoh yang ditunjukkan kepadamu di atas gunung itu."',
				verseRef: 'Keluaran 25:40',
				image: '⛺'
			},
			{
				title: 'Halaman: Salib Yesus',
				content: 'Di halaman Bait Suci ada mezbah korban. Di sinilah domba-domba dikorbankan. Domba itu melambangkan Yesus — "Anak Domba Allah" yang mati untuk dosa kita. Setiap korban menunjuk kepada salib Yesus.',
				verse: '"Lihatlah Anak domba Allah, yang menghapus dosa dunia!"',
				verseRef: 'Yohanes 1:29',
				image: '🐑'
			},
			{
				title: 'Ruang Kudus: Pelayanan Yesus',
				content: 'Di dalam Ruang Kudus ada: kaki dian (Yesus terang dunia), meja roti (Yesus roti kehidupan), dan mezbah dupa (doa kita naik ke Allah). Semuanya mengajarkan tentang Yesus!',
				image: '🕯️'
			},
			{
				title: 'Ruang Maha Kudus: Hukum Allah',
				content: 'Di Ruang Maha Kudus ada Tabut Perjanjian yang berisi Sepuluh Perintah Allah. Di atas tabut ada "tutup pendamaian" — tempat darah korban dipercikkan. Ini menunjukkan bahwa kasih karunia dan hukum Allah bekerja bersama.',
				image: '📜'
			},
			{
				title: 'Yesus Imam Besar Kita',
				content: 'Sekarang, Yesus melayani sebagai Imam Besar kita di Bait Suci surgawi. Dia menjadi perantara antara kita dan Allah. Setiap kali kita berdoa, Yesus membawa doa kita kepada Bapa.',
				verse: '"Kita mempunyai Imam Besar yang demikian, yang duduk di sebelah kanan takhta Yang Mahabesar di sorga."',
				verseRef: 'Ibrani 8:1',
				image: '🙏'
			}
		],
		quiz: [
			{
				question: 'Bait Suci di bumi adalah model dari apa?',
				options: ['Istana raja', 'Bait Suci di surga', 'Museum', 'Rumah Musa'],
				correctIndex: 1,
				explanation: 'Bait Suci di bumi adalah model kecil dari Bait Suci asli di surga (Keluaran 25:40).'
			},
			{
				question: 'Domba korban melambangkan siapa?',
				options: ['Musa', 'Abraham', 'Yesus — Anak Domba Allah', 'Daud'],
				correctIndex: 2,
				explanation: 'Yohanes 1:29: Yesus disebut "Anak Domba Allah yang menghapus dosa dunia."'
			},
			{
				question: 'Apa peran Yesus sekarang di surga?',
				options: ['Tidur', 'Imam Besar yang menjadi perantara kita', 'Menunggu saja', 'Bermain'],
				correctIndex: 1,
				explanation: 'Ibrani 8:1: Yesus melayani sebagai Imam Besar kita di Bait Suci surgawi.'
			}
		]
	},
	{
		id: 18,
		title: 'Tepat Waktu!',
		subtitle: 'Nubuat waktu yang menakjubkan di Daniel',
		icon: '⏰',
		color: 'from-blue-600 to-indigo-700',
		sections: [
			{
				title: 'Allah Menguasai Waktu',
				content: 'Allah tidak hanya meramalkan APA yang akan terjadi, tapi juga KAPAN akan terjadi! Di kitab Daniel, ada nubuat waktu yang sangat tepat. Ini membuktikan bahwa Alkitab benar-benar dari Allah.',
				image: '⏳'
			},
			{
				title: 'Nubuat 2.300 Hari',
				content: 'Dalam Daniel 8:14, ada nubuat tentang 2.300 "hari" (yang berarti 2.300 tahun dalam nubuat). Nubuat ini dimulai pada 457 SM ketika perintah dikeluarkan untuk membangun kembali Yerusalem, dan berakhir pada 1844 M — saat penghakiman di surga dimulai.',
				verse: '"Sampai lewat dua ribu tiga ratus petang dan pagi, lalu tempat kudus itu akan dipulihkan."',
				verseRef: 'Daniel 8:14',
				image: '📅'
			},
			{
				title: 'Nubuat 70 Minggu tentang Yesus',
				content: 'Di dalam nubuat 2.300 hari, ada bagian yang disebut "70 minggu" (490 tahun). Nubuat ini meramalkan dengan tepat kapan Yesus akan dibaptis (27 M) dan kapan Dia akan mati di kayu salib (31 M). Bayangkan — diramalkan ratusan tahun sebelumnya!',
				verse: '"Tujuh puluh kali tujuh masa telah ditetapkan atas bangsamu."',
				verseRef: 'Daniel 9:24',
				image: '✝️'
			},
			{
				title: 'Penghakiman Dimulai 1844',
				content: 'Pada tahun 1844, sesuai nubuat, Yesus memulai pekerjaan penghakiman di Bait Suci surgawi. Ini seperti "pemeriksaan" catatan — memastikan siapa yang benar-benar percaya kepada-Nya. Ini kabar baik bagi orang percaya!',
				image: '📋'
			},
			{
				title: 'Sekarang Waktunya!',
				content: 'Kita hidup di zaman penghakiman. Ini bukan untuk membuat kita takut, tapi untuk mendorong kita hidup dekat dengan Yesus. Yesus adalah Pembela kita di pengadilan surga. Kalau Yesus di pihak kita, siapa yang bisa melawan kita?',
				verse: '"Jikalau Allah di pihak kita, siapakah yang akan melawan kita?"',
				verseRef: 'Roma 8:31',
				image: '🛡️'
			}
		],
		quiz: [
			{
				question: 'Berapa lama nubuat waktu di Daniel 8:14?',
				options: ['70 hari', '1.000 tahun', '2.300 hari/tahun', '100 tahun'],
				correctIndex: 2,
				explanation: 'Daniel 8:14 menulis nubuat 2.300 hari yang berarti 2.300 tahun (457 SM sampai 1844 M).'
			},
			{
				question: 'Nubuat 70 minggu meramalkan apa?',
				options: ['Banjir Nuh', 'Waktu baptisan dan kematian Yesus', 'Akhir dunia', 'Penciptaan'],
				correctIndex: 1,
				explanation: 'Nubuat 70 minggu (490 tahun) meramalkan kapan Yesus dibaptis (27 M) dan mati (31 M).'
			},
			{
				question: 'Siapa Pembela kita di pengadilan surga?',
				options: ['Malaikat', 'Musa', 'Yesus', 'Kita sendiri'],
				correctIndex: 2,
				explanation: 'Yesus adalah Imam Besar dan Pembela kita — kalau Dia di pihak kita, siapa yang melawan?'
			}
		]
	},
	{
		id: 19,
		title: 'Penghakiman Terakhir',
		subtitle: 'Allah yang adil akan menghakimi dunia',
		icon: '⚖️',
		color: 'from-gray-600 to-slate-800',
		sections: [
			{
				title: 'Mengapa Ada Penghakiman?',
				content: 'Bayangkan dunia tanpa pengadilan — orang jahat bebas tanpa hukuman, orang baik tidak dilindungi. Mengerikan, kan? Allah adalah Hakim yang adil. Penghakiman memastikan keadilan untuk semua orang.',
				verse: '"Karena kita semua harus menghadap takhta pengadilan Kristus."',
				verseRef: '2 Korintus 5:10',
				image: '⚖️'
			},
			{
				title: 'Tiga Fase Penghakiman',
				content: 'Penghakiman Allah terjadi dalam tiga fase: (1) Penghakiman investigasi — sebelum Yesus datang, memeriksa catatan, (2) Penghakiman selama milenium — orang benar memeriksa catatan di surga, (3) Penghakiman eksekusi — setelah milenium, hukuman dijatuhkan.',
				image: '📋'
			},
			{
				title: 'Buku-Buku Catatan',
				content: 'Di surga ada buku-buku catatan yang mencatat setiap perbuatan kita. Tapi jangan takut! Ketika kita mengakui dosa dan percaya Yesus, dosa kita DIHAPUS dari catatan dan diganti dengan kebenaran Yesus.',
				verse: '"Buku-buku dibuka. Dan dibuka juga sebuah buku lain, yaitu kitab kehidupan."',
				verseRef: 'Wahyu 20:12',
				image: '📚'
			},
			{
				title: 'Yesus Pembelamu',
				content: 'Di pengadilan surga, Yesus menjadi Pembela (Pengacara) kamu! Dia menunjukkan darah-Nya yang sudah membayar dosamu. Dengan Yesus di pihakmu, kamu aman.',
				verse: '"Jika seorang berbuat dosa, kita mempunyai seorang pengantara pada Bapa, yaitu Yesus Kristus, yang adil."',
				verseRef: '1 Yohanes 2:1',
				image: '🛡️'
			}
		],
		quiz: [
			{
				question: 'Mengapa penghakiman diperlukan?',
				options: ['Allah suka menghukum', 'Untuk memastikan keadilan', 'Tanpa alasan', 'Untuk menakuti'],
				correctIndex: 1,
				explanation: 'Penghakiman memastikan keadilan — orang jahat dihukum, orang benar diselamatkan.'
			},
			{
				question: 'Siapa Pembela kita di pengadilan surga?',
				options: ['Malaikat', 'Diri sendiri', 'Yesus Kristus', 'Tidak ada'],
				correctIndex: 2,
				explanation: '1 Yohanes 2:1: Yesus Kristus menjadi Pengantara (Pembela) kita di hadapan Allah.'
			},
			{
				question: 'Apa yang terjadi dengan dosa kita saat kita mengaku dan percaya Yesus?',
				options: ['Tetap dicatat', 'Dihapus dari catatan', 'Ditambah', 'Diabaikan'],
				correctIndex: 1,
				explanation: 'Dosa yang diakui dihapus dari catatan dan diganti dengan kebenaran Yesus!'
			}
		]
	},
	{
		id: 20,
		title: 'Tanda Binatang',
		subtitle: 'Peringatan terakhir dari Wahyu',
		icon: '⚠️',
		color: 'from-red-600 to-red-800',
		sections: [
			{
				title: 'Apa Itu Tanda Binatang?',
				content: 'Tanda binatang bukan microchip atau tato. Dalam Alkitab, "tanda di dahi" berarti pikiran (keputusan) dan "tanda di tangan" berarti perbuatan. Tanda binatang berarti memilih mengikuti perintah manusia ketimbang perintah Allah.',
				image: '🤔'
			},
			{
				title: 'Tanda Allah vs Tanda Binatang',
				content: 'Allah juga punya "tanda" — yaitu hari Sabat! Sabat adalah tanda bahwa kita mengakui Allah sebagai Pencipta dan Tuan kita. Pertentangan terakhir adalah antara mereka yang setia kepada Allah dan mereka yang mengikuti sistem yang menentang Allah.',
				verse: '"Sabat-Ku harus kamu pelihara, sebab itulah peringatan antara Aku dan kamu."',
				verseRef: 'Keluaran 31:13',
				image: '📅'
			},
			{
				title: 'Ujian Kesetiaan',
				content: 'Di akhir zaman, akan ada ujian kesetiaan. Semua orang harus memilih: ikut perintah Allah atau ikut perintah manusia. Ini bukan tentang hari biasa — ini tentang siapa yang kamu sembah dan taati sebagai otoritas tertinggi dalam hidupmu.',
				image: '🔀'
			},
			{
				title: 'Jangan Takut!',
				content: 'Allah tidak memberikan peringatan ini untuk menakuti kita, tapi untuk MEMPERSIAPKAN kita. Orang yang setia kepada Allah akan dilindungi. Kita tidak perlu takut kalau kita memilih berdiri di pihak Allah.',
				verse: '"Janganlah takut, hai kawanan kecil! Karena Bapamu telah berkenan memberikan kamu Kerajaan itu."',
				verseRef: 'Lukas 12:32',
				image: '🛡️'
			}
		],
		quiz: [
			{
				question: 'Tanda binatang itu apa?',
				options: ['Microchip', 'Tato angka', 'Memilih mengikuti perintah manusia daripada Allah', 'Barcode'],
				correctIndex: 2,
				explanation: 'Tanda binatang berarti memilih menaati perintah manusia ketimbang perintah Allah.'
			},
			{
				question: 'Apa tanda Allah menurut Alkitab?',
				options: ['Kalung salib', 'Hari Sabat', 'Baptisan', 'Cincin'],
				correctIndex: 1,
				explanation: 'Keluaran 31:13: Hari Sabat adalah tanda (peringatan) antara Allah dan umat-Nya.'
			},
			{
				question: 'Mengapa Allah memberi peringatan tentang tanda binatang?',
				options: ['Untuk menakuti', 'Untuk mempersiapkan dan melindungi kita', 'Tanpa alasan', 'Untuk hiburan'],
				correctIndex: 1,
				explanation: 'Allah memperingatkan karena kasih — Dia ingin mempersiapkan dan melindungi umat-Nya.'
			}
		]
	},
	{
		id: 21,
		title: 'Amerika dalam Nubuat Alkitab',
		subtitle: 'Binatang dari bumi di Wahyu 13',
		icon: '🗽',
		color: 'from-blue-700 to-blue-900',
		sections: [
			{
				title: 'Nubuat tentang Bangsa-Bangsa',
				content: 'Alkitab meramalkan munculnya bangsa-bangsa besar dalam sejarah. Di Wahyu 13, ada "binatang dari bumi" yang muncul di wilayah baru, berpenduduk sedikit, dengan dua tanduk (seperti domba). Banyak pelajar Alkitab melihat ini sebagai gambaran Amerika Serikat.',
				verse: '"Dan aku melihat seekor binatang lain keluar dari dalam bumi. Ia mempunyai dua tanduk sama seperti tanduk anak domba."',
				verseRef: 'Wahyu 13:11',
				image: '🌎'
			},
			{
				title: 'Dua Tanduk: Kebebasan',
				content: 'Dua tanduk seperti domba melambangkan dua prinsip mulia: kebebasan beragama dan kebebasan sipil. Amerika didirikan atas prinsip-prinsip ini — tempat di mana orang bebas beribadah tanpa paksaan pemerintah.',
				image: '🕊️'
			},
			{
				title: 'Perubahan yang Mengejutkan',
				content: 'Tapi nubuat berkata binatang itu kemudian "berbicara seperti naga." Artinya, bangsa yang awalnya berdiri untuk kebebasan akan berubah dan mulai memaksakan aturan keagamaan. Kebebasan beragama akan terancam.',
				image: '🐉'
			},
			{
				title: 'Pelajaran untuk Kita',
				content: 'Nubuat ini mengajarkan bahwa kita tidak boleh menaruh harapan pada pemerintah manusia mana pun. Hanya Kerajaan Allah yang kekal dan sempurna. Tugas kita adalah setia kepada Allah apapun yang terjadi di dunia.',
				verse: '"Kita harus lebih taat kepada Allah dari pada kepada manusia."',
				verseRef: 'Kisah 5:29',
				image: '👑'
			}
		],
		quiz: [
			{
				question: 'Dalam Wahyu 13, "binatang dari bumi" muncul dari mana?',
				options: ['Laut', 'Dari dalam bumi (wilayah baru)', 'Langit', 'Gunung'],
				correctIndex: 1,
				explanation: 'Wahyu 13:11: Binatang ini keluar dari bumi — wilayah baru yang berpenduduk sedikit.'
			},
			{
				question: 'Dua tanduk seperti domba melambangkan apa?',
				options: ['Kekuatan militer', 'Kebebasan beragama dan sipil', 'Kekayaan', 'Senjata'],
				correctIndex: 1,
				explanation: 'Dua tanduk seperti domba melambangkan prinsip kebebasan beragama dan kebebasan sipil.'
			},
			{
				question: 'Kepada siapa kita harus selalu taat?',
				options: ['Pemerintah saja', 'Allah di atas segalanya', 'Orang kaya', 'Tidak perlu taat'],
				correctIndex: 1,
				explanation: 'Kisah 5:29: Kita harus lebih taat kepada Allah daripada kepada manusia.'
			}
		]
	},
	{
		id: 22,
		title: 'Wanita yang "Lain"',
		subtitle: 'Babel besar dalam nubuat Wahyu',
		icon: '👸',
		color: 'from-purple-600 to-purple-800',
		sections: [
			{
				title: 'Dua Wanita di Wahyu',
				content: 'Di kitab Wahyu ada dua wanita. Dalam nubuat, "wanita" melambangkan gereja/umat Allah. Wanita pertama berpakaian matahari (Wahyu 12) — gereja sejati Allah. Wanita kedua berpakaian ungu dan merah (Wahyu 17) — gereja yang murtad.',
				image: '👩'
			},
			{
				title: 'Babel: Kebingungan Agama',
				content: 'Wanita kedua disebut "Babel Besar." Babel berarti kebingungan. Ini melambangkan sistem keagamaan yang mencampurkan kebenaran Alkitab dengan tradisi manusia. Allah memanggil umat-Nya untuk keluar dari kebingungan ini.',
				verse: '"Keluarlah dari padanya, hai umat-Ku, supaya kamu jangan mengambil bagian dalam dosa-dosanya."',
				verseRef: 'Wahyu 18:4',
				image: '🏚️'
			},
			{
				title: 'Ciri-Ciri Babel',
				content: 'Babel dicirikan oleh: mengubah hukum Allah, mengajarkan ajaran yang tidak sesuai Alkitab, campuran agama dan politik, dan menganiaya orang-orang yang setia kepada kebenaran. Ini bukan tentang orang-orangnya, tapi SISTEM-nya.',
				image: '📋'
			},
			{
				title: 'Allah Memanggil Umat-Nya',
				content: 'Allah punya anak-anak yang tulus di semua gereja. Panggilan-Nya bukan untuk menghakimi orang, tapi untuk mengajak semua orang kembali kepada kebenaran Alkitab yang murni. Kasih dan kebenaran berjalan bersama.',
				image: '📢'
			}
		],
		quiz: [
			{
				question: 'Dalam nubuat Wahyu, "wanita" melambangkan apa?',
				options: ['Negara', 'Gereja/umat Allah', 'Malaikat', 'Ratu'],
				correctIndex: 1,
				explanation: 'Dalam nubuat, wanita melambangkan gereja atau umat Allah.'
			},
			{
				question: 'Apa arti "Babel"?',
				options: ['Keindahan', 'Kekuatan', 'Kebingungan', 'Kedamaian'],
				correctIndex: 2,
				explanation: 'Babel berarti kebingungan — campuran ajaran Alkitab dengan tradisi manusia.'
			},
			{
				question: 'Apa panggilan Allah dalam Wahyu 18:4?',
				options: ['Tetap di Babel', 'Keluar dari Babel', 'Bergabung dengan Babel', 'Abaikan Babel'],
				correctIndex: 1,
				explanation: '"Keluarlah dari padanya, hai umat-Ku" — Allah memanggil kita keluar dari kebingungan agama.'
			}
		]
	},
	{
		id: 23,
		title: 'Mempelai Kristus',
		subtitle: 'Gereja sejati Allah di akhir zaman',
		icon: '💍',
		color: 'from-rose-400 to-pink-600',
		sections: [
			{
				title: 'Gereja sebagai Mempelai',
				content: 'Alkitab menggambarkan gereja sejati sebagai "mempelai" Kristus — indah, setia, dan murni. Gereja yang sejati mengasihi Yesus dan menaati semua perintah-Nya berdasarkan Alkitab.',
				verse: '"Marilah kita bersukacita dan bersorak-sorai dan memuliakan Dia! Karena hari perkawinan Anak Domba telah tiba."',
				verseRef: 'Wahyu 19:7',
				image: '👰'
			},
			{
				title: 'Ciri-Ciri Gereja Sejati',
				content: 'Wahyu 12:17 memberikan dua ciri utama gereja Allah di akhir zaman: (1) Menuruti perintah-perintah Allah (termasuk Sabat), dan (2) Memiliki kesaksian Yesus (roh nubuat). Ini adalah dua penanda yang jelas.',
				verse: '"Mereka yang menuruti perintah-perintah Allah dan memiliki kesaksian Yesus."',
				verseRef: 'Wahyu 12:17',
				image: '✅'
			},
			{
				title: 'Bukan Tentang Nama Gereja',
				content: 'Yang penting bukan nama gerejanya, tapi apakah gereja itu mengajarkan dan mengikuti SELURUH kebenaran Alkitab. Allah mencari orang-orang yang tulus hati dan mau mengikut Dia sepenuhnya.',
				image: '💡'
			},
			{
				title: 'Panggilan untuk Bergabung',
				content: 'Allah mengundang setiap orang untuk bergabung dengan umat-Nya yang setia — orang-orang yang mengasihi Yesus dan menaati seluruh kebenaran-Nya. Ini bukan tentang kesempurnaan, tapi tentang arah hidup kita.',
				image: '🤝'
			}
		],
		quiz: [
			{
				question: 'Gereja sejati digambarkan sebagai apa?',
				options: ['Gedung besar', 'Mempelai Kristus', 'Tentara', 'Perusahaan'],
				correctIndex: 1,
				explanation: 'Alkitab menggambarkan gereja sejati sebagai mempelai Kristus yang setia dan murni.'
			},
			{
				question: 'Apa dua ciri gereja Allah di akhir zaman (Wahyu 12:17)?',
				options: ['Kaya dan besar', 'Menuruti perintah Allah dan memiliki kesaksian Yesus', 'Tua dan tradisional', 'Modern dan populer'],
				correctIndex: 1,
				explanation: 'Wahyu 12:17: Menuruti perintah Allah + memiliki kesaksian Yesus = gereja akhir zaman.'
			},
			{
				question: 'Apa yang lebih penting dari nama gereja?',
				options: ['Ukuran gedung', 'Mengikuti seluruh kebenaran Alkitab', 'Jumlah anggota', 'Musik yang bagus'],
				correctIndex: 1,
				explanation: 'Yang penting bukan nama, tapi apakah gereja mengajarkan dan mengikuti seluruh kebenaran Alkitab.'
			}
		]
	},
	{
		id: 24,
		title: 'Apakah Allah Mengilhami Peramal?',
		subtitle: 'Bahaya okultisme dan spiritualisme',
		icon: '🔮',
		color: 'from-violet-700 to-indigo-900',
		sections: [
			{
				title: 'Daya Tarik Hal Gaib',
				content: 'Banyak orang tertarik dengan ramalan, horoskop, dan hal-hal gaib. Mereka ingin tahu masa depan atau berkomunikasi dengan orang mati. Tapi Alkitab sangat jelas: ini BERBAHAYA!',
				image: '⚠️'
			},
			{
				title: 'Allah Melarang Okultisme',
				content: 'Allah dengan tegas melarang semua bentuk okultisme: meramal, sihir, berkomunikasi dengan "arwah," membaca bintang untuk nasib, dan sejenisnya. Mengapa? Karena semua itu berasal dari Setan, bukan dari Allah.',
				verse: '"Janganlah ada padamu seorang yang menenung, seorang peramal, seorang ahli nujum, seorang penyihir, seorang pemantera, ataupun seorang yang bertanya kepada arwah."',
				verseRef: 'Ulangan 18:10-11',
				image: '🚫'
			},
			{
				title: '"Arwah" Sebenarnya Iblis',
				content: 'Ingat pelajaran sebelumnya: orang mati tidak tahu apa-apa! Jadi "arwah" yang muncul di sesi spiritisme sebenarnya adalah iblis yang menyamar. Setan bisa menyamar menjadi siapa saja untuk menipu.',
				verse: '"Iblis sendiri menyamar sebagai malaikat terang."',
				verseRef: '2 Korintus 11:14',
				image: '😈'
			},
			{
				title: 'Sumber Bimbingan yang Benar',
				content: 'Kita tidak perlu peramal atau horoskop. Allah memberikan Alkitab dan Roh Kudus untuk membimbing hidup kita. Firman Allah jauh lebih dapat dipercaya dari ramalan mana pun!',
				verse: '"Firman-Mu itu pelita bagi kakiku dan terang bagi jalanku."',
				verseRef: 'Mazmur 119:105',
				image: '💡'
			}
		],
		quiz: [
			{
				question: 'Apa pendapat Allah tentang okultisme dan ramalan?',
				options: ['Allah mendukung', 'Allah melarangnya dengan tegas', 'Allah tidak peduli', 'Tergantung situasi'],
				correctIndex: 1,
				explanation: 'Ulangan 18:10-11: Allah melarang semua bentuk okultisme karena itu berasal dari Setan.'
			},
			{
				question: '"Arwah" yang muncul di sesi spiritisme sebenarnya apa?',
				options: ['Benar-benar orang mati', 'Malaikat', 'Iblis yang menyamar', 'Bayangan biasa'],
				correctIndex: 2,
				explanation: 'Orang mati tidak tahu apa-apa. "Arwah" sebenarnya iblis yang menyamar (2 Korintus 11:14).'
			},
			{
				question: 'Apa sumber bimbingan yang benar untuk hidup kita?',
				options: ['Horoskop', 'Peramal', 'Alkitab dan Roh Kudus', 'Kartu tarot'],
				correctIndex: 2,
				explanation: 'Mazmur 119:105: Firman Allah adalah pelita dan terang — sumber bimbingan terbaik!'
			}
		]
	},
	{
		id: 25,
		title: 'Dalam Tuhan Kita Percaya',
		subtitle: 'Penatalayanan dan persepuluhan',
		icon: '💰',
		color: 'from-emerald-600 to-green-700',
		sections: [
			{
				title: 'Segala Sesuatu Milik Allah',
				content: 'Semua yang kita miliki sebenarnya milik Allah — uang, kesehatan, waktu, kemampuan. Kita hanyalah "manajer" (pengelola) yang dipercaya Allah untuk mengurus milik-Nya. Ini disebut penatalayanan.',
				verse: '"TUHAN punya bumi dan segala isinya."',
				verseRef: 'Mazmur 24:1',
				image: '🌍'
			},
			{
				title: 'Persepuluhan: Mengembalikan Milik Allah',
				content: 'Allah meminta kita mengembalikan sepersepuluh (10%) dari penghasilan kita. Ini bukan sumbangan — ini mengembalikan apa yang memang milik Allah. Persepuluhan menunjukkan bahwa kita percaya Allah sebagai Pemilik segalanya.',
				verse: '"Bawalah seluruh persembahan persepuluhan itu ke dalam rumah perbendaharaan."',
				verseRef: 'Maleakhi 3:10',
				image: '🏦'
			},
			{
				title: 'Janji Allah untuk Pemberi',
				content: 'Allah berjanji bahwa Dia akan memberkati orang yang setia dalam persepuluhan. Dia berkata: "Ujilah Aku!" Ini satu-satunya tempat Allah mengajak kita menguji-Nya. Banyak orang sudah membuktikan kesetiaan Allah!',
				verse: '"Ujilah Aku, apakah Aku tidak membukakan bagimu tingkap-tingkap langit dan mencurahkan berkat kepadamu sampai berkelimpahan."',
				verseRef: 'Maleakhi 3:10',
				image: '🌧️'
			},
			{
				title: 'Murah Hati Seperti Allah',
				content: 'Selain persepuluhan, Allah juga ingin kita menjadi orang yang murah hati. Memberi kepada orang miskin, mendukung pekerjaan Allah, dan membantu sesama. Orang yang memberi justru lebih diberkati dari yang menerima!',
				verse: '"Adalah lebih berbahagia memberi dari pada menerima."',
				verseRef: 'Kisah 20:35',
				image: '🤲'
			}
		],
		quiz: [
			{
				question: 'Berapa persen persepuluhan yang diminta Allah?',
				options: ['5%', '10%', '50%', '100%'],
				correctIndex: 1,
				explanation: 'Persepuluhan adalah 10% dari penghasilan — mengembalikan apa yang milik Allah.'
			},
			{
				question: 'Apa janji Allah untuk orang yang setia berpersepuluhan?',
				options: ['Tidak ada janji', 'Berkat yang berkelimpahan', 'Masalah', 'Kemiskinan'],
				correctIndex: 1,
				explanation: 'Maleakhi 3:10: Allah berjanji membukakan berkat sampai berkelimpahan!'
			},
			{
				question: 'Menurut Kisah 20:35, yang lebih berbahagia adalah...?',
				options: ['Menerima', 'Memberi', 'Menyimpan', 'Meminjam'],
				correctIndex: 1,
				explanation: '"Adalah lebih berbahagia memberi dari pada menerima" — kata Tuhan Yesus.'
			}
		]
	},
	{
		id: 26,
		title: 'Kasih yang Mengubahkan',
		subtitle: 'Hidup baru yang diubahkan oleh kasih Allah',
		icon: '🦋',
		color: 'from-pink-500 to-purple-600',
		sections: [
			{
				title: 'Kasih Allah Tidak Pernah Berubah',
				content: 'Apapun yang sudah kamu lakukan, kasih Allah tetap sama. Dia tidak mengasihi kamu karena kamu baik. Dia mengasihi kamu karena DIA baik. Tidak ada dosa yang terlalu besar untuk diampuni Allah.',
				verse: '"Aku mengasihi engkau dengan kasih yang kekal, sebab itu Aku melanjutkan kasih setia-Ku kepadamu."',
				verseRef: 'Yeremia 31:3',
				image: '❤️'
			},
			{
				title: 'Lahir Baru',
				content: 'Yesus berkata kita harus "lahir baru" — bukan secara fisik, tapi secara rohani. Ini artinya membiarkan Roh Kudus mengubah hati dan pikiran kita dari dalam. Orang lama mati, orang baru hidup!',
				verse: '"Jikalau seorang tidak dilahirkan kembali, ia tidak dapat melihat Kerajaan Allah."',
				verseRef: 'Yohanes 3:3',
				image: '🔄'
			},
			{
				title: 'Proses Perubahan',
				content: 'Perubahan hidup tidak terjadi dalam semalam. Ini proses setiap hari — disebut "pengudusan." Setiap hari kita belajar lebih mirip Yesus. Kadang jatuh, tapi selalu bangkit lagi dengan pertolongan Allah.',
				verse: '"Kita semua mencerminkan kemuliaan Tuhan dengan wajah yang tidak berselubung. Dan kita diubah menjadi serupa dengan gambar-Nya."',
				verseRef: '2 Korintus 3:18',
				image: '🪜'
			},
			{
				title: 'Dari Ulat Menjadi Kupu-Kupu',
				content: 'Bayangkan ulat bulu yang masuk ke kepompong dan keluar menjadi kupu-kupu yang indah. Begitulah kasih Allah mengubah kita! Kita mungkin merasa seperti ulat sekarang, tapi Allah sedang mengerjakan sesuatu yang indah dalam hidup kita.',
				image: '🦋'
			},
			{
				title: 'Bagikan Kasih-Nya',
				content: 'Ketika kasih Allah mengubah hidupmu, kamu pasti ingin membagikannya kepada orang lain. Ceritakan apa yang Yesus sudah lakukan untukmu. Kasih yang kamu terima akan mengalir melalui kamu untuk memberkati orang lain.',
				verse: '"Kita mengasihi, karena Allah lebih dahulu mengasihi kita."',
				verseRef: '1 Yohanes 4:19',
				image: '🌊'
			}
		],
		quiz: [
			{
				question: 'Apakah ada dosa yang terlalu besar untuk diampuni Allah?',
				options: ['Ya, banyak', 'Tidak ada', 'Tergantung', 'Hanya dosa kecil yang diampuni'],
				correctIndex: 1,
				explanation: 'Yeremia 31:3: Kasih Allah kekal — tidak ada dosa yang terlalu besar untuk pengampunan-Nya.'
			},
			{
				question: 'Apa artinya "lahir baru" menurut Yesus?',
				options: ['Lahir sebagai bayi lagi', 'Perubahan hati dan pikiran oleh Roh Kudus', 'Pindah ke negara lain', 'Ganti nama'],
				correctIndex: 1,
				explanation: 'Yohanes 3:3: Lahir baru = Roh Kudus mengubah hati dan pikiran kita dari dalam.'
			},
			{
				question: 'Proses menjadi lebih mirip Yesus setiap hari disebut apa?',
				options: ['Evolusi', 'Pengudusan', 'Meditasi', 'Pendidikan'],
				correctIndex: 1,
				explanation: 'Pengudusan adalah proses setiap hari di mana Roh Kudus membentuk kita menjadi serupa Yesus.'
			},
			{
				question: 'Mengapa kita bisa mengasihi orang lain?',
				options: ['Kita memang baik', 'Karena Allah lebih dahulu mengasihi kita', 'Karena dipaksa', 'Kita tidak bisa'],
				correctIndex: 1,
				explanation: '1 Yohanes 4:19: "Kita mengasihi, karena Allah lebih dahulu mengasihi kita."'
			}
		]
	},
	{
		id: 27,
		title: 'Tidak Ada Jalan Kembali',
		subtitle: 'Komitmen untuk mengikut Yesus sepenuhnya',
		icon: '🚀',
		color: 'from-indigo-600 to-blue-800',
		sections: [
			{
				title: 'Kamu Sudah Belajar Banyak!',
				content: 'Selamat! Kamu sudah menyelesaikan 27 pelajaran Alkitab! Kamu sudah belajar tentang kasih Allah, rencana keselamatan, nubuat, dan kebenaran-kebenaran penting lainnya. Sekarang pertanyaannya: apa yang akan kamu lakukan dengan semua ini?',
				image: '🎓'
			},
			{
				title: 'Saatnya Memutuskan',
				content: 'Setiap orang harus membuat keputusan: ikut Yesus atau tidak. Tidak ada posisi "netral" — tidak memilih berarti menolak. Tapi ingat: memilih Yesus adalah keputusan TERBAIK yang pernah kamu buat!',
				verse: '"Pilihlah pada hari ini kepada siapa kamu akan beribadah. Tetapi aku dan seisi rumahku, kami akan beribadah kepada TUHAN!"',
				verseRef: 'Yosua 24:15',
				image: '🔀'
			},
			{
				title: 'Baptisan: Langkah Iman',
				content: 'Jika kamu belum dibaptis, pertimbangkan untuk mengambil langkah iman ini. Baptisan adalah pernyataan publik bahwa kamu memilih mengikut Yesus. Kamu "dikuburkan" dalam air (hidup lama) dan bangkit dari air (hidup baru).',
				verse: '"Kita telah dikuburkan bersama-sama dengan Dia oleh baptisan dalam kematian, supaya kita hidup dalam hidup yang baru."',
				verseRef: 'Roma 6:4',
				image: '💧'
			},
			{
				title: 'Bergabung dengan Keluarga Allah',
				content: 'Iman Kristen bukan perjalanan sendiri. Kamu membutuhkan keluarga rohani — gereja yang mengajarkan seluruh kebenaran Alkitab. Bergabunglah dengan komunitas yang mendukung pertumbuhanmu.',
				verse: '"Janganlah kita menjauhkan diri dari pertemuan-pertemuan ibadah kita."',
				verseRef: 'Ibrani 10:25',
				image: '🏠'
			},
			{
				title: 'Kebiasaan Harian',
				content: 'Untuk bertumbuh dalam iman, bangun kebiasaan harian: (1) Baca Alkitab setiap hari, (2) Berdoa setiap pagi dan malam, (3) Bagikan imanmu kepada orang lain, (4) Pelihara hari Sabat, (5) Hidup sehat untuk kemuliaan Allah.',
				image: '📅'
			},
			{
				title: 'Sampai Jumpa di Surga!',
				content: 'Perjalanan ini bukan akhir — ini baru permulaan! Yesus sedang menyiapkan tempat untukmu di surga. Suatu hari nanti, kita akan berjumpa dengan Yesus muka dengan muka. Tidak ada sukacita yang lebih besar dari itu. Terus ikut Yesus — tidak ada jalan kembali!',
				verse: '"Aku yakin, bahwa Dia yang memulai pekerjaan yang baik di antara kamu, akan meneruskannya sampai pada hari Kristus Yesus."',
				verseRef: 'Filipi 1:6',
				image: '🌅'
			}
		],
		quiz: [
			{
				question: 'Apa keputusan terpenting dalam hidup?',
				options: ['Memilih pekerjaan', 'Memilih untuk mengikut Yesus', 'Memilih rumah', 'Memilih teman'],
				correctIndex: 1,
				explanation: 'Yosua 24:15: Memilih untuk mengikut Yesus adalah keputusan terbaik dan terpenting!'
			},
			{
				question: 'Baptisan melambangkan apa?',
				options: ['Mandi biasa', 'Kematian hidup lama dan kebangkitan hidup baru', 'Bermain air', 'Tradisi saja'],
				correctIndex: 1,
				explanation: 'Roma 6:4: Baptisan = dikuburkan (hidup lama mati) dan bangkit (hidup baru di dalam Kristus).'
			},
			{
				question: 'Mana yang BUKAN kebiasaan harian orang Kristen?',
				options: ['Baca Alkitab', 'Berdoa', 'Menghindari gereja', 'Bagikan iman'],
				correctIndex: 2,
				explanation: 'Ibrani 10:25: Jangan menjauhkan diri dari ibadah. Gereja adalah keluarga rohani kita!'
			},
			{
				question: 'Apa yang Yesus sedang lakukan sekarang untuk kita?',
				options: ['Tidur', 'Menyiapkan tempat di surga', 'Melupakan kita', 'Tidak ada'],
				correctIndex: 1,
				explanation: 'Yohanes 14:2: Yesus sedang menyiapkan tempat untuk kita di surga — sampai jumpa di sana!'
			},
			{
				question: 'Setelah 27 pelajaran, ini adalah...?',
				options: ['Akhir perjalanan', 'Baru permulaan!', 'Cukup sampai di sini', 'Tidak berarti'],
				correctIndex: 1,
				explanation: 'Filipi 1:6: Allah yang memulai pekerjaan baik akan meneruskannya! Ini baru permulaan!'
			}
		]
	}
];
