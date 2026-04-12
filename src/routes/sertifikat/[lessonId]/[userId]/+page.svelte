<script lang="ts">
	import CertificateCard from '$lib/components/CertificateCard.svelte';
	import ShareButtons from '$lib/components/ShareButtons.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let issueDate = $derived(
		new Intl.DateTimeFormat('id-ID', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		}).format(new Date(data.attempt.completedAt))
	);

	let ogTitle = $derived(`${data.user.name} lulus Pendalaman Alkitab: "${data.lesson.title}"`);
	let ogDescription = $derived(
		`Nilai ${Math.round(data.attempt.percentage)}% — Firman Tuhan tetap teguh di tengah dunia yang penuh ketidakpastian. Yuk ikut belajar bareng.`
	);
	let ogImage = $derived(data.ogImageUrl);
	let reviewButtonHref = $derived(
		Math.round(data.attempt.percentage) < 100
			? `/pelajaran/${data.lesson.id}?retry=1`
			: `/pelajaran/${data.lesson.id}?review=1`
	);
	let reviewButtonLabel = $derived(
		Math.round(data.attempt.percentage) < 100
			? 'Belajar Lagi untuk Nilai Lebih Tinggi'
			: 'Dalami Lagi Pelajaran'
	);
</script>

<svelte:head>
	<title>{ogTitle}</title>
	<meta name="description" content={ogDescription} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={ogTitle} />
	<meta property="og:description" content={ogDescription} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1400" />
	<meta property="og:image:height" content="990" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:alt" content={ogTitle} />
	<meta property="og:url" content={data.certificateUrl} />
	<meta property="og:site_name" content="Pendalaman Alkitab" />
	<meta property="og:locale" content="id_ID" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={ogTitle} />
	<meta name="twitter:description" content={ogDescription} />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>

<div class="page-transition px-5 pt-8">
	<div class="text-center">
		<p class="text-xs font-semibold uppercase tracking-[0.25em] text-primary/60">Sertifikat Publik</p>
		<h1 class="mt-2 text-2xl font-extrabold text-primary-dark">Sertifikat Pendalaman Alkitab</h1>
		<p class="mt-2 text-sm leading-relaxed text-gray-500">Halaman ini bisa dibagikan agar orang lain melihat pencapaian peserta dan pratinjau sosial yang benar.</p>
	</div>

	<div class="mt-6">
		<CertificateCard
			userName={data.user.name}
			lessonTitle={data.lesson.title}
			score={data.attempt.score}
			totalQuestions={data.attempt.totalQuestions}
			issueDate={issueDate}
		/>
	</div>

	<div class="mt-5">
		<ShareButtons
			title={ogTitle}
			description={ogDescription}
			url={data.certificateUrl}
			imageUrl={data.ogImageUrl}
		/>
	</div>

	<div class="mt-5 grid gap-3">
		<a
			href={data.printPdfUrl}
			target="_blank"
			rel="noopener"
			class="block rounded-xl bg-accent px-5 py-3 text-center text-sm font-bold text-primary-dark shadow-md transition-all active:scale-[0.98]"
		>
			Unduh Sertifikat untuk Cetak (PDF)
		</a>
		<a
			href={reviewButtonHref}
			class="block rounded-xl bg-gradient-to-r from-primary to-primary-light px-5 py-3 text-center text-sm font-bold text-white shadow-md transition-all active:scale-[0.98]"
		>
			{reviewButtonLabel}
		</a>
		<a
			href="/peringkat"
			class="block rounded-xl bg-white px-5 py-3 text-center text-sm font-semibold text-primary shadow-sm ring-1 ring-gray-200 transition-all active:scale-[0.98]"
		>
			Lihat Peringkat
		</a>
	</div>
</div>
