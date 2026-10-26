/* Service worker — offline support.
   Strategy:
     - Code/shell (HTML, JS, CSS, manifest): NETWORK-FIRST. When online you always get the
       newest files; the cache is only a fallback when offline. This prevents a stale app.js
       from sticking around after an update.
     - Images/icons (png, jpg, webp): CACHE-FIRST (they rarely change and are big).
   Only active when served over http(s) (a hosted or localhost copy). */
var CACHE = "chembio-v4";
var ASSETS = [
  "./", "index.html", "styles.css", "app.js", "questions.js",
  "manifest.json", "icon-192.png", "icon-512.png", "bg.jpg"
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; })
        .map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

function isCodeShell(req) {
  if (req.mode === "navigate") return true;
  return /\.(html|js|css|json)(\?|$)/i.test(req.url);
}

self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;

  if (isCodeShell(e.request)) {
    // Network-first: freshest code wins; fall back to cache offline.
    e.respondWith(
      fetch(e.request).then(function (resp) {
        var copy = resp.clone();
        caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
        return resp;
      }).catch(function () {
        return caches.match(e.request).then(function (cached) {
          return cached || caches.match("index.html");
        });
      })
    );
    return;
  }

  // Cache-first for images/icons and everything else.
  e.respondWith(
    caches.match(e.request).then(function (cached) {
      return cached || fetch(e.request).then(function (resp) {
        var copy = resp.clone();
        caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
        return resp;
      }).catch(function () { return caches.match("index.html"); });
    })
  );
});
