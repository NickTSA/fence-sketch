/* Fence Sketch offline cache - built 7fb7cb9bf8 */
var CACHE = "fence-sketch-7fb7cb9bf8";
var SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png"];

/* GitHub Pages serves with a ten-minute max-age. Going through the browser's
   HTTP cache would happily hand back the copy this update is replacing, so
   every shell fetch is forced past it. */
function fresh(url){ return new Request(url, {cache: "reload"}); }

self.addEventListener("install", function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){
    return Promise.all(SHELL.map(function(u){ return c.add(fresh(u)); }));
  }).then(function(){ return self.skipWaiting(); }));
});

self.addEventListener("activate", function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.map(function(k){ return k === CACHE ? null : caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});

self.addEventListener("fetch", function(e){
  var req = e.request;
  if(req.method !== "GET" || new URL(req.url).origin !== location.origin) return;

  // The page itself comes from the network when there is one, so a new
  // version published to GitHub shows up on the next load rather than
  // being pinned to whatever was cached first.
  if(req.mode === "navigate"){
    e.respondWith(
      fetch(fresh(req.url)).then(function(res){
        var copy = res.clone();
        caches.open(CACHE).then(function(c){ c.put("./index.html", copy); });
        return res;
      }).catch(function(){
        return caches.match("./index.html").then(function(hit){
          return hit || caches.match("./");
        });
      })
    );
    return;
  }

  e.respondWith(caches.match(req).then(function(hit){
    return hit || fetch(req).then(function(res){
      var copy = res.clone();
      caches.open(CACHE).then(function(c){ c.put(req, copy); });
      return res;
    });
  }));
});
