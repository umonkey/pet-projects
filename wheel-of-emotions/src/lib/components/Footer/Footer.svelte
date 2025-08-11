<footer>
	<div class="row">
		<div class="cell">
			<h3>Plutchik's Emotion Wheel</h3>
			<p>
				This interactive tool is based on Robert Plutchik's groundbreaking emotion wheel from 1980.
				It identifies 8 primary emotions that form the foundation of all human emotional
				experiences, arranged in a scientifically-backed, mutually exclusive and collectively
				exhaustive (MECE) framework.
			</p>
		</div>

		<div class="cell">
			<h3>How It Works</h3>
			<p>
				Each emotion has three intensity levels (mild, moderate, intense) and can combine with
				adjacent emotions to create complex feelings like love (joy + trust) or awe (fear +
				surprise). Your selections are stored securely in our databasefor personal reflection and
				emotional awareness.
			</p>
		</div>
	</div>
</footer>

<style>
	footer {
		background-color: #fff;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		padding: 10px 0;
	}

	.cell {
		flex-basis: 50%;
		line-height: 1.5em;
		opacity: 0.8;
	}

	h3 {
		font-size: 16px;
		margin: 0 0 10px;
	}

	p {
		font-size: 14px;
		margin: 0;
	}

	@media (max-width: 600px) {
		footer {
			padding: 20px;
		}

		.row {
			flex-direction: column;
			gap: 20px;
		}

		.cell {
			flex-basis: 100%;
			margin: 0;
		}
	}
</style>
