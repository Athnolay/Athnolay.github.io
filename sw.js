/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/hexo-hello-world/index.html","40033ded1ed3760b2ed804928124e3a5"],["/2023/02/15/My-Heart/index.html","e21a074cf985d9e82ea66dce4d44ff4c"],["/2023/04/05/Beginning/index.html","a89b4fcceb3b927eabb19e8bd09e71f2"],["/2023/04/06/README/index.html","936fcb59ce80ce2d701f986eed89ee87"],["/2023/04/07/ZJU经验-zjg经验/index.html","32fc01ffe83fe75c64237e4b57a3dd66"],["/2023/04/08/日志-习惯/index.html","4fc35e7d7c8fdfbdc896b6636f8da6ee"],["/2023/04/10/hexo-Blog搭建/index.html","01904dfe48665e595d9ed279c13cf6a2"],["/2023/04/15/ZJU经验-论文排版/index.html","8568461b07f384f24eb574752ce3bd40"],["/2023/05/01/日志-通宵/index.html","a2477207266c972482e9cf96a3dbac96"],["/2023/05/22/学习-Matlab/index.html","8763185e44a049210b8a48c2bf496ec9"],["/2023/05/24/hexo-博客命令/index.html","01b609be3d5e8a2b8cb5a4d925c4ee31"],["/2023/05/24/学习-词根/index.html","a7a3630165a015e6815461a4f31057c4"],["/2023/05/25/ZJU经验-关于吃饭/index.html","65443f58f7349bded34f9239b656108b"],["/2023/05/25/hexo-部署错误解决方案/index.html","37dc420bdd4837ce2559f09d2f82ca8b"],["/2023/05/26/学习-STM32/index.html","7a216753bf3ba11701c0fe1683f87b1d"],["/2023/06/08/日志-Arthur/index.html","c2c40fb717d21dc9549ebf006c335bf4"],["/2023/06/14/学习-Laplace极点理解/index.html","987703355e9b84f2238713b23ac0f4d7"],["/2023/06/26/日志-Claim/index.html","30a4952c716d639a0dc9af80be4a55e8"],["/404.html","a54e78f4aa7070729c8326f5cd7f2ad2"],["/about/index.html","3f7d8c937b8a9e5b80790de9d1573446"],["/archives/2023/01/index.html","faf48ebb5dd6ef7dd90d57c7187b9579"],["/archives/2023/04/index.html","337cfd70ddf750d59a1057c8296ce6c6"],["/archives/2023/05/index.html","2dbb765f4296898a26741381accb327f"],["/archives/2023/06/index.html","64245f7addcf1d2e9caf3916588f113e"],["/archives/2023/index.html","e9f7497c4493a88e5bd77848c1198984"],["/archives/2023/page/2/index.html","11fdb2ffb35bf89dea35c0e24eeceb73"],["/archives/index.html","50a4ed5547fa1ece6f109c3a3fd23650"],["/archives/page/2/index.html","f26a561146dd88f5a58d1ebd462761be"],["/bangumis/index.html","c832515d27323c1ec294f52600c907a9"],["/categories/ZJU经验/index.html","90c46419107e9587ac956fcd00b7a274"],["/categories/hexo/index.html","a08f82c191fa240c33de13aa850f3873"],["/categories/index.html","c170db94c514ac2f7b0ba4ba2b2da6aa"],["/categories/关于本站/index.html","d1a4104462da86c1acd5bb39b4f38f4d"],["/categories/学习/index.html","de0cca61c98d4cb62db6596f7cbb347f"],["/categories/日志/index.html","d853ba3e40d0955f4aa291a658873cf9"],["/css/Lete.css","77e990b6eb38d501c0d45ab04000b0df"],["/css/index.css","9a121fbf1be2a572f30393549aea918d"],["/css/var.css","f17df2624c3d45402f4f3b95a8d4fdfe"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","69a70c730ced60c33443c5a9bf292e35"],["/index.html","aa5c3e8690244cbfad4fcf9ae4ca9cf8"],["/js/Lete.js","126e2acd9518277c0c293f84a266336c"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","379b0a0ccf778ab25700280dfe3778e0"],["/link/index.html","58697db3b5fa1040c29108224b58090d"],["/movies/index.html","16c5d80de155bcd4ac164b2c58699050"],["/music/index.html","c4f4250a75732df1d73d0c5890af15b5"],["/page/2/index.html","071d9b101c216e65824282259763d8cd"],["/sw-register.js","50c1627de287410e34913f523ede4fce"],["/tags/Matlab/index.html","41e093649b1ba733756c7157416e106c"],["/tags/STM32/index.html","2bffad198a7a9bb23e7af2f3b39acda6"],["/tags/ZJU/index.html","5132f45cf733cd754c1e0c90b969313e"],["/tags/hexo/index.html","5bff1000871d022405118988c1a59edd"],["/tags/index.html","bb6e5959efaad208408612cd835df81c"],["/tags/经验/index.html","200abafe5cbc3219c2711bc80b245e36"]];
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
