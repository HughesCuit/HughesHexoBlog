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

var precacheConfig = [["2015/10/13/ios-e5-ad-a6-e4-b9-a0-e6-8f-90-e7-ba-b2-for-ld/index.html","c661340dc2b2a97d099ad2ec2b5b7faa"],["2015/11/06/Git的使用/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2015/11/09/RAC-Reactive-Cocoa/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2016/04/06/ReactiveCocoa4基本操作/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2016/04/07/日本语课堂第一日/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2016/05/30/日本语课堂第二日/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2016/07/07/日本语课堂-时间-日期/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2016/08/01/函数式Swift——Map、Filter、Reduce/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2016/08/18/函数式Swift——枚举/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2016/12/05/UIAccessibility初见/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2016/12/06/UIAccessibility初见/index.html","fe61e3e426b9d4b3f497a81c14c3aa24"],["2017/01/19/Swift进阶-结构体与类/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2017/06/03/Custom-Keyboard-Extension-的屁事博-在Container-App-中植入键盘（一）/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2017/07/05/Custom-Keyboard-Extension-的屁事博-在Container-App-中植入键盘-二/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2017/09/18/iOS-3D-Touch-Shortcut-开发/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2018/02/11/使用Laravel-Infyom-Laravel-Generator-MySQL开发RESTful规范的移动应用API/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2018/07/30/在ESXi6.5上安装macOS 10.13.6虚拟系统/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/07/03/译-Docker化你的React应用/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/07/04/浅尝Koa-——-基于Node-JS的下一代Web框架/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2015/10/index.html","5a743d7227888ad256a17f55504bf5cf"],["archives/2015/11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2015/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2016/04/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2016/05/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2016/07/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2016/08/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2016/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2016/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2017/01/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2017/06/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2017/07/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2017/09/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2017/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2018/02/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2018/07/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2018/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/07/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["baidu_verify_YKzj5L3FIq.html","d851b0fb340dd3b6d061378831df6f6e"],["categories/iOS学习笔记/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/东搞西搞/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/学习笔记/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/开发日常/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/技术文档/index.html","d41d8cd98f00b204e9800998ecf8427e"],["css/main.css","b4e72b4fa4664de0e291e17c4e6d8add"],["google755f461905c6d137.html","7652c4f8203371326ded9e0bf1bcfcd7"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","d41d8cd98f00b204e9800998ecf8427e"],["js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["js/src/bootstrap.js","73c38465c33a6b7d49820f12d4b6cd09"],["js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["js/src/motion.js","5e50cb0717c2be4c43ecd948b3abca59"],["js/src/post-details.js","a64526b288db34b054ebd5f22c061754"],["js/src/schemes/pisces.js","95b6f118d6fdf262f540d3a9144fd79a"],["js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["js/src/utils.js","c9dbca6eabd5a792c0fbac43c7ef96a2"],["page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/3D-Touch/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/APFS/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Docker/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/ESXi/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/FRP/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Keyboard/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Koa/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Node-JS/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/RAC/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/React/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Swift/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Voice-Over/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Web/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/iOS项目-钱花哪了/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/laravel/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/macOS/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/php/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/函数式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/奇葩需求/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/技术学习/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/日本语学习/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/服务器/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/朝花夕拾/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/辅助功能/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/键盘/index.html","d41d8cd98f00b204e9800998ecf8427e"],["uploads/newHead.jpg","0486d3ac1a1f6fbcec72285db2de0192"],["vendors/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["vendors/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["vendors/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["vendors/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["vendors/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["vendors/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["vendors/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["vendors/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["vendors/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["vendors/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["vendors/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["vendors/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["vendors/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["vendors/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["vendors/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["vendors/fastclick/README.html","03b486545119bfedc7086ac8d39a1f1c"],["vendors/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["vendors/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["vendors/font-awesome/css/font-awesome.css","8e12157da5fc90094ae4113ba110456b"],["vendors/font-awesome/css/font-awesome.min.css","0831cba6a670e405168b84aa20798347"],["vendors/font-awesome/fonts/fontawesome-webfont.eot","45c73723862c6fc5eb3d6961db2d71fb"],["vendors/font-awesome/fonts/fontawesome-webfont.svg","76a4f23c6be74fd309e0d0fd2c27a5de"],["vendors/font-awesome/fonts/fontawesome-webfont.ttf","7c87870ab40d63cfb8870c1f183f9939"],["vendors/font-awesome/fonts/fontawesome-webfont.woff","dfb02f8f6d0cedc009ee5887cc68f1f3"],["vendors/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["vendors/jquery_lazyload/CONTRIBUTING.html","f7d7e0176374a35dec6a09d1860cfbc3"],["vendors/jquery_lazyload/README.html","172fd4237e191180ca1c86a950a2a614"],["vendors/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["vendors/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["vendors/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["vendors/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["vendors/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["vendors/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["vendors/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["vendors/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"]];
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







