const addResourcesToCache = async (resources) => {
  const cache = await caches.open("stop watch");
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "./static/js/bundle.js",
      "./index.html",
      "./manifest.json",
      "./favicon.ico",
      "./img/dots.svg",
    ])
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method != "GET") return;

  event.respondWith(
    (async function () {
      const cache = await caches.open("stop watch");
      const cachedResponse = await cache.match(event.request);

      if (cachedResponse) {
        event.waitUntil(cache.add(event.request));
        return cachedResponse;
      }

      return fetch(event.request);
    })()
  );
});
