import { derived, writable } from 'svelte/store';
import { ls } from '$lib/utils/localStorage';

type Record = {
	timestamp: number;
	emotion: string;
};

const STORAGE_KEY = 'history:v1';

export const history = writable<Record[]>(ls.read(STORAGE_KEY) || []);

history.subscribe((value: Record[]) => {
	ls.write(STORAGE_KEY, value);
});

export const recentHistory = derived(history, ($history) => {
	return $history.reverse();
});
