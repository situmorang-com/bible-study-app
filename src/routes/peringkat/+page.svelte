<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const medals = ['🥇', '🥈', '🥉'];
</script>

<div class="page-transition px-5 pt-8">
	<div class="text-center mb-8">
		<span class="text-5xl">🏆</span>
		<h1 class="text-2xl font-extrabold text-primary-dark mt-3">Peringkat</h1>
		<p class="text-gray-500 text-sm mt-1">Pemenang kuis terbaik!</p>
	</div>

	{#if data.leaderboard.length === 0}
		<div class="text-center py-12">
			<span class="text-6xl">📝</span>
			<p class="text-gray-500 mt-4">Belum ada data peringkat</p>
			<p class="text-gray-400 text-sm mt-1">Selesaikan kuis untuk masuk peringkat!</p>
			<a href="/pelajaran" class="inline-block mt-4 px-6 py-2.5 bg-primary text-white font-semibold text-sm rounded-full">
				Mulai Belajar
			</a>
		</div>
	{:else}
		<!-- Top 3 podium -->
		{#if data.leaderboard.length >= 3}
			<div class="flex items-end justify-center gap-3 mb-8 px-4">
				<!-- 2nd place -->
				<div class="flex-1 text-center">
					<span class="text-3xl">{data.leaderboard[1].avatarEmoji}</span>
					<div class="bg-gradient-to-t from-gray-200 to-gray-100 rounded-t-xl pt-4 pb-2 mt-2">
						<span class="text-2xl">{medals[1]}</span>
						<p class="text-xs font-bold text-gray-700 mt-1 truncate px-1">{data.leaderboard[1].name}</p>
						<p class="text-[10px] text-gray-500">{Math.round(data.leaderboard[1].avgScore)}%</p>
					</div>
					<div class="h-16 bg-gray-200 rounded-b-lg"></div>
				</div>

				<!-- 1st place -->
				<div class="flex-1 text-center">
					<span class="text-4xl animate-pulse-glow rounded-full inline-block">{data.leaderboard[0].avatarEmoji}</span>
					<div class="bg-gradient-to-t from-accent to-accent-light rounded-t-xl pt-4 pb-2 mt-2">
						<span class="text-3xl">{medals[0]}</span>
						<p class="text-xs font-bold text-primary-dark mt-1 truncate px-1">{data.leaderboard[0].name}</p>
						<p class="text-[10px] text-primary-dark/70">{Math.round(data.leaderboard[0].avgScore)}%</p>
					</div>
					<div class="h-24 bg-accent/30 rounded-b-lg"></div>
				</div>

				<!-- 3rd place -->
				<div class="flex-1 text-center">
					<span class="text-3xl">{data.leaderboard[2].avatarEmoji}</span>
					<div class="bg-gradient-to-t from-amber-200 to-amber-100 rounded-t-xl pt-4 pb-2 mt-2">
						<span class="text-2xl">{medals[2]}</span>
						<p class="text-xs font-bold text-gray-700 mt-1 truncate px-1">{data.leaderboard[2].name}</p>
						<p class="text-[10px] text-gray-500">{Math.round(data.leaderboard[2].avgScore)}%</p>
					</div>
					<div class="h-10 bg-amber-100 rounded-b-lg"></div>
				</div>
			</div>
		{/if}

		<!-- Full list -->
		<div class="space-y-2">
			{#each data.leaderboard as entry, i}
				<div class="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm
					{data.user && entry.userId === data.user.id ? 'ring-2 ring-primary/30' : ''}">
					<div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-sm text-gray-500">
						{#if i < 3}
							{medals[i]}
						{:else}
							{i + 1}
						{/if}
					</div>
					<span class="text-xl">{entry.avatarEmoji}</span>
					<div class="flex-1 min-w-0">
						<p class="font-semibold text-sm text-gray-800 truncate">
							{entry.name}
							{#if data.user && entry.userId === data.user.id}
								<span class="text-[10px] text-primary font-normal">(Kamu)</span>
							{/if}
						</p>
						<p class="text-[10px] text-gray-400">{entry.quizCount} kuis selesai</p>
					</div>
					<div class="text-right">
						<p class="font-extrabold text-sm text-gray-800">{Math.round(entry.avgScore)}%</p>
						<p class="text-[10px] text-gray-400">rata-rata</p>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>
