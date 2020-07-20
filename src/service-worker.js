const CACHENAME = 'pwa-subV1'

const assetsToCache = [
  'index.js',
  'index.html',
  'nav.html',
  'style/index.css',
  'home.html',
  'detail.html',
  'favorite.html',
  'public/loading.gif',
  'public/logo-football.png',
  'public/football-1.png',
  'public/football-2.png',
  'public/football-3.png',
  'public/favicon.ico',
  'manifest.webmanifest'
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(CACHENAME)
      .then(cache => cache.addAll(assetsToCache))
  )
})

// self.addEventListener('fetch', event => {
//   let baseUrl = "https://api.football-data.org/"

//   if (event.request.url.indexOf(baseUrl) > -1) {
//     event.respondWith(
//       caches
//         .open(CACHENAME)
//         .then(cache => {
//           return fetch(event.request)
//             .then(response => {
//               cache.put(event.request.url, response.clone())
//               return response
//             })
//         })
//     )
//   } else {
//     event.respondWith(
//       caches
//         .match(event.request, { ignoreSearch: true })
//         .then(response => {
//           return response || fetch(event.request)
//         })
//     )
//   }
// })

// self.addEventListener("activate", function (event) {
//   event.waitUntil(
//     caches
//       .keys()
//       .then(cacheNames => {
//         return Promise.all(
//           cacheNames.map(cacheName => {
//             if (cacheName !== CACHENAME) {
//               console.log(`Service Worker: cache ${cacheName} dihapus`)
//               return caches.delete(cacheName)
//             }
//           })
//         )
//       })
//   )
// })

// self.addEventListener('push', event => {
//   let body = null
//   if (event.data) {
//     body = event.data.text()
//   } else {
//     body = 'Push message no payload'
//   }
//   let options = {
//     body,
//     data: {
//       dateOfArrival: Date.now(),
//       primaryKey: 1
//     },
//     badge: assetsToCache[9],
//     icon: assetsToCache[9]
//   }
//   event.waitUntil(
//     self.registration.showNotification('Notifikasi Football PWA', options)
//   )
// })