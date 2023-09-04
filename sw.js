/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/01/hexo-hello-world/index.html","6fca8e721aee2a96f169f83d62bddf96"],["/2023/02/15/My-Heart/index.html","7d5c966368053959bc541508c733b464"],["/2023/04/05/Beginning/index.html","ab28dfbca11ff6e0949857526cd3fe2c"],["/2023/04/06/README/index.html","30c5ce1376231a2aec01bb876bc65b5c"],["/2023/04/07/ZJU经验-zjg经验/index.html","d613251820802e7daf8d02b5c93bec16"],["/2023/04/08/日志-习惯/index.html","ddb55147f9f91c1bd2cd6288dff0945d"],["/2023/04/10/hexo-Blog搭建/index.html","586a5b187e1046dc15c4802ac404700c"],["/2023/04/15/ZJU经验-论文排版/index.html","8329efdf8870cfdbe591c9c778a76b89"],["/2023/05/01/日志-通宵/index.html","cdf606fc76134e31fdd25ce4b2a7fad7"],["/2023/05/22/学习-Matlab/index.html","8191b8383b98f03fd7a0eface69aca85"],["/2023/05/24/hexo-博客命令/index.html","0c89a064f25e6c14fd6b67d2e848596e"],["/2023/05/24/学习-词根/index.html","60ddfbaec8e35748278eb37d1d0ef180"],["/2023/05/25/ZJU经验-关于吃饭/index.html","07e9805ac94afd1bd80b5389fed7744b"],["/2023/05/25/hexo-部署错误解决方案/index.html","81a4a703a6b78cce3db55770f7b3f151"],["/2023/05/26/学习-STM32/index.html","45c378d861b0c3cd9d25283121888b2e"],["/2023/06/08/日志-Arthur/index.html","bd7e5af89d2963e41f8fcf5f60cf4598"],["/2023/06/14/学习-Laplace极点理解/index.html","fbe8238a87dc2cd0d681cf0b6dc34481"],["/2023/06/26/日志-Claim/index.html","3c77fe4894885c4913ccc0d654021a58"],["/2023/07/18/日志-强风吹拂/index.html","0b34dab8bf9871594bd1503ebecbdc94"],["/2023/07/31/学习-MSP432/index.html","b1133799a320762f24a28c9486c5557f"],["/404.html","b03ae97878dec1472a1c2f8b4840c2b2"],["/about/index.html","b2aad0602ba9f416a179a0345ce3c4cc"],["/archives/2023/01/index.html","87f4ebd059c24254843a13dcb1a0e5ba"],["/archives/2023/04/index.html","6fcc8816e993e73d066184fe180ee791"],["/archives/2023/05/index.html","ae5c5170a57d1157fc3383fe735bdc47"],["/archives/2023/06/index.html","2479f495e5b3716f0f5573a93020ad29"],["/archives/2023/07/index.html","15ad9619258ccf84dadb68d25e981fde"],["/archives/2023/index.html","6a8456f2a47b2effa4c016a89bbacb13"],["/archives/2023/page/2/index.html","003a1e0dd404ed9a61d3157e7df8a073"],["/archives/index.html","2c2bad2fb94d5f5f9b7f327d807717a1"],["/archives/page/2/index.html","41eed345e42d7679d7af03ba59df586c"],["/bangumis/index.html","84126fff0dbe2360f6709537c86dbf54"],["/categories/ZJU经验/index.html","36b0edfb64125781457d086baef2dd94"],["/categories/hexo/index.html","d49a8218b773a0007d0c3dcc25c3de49"],["/categories/index.html","400f2343c06f0dad0af9eb932e65bddf"],["/categories/关于本站/index.html","7532c9ae9f7421ffdc870c7cc468bd02"],["/categories/学习/index.html","2cd616df13b07aaaf6c94792e18590b3"],["/categories/日志/index.html","402da27509653ac38949fcff05152d51"],["/css/Lete.css","6da5aa3dd40414b01503939a5c21c78c"],["/css/index.css","61bfc015ea027ae31c57d6bd6351940a"],["/css/var.css","bcf0433ed406af4a00b89d815e84f952"],["/images/ADC触发事件.png","f8fe4c693d52ccce6d2207ab7aed9f53"],["/images/Blog首页.jpg","3d0a0923165757cb2787e5b2f2a93f02"],["/images/DAC控制电路.jpg","95d510551be54d31c455c44cc49ce7cd"],["/images/DMA1请求表.png","2ce58d9ab14e2bcc29d211b8537c25db"],["/images/DMA2请求表.png","57d735cd1e4159d0320bb071295f648c"],["/images/DMA结构体.png","29bd928f250eee5a24339087250bfc50"],["/images/EXTI.png","d477690d3fdb84538d322701bdab8768"],["/images/EXTI工作原理.png","8d43cd1e85e48f1ed3c05d8c19fec451"],["/images/FSMC.jpg","3eaec516cbfe40fdb11d2ef0d1508326"],["/images/FSMC_NOR_FLASH结构体.png","15e4a6b0cc3bb0ca26753f155e42b8cc"],["/images/FSMC写时序.png","c5405895c3e904e3f5fa0ac576fa3318"],["/images/FSMC引脚.jpg","50c2a9924d8093143bf8399e329f9390"],["/images/FSMC控制LCD引脚.png","90497c24e6497eac3e087e3685fcb063"],["/images/FSMC模拟8080时序.jpg","131d1876b39f5b545c5b00321971d1e4"],["/images/FSMC模拟8080时序.png","f5958848061c257fb6f94404457ba1bb"],["/images/FSMC结构体.png","5e6424d725ace19729ffa576aa63f78e"],["/images/FSMC读时序.png","f1b068ccd32e76874cdf93dee338517e"],["/images/Flash存储规划.png","5de162a66f189c4d8a940a4f19b89604"],["/images/GreatEra.jpg","e0a886621fba2a1488a32c521d6eac71"],["/images/IO端口.png","0ca561517190c2a9f7023a0705e0af91"],["/images/LCD显示屏时序引脚.png","f1930bc9d68334abaceba6a39199ed77"],["/images/RCC时钟树.png","a564497d47723588a215200e28c408ef"],["/images/SRAM写时序.png","fc8e1617f7dd7a1bc23033c7530bbe72"],["/images/SRAM时序.png","45363a498b39fe2aefd23bd7557d1ebf"],["/images/SysTick.png","9736b6050aa793bada1661767ad2fe9a"],["/images/ZJU轻首页.png","ca636d033cb593ed6670f7c6eb4e0240"],["/images/dotm.png","bcd54500e8451715aea4018ea7e676c7"],["/images/douban.png","a9137845a9496ce48864285e77a01dbc"],["/images/word修改.png","880ac4ed34a71aa327420da026815dba"],["/images/word复制.png","190a17f8881650913fffddb4c6bb7284"],["/images/word效果.png","d9dd516397e48aa2160816186d5d4fff"],["/images/word样式修改.png","a1409c583c5dbcf07b1956cade52b7fb"],["/images/word选项.png","078b1fa746fbd4b3df73e06ff84a5cc9"],["/images/中西文.png","9dc1fb976353638e41fb7b7e305e4909"],["/images/分类.png","7d1765e275d5df8f65f2f24500c87e19"],["/images/占空比.png","56993c8886d21ff6aa79c7c7cd0fc6c8"],["/images/各文件解释.png","9da9c78622cec13f21b13ecca60a7794"],["/images/外设用处.png","40101f6046a6a5963419c5ddf3513bdd"],["/images/官方导航.png","f8c601708b4922bbfeaf8442c8278b8d"],["/images/官方示例.png","a29a8c7c7a4cc67a18f37729500a1c95"],["/images/寄存器说明.png","76e9a4b56e248686e4fc0c0ada5ce776"],["/images/总外设框架.png","e279a9bfd8b1e5d752567f5385df03da"],["/images/我的示例.png","36a31dbae8310f9c1aa061ea07c85359"],["/images/时基初始化结构体.png","288af9e2cd17b69d6ae899ac78f4f369"],["/images/样式文件效果PDF.png","672ab49c6bd0703c6e84010843ae0744"],["/images/样式文件效果markdown.png","9b33a39776b6a29721d6ab23cfd77dd4"],["/images/管理样式.png","8c6169cca5649fa82a7c5ed1a3c03eb0"],["/images/网易云.png","f09ece54491abc85cd78041c845e3220"],["/images/追番.png","566213b2b9c888ae5b1cb4aa39bac07e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Arthur.jpg","b0eef2ad30c6a164dbc9130de00d4f61"],["/img/Blog.jpg","063d52a2c1754610fe104b6ae6dd4009"],["/img/Butterfly.jpg","6ba722d9c47af9f66ff4c17e6333902c"],["/img/GreatEra.jpg","e0a886621fba2a1488a32c521d6eac71"],["/img/MSP432.jpg","758e205bf7b423f934df6c4ba61653e9"],["/img/ZJU.jpg","ca018bb4809b4a2484a705ea88f778ac"],["/img/cxg.jpg","e13f0053063909e64a129a1952dc6ea5"],["/img/cxg2.jpg","90a1b16152e53fbaf335a49faea67c51"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/gmtx.png","3f64f904804ff5d11d4644751297d34e"],["/img/hexo.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["/img/hz.jpg","ea4f09a3d3c09208d158af89d2ad7995"],["/img/loading.gif","69a70c730ced60c33443c5a9bf292e35"],["/img/lxl.jpg","4ad0e59c5792e36adbe608b3d4f71688"],["/img/railgun.jpg","d2883245a2bc2d772073b6a3e113bd3a"],["/img/yln.jpg","aabd73d8327cb115d345271549f2845a"],["/img/习惯.png","328630855a099c6e2a1f16fa3153c247"],["/img/大河.png","e27fe93c6311ef23978dab7400a2ced3"],["/img/大河2.jpg","59c1a1887d357f1ee0bd0f8128aa444d"],["/img/指环王.jpg","6ee455f54c61e5992770974874889424"],["/img/海上钢琴师.jpg","48810d5fa810fdfdc0d0da56085e63b3"],["/img/艾伦.jpg","0a1c432c8e2badf13b19c49917e7871c"],["/index.html","92cbe284cdfd7f7b7112266818c20cfe"],["/js/Lete.js","126e2acd9518277c0c293f84a266336c"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","379b0a0ccf778ab25700280dfe3778e0"],["/link/index.html","4e08169b36436416cdcf075376a3cb4e"],["/movies/index.html","52f61946bf7ea0e6e12d37942eee5584"],["/music/index.html","76fe7fd8d1f977947cb0125d3b16ca2e"],["/page/2/index.html","ca7c388a26b09b69a599916cac5465a5"],["/sw-register.js","9b777fcf188719138400b950223546c7"],["/tags/Matlab/index.html","6428c1eebf7bed11f7b6cf488a3d9551"],["/tags/STM32/index.html","bfaf541de727debd793ed9d91d0fcd85"],["/tags/ZJU/index.html","7f20c8c5e922c5327c911fd4d0459893"],["/tags/hexo/index.html","dce9569f457ed5c8f49757e244979ba6"],["/tags/index.html","ee564998f30242108df8e8c56425ae95"],["/tags/经验/index.html","9f56ffa2ad1d14b928ea99cd62039d8b"]];
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
