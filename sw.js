const CACHE_NAME = 'khoi-hinh-v1';
const assets = [
    './',
    './index.html',
    './manifest.json',
    './icon-192.png',
    './icon-512.png'
];

// Lưu trữ (cache) các file khi người chơi mở game lần đầu
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(assets);
        })
    );
});

// Lấy file từ bộ nhớ tạm (cache) ra dùng nếu mất mạng
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});