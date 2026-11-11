const CACHE_NAME = "task-planner";
 
const FILES = [
    "./",
    "./index.html",
    "./app.js",
    "./manifest.json"
];

self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(FILES);
            })
    );
});

self.addEventListener("fetch", function(event) {
    if (event.request.method !== "GET") return;
 
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                return response || fetch(event.request);
            })
    );
});