/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2015/10/13/ios-e5-ad-a6-e4-b9-a0-e6-8f-90-e7-ba-b2-for-ld/index.html","c661340dc2b2a97d099ad2ec2b5b7faa"],["2015/11/06/Git的使用/index.html","83edbc5fb0e709930e2714501e89d942"],["2015/11/09/RAC-Reactive-Cocoa/index.html","83594b96180961179461a8c250a56f7c"],["2016/04/06/ReactiveCocoa4基本操作/index.html","097e3d55235bd44afaca981f77d16536"],["2016/04/07/日本语课堂第一日/index.html","98fe0630954a6636e67c77c7fc575738"],["2016/05/30/日本语课堂第二日/index.html","3c98345f95bea1742d9f1999df9d6c6a"],["2016/07/07/日本语课堂-时间-日期/index.html","c64edaebddf8649048bb306e838d8bf4"],["2016/08/01/函数式Swift——Map、Filter、Reduce/index.html","bd30ae692934874b8c0cc380c7770eb9"],["2016/08/18/函数式Swift——枚举/index.html","3716a4ffe01af3341cd965b0916c865b"],["2016/12/05/UIAccessibility初见/index.html","76e03bd7937a531d02f40ef3583de5e9"],["2016/12/06/UIAccessibility初见/index.html","fe61e3e426b9d4b3f497a81c14c3aa24"],["2017/01/19/Swift进阶-结构体与类/index.html","45559b2f2cdd06231a82858ca1e445e8"],["2017/06/03/Custom-Keyboard-Extension-的屁事博-在Container-App-中植入键盘（一）/index.html","47ca0dd2f6a86caab941cc814d273cbc"],["2017/07/05/Custom-Keyboard-Extension-的屁事博-在Container-App-中植入键盘-二/index.html","bb4917f83ed1190ecc1daa3d2b8e6364"],["2017/09/18/iOS-3D-Touch-Shortcut-开发/index.html","d314162c9b8c4f12c67645af700bfa23"],["2018/02/11/使用Laravel-Infyom-Laravel-Generator-MySQL开发RESTful规范的移动应用API/index.html","8f47709b9f29827da77b52cab1b487e4"],["2018/07/30/在ESXi6.5上安装macOS 10.13.6虚拟系统/index.html","00c9a26a39536d1611e728251c3a810b"],["2019/07/03/译-Docker化你的React应用/index.html","e4efa1296fe644ed238a436fc84aefe2"],["2019/07/04/浅尝Koa-——-基于Node-JS的下一代Web框架/index.html","3a8ea23b421045cef64a3c0bd71791ef"],["archives/2015/10/index.html","5a743d7227888ad256a17f55504bf5cf"],["archives/2015/11/index.html","08f08e14e891a45e58c3485007df401b"],["archives/2015/index.html","ff6bbc9aac877b67edf86da6a6868b59"],["archives/2016/04/index.html","083bdcad9c3d2c4458c2251e3d2c313e"],["archives/2016/05/index.html","f4aeb5667c237654936fd6b9f27a29aa"],["archives/2016/07/index.html","dcf360a62bb1bd43e625a6c08f3c0495"],["archives/2016/08/index.html","71b134ce360fd686d9b038cddc131024"],["archives/2016/12/index.html","52ff73fbc2fe0eab602b5d1f9d571226"],["archives/2016/index.html","86001a06425dbdd663d6f2d820638b9b"],["archives/2017/01/index.html","4311018d4b99451bba93151eddce37ab"],["archives/2017/06/index.html","f0808793c9d14534b553756f8cb4898e"],["archives/2017/07/index.html","ff87e0567be28fc132f55c7341149d16"],["archives/2017/09/index.html","84ad0293919fb9d9711376b2b40a0021"],["archives/2017/index.html","cf7598c770d9e9bc7ed46d204942e3c2"],["archives/2018/02/index.html","12d06d6a8b2d1c7997cdf684c8f32027"],["archives/2018/07/index.html","5ee3da9c1885d4b6bb61a9e0480c3b03"],["archives/2018/index.html","f9ad0c4c051bd6ff669e439e500cbea1"],["archives/2019/07/index.html","2fa6d50de5fff42972bf54e1731d9c7f"],["archives/2019/index.html","9644d1b41779977b80c4e09af1742033"],["archives/index.html","0745ac72af5cbe90975944d1c535dfad"],["archives/page/2/index.html","55ab70fd3e60bc37512e0117eb900823"],["baidu_verify_YKzj5L3FIq.html","d851b0fb340dd3b6d061378831df6f6e"],["categories/iOS学习笔记/index.html","85dbcd9c9b4b4a6acf37a52813621dd1"],["categories/index.html","9bd69c4497b67f4010f60479f2507b42"],["categories/东搞西搞/index.html","6e32377e328407a576b6ad92772678f1"],["categories/学习笔记/index.html","66de1a5cefc36a321500664fbc14a35d"],["categories/开发日常/index.html","ae9ecd0176c0bf231d341df3543650ae"],["categories/技术文档/index.html","e0e95f5a78520b5f60e4f279dea42815"],["css/main.css","cb3577f75f6dc0d51226f8fbb2eeeb11"],["google755f461905c6d137.html","7652c4f8203371326ded9e0bf1bcfcd7"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","4c117f14a9c9fc39a1de6376b425b3f6"],["js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["js/src/bootstrap.js","73c38465c33a6b7d49820f12d4b6cd09"],["js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["js/src/motion.js","5e50cb0717c2be4c43ecd948b3abca59"],["js/src/post-details.js","a64526b288db34b054ebd5f22c061754"],["js/src/schemes/pisces.js","95b6f118d6fdf262f540d3a9144fd79a"],["js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["js/src/utils.js","c9dbca6eabd5a792c0fbac43c7ef96a2"],["page/2/index.html","8d87d57f733b075201fb4e0f38434cf0"],["tags/3D-Touch/index.html","388f93a743eb205b8da600a3c8be8c5d"],["tags/APFS/index.html","3bed842ab3a837359dabab8c14df6718"],["tags/Docker/index.html","5afc09ef7a378b6b5ba2e3fe31a30e45"],["tags/ESXi/index.html","cf9911d96089a7c0d1c6c520816e6e59"],["tags/FRP/index.html","5e57276cdfc11e43469c46bc99f7e5ed"],["tags/Keyboard/index.html","386b332033fd6b1cec36209d1c096fee"],["tags/Koa/index.html","2760ec280a20c00c7e21d53302e83699"],["tags/Node-JS/index.html","8b704b676a6f6295e7df49a021513249"],["tags/RAC/index.html","e1ea34cdc35d4209afa060c6be2dd6a5"],["tags/React/index.html","77469acb9875cc3dcacf2db85de3a5b5"],["tags/Swift/index.html","cdc98a818cd8a63ca9dfa781dcb67112"],["tags/Voice-Over/index.html","2f52b0018ceef3abdabb8c3ff91dcbb3"],["tags/Web/index.html","447b1be6fcf11fc64eea7eabf5fdf5b0"],["tags/iOS项目-钱花哪了/index.html","bb1def623187f10dc36ecdb5cb493925"],["tags/laravel/index.html","9259fed3ae8f2e5566feb8bbcb849fa0"],["tags/macOS/index.html","99bf4b9e3c79cd235b84aa95b451b7f3"],["tags/php/index.html","62e21363f8171151a8f83a0462821358"],["tags/函数式/index.html","ab43fdc9127ef94a256f00c9d29c0d15"],["tags/奇葩需求/index.html","aea0bd3c77b07527b745b231933ccc5e"],["tags/技术学习/index.html","1a4a31db4902094bc08b19e2fc7222d0"],["tags/日本语学习/index.html","b50826deda672e0f24c4bc7f0a33d2f8"],["tags/服务器/index.html","7bdf4b93b3e4b7b491723ddfb73f9b0e"],["tags/朝花夕拾/index.html","4d595d4a1e0338a3f37b10a105496280"],["tags/辅助功能/index.html","345d5ff6918cda05a674c7fb69ab785a"],["tags/键盘/index.html","d3b2e81a0e94d2bb4cc0f5b97b324fb6"],["uploads/newHead.jpg","0486d3ac1a1f6fbcec72285db2de0192"],["vendors/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["vendors/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["vendors/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["vendors/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["vendors/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["vendors/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["vendors/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["vendors/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["vendors/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["vendors/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["vendors/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["vendors/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["vendors/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["vendors/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["vendors/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["vendors/fastclick/README.html","7e33723f6b8a9f55a1ce3979e3d505ed"],["vendors/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["vendors/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["vendors/font-awesome/css/font-awesome.css","8e12157da5fc90094ae4113ba110456b"],["vendors/font-awesome/css/font-awesome.min.css","0831cba6a670e405168b84aa20798347"],["vendors/font-awesome/fonts/fontawesome-webfont.eot","45c73723862c6fc5eb3d6961db2d71fb"],["vendors/font-awesome/fonts/fontawesome-webfont.svg","76a4f23c6be74fd309e0d0fd2c27a5de"],["vendors/font-awesome/fonts/fontawesome-webfont.ttf","7c87870ab40d63cfb8870c1f183f9939"],["vendors/font-awesome/fonts/fontawesome-webfont.woff","dfb02f8f6d0cedc009ee5887cc68f1f3"],["vendors/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["vendors/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["vendors/jquery_lazyload/README.html","cffa5707f0d54c9f561715e0809487bd"],["vendors/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["vendors/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["vendors/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["vendors/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["vendors/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["vendors/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["vendors/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["vendors/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







