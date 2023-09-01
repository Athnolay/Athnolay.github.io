/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/hexo-hello-world/index.html","84218754fe4332b1d203965abe67fef7"],["/2023/02/15/My-Heart/index.html","2e5daa1884c2ab206c785bc66fa1119e"],["/2023/04/05/Beginning/index.html","28354336bb622e552de0a74a265f7bc5"],["/2023/04/06/README/index.html","85212e46c353af6ea3bd4a25a14431e2"],["/2023/04/07/ZJU经验-zjg经验/index.html","f1a65296e057bdec49b567e36577b8ff"],["/2023/04/08/日志-习惯/index.html","6eeab6e533fc1b7266d59d9e4a223192"],["/2023/04/10/hexo-Blog搭建/index.html","67942c296508d891a087e036b90d35ac"],["/2023/04/15/ZJU经验-论文排版/index.html","899d5ec50914cb0a1df3fd3d2a906fc6"],["/2023/05/01/日志-通宵/index.html","9f4f73abee89fa56e93fea218a333cb6"],["/2023/05/22/学习-Matlab/index.html","5b257659ca2e92d25bf17a3a8833a1ae"],["/2023/05/24/hexo-博客命令/index.html","d1d35ad90c972544bc48f66e4067ccba"],["/2023/05/24/学习-词根/index.html","3d03af315f834c616052508187095586"],["/2023/05/25/ZJU经验-关于吃饭/index.html","6ec090bc5acd0ea263cab3c87ae3202e"],["/2023/05/25/hexo-部署错误解决方案/index.html","b046ea0ed51b0de1bc753bdeb361ad4f"],["/2023/05/26/学习-STM32/index.html","f6d9829adccac975fdaf5a9c48d7fbb2"],["/2023/06/08/日志-Arthur/index.html","1f3138d6454a13b51fc56e1360b0cdb2"],["/2023/06/14/学习-Laplace极点理解/index.html","4deffbef7a35d7f5ec89df406e14a6dc"],["/2023/06/26/日志-Claim/index.html","be75b0f5136fed50a2d4695bb67b523e"],["/2023/07/18/日志-强风吹拂/index.html","6665b6aaad499d8ba2d9aa4e2f28f6e4"],["/2023/07/31/学习-MSP432/index.html","4610eee7a919a65828e2f8a8f3ba858e"],["/404.html","60fc68ccd3ccf894f316b0c1c01984dc"],["/about/index.html","ed10d180935e638ec25fdad094bdfb59"],["/archives/2023/01/index.html","da61e57d556155ab582ddbd2aaf92ce5"],["/archives/2023/04/index.html","6563dc11eba964f9afc6d121ced22ea8"],["/archives/2023/05/index.html","c868547c9aa7d78048169cf8b7220a41"],["/archives/2023/06/index.html","a110641866b2a71ad6887b765f05e342"],["/archives/2023/07/index.html","2348bb54bf86e1bf62d8161d1efcdf2a"],["/archives/2023/index.html","069a9463fe03b363c2951f39264255a2"],["/archives/2023/page/2/index.html","8f859b45212326e903f5a58ee07091df"],["/archives/index.html","629fbdc99cae1699ebd0177991605e6b"],["/archives/page/2/index.html","314ec3e971d8d990ab5872ee0ce70071"],["/bangumis/index.html","e42581957f3f9f59edacb2d7ed49b367"],["/categories/ZJU经验/index.html","aa66a5ab05ac09abc8aa8719629bc855"],["/categories/hexo/index.html","bc6e062294c5f4c4534d2d3503e94f36"],["/categories/index.html","03c6c1d393adf3b6d91447e7ee0e54c8"],["/categories/关于本站/index.html","b843081a5801d3aac5667da5c6ec5be9"],["/categories/学习/index.html","d372bf131c5611770c812cf05d384809"],["/categories/日志/index.html","a375477404af96003f3378e278904d67"],["/css/Lete.css","3dea5f247c83c8078ada0684365afcbd"],["/css/index.css","2de7ee41e2b74116ee14a8fe91f6d502"],["/css/var.css","1c645197178d5a6da13da7a16b6209a0"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","69a70c730ced60c33443c5a9bf292e35"],["/index.html","959df4f00d3c7a5fe0f63788257ade57"],["/js/Lete.js","126e2acd9518277c0c293f84a266336c"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","379b0a0ccf778ab25700280dfe3778e0"],["/link/index.html","73b0a6488d1197633048f553ae08cb99"],["/movies/index.html","83749e3465b9c2b21991548b252c1b17"],["/music/index.html","dc7cf03e59dcce1d72f118c8de67b8c4"],["/page/2/index.html","d952aca1d9d7d2d1d1f09e3069648350"],["/sw-register.js","412098ef1245955cf110772289692633"],["/tags/Matlab/index.html","efbb24545e3dbc84a20d803f2de7a1e8"],["/tags/STM32/index.html","4a1deb126e1a5fee2daec7aac4532622"],["/tags/ZJU/index.html","729053421953fda0fb484c052ec19f2d"],["/tags/hexo/index.html","107a9a8e753a07887cf7dce03c8c0304"],["/tags/index.html","ff74151cfdc91a2c05a871cad97bf36b"],["/tags/经验/index.html","1a5cb197a15259834fcc6054aa48d4da"]];
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
