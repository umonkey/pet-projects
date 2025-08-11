<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wheel from './Wheel.svelte';
	import { fn } from 'storybook/test';

	const { Story } = defineMeta({
		title: 'Other/Wheel',
		component: Wheel,
		args: {
			onClick: fn()
		}
	});
</script>

<Story name="Primary" />
