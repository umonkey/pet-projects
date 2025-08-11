export const formatTime = (ts: number): string => {
	const date = new Date(ts * 1000);
	const pad = (num: number): string => num.toString().padStart(2, '0');

	return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
};

export const formatDate = (ts: number): string => {
	const date = new Date(ts * 1000);
	const pad = (num: number): string => num.toString().padStart(2, '0');

	return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
};
