<script lang="ts">
	import Heart from '$lib/icons/heart.svelte';
</script>

<header class="container">
	<div class="row items">
		<div class="logo"><Heart /></div>

		<div class="text">
			<h1>Interactive Emotion Wheel</h1>
			<div class="motto">Based on Plutchik's MECE emotion model</div>
		</div>
	</div>
</header>

<style>
	.container {
		width: 100%;
		padding: 10px;

		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		background-color: #fff;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		box-sizing: border-box;

		overflow: hidden;
	}

	.items {
		display: flex;
		flex-direction: row;
		gap: 20px;
	}

	.logo {
		background-image: linear-gradient(
			to right bottom,
			oklch(0.623 0.214 259.815) 0%,
			oklch(0.558 0.288 302.321) 100%
		);
		width: 45px;
		height: 45px;
		border-radius: 50%;

		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
	}

	h1 {
		font-family:
			ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
			'Segoe UI Symbol', 'Noto Color Emoji';
		font-size: 24px;
		font-weight: 700;
		margin: 0;
	}

	.motto {
		font-size: 14px;
		line-height: 20px;
		opacity: 0.8;
	}

	@media (max-width: 600px) {
		h1 {
			font-size: 20px;
		}

		.motto {
			font-size: 12px;
		}
	}
</style>
