// 서비스 워커 설치 확인용 (빈 껍데기)
self.addEventListener('install', (e) => {
    console.log('[Service Worker] 설치 완료! 이제 앱으로 설치할 수 있습니다.');
});

self.addEventListener('fetch', (e) => {
    // 나중에 인터넷이 끊겨도 작동하게(오프라인 모드) 만들 때 여기에 코드를 짭니다.
});