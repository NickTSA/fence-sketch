/* LA Fence Craft Sketch - offline copy. Build 2026-10-08-6adff683fe */
var CACHE = "fence-sketch-2026-10-08-6adff683fe";
var ASSETS = ["./", "index.html", "manifest.json", "icon-192.png", "icon-512.png", "icon-maskable-512.png", "apple-touch-icon.png"];

self.addEventListener("install", function(e){
  e.waitUntil(
    caches.open(CACHE).then(function(c){
      return c.addAll(ASSETS.map(function(u){ return new Request(u, {cache: "reload"}); }));
    }).then(function(){ return self.skipWaiting(); })
  );
});

// drop every older copy, whatever it was called
self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){ return k !== CACHE; })
                             .map(function(k){ return caches.delete(k); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function(e){
  var req = e.request;
  if(req.method !== "GET") return;
  var url = new URL(req.url);
  if(url.origin !== location.origin) return;

  if(req.mode === "navigate"){
    // The page: try the network first so a fresh upload shows straight
    // away, but don't keep a crew waiting on one bar of signal - after a few
    // seconds, open the copy on the device.
    e.respondWith(new Promise(function(resolve){
      var done = false;
      function fromCache(){
        return caches.match("index.html").then(function(r){ return r || caches.match("./"); });
      }
      var timer = setTimeout(function(){
        fromCache().then(function(r){ if(r && !done){ done = true; resolve(r); } });
      }, 4000);
      fetch(req).then(function(res){
        if(res && res.ok){
          var copy = res.clone();
          caches.open(CACHE).then(function(c){ c.put("index.html", copy); });
        }
        clearTimeout(timer);
        if(!done){ done = true; resolve(res); }
      })["catch"](function(){
        clearTimeout(timer);
        fromCache().then(function(r){
          if(!done){ done = true; resolve(r || Response.error()); }
        });
      });
    }));
    return;
  }

  e.respondWith(
    caches.match(req, {ignoreSearch: true}).then(function(r){ return r || fetch(req); })
  );
});
