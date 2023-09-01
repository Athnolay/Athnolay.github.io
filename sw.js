/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/hexo-hello-world/index.html","84218754fe4332b1d203965abe67fef7"],["/2023/02/15/My-Heart/index.html","3c04a1003ff0fad2d058ce3d6b685221"],["/2023/04/05/Beginning/index.html","28354336bb622e552de0a74a265f7bc5"],["/2023/04/06/README/index.html","85212e46c353af6ea3bd4a25a14431e2"],["/2023/04/07/ZJU经验-zjg经验/index.html","f1a65296e057bdec49b567e36577b8ff"],["/2023/04/08/日志-习惯/index.html","6eeab6e533fc1b7266d59d9e4a223192"],["/2023/04/10/hexo-Blog搭建/index.html","b7d81ec76c09fbb1331511be8905de1f"],["/2023/04/15/ZJU经验-论文排版/index.html","899d5ec50914cb0a1df3fd3d2a906fc6"],["/2023/05/01/日志-通宵/index.html","9f4f73abee89fa56e93fea218a333cb6"],["/2023/05/22/学习-Matlab/index.html","5b257659ca2e92d25bf17a3a8833a1ae"],["/2023/05/24/hexo-博客命令/index.html","2a6a2f1484ca48c542ae803852b598c5"],["/2023/05/24/学习-词根/index.html","3d03af315f834c616052508187095586"],["/2023/05/25/ZJU经验-关于吃饭/index.html","6ec090bc5acd0ea263cab3c87ae3202e"],["/2023/05/25/hexo-部署错误解决方案/index.html","061b5e2c65fd05bda6360652ce3185a1"],["/2023/05/26/学习-STM32/index.html","f6d9829adccac975fdaf5a9c48d7fbb2"],["/2023/06/08/日志-Arthur/index.html","1f3138d6454a13b51fc56e1360b0cdb2"],["/2023/06/14/学习-Laplace极点理解/index.html","4deffbef7a35d7f5ec89df406e14a6dc"],["/2023/06/26/日志-Claim/index.html","be75b0f5136fed50a2d4695bb67b523e"],["/2023/07/18/日志-强风吹拂/index.html","6665b6aaad499d8ba2d9aa4e2f28f6e4"],["/2023/07/31/学习-MSP432/index.html","4610eee7a919a65828e2f8a8f3ba858e"],["/404.html","acf63fa0a768e333af1c8651d25dc585"],["/about/index.html","f0f7cf8fc6007d56011d525bc3c07c71"],["/archives/2023/01/index.html","32b5b7b74973f47882a57366f1a1d82e"],["/archives/2023/04/index.html","e0dea9f985d8c3ccfcc849294faa1155"],["/archives/2023/05/index.html","2f59ef24802bb211f78e4c8ad23661a2"],["/archives/2023/06/index.html","0658e45eb88a41ba596f625b3e12e8f9"],["/archives/2023/07/index.html","9f0c80f2773218ffac2590e27b8937a6"],["/archives/2023/index.html","e79fc5f5399b27f120d753415f4a04db"],["/archives/2023/page/2/index.html","da2063348d2eedcf41b52775a80fff1e"],["/archives/index.html","03f68ec8ae3395093ef4b24f8b20f4f9"],["/archives/page/2/index.html","3451a8a844fbb515f997c376e8292c31"],["/bangumis/index.html","1bf511173420c124569978b898054fe2"],["/categories/ZJU经验/index.html","c05ea97b28da58989de00883cedfc424"],["/categories/hexo/index.html","a1b0c073fb2ccc1b6b18c77907a99281"],["/categories/index.html","c307fd4ebf428b4709616c6cd0334baa"],["/categories/关于本站/index.html","7eccfdab2dedf88435d7fc1b511f0b3d"],["/categories/学习/index.html","8a1e6acb0dc28e157310be7beb433b6b"],["/categories/日志/index.html","fe4a668334138ea654362b2662b34076"],["/css/Lete.css","3dc5c24f65b49765597adff8f4f5af21"],["/css/index.css","cb9c0d06e7c5ee0c91799b0cefaab7df"],["/css/var.css","2b48c60f3c8bc4b66a8a3dfd11be514f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","69a70c730ced60c33443c5a9bf292e35"],["/index.html","b2cef28abcae7554c6093fcba95e61d3"],["/js/Lete.js","126e2acd9518277c0c293f84a266336c"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","379b0a0ccf778ab25700280dfe3778e0"],["/link/index.html","6b870c524d0569564bcebb8d159db409"],["/movies/index.html","66472ad1153b270e7785728e854414f8"],["/music/index.html","2499eee2a19e23ee37a047346e9bb332"],["/page/2/index.html","4d317f6e97543befb7ef5efa86fc0be7"],["/sw-register.js","e734a943a434b3589f1ada3cf59e183d"],["/tags/Matlab/index.html","61c489b7f800e270983ec8d80a21822b"],["/tags/STM32/index.html","c545ce17c2f41533bf5dfe1f436cbc16"],["/tags/ZJU/index.html","196870057aaed53ade88cde4bb4c8654"],["/tags/hexo/index.html","4fae7afcd4d148014c1d7c3438ff4536"],["/tags/index.html","6e6a0f3fc5dea9de39f28e5dd7ab9849"],["/tags/经验/index.html","26b969558c94eb6881118fa257231fb2"]];
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
