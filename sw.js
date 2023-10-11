/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/hexo-hello-world/index.html","dccf6d6aedbec5736408010c00176940"],["/2023/02/15/My-Heart/index.html","5f6412a320d0e98832237caf85a7865b"],["/2023/04/05/Beginning/index.html","0a239e927cfd18232783665ecdcad321"],["/2023/04/06/README/index.html","acec5cdcd51f6338b7309a8c7f788d6b"],["/2023/04/07/ZJU经验-zjg经验/index.html","efa6b13f81328f1298e841b1eda107ea"],["/2023/04/08/日志-习惯/index.html","4fdc1d4d6e2fdd3a45b73a3e322fdcd5"],["/2023/04/10/hexo-Blog搭建/index.html","4445c654b7c3c21f13a821b7f27d7d02"],["/2023/04/15/ZJU经验-论文排版/index.html","e52864be35f55f1a352fe5f15cc5d78a"],["/2023/05/01/日志-通宵/index.html","23ccec5ee865fa8f5d0460154559a2c7"],["/2023/05/22/学习-Matlab/index.html","f96138d0d4773d0614005349def77e9e"],["/2023/05/24/hexo-博客命令/index.html","5886b0044d3528460cf41dcfabf927b6"],["/2023/05/24/学习-词根/index.html","c4855f68735efe584f6af55c9dc887e5"],["/2023/05/25/ZJU经验-关于吃饭/index.html","44b0f6c1f5196ed28d808b8e4098f922"],["/2023/05/25/hexo-部署错误解决方案/index.html","02c07d0de61f8292701ae7d0707c835c"],["/2023/05/26/学习-STM32/index.html","0a086f7507cc3eec0b65881cc376d21d"],["/2023/06/08/日志-Arthur/index.html","743e9481937855e2b15a067b923cc4a6"],["/2023/06/14/学习-Laplace极点理解/index.html","4591ce53205526650ab1376c3ec10eba"],["/2023/06/26/日志-Claim/index.html","45026042da41d1ff660e38f09e6615ed"],["/2023/07/18/日志-强风吹拂/index.html","dd53a53255c34e7519883a9d37f0a621"],["/2023/07/31/学习-MSP432/index.html","6b4da4689912e83ec6478426e9e51e39"],["/2023/10/11/学习-Verilog/index.html","d85f5266363f8c3385dac6e39acdd65e"],["/404.html","8d3dacb21a4169c600413d0b455ab443"],["/about/index.html","d54931cf251963fdcfe0b553ded0c73a"],["/archives/2023/01/index.html","3d32a21351bab05975d00d2d4a90f164"],["/archives/2023/04/index.html","05e2242827b1a5aa705c621c8dbe1d54"],["/archives/2023/05/index.html","aeee336f6f125b5b3ae946c33ef92470"],["/archives/2023/06/index.html","bfa08737e89f8f6455a526be50ca4dbb"],["/archives/2023/07/index.html","b2249f7bf0fa4ec80a4fd73aecc75ebf"],["/archives/2023/10/index.html","56a0e426ec02b8a577d2a46ce324767f"],["/archives/2023/index.html","6cb04799788ae350ad8a4f6b0aaba2c5"],["/archives/2023/page/2/index.html","81fbf5f0a64e963146d9a12878615647"],["/archives/index.html","589c60c4da3c821c0e733db03ed8f890"],["/archives/page/2/index.html","d51da84a696645680cbbc885c0c20044"],["/bangumis/index.html","ac120275eab09d457f2bbd66982cb1af"],["/categories/ZJU经验/index.html","0bd5a0ad10e9a1f0d030c5f3154ce145"],["/categories/hexo/index.html","57292a3105d173e48930a7009163d58d"],["/categories/index.html","ba0e269a6b2f32ed178d41bfd83aeec3"],["/categories/关于本站/index.html","6074890082c58569f2c3841b9a2dbae3"],["/categories/学习/index.html","0e1f6979065c62c9152c269012440b15"],["/categories/日志/index.html","afadaef7c2260cc98ea327b8ad5c6589"],["/css/Lete.css","d9f27c8b54d37326258d2b23b269d28d"],["/css/index.css","cbe5bab386a518fb518838405a54bd82"],["/css/var.css","797c3ab6f6d177b0aa6f015d10e3073f"],["/images/ADC触发事件.png","f8fe4c693d52ccce6d2207ab7aed9f53"],["/images/Blog首页.jpg","3d0a0923165757cb2787e5b2f2a93f02"],["/images/DAC控制电路.jpg","95d510551be54d31c455c44cc49ce7cd"],["/images/DMA1请求表.png","2ce58d9ab14e2bcc29d211b8537c25db"],["/images/DMA2请求表.png","57d735cd1e4159d0320bb071295f648c"],["/images/DMA结构体.png","29bd928f250eee5a24339087250bfc50"],["/images/EXTI.png","d477690d3fdb84538d322701bdab8768"],["/images/EXTI工作原理.png","8d43cd1e85e48f1ed3c05d8c19fec451"],["/images/FSMC.jpg","3eaec516cbfe40fdb11d2ef0d1508326"],["/images/FSMC_NOR_FLASH结构体.png","15e4a6b0cc3bb0ca26753f155e42b8cc"],["/images/FSMC写时序.png","c5405895c3e904e3f5fa0ac576fa3318"],["/images/FSMC引脚.jpg","50c2a9924d8093143bf8399e329f9390"],["/images/FSMC控制LCD引脚.png","90497c24e6497eac3e087e3685fcb063"],["/images/FSMC模拟8080时序.jpg","131d1876b39f5b545c5b00321971d1e4"],["/images/FSMC模拟8080时序.png","f5958848061c257fb6f94404457ba1bb"],["/images/FSMC结构体.png","5e6424d725ace19729ffa576aa63f78e"],["/images/FSMC读时序.png","f1b068ccd32e76874cdf93dee338517e"],["/images/Flash存储规划.png","5de162a66f189c4d8a940a4f19b89604"],["/images/GreatEra.jpg","e0a886621fba2a1488a32c521d6eac71"],["/images/IO端口.png","0ca561517190c2a9f7023a0705e0af91"],["/images/LCD显示屏时序引脚.png","f1930bc9d68334abaceba6a39199ed77"],["/images/RCC时钟树.png","a564497d47723588a215200e28c408ef"],["/images/SRAM写时序.png","fc8e1617f7dd7a1bc23033c7530bbe72"],["/images/SRAM时序.png","45363a498b39fe2aefd23bd7557d1ebf"],["/images/SysTick.png","9736b6050aa793bada1661767ad2fe9a"],["/images/ZJU轻首页.png","ca636d033cb593ed6670f7c6eb4e0240"],["/images/dotm.png","bcd54500e8451715aea4018ea7e676c7"],["/images/douban.png","a9137845a9496ce48864285e77a01dbc"],["/images/word修改.png","880ac4ed34a71aa327420da026815dba"],["/images/word复制.png","190a17f8881650913fffddb4c6bb7284"],["/images/word效果.png","d9dd516397e48aa2160816186d5d4fff"],["/images/word样式修改.png","a1409c583c5dbcf07b1956cade52b7fb"],["/images/word选项.png","078b1fa746fbd4b3df73e06ff84a5cc9"],["/images/中西文.png","9dc1fb976353638e41fb7b7e305e4909"],["/images/分类.png","7d1765e275d5df8f65f2f24500c87e19"],["/images/占空比.png","56993c8886d21ff6aa79c7c7cd0fc6c8"],["/images/各文件解释.png","9da9c78622cec13f21b13ecca60a7794"],["/images/外设用处.png","40101f6046a6a5963419c5ddf3513bdd"],["/images/官方导航.png","f8c601708b4922bbfeaf8442c8278b8d"],["/images/官方示例.png","a29a8c7c7a4cc67a18f37729500a1c95"],["/images/寄存器说明.png","76e9a4b56e248686e4fc0c0ada5ce776"],["/images/总外设框架.png","e279a9bfd8b1e5d752567f5385df03da"],["/images/我的示例.png","36a31dbae8310f9c1aa061ea07c85359"],["/images/时基初始化结构体.png","288af9e2cd17b69d6ae899ac78f4f369"],["/images/样式文件效果PDF.png","672ab49c6bd0703c6e84010843ae0744"],["/images/样式文件效果markdown.png","9b33a39776b6a29721d6ab23cfd77dd4"],["/images/管理样式.png","8c6169cca5649fa82a7c5ed1a3c03eb0"],["/images/网易云.png","f09ece54491abc85cd78041c845e3220"],["/images/追番.png","566213b2b9c888ae5b1cb4aa39bac07e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Arthur.jpg","b0eef2ad30c6a164dbc9130de00d4f61"],["/img/Blog.jpg","063d52a2c1754610fe104b6ae6dd4009"],["/img/Butterfly.jpg","6ba722d9c47af9f66ff4c17e6333902c"],["/img/GreatEra.jpg","e0a886621fba2a1488a32c521d6eac71"],["/img/MSP432.jpg","758e205bf7b423f934df6c4ba61653e9"],["/img/ZJU.jpg","ca018bb4809b4a2484a705ea88f778ac"],["/img/cxg.jpg","e13f0053063909e64a129a1952dc6ea5"],["/img/cxg2.jpg","90a1b16152e53fbaf335a49faea67c51"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/gmtx.png","3f64f904804ff5d11d4644751297d34e"],["/img/hexo.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["/img/hz.jpg","ea4f09a3d3c09208d158af89d2ad7995"],["/img/loading.gif","69a70c730ced60c33443c5a9bf292e35"],["/img/lxl.jpg","4ad0e59c5792e36adbe608b3d4f71688"],["/img/railgun.jpg","d2883245a2bc2d772073b6a3e113bd3a"],["/img/yln.jpg","aabd73d8327cb115d345271549f2845a"],["/img/习惯.png","328630855a099c6e2a1f16fa3153c247"],["/img/大河.png","e27fe93c6311ef23978dab7400a2ced3"],["/img/大河2.jpg","59c1a1887d357f1ee0bd0f8128aa444d"],["/img/指环王.jpg","6ee455f54c61e5992770974874889424"],["/img/海上钢琴师.jpg","48810d5fa810fdfdc0d0da56085e63b3"],["/img/艾伦.jpg","0a1c432c8e2badf13b19c49917e7871c"],["/index.html","67715d34d8550db78a334cfce6927953"],["/js/Lete.js","126e2acd9518277c0c293f84a266336c"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","379b0a0ccf778ab25700280dfe3778e0"],["/link/index.html","0dbd97d772fd2a1338cf1bb9d7261fad"],["/movies/index.html","6defc3e39b99e4c737dd88f9db7b022b"],["/music/index.html","ebadff3c92158b507dfcb7168786d7f7"],["/page/2/index.html","964ec1db4e2386fb69aaee505d8c19be"],["/sw-register.js","d3f5a5517f3a6d3afd254cbf33487375"],["/tags/Matlab/index.html","4990e84ac92b4b549a4babafe362e4fa"],["/tags/STM32/index.html","78f8dab8546b9c21ca2ead03ced1c624"],["/tags/ZJU/index.html","469eb9a2cadb1fdc4856d2680af025d5"],["/tags/hexo/index.html","aebb1a77cb348d0fd482c59003322489"],["/tags/index.html","9feef8b1cdcb964e63fa477e2dc2d498"],["/tags/经验/index.html","87231df3477bf87bac766ce897f8773b"]];
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
