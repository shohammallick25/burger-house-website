self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("burger-house-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./styles.css",
        "./main.js",
        "./assets/l.png",
        "./assets/logo-dark.png",
        "./assets/logo-white.png",
        "./assets/header.png",
        "./assets/order-1.png",
        "./assets/order-2.png",
        "./assets/order-3.png",
        "./assets/event.png",
        "./assets/reservation-bg-1.png",
        "./assets/reservation-bg-2.png"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
