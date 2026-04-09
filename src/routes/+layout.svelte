<script lang="ts">
	import '../app.css';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();

	let currentPath = $state('/');

	$effect(() => {
		currentPath = window.location.pathname;
		const handleNav = () => { currentPath = window.location.pathname; };
		window.addEventListener('popstate', handleNav);
		return () => window.removeEventListener('popstate', handleNav);
	});

	const navItems = [
		{ href: '/', icon: '🏠', label: 'Beranda' },
		{ href: '/pelajaran', icon: '📖', label: 'Pelajaran' },
		{ href: '/peringkat', icon: '🏆', label: 'Peringkat' },
		{ href: '/profil', icon: '👤', label: 'Profil' },
	];
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
	<meta name="theme-color" content="#1e3a5f" />
	<title>Pelajaran Alkitab — Studi Interaktif</title>
</svelte:head>

<div class="min-h-screen pb-20 max-w-lg mx-auto relative">
	{@render children()}
</div>

<!-- Bottom Navigation -->
<nav class="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-lg">
	<div class="max-w-lg mx-auto flex justify-around items-center py-2">
		{#each navItems as item}
			<a
				href={item.href}
				class="relative flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all duration-200
					{currentPath === item.href || (item.href !== '/' && currentPath.startsWith(item.href))
						? 'text-primary scale-110'
						: 'text-gray-400 hover:text-gray-600'}"
			>
				<span class="text-xl">{item.icon}</span>
				<span class="text-[10px] font-semibold">{item.label}</span>
				{#if currentPath === item.href || (item.href !== '/' && currentPath.startsWith(item.href))}
					<span class="absolute -bottom-0 w-8 h-0.5 bg-primary rounded-full"></span>
				{/if}
			</a>
		{/each}
	</div>
</nav>
