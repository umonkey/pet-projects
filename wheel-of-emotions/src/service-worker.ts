import { build, files, version } from '$service-worker';

const CACHE = `cache-${version}`;
const ASSETS_TO_CACHE = build.concat(files);

self.addEventListener('install', (event) => {
	// @ts-ignore
	event.waitUntil(
		caches
			.open(CACHE)
			.then((cache) => cache.addAll(ASSETS_TO_CACHE))
			.then(() => {
				// @ts-ignore
				self.skipWaiting();
			})
	);
});

self.addEventListener('activate', (event) => {
	// @ts-ignore
	event.waitUntil(
		caches.keys().then(async (keys) => {
			// delete old caches
			for (const key of keys) {
				if (key !== CACHE) {
					await caches.delete(key);
				}
			}
			// @ts-ignore
			self.clients.claim();
		})
	);
});

self.addEventListener('fetch', (event) => {
	// @ts-ignore
	if (event.request.method !== 'GET') return;

	// @ts-ignore
	event.respondWith(
		caches.open(CACHE).then(async (cache) => {
			// @ts-ignore
			const response = await cache.match(event.request);
			if (response) {
				return response;
			}

			try {
				// @ts-ignore
				const fetchResponse = await fetch(event.request);
				// We don't cache non-200 responses
				if (fetchResponse.status === 200) {
					// @ts-ignore
					cache.put(event.request, fetchResponse.clone());
				}
				return fetchResponse;
			} catch (e) {
				// The network failed, so we can't do anything.
				// You could return a custom offline page here.
				console.error('Fetch failed:', e);
				throw e;
			}
		})
	);
});
