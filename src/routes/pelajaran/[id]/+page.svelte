<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let lesson = $derived(data.lesson);
	let totalSections = $derived(lesson.sections.length);
	let totalQuiz = $derived(lesson.quiz.length);

	let currentSection = $state(0);
	let showQuiz = $state(false);
	let quizIndex = $state(0);
	let selectedAnswer = $state<number | null>(null);
	let showExplanation = $state(false);
	let quizScore = $state(0);
	let quizFinished = $state(false);
	let showCelebration = $state(false);

	$effect(() => {
		currentSection = data.progress.currentSection;
	});

	function nextSection() {
		if (currentSection < totalSections - 1) {
			currentSection++;
			saveProgress(currentSection);
		} else {
			showQuiz = true;
		}
	}

	function prevSection() {
		if (currentSection > 0) {
			currentSection--;
		}
	}

	function selectAnswer(index: number) {
		if (selectedAnswer !== null) return;
		selectedAnswer = index;
		showExplanation = true;
		if (index === lesson.quiz[quizIndex].correctIndex) {
			quizScore++;
		}
	}

	function nextQuiz() {
		if (quizIndex < totalQuiz - 1) {
			quizIndex++;
			selectedAnswer = null;
			showExplanation = false;
		} else {
			quizFinished = true;
			const percentage = (quizScore / totalQuiz) * 100;
			if (percentage >= 70) {
				showCelebration = true;
				setTimeout(() => { showCelebration = false; }, 3000);
			}
			saveQuizResult();
		}
	}

	function restartQuiz() {
		quizIndex = 0;
		selectedAnswer = null;
		showExplanation = false;
		quizScore = 0;
		quizFinished = false;
	}

	async function saveProgress(section: number) {
		try {
			await fetch('/api/progress', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ lessonId: lesson.id, currentSection: section })
			});
		} catch { /* silent */ }
	}

	async function saveQuizResult() {
		try {
			await fetch('/api/quiz', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					lessonId: lesson.id,
					score: quizScore,
					totalQuestions: totalQuiz
				})
			});
		} catch { /* silent */ }
	}

	let section = $derived(lesson.sections[currentSection]);
	let quizQuestion = $derived(lesson.quiz[quizIndex]);
	let quizPercentage = $derived(Math.round((quizScore / totalQuiz) * 100));
</script>

