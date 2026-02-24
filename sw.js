self.addEventListener('install', (e) => {
    self.skipWaiting();
    console.log('[Service Worker] 설치 완료!');
});

self.addEventListener('activate', (e) => {
    console.log('[Service Worker] 활성화 완료!');
});

// 💡 브라우저가 알아서 쿠키 챙겨서 통신하도록 일꾼은 아무 참견도 하지 않음!
self.addEventListener('fetch', (e) => {
    // 텅 비워둡니다.
});