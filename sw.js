/* =========================================================
   Service Worker - 卖萌的小说阅读器 PWA
   策略：Cache First（优先缓存，网络兜底）
   ========================================================= */

const CACHE_NAME = 'novel-reader-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
];

/* 安装阶段：预缓存核心文件 */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

/* 激活阶段：清理旧版本缓存 */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

/* 拦截请求：Cache First 策略 */
self.addEventListener('fetch', event => {
  // 只处理 GET 请求
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      // 缓存未命中，从网络获取
      return fetch(event.request).then(response => {
        // 只缓存成功的响应
        if (!response || response.status !== 200 || response.type === 'opaque') {
          return response;
        }
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(() => {
        // 离线状态下兜底：返回主页
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
