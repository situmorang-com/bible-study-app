<script lang="ts">
	import { goto } from '$app/navigation';

	let name = $state('');
	let pin = $state('');
	let loading = $state(false);
	let error = $state('');
	let showRegisterPrompt = $state(false);

	async function login() {
		if (!name || !pin) { error = 'Isi nama dan PIN'; return; }
		if (name.trim().length < 2) { error = 'Nama minimal 2 karakter'; return; }
		if (!/^\d{4}$/.test(pin.trim())) { error = 'PIN harus 4 digit angka'; return; }

		loading = true;
		error = '';

		const res = await fetch('/api/auth/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name, pin })
		});

		const data = await res.json();
		loading = false;

		if (data.success) {
			window.location.href = '/';
		} else {
			error = data.error || 'Nama atau PIN salah';
			if (res.status === 404) {
				showRegisterPrompt = true;
			}
		}
	}

	async function goToRegister() {
		const params = new URLSearchParams({
			name: name.trim(),
			pin: pin.trim()
		});
		await goto(`/daftar?${params.toString()}`);
	}
</script>

<div class="page-transition px-5 pt-8">
	<a href="/" class="text-gray-400 hover:text-gray-600 text-sm">← Kembali</a>

	<div class="text-center mt-6 mb-8">
		<span class="text-5xl">🔐</span>
		<h1 class="text-2xl font-extrabold text-primary-dark mt-3">Masuk</h1>
		<p class="text-gray-500 text-sm mt-1">Masuk untuk melanjutkan belajar</p>
	</div>

	<div class="mb-4">
		<label for="name" class="text-sm font-semibold text-gray-700 mb-2 block">Nama</label>
		<input
			id="name"
			type="text"
			bind:value={name}
			placeholder="Masukkan nama kamu"
			class="w-full px-4 py-3 bg-white rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-sm"
		/>
	</div>

	<div class="mb-6">
		<label for="pin" class="text-sm font-semibold text-gray-700 mb-2 block">PIN</label>
		<input
			id="pin"
			type="password"
			bind:value={pin}
			placeholder="••••"
			class="w-full px-4 py-3 bg-white rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-sm tracking-[0.5em] text-center"
			maxlength="4"
			inputmode="numeric"
			pattern="[0-9]*"
		/>
	</div>

	{#if error}
		<div class="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-xl border border-red-200">
			{error}
		</div>
	{/if}

	<button
		type="button"
		onclick={login}
		disabled={loading}
		class="w-full py-3.5 bg-gradient-to-r from-primary to-primary-light text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95 disabled:opacity-50"
	>
		{loading ? 'Masuk...' : 'Masuk →'}
	</button>

	<div class="text-center mt-4">
		<a href="/daftar" class="text-sm text-primary font-semibold hover:text-primary-light">
			Belum punya akun? Daftar
		</a>
	</div>
</div>

{#if showRegisterPrompt}
	<div class="fixed inset-0 z-40 flex items-center justify-center bg-black/20 backdrop-blur-sm px-5">
		<div class="w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl border border-white/70">
			<div class="text-center">
				<div class="text-4xl mb-3">📝</div>
				<h2 class="text-xl font-extrabold text-primary-dark">Nama belum terdaftar</h2>
				<p class="mt-2 text-sm text-gray-500">
					Cek lagi dulu, apakah nama <span class="font-semibold text-primary-dark">"{name.trim()}"</span> sudah benar?
				</p>
				<p class="mt-2 text-sm text-gray-500">
					Kalau sudah benar, kamu bisa langsung lanjut ke halaman daftar dengan nama dan PIN ini.
				</p>
			</div>

			<div class="mt-5 grid gap-3">
				<button
					type="button"
					onclick={() => showRegisterPrompt = false}
					class="w-full py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
				>
					Cek Nama Lagi
				</button>
				<button
					type="button"
					onclick={goToRegister}
					class="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-primary-light text-white font-bold shadow-md hover:shadow-lg transition-all"
				>
					Lanjut ke Daftar
				</button>
			</div>
		</div>
	</div>
{/if}
