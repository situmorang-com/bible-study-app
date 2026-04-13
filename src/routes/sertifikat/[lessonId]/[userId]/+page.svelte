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
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
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

<div class="page-transition px-5 pt-8 pb-12">
	{#if data.isOwner}
		<!-- ═══ OWNER VIEW ═══ -->
		<div class="text-center">
			<p class="text-xs font-semibold uppercase tracking-[0.25em] text-primary/60">Sertifikat Kamu</p>
			<h1 class="mt-2 text-2xl font-extrabold text-primary-dark">Selamat, {data.user.name}!</h1>
			<p class="mt-2 text-sm leading-relaxed text-gray-500">Bagikan sertifikat ini agar orang lain terinspirasi untuk belajar Firman Tuhan.</p>
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
	{:else}
		<!-- ═══ PUBLIC VISITOR VIEW ═══ -->
		<div class="text-center">
			<p class="text-xs font-semibold uppercase tracking-[0.25em] text-primary/60">Sertifikat Pendalaman Alkitab</p>
			<h1 class="mt-2 text-2xl font-extrabold text-primary-dark">{data.user.name} Telah Lulus!</h1>
			<p class="mt-2 text-sm leading-relaxed text-gray-500">
				Berhasil menyelesaikan pelajaran "{data.lesson.title}" dengan nilai {Math.round(data.attempt.percentage)}%.
			</p>
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

		<!-- Invitation to learn -->
		<div class="mt-8 rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-6 text-center shadow-sm">
			<div class="text-4xl">📖</div>
			<h2 class="mt-3 text-lg font-extrabold text-primary-dark">Mau Belajar Firman Tuhan Juga?</h2>
			<p class="mt-2 text-sm leading-relaxed text-gray-600">
				Pendalaman Alkitab ini gratis dan terbuka untuk semua orang. Pelajari kebenaran Firman Tuhan yang tetap teguh di tengah dunia yang penuh ketidakpastian.
			</p>
			<div class="mt-5 grid gap-3">
				<a
					href="/daftar"
					class="block rounded-xl bg-gradient-to-r from-primary to-primary-light px-5 py-3.5 text-center text-sm font-bold text-white shadow-md transition-all active:scale-[0.98]"
				>
					Mulai Belajar Sekarang
				</a>
				{#if data.isLoggedIn}
					<a
						href="/pelajaran"
						class="block rounded-xl bg-white px-5 py-3 text-center text-sm font-semibold text-primary shadow-sm ring-1 ring-gray-200 transition-all active:scale-[0.98]"
					>
						Lihat Semua Pelajaran
					</a>
				{:else}
					<a
						href="/masuk"
						class="block rounded-xl bg-white px-5 py-3 text-center text-sm font-semibold text-primary shadow-sm ring-1 ring-gray-200 transition-all active:scale-[0.98]"
					>
						Sudah Punya Akun? Masuk
					</a>
				{/if}
			</div>
		</div>

		<p class="mt-6 text-center text-xs text-gray-400">
			Firman Tuhan Tetap Teguh &mdash; Pendalaman Alkitab Amazing Facts
		</p>
	{/if}
</div>
