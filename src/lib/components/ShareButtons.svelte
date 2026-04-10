<script lang="ts">
	let {
		title,
		description,
		url
	}: {
		title: string;
		description: string;
		url: string;
	} = $props();

	let status = $state('');

	function openFacebook() {
		window.open(
			`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
			'_blank',
			'noopener,noreferrer'
		);
	}

	function openWhatsApp() {
		const text = `${title}\n${description}\n${url}`;
		window.open(
			`https://wa.me/?text=${encodeURIComponent(text)}`,
			'_blank',
			'noopener,noreferrer'
		);
	}

	async function shareToMobileApp(label: string) {
		if (navigator.share) {
			try {
				await navigator.share({ title, text: description, url });
				status = `Pilih ${label} dari menu bagikan di perangkatmu.`;
				return;
			} catch {
				status = '';
			}
		}

		try {
			await navigator.clipboard.writeText(url);
			status = `Tautan sertifikat disalin. Tempel di ${label}.`;
		} catch {
			status = `Salin tautan ini secara manual untuk ${label}: ${url}`;
		}
	}
</script>

<div class="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
	<p class="text-sm font-bold text-gray-800">Bagikan Sertifikat</p>
	<p class="mt-1 text-xs leading-relaxed text-gray-500">Facebook dan WhatsApp membuka bagikan langsung. Instagram dan TikTok memakai menu bagikan atau salin tautan.</p>

	<div class="mt-4 grid grid-cols-2 gap-3">
		<button
			type="button"
			onclick={openFacebook}
			class="rounded-xl bg-[#1877F2] px-4 py-3 text-sm font-bold text-white transition-all active:scale-[0.98]"
		>
			Facebook
		</button>
		<button
			type="button"
			onclick={() => shareToMobileApp('Instagram')}
			class="rounded-xl bg-[linear-gradient(135deg,#833AB4,#FD1D1D,#FCAF45)] px-4 py-3 text-sm font-bold text-white transition-all active:scale-[0.98]"
		>
			Instagram
		</button>
		<button
			type="button"
			onclick={() => shareToMobileApp('TikTok')}
			class="rounded-xl bg-black px-4 py-3 text-sm font-bold text-white transition-all active:scale-[0.98]"
		>
			TikTok
		</button>
		<button
			type="button"
			onclick={openWhatsApp}
			class="rounded-xl bg-[#25D366] px-4 py-3 text-sm font-bold text-white transition-all active:scale-[0.98]"
		>
			WhatsApp
		</button>
	</div>

	{#if status}
		<p class="mt-3 text-xs text-gray-600">{status}</p>
	{/if}
</div>
