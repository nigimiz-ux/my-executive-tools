// 새로운 버전이 올라오면 즉시 낡은 일꾼을 해고하고 새 일꾼 투입
self.addEventListener('install', (e) => {
    self.skipWaiting();
    console.log('[Service Worker] 설치 완료!');
});

self.addEventListener('activate', (e) => {
    console.log('[Service Worker] 활성화 완료!');
});

// 💡 날씨 API 등 모든 인터넷 통신을 방해하지 않고 그대로 통과시킴 (하이패스)
self.addEventListener('fetch', (e) => {
    e.respondWith(fetch(e.request));
});