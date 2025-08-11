import { history } from '$lib/stores/history';

export const recordEmotion = async (value: string) => {
	const timestamp = Math.round(Date.now() / 1000);

	history.update((records) => {
		records.push({ timestamp, emotion: value });
		return records;
	});

	console.debug(`ADDED ${value}:${timestamp}`);
};

export const removeRecord = async (emotion: string, timestamp: number) => {
	history.update((records) => {
		const updated = records.filter(
			(record) => record.emotion !== emotion || record.timestamp !== timestamp
		);

		return updated;
	});

	console.debug(`DELETED ${emotion}:${timestamp}`);
};
