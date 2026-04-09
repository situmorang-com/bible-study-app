<script lang="ts">
	import { lessons } from '$lib/lessons';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let greeting = $derived.by(() => {
		const hour = new Date().getHours();
		if (hour < 12) return 'Selamat Pagi';
		if (hour < 17) return 'Selamat Siang';
		return 'Selamat Malam';
	});
</script>

<div class="page-transition px-5 pt-8">
	<!-- Header -->
	<div class="mb-8">
		<p class="text-gray-500 text-sm font-medium">{greeting}</p>
		<h1 class="text-2xl font-extrabold text-primary-dark mt-1">
			{#if data.user}
				Hai, {data.user.name}! {data.user.avatarEmoji}
			{:else}
				Pelajaran Alkitab
			{/if}
		</h1>
		<p class="text-gray-500 text-sm mt-1">Pelajari kebenaran Firman Allah</p>
	</div>

	<!-- Hero Card -->
	<div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary-light p-6 mb-8 shadow-lg">
		<div class="relative z-10">
			<span class="text-4xl">📖</span>
			<h2 class="text-white text-lg font-bold mt-3">Studi Alkitab Interaktif</h2>
			<p class="text-blue-100 text-sm mt-1 leading-relaxed">
				Temukan kebenaran yang mengubah hidup melalui 12 pelajaran Alkitab yang menarik
			</p>
			<a href="/pelajaran" class="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-accent hover:bg-accent-light text-primary-dark font-bold text-sm rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105">
				Mulai Belajar →
			</a>
		</div>
		<div class="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full"></div>
		<div class="absolute -right-2 top-12 w-20 h-20 bg-white/5 rounded-full"></div>
	</div>

	<!-- Progress Overview -->
	{#if data.user && data.progressCount > 0}
		<div class="mb-8">
			<div class="flex items-center justify-between mb-3">
				<h3 class="font-bold text-gray-800">Progres Kamu</h3>
				<span class="text-xs text-gray-500">{data.progressCount}/{lessons.length} selesai</span>
			</div>
			<div class="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
				<div
					class="h-full bg-gradient-to-r from-accent to-accent-light rounded-full transition-all duration-500"
					style="width: {(data.progressCount / lessons.length) * 100}%"
				></div>
			</div>
		</div>
	{/if}

	<!-- Quick Lesson Cards -->
	<div class="mb-6">
		<h3 class="font-bold text-gray-800 mb-4">Pelajaran Terbaru</h3>
		<div class="space-y-3">
			{#each lessons.slice(0, 4) as lesson}
				<a href="/pelajaran/{lesson.id}" class="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
					<div class="w-12 h-12 rounded-xl bg-gradient-to-br {lesson.color} flex items-center justify-center text-2xl shadow-sm">
						{lesson.icon}
					</div>
					<div class="flex-1 min-w-0">
						<h4 class="font-bold text-gray-800 text-sm">{lesson.title}</h4>
						<p class="text-gray-500 text-xs truncate">{lesson.subtitle}</p>
					</div>
					<div class="text-gray-300 text-lg">›</div>
				</a>
			{/each}
		</div>
	</div>

	<!-- See All -->
	<a href="/pelajaran" class="block text-center py-3 text-primary font-semibold text-sm hover:text-primary-light transition-colors">
		Lihat Semua Pelajaran →
	</a>

	<!-- Auth prompt -->
	{#if !data.user}
		<div class="mt-6 p-5 bg-surface-warm rounded-2xl border border-amber-200/50">
			<div class="text-center">
				<span class="text-3xl">👤</span>
				<p class="font-bold text-gray-800 mt-2">Daftar untuk Simpan Progres</p>
				<p class="text-gray-500 text-xs mt-1">Ikuti kuis dan lihat peringkatmu!</p>
				<a href="/daftar" class="inline-block mt-3 px-6 py-2.5 bg-primary text-white font-semibold text-sm rounded-full hover:bg-primary-light transition-all duration-200">
					Daftar Sekarang
				</a>
			</div>
		</div>
	{/if}
</div>