<!-- Celebration Confetti -->
{#if showCelebration}
	<div class="fixed inset-0 z-50 pointer-events-none overflow-hidden">
		{#each Array(20) as _, i}
			<div
				class="absolute w-3 h-3 rounded-full"
				style="
					left: {Math.random() * 100}%;
					background: {['#e8a838', '#22c55e', '#3b82f6', '#ef4444', '#a855f7'][i % 5]};
					animation: confetti-fall {1.5 + Math.random() * 2}s ease-in forwards;
					animation-delay: {Math.random() * 0.5}s;
				"
			></div>
		{/each}
	</div>
{/if}

<div class="page-transition">
	<!-- Top bar -->
	<div class="sticky top-0 z-40 bg-white/95 backdrop-blur-lg border-b border-gray-100 px-5 py-3">
		<div class="flex items-center gap-3">
			<a href="/pelajaran" class="text-gray-400 hover:text-gray-600 text-xl">←</a>
			<div class="flex-1">
				<h1 class="font-bold text-sm text-gray-800">{lesson.icon} {lesson.title}</h1>
				<p class="text-[10px] text-gray-400">
					{#if !showQuiz}
						Bagian {currentSection + 1} dari {totalSections}
					{:else}
						Kuis
					{/if}
				</p>
			</div>
			{#if data.bestQuizScore !== null}
				<div class="text-xs bg-accent/10 text-accent-dark px-2 py-1 rounded-full font-semibold">
					🏆 {Math.round(data.bestQuizScore)}%
				</div>
			{/if}
		</div>

		<!-- Progress dots -->
		<div class="flex gap-1.5 mt-2">
			{#each lesson.sections as _, i}
				<div class="flex-1 h-1 rounded-full transition-all duration-300 {i <= currentSection ? 'bg-accent' : 'bg-gray-200'}"></div>
			{/each}
			<div class="flex-1 h-1 rounded-full transition-all duration-300 {showQuiz ? 'bg-accent' : 'bg-gray-200'}"></div>
		</div>
	</div>

	{#if !showQuiz}
		<!-- Lesson Content -->
		<div class="px-5 pt-6 pb-8">
			<!-- Section visual -->
			<div class="text-center mb-6">
				<div class="inline-flex w-20 h-20 rounded-2xl bg-gradient-to-br {lesson.color} items-center justify-center text-5xl shadow-lg animate-celebrate">
					{section.image || lesson.icon}
				</div>
			</div>

			<!-- Section title -->
			<h2 class="text-xl font-extrabold text-gray-800 text-center mb-4">{section.title}</h2>

			<!-- Content card -->
			<div class="bg-white rounded-2xl p-5 shadow-sm mb-4">
				<p class="text-gray-700 leading-relaxed text-[15px]">{section.content}</p>
			</div>

			<!-- Bible verse -->
			{#if section.verse}
				<div class="bg-gradient-to-br from-surface-warm to-amber-50 rounded-2xl p-5 border border-amber-200/30">
					<div class="flex items-start gap-3">
						<span class="text-2xl flex-shrink-0">📜</span>
						<div>
							<p class="text-gray-700 italic text-sm leading-relaxed">{section.verse}</p>
							<p class="text-accent-dark font-bold text-xs mt-2">— {section.verseRef}</p>
						</div>
					</div>
				</div>
			{/if}

			<!-- Navigation buttons -->
			<div class="flex gap-3 mt-8">
				{#if currentSection > 0}
					<button
						onclick={prevSection}
						class="flex-1 py-3.5 bg-gray-100 text-gray-600 font-semibold rounded-xl hover:bg-gray-200 transition-all active:scale-95"
					>
						← Sebelumnya
					</button>
				{/if}
				<button
					onclick={nextSection}
					class="flex-1 py-3.5 bg-gradient-to-r from-primary to-primary-light text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95 hover:scale-[1.02]"
				>
					{currentSection < totalSections - 1 ? 'Lanjut →' : 'Mulai Kuis! 🎯'}
				</button>
			</div>
		</div>
	{:else if !quizFinished}
		<!-- Quiz Section -->
		<div class="px-5 pt-6 pb-8">
			<div class="text-center mb-6">
				<span class="text-4xl">🎯</span>
				<h2 class="text-lg font-extrabold text-gray-800 mt-2">Pertanyaan {quizIndex + 1}/{totalQuiz}</h2>
			</div>

			<div class="bg-white rounded-2xl p-5 shadow-sm mb-6">
				<p class="text-gray-800 font-semibold text-[15px] leading-relaxed">{quizQuestion.question}</p>
			</div>

			<div class="space-y-3">
				{#each quizQuestion.options as option, i}
					<button
						onclick={() => selectAnswer(i)}
						disabled={selectedAnswer !== null}
						class="w-full text-left p-4 rounded-xl border-2 transition-all duration-200 active:scale-[0.98]
							{selectedAnswer === null
								? 'border-gray-200 bg-white hover:border-primary hover:bg-blue-50'
								: i === quizQuestion.correctIndex
									? 'border-success bg-green-50'
									: i === selectedAnswer
										? 'border-red-400 bg-red-50'
										: 'border-gray-200 bg-gray-50 opacity-50'
							}"
					>
						<div class="flex items-center gap-3">
							<div class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0
								{selectedAnswer === null
									? 'bg-gray-100 text-gray-500'
									: i === quizQuestion.correctIndex
										? 'bg-success text-white'
										: i === selectedAnswer
											? 'bg-red-400 text-white'
											: 'bg-gray-200 text-gray-400'
								}"
							>
								{#if selectedAnswer !== null && i === quizQuestion.correctIndex}
									✓
								{:else if selectedAnswer === i && i !== quizQuestion.correctIndex}
									✗
								{:else}
									{String.fromCharCode(65 + i)}
								{/if}
							</div>
							<span class="text-sm font-medium text-gray-700">{option}</span>
						</div>
					</button>
				{/each}
			</div>

			<!-- Explanation -->
			{#if showExplanation}
				<div class="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-200/50 animate-celebrate">
					<div class="flex items-start gap-2">
						<span class="text-lg">💡</span>
						<div>
							<p class="text-sm font-bold text-blue-800 mb-1">
								{selectedAnswer === quizQuestion.correctIndex ? 'Benar! 🎉' : 'Kurang tepat'}
							</p>
							<p class="text-xs text-blue-700 leading-relaxed">{quizQuestion.explanation}</p>
						</div>
					</div>
				</div>

				<button
					onclick={nextQuiz}
					class="w-full mt-4 py-3.5 bg-gradient-to-r from-accent to-accent-light text-primary-dark font-bold rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95"
				>
					{quizIndex < totalQuiz - 1 ? 'Pertanyaan Berikutnya →' : 'Lihat Hasil 🏆'}
				</button>
			{/if}
		</div>
	{:else}
		<!-- Quiz Results -->
		<div class="px-5 pt-10 pb-8 text-center">
			<div class="animate-celebrate">
				<span class="text-7xl">
					{#if quizPercentage >= 90}🏆{:else if quizPercentage >= 70}🎉{:else if quizPercentage >= 50}👏{:else}📚{/if}
				</span>
			</div>

			<h2 class="text-2xl font-extrabold text-gray-800 mt-4">
				{#if quizPercentage >= 90}
					Luar Biasa!
				{:else if quizPercentage >= 70}
					Bagus Sekali!
				{:else if quizPercentage >= 50}
					Cukup Baik!
				{:else}
					Terus Belajar!
				{/if}
			</h2>

			<p class="text-gray-500 mt-2">Kamu menjawab benar</p>

			<!-- Score circle -->
			<div class="relative inline-flex items-center justify-center w-32 h-32 mt-6 mb-6">
				<svg class="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
					<circle cx="60" cy="60" r="52" stroke="#e5e7eb" stroke-width="8" fill="none" />
					<circle
						cx="60" cy="60" r="52"
						stroke={quizPercentage >= 70 ? '#22c55e' : quizPercentage >= 50 ? '#eab308' : '#ef4444'}
						stroke-width="8"
						fill="none"
						stroke-linecap="round"
						stroke-dasharray="{(quizPercentage / 100) * 327} 327"
						class="transition-all duration-1000"
					/>
				</svg>
				<div class="absolute">
					<span class="text-3xl font-extrabold text-gray-800">{quizPercentage}%</span>
				</div>
			</div>

			<p class="text-sm text-gray-500 mb-8">{quizScore} dari {totalQuiz} jawaban benar</p>

			<div class="space-y-3">
				<button
					onclick={restartQuiz}
					class="w-full py-3.5 bg-gradient-to-r from-primary to-primary-light text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95"
				>
					Ulangi Kuis 🔄
				</button>
				<a
					href="/pelajaran"
					class="block w-full py-3.5 bg-gray-100 text-gray-600 font-semibold rounded-xl hover:bg-gray-200 transition-all text-center"
				>
					Kembali ke Daftar Pelajaran
				</a>
			</div>
		</div>
	{/if}
</div>
