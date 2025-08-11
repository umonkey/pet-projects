<script lang="ts">
	import Image from '$lib/assets/wheel.svelte';

	type Props = {
		onClick: (value: string) => void;
	};

	const { onClick }: Props = $props();

	const handleClick = (event: Event) => {
		const em = event.target as Element;

		if (em.nodeName === 'path' && onClick && em.id) {
			onClick(em.id);
		} else if (em.nodeName === 'tspan' && onClick) {
			onClick(em.innerHTML);
		} else {
			console.debug('EVENT', em);
		}
	};
</script>

<!-- svelte-ignore event_directive_deprecated -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div class="container" on:click={handleClick}>
	<Image />
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
	}
</style>
