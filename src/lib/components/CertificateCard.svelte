<script lang="ts">
	import amazingFactsLogo from '$lib/assets/amazing-facts-logo.svg';
	import adventistLogo from '$lib/assets/adventist-id--black.svg';

	let {
		userName,
		lessonTitle,
		score,
		totalQuestions,
		issueDate
	}: {
		userName: string;
		lessonTitle: string;
		score: number;
		totalQuestions: number;
		issueDate: string;
	} = $props();

	let percentage = $derived(Math.round((score / totalQuestions) * 100));
</script>

<div class="relative overflow-hidden rounded-[2rem] border border-amber-200/60 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.96),_rgba(255,248,235,0.98)_45%,_rgba(247,238,221,1)_100%)] p-6 shadow-[0_20px_60px_rgba(30,58,95,0.14)]">
	<div class="absolute -left-8 -top-10 h-28 w-28 rounded-full bg-amber-200/30 blur-2xl"></div>
	<div class="absolute -bottom-8 -right-4 h-24 w-24 rounded-full bg-blue-200/30 blur-2xl"></div>

	<div class="relative">
		<div class="flex items-center justify-between gap-3">
			<img src={amazingFactsLogo} alt="Amazing Facts" class="h-9 max-w-[10.5rem] w-auto object-contain" />
			<img src={adventistLogo} alt="Adventist Indonesia" class="h-8 max-w-[11rem] w-auto object-contain opacity-80" />
		</div>

		<div class="mt-6 text-center">
			<p class="text-lg font-semibold uppercase tracking-[0.4em] text-primary/70">Sertifikat</p>
			<h3 class="mt-3 text-3xl font-extrabold text-primary-dark">Pendalaman Alkitab</h3>
			<p class="mt-2 text-sm text-gray-600">Diberikan kepada</p>
			<p class="mt-2 text-3xl font-black text-primary-dark">{userName}</p>
			<p class="mx-auto mt-4 max-w-md text-sm leading-relaxed text-gray-600">
				Telah menyelesaikan pelajaran
				<span class="font-bold text-primary-dark">"{lessonTitle}"</span>
				dan lulus tes akhir.
			</p>
		</div>

		<div class="mt-6 grid grid-cols-2 gap-3">
			<div class="rounded-2xl border border-white/70 bg-white/70 p-4 text-center shadow-sm">
				<p class="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">Nilai Akhir</p>
				<p class="mt-5 text-3xl font-extrabold text-primary-dark">{percentage}%</p>
			</div>
			<div class="rounded-2xl border border-white/70 bg-white/70 p-4 text-center shadow-sm">
				<p class="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">Tanggal</p>
				<p class="mt-2 text-lg font-bold text-primary-dark">{issueDate}</p>
				<p class="mt-1 text-xs text-gray-500">Sertifikat digital</p>
			</div>
		</div>

		<div class="mt-6 border-t border-dashed border-primary/20 pt-4 text-center">
			<p class="text-xs font-semibold uppercase tracking-[0.25em] text-primary/60">Firman Tuhan Tetap Teguh</p>
			<p class="mt-2 text-sm text-gray-600">"Masih Adakah yang Bisa Dipercaya?"</p>
		</div>
	</div>
</div>
