<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { Header } from '$lib/components/Header';
	import { Footer } from '$lib/components/Footer';

	import '$lib/styles/main.css';
	import '$lib/styles/fonts.css';
	import '$lib/styles/forms.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Wheel of Emotions</title>
</svelte:head>

<div class="layout">
	<Header />

	<main>
		{@render children?.()}
	</main>

	<Footer />
</div>

<style>
	.layout {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		gap: 20px;
	}

	main {
		flex-grow: 1;
		flex-shrink: 0;
	}
</style>
