/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/hexo-hello-world/index.html","62669a2df8074d67d3f816393735153a"],["/2023/02/15/My-Heart/index.html","6d9b067756a9e801f4cc040287f9b6d6"],["/2023/04/05/Beginning/index.html","a89b4fcceb3b927eabb19e8bd09e71f2"],["/2023/04/06/README/index.html","936fcb59ce80ce2d701f986eed89ee87"],["/2023/04/07/ZJU经验-zjg经验/index.html","32fc01ffe83fe75c64237e4b57a3dd66"],["/2023/04/08/日志-习惯/index.html","4fc35e7d7c8fdfbdc896b6636f8da6ee"],["/2023/04/10/hexo-Blog搭建/index.html","91343f543281dede13052a891903b51b"],["/2023/04/15/ZJU经验-论文排版/index.html","8568461b07f384f24eb574752ce3bd40"],["/2023/05/01/日志-通宵/index.html","a2477207266c972482e9cf96a3dbac96"],["/2023/05/22/学习-Matlab/index.html","8763185e44a049210b8a48c2bf496ec9"],["/2023/05/24/hexo-博客命令/index.html","d523b6904eb86044ce6f8ee2463ffb6f"],["/2023/05/24/学习-词根/index.html","a7a3630165a015e6815461a4f31057c4"],["/2023/05/25/ZJU经验-关于吃饭/index.html","65443f58f7349bded34f9239b656108b"],["/2023/05/25/hexo-部署错误解决方案/index.html","3f92741f00e21816d9b7c87be9e59eb5"],["/2023/05/26/学习-STM32/index.html","6dc91cdff8919d0d6485086920306373"],["/2023/06/08/日志-Arthur/index.html","c2c40fb717d21dc9549ebf006c335bf4"],["/2023/06/14/学习-Laplace极点理解/index.html","987703355e9b84f2238713b23ac0f4d7"],["/2023/06/26/日志-Claim/index.html","8417659e6f2fcaea71d9e58b548df370"],["/404.html","3081bd544d02fec837ea94d965105879"],["/about/index.html","006489ce71b9288e1df5cca4ae697dfd"],["/archives/2023/01/index.html","578684c7543c929a51b3e53fdc1feb82"],["/archives/2023/04/index.html","85c7f3ec06a6e2797e3f1bba80620849"],["/archives/2023/05/index.html","c222b51ea506efcad2a61094e08db4a3"],["/archives/2023/06/index.html","af56ff785d1bb70d8abd74b3ade9b163"],["/archives/2023/index.html","ff51c523842a67972581bbe359f0d1db"],["/archives/2023/page/2/index.html","c2136a7e199ba03749f9a8082a709f2e"],["/archives/index.html","768af23240faab3cbd79ac1ce1629545"],["/archives/page/2/index.html","4b3bf219a106fccaff2fb88aa78859bf"],["/bangumis/index.html","95d469375d4eaa8553ab659e202a242e"],["/categories/ZJU经验/index.html","617beeb22aed187a0195efbc5c30bbca"],["/categories/hexo/index.html","eebebecb9e0c094cfbb335df0591aa96"],["/categories/index.html","c06cbf1079f5dc2d759021e2ff2ec2a6"],["/categories/关于本站/index.html","0495223aa86b39a0db2b49501ce5b8dc"],["/categories/学习/index.html","18792d7c96ea63cd0725f21680bb7801"],["/categories/日志/index.html","7e8179c29d27b92b1fa6871cdafe396e"],["/css/Lete.css","e3c6a8b2ba81271b9c68e3e69e092cc3"],["/css/index.css","0929aed2d711ad263e6f9058c1b8bb6e"],["/css/var.css","bb0dae0d54a8470ddea4a8e2b76f72bd"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","69a70c730ced60c33443c5a9bf292e35"],["/index.html","236b4afa908df6a3f7f739c19998eb55"],["/js/Lete.js","126e2acd9518277c0c293f84a266336c"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","379b0a0ccf778ab25700280dfe3778e0"],["/link/index.html","e59264c65e7c7c739e4704b5fcfbd569"],["/movies/index.html","d4c2edb96985829ecfcda0d46c240101"],["/music/index.html","80de1a5f5c5b1f5017048e9fc45576d1"],["/page/2/index.html","37e558324d3010afb153f529f719dcb0"],["/sw-register.js","e93b3211365df4867d266c75c986bf34"],["/tags/Matlab/index.html","2afca6492211615638beab8a8e9bac19"],["/tags/STM32/index.html","aeee94ed6d37bded392769db2bf7b88d"],["/tags/ZJU/index.html","c8f6f31d9f3b40b8fcaca5d390f4b514"],["/tags/hexo/index.html","bd9303c2dd57d8f119dbd4cc3f48698f"],["/tags/index.html","964f151163dff71ecea29e045cd24657"],["/tags/经验/index.html","618ad86409d2d5d37539e4b1b7459558"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
