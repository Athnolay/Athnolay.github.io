/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/hexo-hello-world/index.html","649f5c9fe2b25fc4d84850f7e3b847e9"],["/2023/02/15/My-Heart/index.html","a1e9f1cf467e67fe06182453dcc542a8"],["/2023/04/05/Beginning/index.html","ec61e5a7f9c22c1d3569e01376ca6366"],["/2023/04/06/README/index.html","0e0335addad7e4011dda2618efd98a4d"],["/2023/04/07/ZJU经验-zjg经验/index.html","a24b513332aaa393eb4fff63afb17ffd"],["/2023/04/08/日志-习惯/index.html","70e12ca3e8a44959a8062a660cd03c3d"],["/2023/04/10/hexo-Blog搭建/index.html","1a4d7dbe3d136400a389f2846fa8179d"],["/2023/04/15/ZJU经验-论文排版/index.html","de7c8cfaf5ab9aa844f67bffcd0540c1"],["/2023/05/01/日志-通宵/index.html","72181ddd34e88fa1054269a72c8b7312"],["/2023/05/22/学习-Matlab/index.html","999de9078f0a8a57a8680682c5b04fb3"],["/2023/05/24/hexo-博客命令/index.html","a08e74758dfefd606f575f6e12e5b698"],["/2023/05/24/学习-词根/index.html","09dd3f4c072b2f701558c87892b0cdde"],["/2023/05/25/ZJU经验-关于吃饭/index.html","c623b493e71d78cb624eaef7596908f6"],["/2023/05/25/hexo-部署错误解决方案/index.html","3f1b7542f2dcf2e07f466beb1998040e"],["/2023/05/26/学习-STM32/index.html","534fff93516d86a14384c48acf703916"],["/2023/06/08/日志-Arthur/index.html","64d6940dc08d855f477560bcb442e023"],["/2023/06/14/学习-Laplace极点理解/index.html","d90ba07b447b94cf03247b8f6100ffc6"],["/2023/06/26/日志-Claim/index.html","4d89e67e0dfc327689a6bde9bee6f5b5"],["/2023/07/18/日志-强风吹拂/index.html","ce41a84f51282b0fcf516624677cc595"],["/2023/07/31/学习-MSP432/index.html","8f7ebde004a104d1ce776de111c8c288"],["/404.html","a845eca4a0ffa5bc4a9fe9aea0302425"],["/about/index.html","d4713d59ef2c200d3121ed9995826bb7"],["/archives/2023/01/index.html","973587b4dba0017d46d4426eec46b982"],["/archives/2023/04/index.html","6214d097eb3225868143441e4d22c3b2"],["/archives/2023/05/index.html","46f56455d7012d15b4da53673c509216"],["/archives/2023/06/index.html","c1a9252ffbc17e95fffffbc0be310d32"],["/archives/2023/07/index.html","4897b231d78b12d4c59f3b49583065b2"],["/archives/2023/index.html","0f071e7ce9669c97bf61cc6a1059d185"],["/archives/2023/page/2/index.html","60bee2857068cec2e99b05b42c343510"],["/archives/index.html","ec1dd49334d473edc819e871f81168af"],["/archives/page/2/index.html","2adc8df048d680caacfaa694d22adf62"],["/bangumis/index.html","d6c8bd0e5162fbeefa5fe7687eddb264"],["/categories/ZJU经验/index.html","cb4e724906925562dfc6f1aebc16651b"],["/categories/hexo/index.html","bd6fa311c0b6da5b291ebe8d5e1c8115"],["/categories/index.html","c67fa643bec333a77cf270f39eac21d3"],["/categories/关于本站/index.html","ff44b21f6d685f5ca664fe37441ce906"],["/categories/学习/index.html","6c9acbc0ab601bf515025cd89826b32f"],["/categories/日志/index.html","ee2fc4e2618703d8baf14e3da7b9f9a6"],["/css/Lete.css","fff9f3b0b31dc2cf98ac38819f27a87d"],["/css/index.css","42c755638c4fb96a9cdcac8eae52a925"],["/css/var.css","a5de06f108e15e8a35b7c566ba66d9cb"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","69a70c730ced60c33443c5a9bf292e35"],["/index.html","41535e69807580f94e8af68ec27d7d41"],["/js/Lete.js","126e2acd9518277c0c293f84a266336c"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","379b0a0ccf778ab25700280dfe3778e0"],["/link/index.html","ab7299b4680e29978246826cd9e865d4"],["/movies/index.html","917480157ac87cc083e9b84ecf998058"],["/music/index.html","0b7876eb8d483e423092c3244993dada"],["/page/2/index.html","ef8fbf8c177db47d0b6e61a001504648"],["/sw-register.js","fb66538eb4d379c79ff38c11d6514b6b"],["/tags/Matlab/index.html","f8db870d5deb35d7010af08d8568ba1c"],["/tags/STM32/index.html","5162378adcedfd564bec355b926d5293"],["/tags/ZJU/index.html","905dfafb5143af5e41a3060e3ddfca6e"],["/tags/hexo/index.html","f8c1b5eaf426526a1fd7b1f5b35098bc"],["/tags/index.html","cc851c492aa65ce496eb0860e8e132f4"],["/tags/经验/index.html","b55c5f6d33ab9087263a32cfe2b04e25"]];
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
