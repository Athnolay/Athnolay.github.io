/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/hexo-hello-world/index.html","96a7aa0ef858659eb694eb9b7f193207"],["/2023/02/15/My-Heart/index.html","7db1f558a6b587f2441fdcf194c4b3fc"],["/2023/04/05/Beginning/index.html","2aef3839c16cae522bf461983035be1f"],["/2023/04/06/README/index.html","5ee3d5049c7ef6d9ef928670d8d9f56a"],["/2023/04/07/ZJU经验-zjg经验/index.html","c4e9ff98e486041d2fc3f22df8bebec2"],["/2023/04/08/日志-习惯/index.html","9e7b80c11166d0729bfbc9e87044637b"],["/2023/04/10/hexo-Blog搭建/index.html","de5420e72ec84c97aa75fa577e80b7c2"],["/2023/04/15/ZJU经验-论文排版/index.html","5ec5ab2dd64b6669bfe35a391bf6fda2"],["/2023/05/01/日志-通宵/index.html","1c6c7dadd0c284f8e48ca1ca53790c8b"],["/2023/05/22/学习-Matlab/index.html","7c4861ca7421eb1706b36c537e2fd0af"],["/2023/05/24/hexo-博客命令/index.html","044c6a38237119214695f63370e310a0"],["/2023/05/24/学习-词根/index.html","b6352380638f1421de027aadaaf220f4"],["/2023/05/25/ZJU经验-关于吃饭/index.html","1bd08ab43c83f1ce96513cfb6996eb2b"],["/2023/05/25/hexo-部署错误解决方案/index.html","ff54f1e2f5a87f3da7f6a53ab1788b15"],["/2023/05/26/学习-STM32/index.html","b2aaad5fdc1c307fbf96d9c86daa9d6a"],["/2023/06/08/日志-Arthur/index.html","e1e0e5fdf95e27d7eb4d086354711d89"],["/2023/06/14/学习-Laplace极点理解/index.html","82457937da33b7880d061f6e07923f5f"],["/2023/06/26/日志-Claim/index.html","e400aba383bb1bd8f826691eef787560"],["/2023/07/18/日志-强风吹拂/index.html","edc1302bef9625b1a3d505a66a765d76"],["/2023/07/31/学习-MSP432/index.html","d7767b05111cb643e46825002586f731"],["/404.html","d5875f8b6262f67b3771c228ffd55b7b"],["/about/index.html","ea7bf49ba45d10016134898b4b2046d2"],["/archives/2023/01/index.html","65baeb40fcd558b7f772cd1cf98561d5"],["/archives/2023/04/index.html","19883ac0dcb4210ed82d90460a24c356"],["/archives/2023/05/index.html","6a0855e9dda77aaa22ffb6692b52b663"],["/archives/2023/06/index.html","a13431c2da3802f55123f88edf3de444"],["/archives/2023/07/index.html","0de76b6fba76bddd48c39bb7170de4f7"],["/archives/2023/index.html","0d18afa2db1e6fc40531d70c52984b82"],["/archives/2023/page/2/index.html","7cce103e9539d758f8d7f4cd6ac6efc6"],["/archives/index.html","40d76e3c7100e14fba813ad33bd230be"],["/archives/page/2/index.html","399f624b0e9d7586e62dbe347a0e2ffc"],["/bangumis/index.html","905883c32b8f349cb6d324d9b7eb0e81"],["/categories/ZJU经验/index.html","8105c7af42256488c6e1a24b22f6fd2e"],["/categories/hexo/index.html","2aea90e331d19f9b54e3edc547fb2ef7"],["/categories/index.html","afea40481f570fe66ea051c9e808098f"],["/categories/关于本站/index.html","ac68b1e17984d04073695aa5582cc909"],["/categories/学习/index.html","082b71c3ce63b4576ebe725d89cce67b"],["/categories/日志/index.html","e0a99d11c8e2a1d69821928b49ba4d2b"],["/css/Lete.css","d737e258010e7f69fd548c28cc54a5e7"],["/css/index.css","6ac946d6090abc1baa00e6684ae6fcc8"],["/css/var.css","430bdc39482c3fec6cc97b6995bbd5c9"],["/images/GreatEra.jpg","e0a886621fba2a1488a32c521d6eac71"],["/images/ZJU轻首页.png","ca636d033cb593ed6670f7c6eb4e0240"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Arthur.jpg","b0eef2ad30c6a164dbc9130de00d4f61"],["/img/Blog.jpg","063d52a2c1754610fe104b6ae6dd4009"],["/img/Butterfly.jpg","6ba722d9c47af9f66ff4c17e6333902c"],["/img/GreatEra.jpg","e0a886621fba2a1488a32c521d6eac71"],["/img/MSP432.jpg","758e205bf7b423f934df6c4ba61653e9"],["/img/ZJU.jpg","ca018bb4809b4a2484a705ea88f778ac"],["/img/cxg.jpg","e13f0053063909e64a129a1952dc6ea5"],["/img/cxg2.jpg","90a1b16152e53fbaf335a49faea67c51"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/gmtx.png","3f64f904804ff5d11d4644751297d34e"],["/img/hexo.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["/img/loading.gif","69a70c730ced60c33443c5a9bf292e35"],["/img/lxl.jpg","4ad0e59c5792e36adbe608b3d4f71688"],["/img/railgun.jpg","d2883245a2bc2d772073b6a3e113bd3a"],["/img/yln.jpg","aabd73d8327cb115d345271549f2845a"],["/img/习惯.png","328630855a099c6e2a1f16fa3153c247"],["/img/大河.png","e27fe93c6311ef23978dab7400a2ced3"],["/img/大河2.jpg","59c1a1887d357f1ee0bd0f8128aa444d"],["/img/海上钢琴师.jpg","48810d5fa810fdfdc0d0da56085e63b3"],["/img/艾伦.jpg","0a1c432c8e2badf13b19c49917e7871c"],["/index.html","e765dfeb9646af2b6681b6ecad02498f"],["/js/Lete.js","126e2acd9518277c0c293f84a266336c"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","379b0a0ccf778ab25700280dfe3778e0"],["/link/index.html","c448cf7bdcf618927aa908c65671bed1"],["/movies/index.html","dfb9714f282093e7d013c7bb91b3bdec"],["/music/index.html","2887eebb185c94a3e1b2041bd599f7b4"],["/page/2/index.html","0caa5cd86521829d76c518fb0ded4367"],["/sw-register.js","c4187d27adb569212af3a2fb2cd0f248"],["/tags/Matlab/index.html","8fb51f5986ed4ab35f4695532b751711"],["/tags/STM32/index.html","adeada73c5372635e5bf66430e833103"],["/tags/ZJU/index.html","f3b8eb2e08ea89c8b2361ee0928a25b0"],["/tags/hexo/index.html","6c2b98e12f2861a1797e368380ee42f1"],["/tags/index.html","f6bc3ddf27f5c51163488714074daff3"],["/tags/经验/index.html","eec498f2cd9069ac110aa420206d4468"]];
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
