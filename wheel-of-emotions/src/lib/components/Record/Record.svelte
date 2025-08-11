<script lang="ts">
	import TrashIcon from '$lib/icons/trash.svelte';
	import { formatDate, formatTime } from './utils';
	import { removeRecord } from '$lib/database';

	type Props = {
		emotion: string;
		timestamp: number;
	};

	const { emotion, timestamp }: Props = $props();

	const handleDelete = () => {
		if (confirm('Are you sure you want to delete this record?')) {
			removeRecord(emotion, timestamp);
		}
	};
</script>

<div class="record">
	<div class={`color ${emotion}`}></div>
	<div class="label">{emotion}</div>
	<div class="timestamp">
		<span class="time">{formatTime(timestamp)}</span>
		<span class="date">{formatDate(timestamp)}</span>
	</div>
	<button class="icons" onclick={handleDelete}>
		<TrashIcon />
	</button>
</div>

<style>
	.record {
		background-color: #f3f4f6;
		border-radius: 5px;
		padding: 10px;

		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 10px;
	}

	.color {
		background-color: lime;
		width: 20px;
		height: 20px;
		border-radius: 50%;

		border: solid 2px #fff;

		flex-grow: 0;
		flex-shrink: 0;
		flex-basis: 20px;
	}

	button.icons {
		border: none;
		padding: 0;

		flex-grow: 0;
		flex-shrink: 0;
		flex-basis: 20px;
		opacity: 0.5;
		cursor: pointer;

		background-color: transparent;
	}

	.label {
		text-transform: capitalize;
		flex-grow: 1;
	}

	.timestamp {
		display: flex;
		flex-direction: column;
		text-align: right;
		opacity: 0.5;
		font-size: 14px;
	}

	.color.ecstasy {
		background-color: #ffe854;
	}
	.color.joy {
		background-color: #ffff54;
	}
	.color.serenity {
		background-color: #ffffb1;
		opacity: 0.5;
	}

	.color.admiration {
		background-color: #00b400;
	}
	.color.trust {
		background-color: #54ff54;
	}
	.color.acceptance {
		background-color: #8cff8c;
		opacity: 0.5;
	}

	.color.terror {
		background-color: #008000;
	}
	.color.fear {
		background-color: #009600;
	}
	.color.apprehension {
		background-color: #8cc68c;
		opacity: 0.5;
	}

	.color.amazement {
		background-color: #0089e0;
	}
	.color.surprise {
		background-color: #59bdff;
	}
	.color.distraction {
		background-color: #a5dbff;
		opacity: 0.5;
	}

	.color.grief {
		background-color: #0000c8;
	}
	.color.sadness {
		background-color: #5151ff;
	}
	.color.pensiveness {
		background-color: #8c8cff;
		opacity: 0.5;
	}

	.color.loathing {
		background-color: #de00de;
	}
	.color.disgust {
		background-color: #ff54ff;
	}
	.color.boredom {
		background-color: #ffc6ff;
		opacity: 0.5;
	}

	.color.rage {
		background-color: #d40000;
	}
	.color.anger {
		background-color: #ff0000;
	}
	.color.annoyance {
		background-color: #ff8c8c;
		opacity: 0.5;
	}

	.color.vigilance {
		background-color: #ff7d00;
	}
	.color.anticipation {
		background-color: #ffa854;
	}
	.color.interest {
		background-color: #ffc48c;
		opacity: 0.5;
	}
</style>
