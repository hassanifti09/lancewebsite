// Service Worker for blazing fast video caching
const CACHE_NAME = 'nexus-videos-v1';
const VIDEO_CACHE = 'nexus-video-cache-v1';

// Videos to pre-cache for instant loading
const CRITICAL_VIDEOS = [
  '/assets/ultra/blackhole-ultra.mp4',
  '/assets/ultra/herovid-ultra.mp4',
  '/assets/ultra/particles-preview.mp4'
];

// Install event - pre-cache critical videos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(VIDEO_CACHE).then((cache) => {
      // Pre-cache critical videos
      return Promise.all(
        CRITICAL_VIDEOS.map(url => 
          cache.add(url).catch(err => console.log('Failed to cache:', url))
        )
      );
    })
  );
  // Force activation
  self.skipWaiting();
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME && cacheName !== VIDEO_CACHE)
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );
  // Take control immediately
  self.clients.claim();
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Handle video requests
  if (request.url.includes('.mp4') || 
      request.url.includes('.webm') || 
      request.url.includes('.m4v') ||
      request.url.includes('.m3u8') ||
      request.url.includes('.tss')) {
    
    event.respondWith(
      caches.open(VIDEO_CACHE).then(async (cache) => {
        // Try cache first
        const cachedResponse = await cache.match(request);
        if (cachedResponse) {
          // Update cache in background
          fetch(request).then(response => {
            if (response && response.status === 200) {
              cache.put(request, response.clone());
            }
          });
          return cachedResponse;
        }

        // Not in cache, fetch from network
        try {
          const networkResponse = await fetch(request);
          
          // Cache successful responses
          if (networkResponse && networkResponse.status === 200) {
            cache.put(request, networkResponse.clone());
          }
          
          return networkResponse;
        } catch (error) {
          console.error('Fetch failed:', error);
          // Return a fallback or cached version if available
          return new Response('Video unavailable', { status: 503 });
        }
      })
    );
    return;
  }

  // Handle HLS playlist requests with streaming
  if (request.url.includes('playlist.m3u8')) {
    event.respondWith(
      fetch(request).then(response => {
        return response;
      }).catch(() => {
        return caches.match(request);
      })
    );
    return;
  }

  // For other requests, use network first
  event.respondWith(
    fetch(request).catch(() => caches.match(request))
  );
});