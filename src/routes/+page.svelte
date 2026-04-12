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

	let completedLessonIds = $derived(new Set(data.completedLessonIds ?? []));
	let startedLessonIds = $derived(new Set(data.startedLessonIds ?? []));
	let completedLessons = $derived(
		lessons
			.filter((lesson) => completedLessonIds.has(lesson.id))
			.sort((a, b) => b.id - a.id)
			.slice(0, 2)
	);
	let upcomingLessons = $derived(
		lessons
			.filter((lesson) => !completedLessonIds.has(lesson.id))
			.slice(0, 3)
	);
	let primaryHeroHref = $derived(data.continueLessonHref ?? '/pelajaran');
	let primaryHeroLabel = $derived(data.hasLearningHistory ? 'Lanjut Belajar' : 'Mulai Belajar');

	function isStarted(lessonId: number) {
		return startedLessonIds.has(lessonId);
	}
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
				Temukan kebenaran yang mengubah hidup melalui {lessons.length} pelajaran Alkitab yang menarik
			</p>
			<div class="mt-4 flex flex-wrap gap-3">
				<a href={primaryHeroHref} class="inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-light text-primary-dark font-bold text-sm rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105">
					{primaryHeroLabel} →
				</a>
				<a href="/pelajaran" class="inline-flex items-center gap-2 px-5 py-2.5 bg-white/15 hover:bg-white/20 text-white font-bold text-sm rounded-full transition-all duration-200 ring-1 ring-white/25">
					Lihat Semua Pelajaran
				</a>
			</div>
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

	<!-- Completed Lessons -->
	{#if completedLessons.length > 0}
		<div class="mb-8">
			<h3 class="font-bold text-gray-800 mb-4">Pelajaran Selesai</h3>
			<div class="space-y-3">
				{#each completedLessons as lesson}
					<a href={data.user ? `/sertifikat/${lesson.id}/${data.user.id}` : `/pelajaran/${lesson.id}`} class="relative flex items-center gap-4 overflow-hidden rounded-2xl bg-white p-4 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-md active:scale-[0.98]">
						<div class="absolute right-0 top-0 flex h-6 min-w-6 items-start justify-center rounded-bl-lg bg-slate-100 px-1.5 pt-0.5 text-[10px] font-extrabold text-slate-500">
							{lesson.id}
						</div>
						<div class="w-12 h-12 rounded-xl bg-gradient-to-br {lesson.color} flex items-center justify-center text-2xl shadow-sm">
							{lesson.icon}
						</div>
						<div class="flex-1 min-w-0">
							<div class="flex items-center gap-2">
								<h4 class="font-bold text-gray-800 text-sm">{lesson.title}</h4>
								<span class="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-green-700">Selesai</span>
							</div>
							<p class="text-gray-500 text-xs truncate">{lesson.subtitle}</p>
						</div>
						<div class="text-gray-300 text-lg">›</div>
					</a>
				{/each}
			</div>
		</div>
	{/if}

	<!-- Upcoming Lesson Cards -->
	<div class="mb-6">
		<h3 class="font-bold text-gray-800 mb-4">
			{#if completedLessons.length > 0}
				Pelajaran Berikut yang Bisa Kamu Ambil
			{:else}
				Pelajaran yang Bisa Kamu Ambil
			{/if}
		</h3>
		<div class="space-y-3">
			{#each upcomingLessons as lesson}
				<a href="/pelajaran/{lesson.id}" class="relative flex items-center gap-4 overflow-hidden rounded-2xl bg-white p-4 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-md active:scale-[0.98]">
					<div class="absolute right-0 top-0 flex h-6 min-w-6 items-start justify-center rounded-bl-lg bg-slate-100 px-1.5 pt-0.5 text-[10px] font-extrabold text-slate-500">
						{lesson.id}
					</div>
					<div class="w-12 h-12 rounded-xl bg-gradient-to-br {lesson.color} flex items-center justify-center text-2xl shadow-sm">
						{lesson.icon}
					</div>
					<div class="flex-1 min-w-0">
						<div class="flex items-center gap-2">
							<h4 class="font-bold text-gray-800 text-sm">{lesson.title}</h4>
							{#if isStarted(lesson.id)}
								<span class="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-amber-700">Lanjut</span>
							{/if}
						</div>
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
