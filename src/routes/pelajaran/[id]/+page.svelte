<script lang="ts">
	import amazingFactsLogo from '$lib/assets/amazing-facts-logo.svg';
	import CertificateCard from '$lib/components/CertificateCard.svelte';
	import ShareButtons from '$lib/components/ShareButtons.svelte';
	import { tick } from 'svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let lesson = $derived(data.lesson);
	let totalSections = $derived(lesson.sections.length);
	let totalQuiz = $derived(lesson.quiz.length);
	let passThreshold = $derived(lesson.passThreshold ?? 70);
	let finalAssessmentTitle = $derived(lesson.finalAssessmentTitle ?? 'Tes Akhir');
	let finalAssessmentDescription = $derived(lesson.finalAssessmentDescription ?? '');
	let certificateDescription = $derived(
		'"Masih Adakah yang Bisa Dipercaya?" - Temukan bukti bahwa Firman Tuhan tetap teguh di tengah dunia yang penuh ketidakpastian.'
	);
	let certificateTitle = $derived(
		data.user
			? `${data.user.name} telah mendapatkan sertifikat Pendalaman Alkitab`
			: 'Sertifikat Pendalaman Alkitab'
	);
	let issueDate = $derived(
		new Intl.DateTimeFormat('id-ID', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		}).format(new Date())
	);
	type ShuffledOption = { text: string; originalIndex: number };

	let currentSection = $state(0);
	let furthestUnlocked = $state(0);
	let sectionAnswered = $state<boolean[]>([]);
	let selectedCheckpoint = $state<number | null>(null);
	let checkpointResult = $state<'idle' | 'wrong' | 'correct'>('idle');
	let checkpointMessage = $state('');

	let showQuiz = $state(false);
	let quizIndex = $state(0);
	let selectedAnswer = $state<number | null>(null);
	let showExplanation = $state(false);
	let quizScore = $state(0);
	let quizFinished = $state(false);
	let showCelebration = $state(false);
	let showRegisterReminder = $state(false);
	let saveError = $state('');
	let syncedProgressKey = $state('');
	let shuffledCheckpointOptions = $state<(ShuffledOption[] | null)[]>([]);
	let shuffledQuizOptions = $state<ShuffledOption[][]>([]);
	let checkpointFeedbackElement = $state<HTMLDivElement | null>(null);
	let checkpointCardElement = $state<HTMLDivElement | null>(null);
	let nextSectionButtonElement = $state<HTMLButtonElement | null>(null);

	function shuffleOptions(options: string[]) {
		const shuffled = options.map((text, originalIndex) => ({ text, originalIndex }));
		for (let index = shuffled.length - 1; index > 0; index--) {
			const randomIndex = Math.floor(Math.random() * (index + 1));
			[shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
		}
		return shuffled;
	}

	function resetQuizState() {
		quizIndex = 0;
		selectedAnswer = null;
		showExplanation = false;
		quizScore = 0;
		quizFinished = false;
		saveError = '';
	}

	function scrollToLessonTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	function isSectionPassed(index: number) {
		return data.progress.completed || !lesson.sections[index]?.check || sectionAnswered[index] === true;
	}

	function syncCheckpointState() {
		const checkpoint = lesson.sections[currentSection]?.check;
		if (!checkpoint) {
			selectedCheckpoint = null;
			checkpointResult = 'idle';
			checkpointMessage = '';
			return;
		}

		if (isSectionPassed(currentSection)) {
			selectedCheckpoint = checkpoint.correctIndex;
			checkpointResult = 'correct';
			checkpointMessage = checkpoint.explanation;
			return;
		}

		selectedCheckpoint = null;
		checkpointResult = 'idle';
		checkpointMessage = '';
	}

	$effect(() => {
		const progressKey = `${data.progress.currentSection}:${data.progress.completed}:${lesson.sections.length}`;
		if (syncedProgressKey === progressKey) return;

		syncedProgressKey = progressKey;
		currentSection = data.progress.currentSection;
		furthestUnlocked = data.progress.completed ? lesson.sections.length - 1 : data.progress.currentSection;
		sectionAnswered = Array.from({ length: lesson.sections.length }, (_, index) =>
			data.progress.completed ? true : index < data.progress.currentSection
		);
		shuffledCheckpointOptions = lesson.sections.map((lessonSection) =>
			lessonSection.check ? shuffleOptions(lessonSection.check.options) : null
		);
		shuffledQuizOptions = lesson.quiz.map((question) => shuffleOptions(question.options));
		showQuiz = false;
		resetQuizState();
	});

	$effect(() => {
		syncCheckpointState();
	});

	$effect(() => {
		if (!data.user) {
			showRegisterReminder = true;
		}
	});

	function prevSection() {
		if (currentSection > 0) {
			currentSection--;
			syncCheckpointState();
			scrollToLessonTop();
		}
	}

	function nextSection() {
		if (!isSectionPassed(currentSection)) return;

		if (currentSection < totalSections - 1) {
			const nextIndex = currentSection + 1;
			currentSection = nextIndex;

			if (nextIndex > furthestUnlocked) {
				furthestUnlocked = nextIndex;
				saveProgress(nextIndex);
			}

			syncCheckpointState();
			scrollToLessonTop();
			return;
		}

		showQuiz = true;
		resetQuizState();
		scrollToLessonTop();
	}

	async function scrollCheckpointFeedbackIntoView() {
		await tick();
		if (!checkpointCardElement || !nextSectionButtonElement) {
			checkpointFeedbackElement?.scrollIntoView({
				behavior: 'smooth',
				block: 'nearest'
			});
			return;
		}

		const topPadding = 20;
		const bottomPadding = 120;
		const viewportHeight = window.innerHeight;
		const currentScroll = window.scrollY;
		const checkpointRect = checkpointCardElement.getBoundingClientRect();
		const nextButtonRect = nextSectionButtonElement.getBoundingClientRect();
		const checkpointTop = currentScroll + checkpointRect.top;
		const nextButtonBottom = currentScroll + nextButtonRect.bottom;
		const maxScrollToKeepQuestionVisible = Math.max(0, checkpointTop - topPadding);
		const scrollNeededForNextButton = Math.max(
			0,
			nextButtonBottom - (viewportHeight - bottomPadding)
		);
		const targetScroll = Math.min(maxScrollToKeepQuestionVisible, scrollNeededForNextButton);

		window.scrollTo({
			top: targetScroll,
			behavior: 'smooth'
		});
	}

	async function selectCheckpoint(index: number) {
		const checkpoint = lesson.sections[currentSection]?.check;
		if (!checkpoint || isSectionPassed(currentSection)) return;

		selectedCheckpoint = index;
		if (index === checkpoint.correctIndex) {
			sectionAnswered = sectionAnswered.map((value, sectionIndex) =>
				sectionIndex === currentSection ? true : value
			);
			checkpointResult = 'correct';
			checkpointMessage = checkpoint.explanation;
			await scrollCheckpointFeedbackIntoView();
			return;
		}

		checkpointResult = 'wrong';
		checkpointMessage = checkpoint.explanation;
		await scrollCheckpointFeedbackIntoView();
	}

	function selectAnswer(index: number) {
		if (selectedAnswer !== null) return;
		selectedAnswer = index;
		showExplanation = true;
		if (index === lesson.quiz[quizIndex].correctIndex) {
			quizScore++;
		}
	}

	async function nextQuiz() {
		if (quizIndex < totalQuiz - 1) {
			quizIndex++;
			selectedAnswer = null;
			showExplanation = false;
			return;
		}

		quizFinished = true;
		if (quizPercentage >= passThreshold) {
			showCelebration = true;
			setTimeout(() => {
				showCelebration = false;
			}, 3000);
		}

		await saveQuizResult();
	}

	function restartQuiz() {
		showQuiz = true;
		resetQuizState();
	}

	async function logout() {
		await fetch('/api/auth/logout', { method: 'POST' });
		window.location.href = '/';
	}

	async function saveProgress(section: number) {
		try {
			await fetch('/api/progress', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ lessonId: lesson.id, currentSection: section })
			});
		} catch {
			// silent
		}
	}

	async function saveQuizResult() {
		saveError = '';

		try {
			const response = await fetch('/api/quiz', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					lessonId: lesson.id,
					score: quizScore,
					totalQuestions: totalQuiz
				})
			});

			const payload = await response.json().catch(() => null);
			if (!response.ok) {
				saveError =
					payload?.error === 'Not authenticated'
						? 'Masuk dulu supaya hasil tes, peringkat, dan sertifikatmu tersimpan.'
						: payload?.error || 'Hasil tes belum tersimpan.';
			}
		} catch {
			saveError = 'Hasil tes belum tersimpan. Coba lagi.';
		}
	}

	let section = $derived(lesson.sections[currentSection]);
	let quizQuestion = $derived(lesson.quiz[quizIndex]);
	let quizPercentage = $derived(totalQuiz > 0 ? Math.round((quizScore / totalQuiz) * 100) : 0);
	let quizPassed = $derived(quizPercentage >= passThreshold);
