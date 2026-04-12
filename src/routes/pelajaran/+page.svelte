<script lang="ts">
	import { lessons } from '$lib/lessons';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	function isCompleted(lessonId: number): boolean {
		return data.completedLessons?.includes(lessonId) ?? false;
	}

	function isStarted(lessonId: number): boolean {
		return data.startedLessons?.includes(lessonId) ?? false;
	}
</script>

<div class="page-transition px-5 pt-8">
	<h1 class="text-2xl font-extrabold text-primary-dark mb-2">Pelajaran Alkitab</h1>
	<p class="text-gray-500 text-sm mb-6">{lessons.length} pelajaran interaktif untuk mengenal Allah</p>

	<div class="space-y-3">
		{#each lessons as lesson, i}
			<a
				href={isCompleted(lesson.id) && data.user ? `/sertifikat/${lesson.id}/${data.user.id}` : `/pelajaran/${lesson.id}`}
				class="relative flex items-center gap-4 overflow-hidden rounded-2xl bg-white p-4 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-md active:scale-[0.98]"
			>
				<div class="absolute right-0 top-0 flex h-6 min-w-6 items-start justify-center rounded-bl-lg bg-slate-100 px-1.5 pt-0.5 text-[10px] font-extrabold text-slate-500">
					{i + 1}
				</div>

				<div class="h-14 w-14 flex-shrink-0 rounded-xl bg-gradient-to-br {lesson.color} flex items-center justify-center text-3xl shadow-sm">
					{lesson.icon}
				</div>
				<div class="flex-1 min-w-0">
					<div class="flex items-center gap-2">
						<h3 class="font-bold text-gray-800 text-sm">{lesson.title}</h3>
						{#if isCompleted(lesson.id)}
							<span class="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-green-700">Selesai</span>
						{:else if isStarted(lesson.id)}
							<span class="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-amber-700">Lanjut</span>
						{/if}
					</div>
					<p class="mt-0.5 text-xs text-gray-500">{lesson.subtitle}</p>
				</div>
				<div class="flex-shrink-0">
					{#if isCompleted(lesson.id)}
						<div class="text-gray-300 text-lg">›</div>
					{:else}
						<div class="text-gray-300 text-xl">›</div>
					{/if}
				</div>
			</a>
		{/each}
	</div>
</div>
