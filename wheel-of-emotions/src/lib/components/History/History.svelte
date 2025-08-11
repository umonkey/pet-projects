<script lang="ts">
	import { recentHistory } from '$lib/stores/history';
	import { Record } from '$lib/components/Record';
</script>

<div class="history">
	{#if !$recentHistory.length}
		<h2>Emotion history</h2>
		<p class="hint">No emotions selected yet. Your history will appear here.</p>
	{:else}
		<h2>Emotion history <span class="badge">{$recentHistory.length}</span></h2>

		<div class="records">
			{#each $recentHistory as emotion}
				<Record emotion={emotion.emotion} timestamp={emotion.timestamp} />
			{/each}
		</div>
	{/if}
</div>

<style>
	h2 {
		font-size: 20px;
		line-height: 30px;
		margin: 0 0 10px;
	}

	p.hint {
		opacity: 0.8;
	}

	.records {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.badge {
		background-color: #ddd;
		font-size: 12px;
		font-weight: 400;
		line-height: 20px;
		padding: 0 5px;
		border-radius: 4px;
		display: inline-block;
		vertical-align: middle;
	}

	@media (min-width: 1000px) {
		.records {
			max-height: 500px;
			overflow-y: scroll;
		}
	}
</style>
