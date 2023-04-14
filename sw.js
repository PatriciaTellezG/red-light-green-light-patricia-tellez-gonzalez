const staticResourcesCache = "static-cache-v1";
const resources = [
  "/",
  "/index.html",
  "/assets/green.png",
  "/assets/red.png",
  "/assets/welcome.png",
  
];


self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(staticResourcesCache).then((cache) => {
      return cache.addAll(resources);
    })
  );
});


self.addEventListener("activate", (e) => {

  caches.keys().then((cacheNames) => {
    return Promise.all(
      cacheNames.map((name) => {
        if (name !== staticResourcesCache) {
          return caches.delete(name);
        }
      })
    );
  });
});


self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return (
        cachedResponse ||
        fetch(e.request).catch((e) => {
          console.log(e);
        })
      ); 
    })
  );
});
