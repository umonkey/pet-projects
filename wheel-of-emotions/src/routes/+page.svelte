<script lang="ts">
	import { Wheel } from '$lib/components/Wheel';
	import { History } from '$lib/components/History';
	import { recordEmotion } from '$lib/database';

	let selected: string | null = $state(null);

	const handleClick = (value: string) => {
		selected = value;
	};

	const handleRecord = () => {
		if (selected) {
			recordEmotion(selected).then(() => {
				selected = null;
			});
		}
	};
</script>

<div class="container">
	<div class="contents">
		<div class="left">
			<Wheel onClick={handleClick} />
		</div>

		<div class="right">
			<div class="commit">
				{#if selected}
					<button class="btn" onclick={handleRecord}
						>Record emotion: <strong>{selected}</strong></button
					>
				{:else}
					<div>Please select an emotion from the wheel.</div>
				{/if}
			</div>

			<History />
		</div>
	</div>
</div>

<style>
	.container {
		width: 100%;
		max-width: 1000px;
		margin: 20px auto;
	}

	.contents {
		display: flex;
		flex-direction: row;
		gap: 50px;

		.left {
			width: 450px;
			flex-grow: 1;
		}

		.right {
			width: 300px;
		}
	}

	.commit {
		min-height: 40px;
		opacity: 0.8;
	}

	.right {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	@media (max-width: 600px) {
		.contents {
			flex-direction: column;
			gap: 50px;
			padding: 0 10px;

			.left {
				width: 100%;
			}

			.right {
				width: 100%;
			}
		}

		.commit {
			text-align: center;
		}
	}
</style>
