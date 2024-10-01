const CACHE_NAME = 'static-cache-1';
const CACHE_ASSETS = [
    '/icons/144x144.png',
    '/icons/192x192.png',
    '/icons/512x521.png',
]

self.addEventListener('install', (event) => {
    event.waitUntill(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(CACHE_ASSETS).catch((error) => {
                console.error("Fala ao adicionar os recusros ao cache" + error) 
            });
        })
    );
})