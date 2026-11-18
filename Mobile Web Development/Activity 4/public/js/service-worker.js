const CACHE_NAME = "task-planner";
 
// Express routing can be used here
const FILES = [
    "/",
    "/sign-up",
    "/planner",
    "/js/index.js",
    "/js/sign-up.js",
    "/js/planner.js",
    "/manifest.json",
    "/css/style.css"
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