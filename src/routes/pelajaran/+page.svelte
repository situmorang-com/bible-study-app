<script lang="ts">
	import { lessons } from '$lib/lessons';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	function isCompleted(lessonId: number): boolean {
		return data.completedLessons?.includes(lessonId) ?? false;
	}
</script>

<div class="page-transition px-5 pt-8">
	<h1 class="text-2xl font-extrabold text-primary-dark mb-2">Pelajaran Alkitab</h1>
	<p class="text-gray-500 text-sm mb-6">12 pelajaran interaktif untuk mengenal Allah</p>

	<div class="space-y-3">
		{#each lessons as lesson, i}
			<a
				href="/pelajaran/{lesson.id}"
				class="relative flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
			>
				<!-- Lesson number badge -->
				<div class="absolute -left-1 -top-1 w-8 h-8 bg-gray-100 rounded-br-xl flex items-end justify-end pr-1.5 pb-0.5">
					<span class="text-[10px] font-bold text-gray-400">{i + 1}</span>
				</div>

				<div class="w-14 h-14 rounded-xl bg-gradient-to-br {lesson.color} flex items-center justify-center text-3xl shadow-sm flex-shrink-0">
					{lesson.icon}
				</div>
				<div class="flex-1 min-w-0">
					<h3 class="font-bold text-gray-800">{lesson.title}</h3>
					<p class="text-gray-500 text-xs mt-0.5">{lesson.subtitle}</p>
					<div class="flex items-center gap-2 mt-1.5">
						<span class="text-[10px] text-gray-400">{lesson.sections.length} bagian</span>
						<span class="text-gray-300">·</span>
						<span class="text-[10px] text-gray-400">{lesson.quiz.length} kuis</span>
					</div>
				</div>
				<div class="flex-shrink-0">
					{#if isCompleted(lesson.id)}
						<div class="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
							<span class="text-success text-lg">✓</span>
						</div>
					{:else}
						<div class="text-gray-300 text-xl">›</div>
					{/if}
				</div>
			</a>
		{/each}
	</div>
</div>
