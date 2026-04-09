<script lang="ts">
	import { lessons } from '$lib/lessons';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	async function logout() {
		await fetch('/api/auth/logout', { method: 'POST' });
		window.location.href = '/';
	}
</script>

<div class="page-transition px-5 pt-8">
	{#if !data.user}
		<div class="text-center py-16">
			<span class="text-6xl">👤</span>
			<h1 class="text-xl font-extrabold text-gray-800 mt-4">Belum Masuk</h1>
			<p class="text-gray-500 text-sm mt-2">Daftar atau masuk untuk melihat profil</p>
			<div class="flex gap-3 justify-center mt-6">
				<a href="/daftar" class="px-6 py-2.5 bg-primary text-white font-semibold text-sm rounded-full">
					Daftar
				</a>
				<a href="/masuk" class="px-6 py-2.5 bg-gray-100 text-gray-700 font-semibold text-sm rounded-full">
					Masuk
				</a>
			</div>
		</div>
	{:else}
		<!-- Profile header -->
		<div class="text-center mb-8">
			<div class="inline-flex w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-light items-center justify-center text-4xl shadow-lg">
				{data.user.avatarEmoji}
			</div>
			<h1 class="text-xl font-extrabold text-gray-800 mt-3">{data.user.name}</h1>
		</div>

		<!-- Stats cards -->
		<div class="grid grid-cols-3 gap-3 mb-8">
			<div class="bg-white rounded-xl p-3 text-center shadow-sm">
				<span class="text-2xl">📖</span>
				<p class="text-lg font-extrabold text-gray-800 mt-1">{data.stats.lessonsCompleted}</p>
				<p class="text-[10px] text-gray-500">Pelajaran</p>
			</div>
			<div class="bg-white rounded-xl p-3 text-center shadow-sm">
				<span class="text-2xl">🎯</span>
				<p class="text-lg font-extrabold text-gray-800 mt-1">{data.stats.quizzesTaken}</p>
				<p class="text-[10px] text-gray-500">Kuis</p>
			</div>
			<div class="bg-white rounded-xl p-3 text-center shadow-sm">
				<span class="text-2xl">⭐</span>
				<p class="text-lg font-extrabold text-gray-800 mt-1">{Math.round(data.stats.avgScore)}%</p>
				<p class="text-[10px] text-gray-500">Rata-rata</p>
			</div>
		</div>

		<!-- Progress -->
		<div class="mb-8">
			<h3 class="font-bold text-gray-800 mb-3">Progres Pelajaran</h3>
			<div class="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-2">
				<div
					class="h-full bg-gradient-to-r from-success to-emerald-400 rounded-full transition-all duration-500"
					style="width: {(data.stats.lessonsCompleted / lessons.length) * 100}%"
				></div>
			</div>
			<p class="text-xs text-gray-500">{data.stats.lessonsCompleted} dari {lessons.length} pelajaran selesai</p>
		</div>

		<!-- Recent quiz results -->
		{#if data.recentQuizzes.length > 0}
			<div class="mb-8">
				<h3 class="font-bold text-gray-800 mb-3">Kuis Terakhir</h3>
				<div class="space-y-2">
					{#each data.recentQuizzes as quiz}
						<div class="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm">
							<div class="w-10 h-10 rounded-lg bg-gradient-to-br {lessons.find(l => l.id === quiz.lessonId)?.color ?? 'from-gray-400 to-gray-500'} flex items-center justify-center text-lg">
								{lessons.find(l => l.id === quiz.lessonId)?.icon ?? '📖'}
							</div>
							<div class="flex-1">
								<p class="text-sm font-semibold text-gray-800">
									{lessons.find(l => l.id === quiz.lessonId)?.title ?? `Pelajaran ${quiz.lessonId}`}
								</p>
								<p class="text-[10px] text-gray-400">{quiz.score}/{quiz.totalQuestions} benar</p>
							</div>
							<div class="text-right">
								<p class="font-bold text-sm {quiz.percentage >= 70 ? 'text-success' : 'text-red-500'}">
									{Math.round(quiz.percentage)}%
								</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/if}

		<button
			onclick={logout}
			class="w-full py-3 bg-red-50 text-red-500 font-semibold rounded-xl hover:bg-red-100 transition-colors text-sm"
		>
			Keluar
		</button>
	{/if}
</div>