</script>

{#if showCelebration}
	<div class="fixed inset-0 z-50 pointer-events-none overflow-hidden">
		{#each Array(20) as _, i}
			<div
				class="absolute h-3 w-3 rounded-full"
				style="
					left: {Math.random() * 100}%;
					background: {['#e8a838', '#22c55e', '#3b82f6', '#ef4444', '#f59e0b'][i % 5]};
					animation: confetti-fall {1.5 + Math.random() * 2}s ease-in forwards;
					animation-delay: {Math.random() * 0.5}s;
				"
			></div>
		{/each}
	</div>
{/if}

<div class="page-transition">
	<div class="relative z-10 border-b border-gray-100 bg-white px-5 py-3 shadow-sm">
		{#if data.user}
			<div class="mb-3 flex items-center justify-between gap-3 rounded-2xl border border-gray-100 bg-slate-50 px-3 py-2">
				<div class="flex items-center gap-3">
					<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
						<img src={amazingFactsLogo} alt="Amazing Facts" class="h-6 w-6 object-contain" />
					</div>
					<div>
						<p class="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/60">Sudah Masuk</p>
						<div class="flex items-center gap-2">
							<span class="text-lg">{data.user.avatarEmoji}</span>
							<span class="text-sm font-bold text-gray-800">{data.user.name}</span>
						</div>
					</div>
				</div>
				<button
					type="button"
					onclick={logout}
					class="rounded-full border border-red-200 bg-white px-3 py-1.5 text-xs font-semibold text-red-500 transition-colors hover:bg-red-50"
				>
					Keluar
				</button>
			</div>
		{/if}

		<div class="flex items-center gap-3">
			<a href="/pelajaran" class="text-xl text-gray-400 hover:text-gray-600">←</a>
			<div class="flex-1">
				<h1 class="text-sm font-bold text-gray-800">{lesson.icon} {lesson.title}</h1>
				<p class="text-[10px] text-gray-400">
					{#if !showQuiz}
						Langkah {currentSection + 1} dari {totalSections}
					{:else}
						{finalAssessmentTitle}
					{/if}
				</p>
			</div>
			{#if data.bestQuizScore !== null}
				<div class="rounded-full bg-accent/10 px-2 py-1 text-xs font-semibold text-accent-dark">
					🏆 {Math.round(data.bestQuizScore)}%
				</div>
			{/if}
		</div>

		<div class="mt-2 flex gap-1.5">
			{#each lesson.sections as _, i}
				<div class="h-1 flex-1 rounded-full transition-all duration-300 {i <= currentSection ? 'bg-accent' : 'bg-gray-200'}"></div>
			{/each}
			<div class="h-1 flex-1 rounded-full transition-all duration-300 {showQuiz ? 'bg-accent' : 'bg-gray-200'}"></div>
		</div>
	</div>

	{#if !showQuiz}
		<div class="px-5 pb-8 pt-6">
			<div class="text-center">
				<div class="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br {lesson.color} text-5xl shadow-lg animate-celebrate">
					{section.image || lesson.icon}
				</div>
				<h2 class="mt-5 text-xl font-extrabold text-gray-800">{section.title}</h2>
				<p class="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-gray-500">
					Belajar perlahan. Jawab pertanyaan di bawah dengan benar untuk membuka langkah berikutnya.
				</p>
			</div>

			<div class="mt-6 rounded-2xl bg-white p-5 shadow-sm">
				<p class="whitespace-pre-line text-[15px] leading-relaxed text-gray-700">{section.content}</p>

				{#if section.bullets?.length}
					<ul class="mt-4 space-y-2">
						{#each section.bullets as bullet}
							<li class="flex items-start gap-2 text-sm leading-relaxed text-gray-600">
								<span class="mt-[2px] text-primary">•</span>
								<span>{bullet}</span>
							</li>
						{/each}
					</ul>
				{/if}
			</div>

			{#if section.verse}
				<div class="mt-4 rounded-2xl border border-amber-200/30 bg-gradient-to-br from-surface-warm to-amber-50 p-5">
					<div class="flex items-start gap-3">
						<span class="flex-shrink-0 text-2xl">📜</span>
						<div>
							<p class="text-sm italic leading-relaxed text-gray-700">{section.verse}</p>
							<p class="mt-2 text-xs font-bold text-accent-dark">— {section.verseRef}</p>
						</div>
					</div>
				</div>
			{/if}

			{#if section.check}
				<div bind:this={checkpointCardElement} class="mt-5 rounded-2xl border border-blue-200/60 bg-blue-50/70 p-5">
					<p class="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/70">Cek Pemahaman</p>
					<h3 class="mt-2 text-base font-bold leading-snug text-gray-800">{section.check.question}</h3>

					<div class="mt-4 space-y-3">
						{#each shuffledCheckpointOptions[currentSection] ?? [] as option, i}
							<label
								class="block w-full rounded-xl border-2 p-4 text-left text-sm font-medium transition-all duration-200
									{isSectionPassed(currentSection) && option.originalIndex === section.check.correctIndex
										? 'border-success bg-green-50 text-green-800'
										: selectedCheckpoint === option.originalIndex && checkpointResult === 'wrong'
											? 'border-red-400 bg-red-50 text-red-700'
											: 'border-gray-200 bg-white text-gray-700'}"
							>
								<input
									type="radio"
									name={`checkpoint-${currentSection}`}
									class="sr-only"
									checked={selectedCheckpoint === option.originalIndex}
									disabled={isSectionPassed(currentSection)}
									onchange={() => selectCheckpoint(option.originalIndex)}
								/>
								<div class="flex items-center gap-3">
									<div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-gray-500 shadow-sm">
										{String.fromCharCode(65 + i)}
									</div>
									<span>{option.text}</span>
								</div>
							</label>
						{/each}
					</div>

					{#if checkpointResult !== 'idle'}
						<div
							bind:this={checkpointFeedbackElement}
							class="mt-4 rounded-xl border p-4 {checkpointResult === 'correct' ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}"
						>
							<p class="text-sm font-bold {checkpointResult === 'correct' ? 'text-green-800' : 'text-red-700'}">
								{checkpointResult === 'correct' ? 'Jawaban benar. Langkah berikutnya terbuka.' : 'Belum tepat. Coba lagi.'}
							</p>
							<p class="mt-1 text-xs leading-relaxed {checkpointResult === 'correct' ? 'text-green-700' : 'text-red-600'}">{checkpointMessage}</p>
						</div>
					{/if}
				</div>
			{/if}

			<div class="mt-8 flex gap-3">
				{#if currentSection > 0}
					<button
						type="button"
						onclick={prevSection}
						class="flex-1 rounded-xl bg-gray-100 py-3.5 font-semibold text-gray-600 transition-all active:scale-95 hover:bg-gray-200"
					>
						← Sebelumnya
					</button>
				{/if}
				<button
					type="button"
					onclick={nextSection}
					bind:this={nextSectionButtonElement}
					disabled={!isSectionPassed(currentSection)}
					class="flex-1 rounded-xl py-3.5 font-bold shadow-md transition-all active:scale-95 {isSectionPassed(currentSection) ? 'bg-gradient-to-r from-primary to-primary-light text-white hover:scale-[1.02] hover:shadow-lg' : 'bg-gray-200 text-gray-400 shadow-none'}"
				>
					{currentSection < totalSections - 1 ? 'Lanjut →' : `${finalAssessmentTitle} →`}
				</button>
			</div>

			{#if !isSectionPassed(currentSection)}
				<p class="mt-3 text-center text-xs text-gray-500">Jawab pertanyaan bagian ini dengan benar untuk lanjut.</p>
			{/if}
		</div>
	{:else if !quizFinished}
		<div class="px-5 pb-8 pt-6">
			<div class="text-center">
				<span class="text-4xl">📝</span>
				<h2 class="mt-2 text-lg font-extrabold text-gray-800">{finalAssessmentTitle}</h2>
				<p class="mt-1 text-sm text-gray-500">{finalAssessmentDescription}</p>
				<p class="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary/60">
					Pertanyaan {quizIndex + 1} / {totalQuiz}
				</p>
			</div>

			<div class="mt-6 rounded-2xl bg-white p-5 shadow-sm">
				<p class="text-[15px] font-semibold leading-relaxed text-gray-800">{quizQuestion.question}</p>
			</div>

			<div class="mt-4 space-y-3">
				{#each shuffledQuizOptions[quizIndex] ?? [] as option, i}
					<label
						class="block w-full rounded-xl border-2 p-4 text-left transition-all duration-200
							{selectedAnswer === null
								? 'border-gray-200 bg-white'
								: option.originalIndex === quizQuestion.correctIndex
									? 'border-success bg-green-50'
									: option.originalIndex === selectedAnswer
										? 'border-red-400 bg-red-50'
										: 'border-gray-200 bg-gray-50 opacity-50'}"
					>
						<input
							type="radio"
							name={`quiz-${quizIndex}`}
							class="sr-only"
							checked={selectedAnswer === option.originalIndex}
							disabled={selectedAnswer !== null}
							onchange={() => selectAnswer(option.originalIndex)}
						/>
						<div class="flex items-center gap-3">
							<div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold
								{selectedAnswer === null
									? 'bg-gray-100 text-gray-500'
									: option.originalIndex === quizQuestion.correctIndex
										? 'bg-success text-white'
										: option.originalIndex === selectedAnswer
											? 'bg-red-400 text-white'
											: 'bg-gray-200 text-gray-400'}"
							>
								{#if selectedAnswer !== null && option.originalIndex === quizQuestion.correctIndex}
									✓
								{:else if selectedAnswer === option.originalIndex && option.originalIndex !== quizQuestion.correctIndex}
									✗
								{:else}
									{String.fromCharCode(65 + i)}
								{/if}
							</div>
							<span class="text-sm font-medium text-gray-700">{option.text}</span>
						</div>
					</label>
				{/each}
			</div>

			{#if showExplanation}
				<div class="mt-4 rounded-xl border border-blue-200/50 bg-blue-50 p-4 animate-celebrate">
					<div class="flex items-start gap-2">
						<span class="text-lg">💡</span>
						<div>
							<p class="mb-1 text-sm font-bold text-blue-800">
								{selectedAnswer === quizQuestion.correctIndex ? 'Benar' : 'Kurang tepat'}
							</p>
							<p class="text-xs leading-relaxed text-blue-700">{quizQuestion.explanation}</p>
						</div>
					</div>
				</div>

				<button
					type="button"
					onclick={nextQuiz}
					class="mt-4 w-full rounded-xl bg-gradient-to-r from-accent to-accent-light py-3.5 font-bold text-primary-dark shadow-md transition-all active:scale-95 hover:shadow-lg"
				>
					{quizIndex < totalQuiz - 1 ? 'Pertanyaan Berikutnya →' : 'Lihat Hasil 🏆'}
				</button>
			{/if}
		</div>
	{:else}
		<div class="px-5 pb-8 pt-10 text-center">
			<div class="animate-celebrate">
				<span class="text-7xl">
					{#if quizPassed}
						🏆
					{:else}
						📚
					{/if}
				</span>
			</div>

			<h2 class="mt-4 text-2xl font-extrabold text-gray-800">
				{#if quizPassed}
					Kamu Lulus!
				{:else}
					Belum Lulus
				{/if}
			</h2>
			<p class="mt-2 text-gray-500">Kamu menjawab benar {quizScore} dari {totalQuiz} pertanyaan.</p>

			<div class="relative mb-6 mt-6 inline-flex h-32 w-32 items-center justify-center">
				<svg class="-rotate-90 transform" viewBox="0 0 120 120">
					<circle cx="60" cy="60" r="52" stroke="#e5e7eb" stroke-width="8" fill="none" />
					<circle
						cx="60"
						cy="60"
						r="52"
						stroke={quizPassed ? '#22c55e' : '#ef4444'}
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

			<p class="mx-auto mb-4 max-w-sm text-sm leading-relaxed text-gray-500">
				{#if quizPassed}
					Hasil ini dipakai untuk menyimpan kemajuan dan menghitung peringkat dari tes ringkasan akhir.
				{:else}
					Kamu perlu minimal 7 jawaban benar dari 10 untuk lulus, masuk peringkat, dan mendapatkan sertifikat.
				{/if}
			</p>

			{#if saveError}
				<div class="mb-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-left text-sm text-amber-700">
					{saveError}
				</div>
			{/if}

			{#if quizPassed && data.user && data.certificateUrl}
				<div class="mt-8 text-left">
					<CertificateCard
						userName={data.user.name}
						lessonTitle={lesson.title}
						score={quizScore}
						totalQuestions={totalQuiz}
						issueDate={issueDate}
					/>
				</div>

				<div class="mt-5">
					<ShareButtons title={certificateTitle} description={certificateDescription} url={data.certificateUrl} />
				</div>
			{/if}

			<div class="mt-6 space-y-3">
				{#if quizPassed && data.certificateUrl}
					<a
						href={data.certificateUrl}
						class="block w-full rounded-xl bg-gradient-to-r from-primary to-primary-light py-3.5 text-center font-bold text-white shadow-md transition-all active:scale-95"
					>
						Buka Sertifikat
					</a>
				{:else}
					<button
						type="button"
						onclick={restartQuiz}
						class="w-full rounded-xl bg-gradient-to-r from-primary to-primary-light py-3.5 font-bold text-white shadow-md transition-all active:scale-95"
					>
						Ulangi {finalAssessmentTitle} 🔄
					</button>
				{/if}

				<a
					href="/pelajaran"
					class="block w-full rounded-xl bg-gray-100 py-3.5 text-center font-semibold text-gray-600 transition-all hover:bg-gray-200"
				>
					Kembali ke Daftar Pelajaran
				</a>
			</div>
		</div>
	{/if}
</div>

{#if showRegisterReminder && !data.user}
	<div class="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/25 px-5 backdrop-blur-sm">
		<div class="w-full max-w-sm rounded-3xl border border-white/70 bg-white p-6 shadow-2xl">
			<div class="text-center">
				<div class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
					<img src={amazingFactsLogo} alt="Amazing Facts" class="h-8 w-8 object-contain" />
				</div>
				<h2 class="mt-4 text-2xl font-extrabold text-primary-dark">Daftar untuk Simpan Progres</h2>
				<p class="mt-2 text-sm leading-relaxed text-gray-500">
					Kamu bisa tetap membaca pelajaran ini, tapi progres, hasil tes akhir, peringkat, dan sertifikat hanya tersimpan kalau kamu daftar atau masuk.
				</p>
			</div>

			<div class="mt-6 grid gap-3">
				<a
					href="/daftar"
					class="block w-full rounded-xl bg-gradient-to-r from-primary to-primary-light py-3 text-center font-bold text-white shadow-md transition-all hover:shadow-lg"
				>
					Daftar Sekarang
				</a>
				<a
					href="/masuk"
					class="block w-full rounded-xl border-2 border-gray-200 py-3 text-center font-semibold text-gray-700 transition-colors hover:bg-gray-50"
				>
					Saya Sudah Punya Akun
				</a>
				<button
					type="button"
					onclick={() => showRegisterReminder = false}
					class="w-full py-2 text-sm font-medium text-gray-400 transition-colors hover:text-gray-600"
				>
					Nanti Saja
				</button>
			</div>
		</div>
	</div>
{/if}
