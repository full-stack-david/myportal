"use strict";var precacheConfig=[["/myportal/index.html","e1e9cc3c323c9d75b34b5cfc97a49442"],["/myportal/static/css/main.804c967e.css","c79dc55af14be870c39356d4fa6deb1d"],["/myportal/static/js/main.ae87c29c.js","557df84db9c762a980518a8f95bf6e1e"],["/myportal/static/media/Roboto-Black.59eb3601.woff2","59eb3601394dd87f30f82433fb39dd94"],["/myportal/static/media/Roboto-Black.8f766bb9.woff","8f766bb9720fe9b3fe48362d3dc31acf"],["/myportal/static/media/Roboto-BlackItalic.83b2c7d0.woff","83b2c7d031cda66aadb97cd0fd29c1f4"],["/myportal/static/media/Roboto-BlackItalic.f75569f8.woff2","f75569f8a5fab0893fa712d8c0d9c3fe"],["/myportal/static/media/Roboto-Bold.b52fac2b.woff2","b52fac2bb93c5858f3f2675e4b52e1de"],["/myportal/static/media/Roboto-Bold.eb43b4c3.woff","eb43b4c3b3b6cac224f76c0a524946a1"],["/myportal/static/media/Roboto-BoldItalic.563c4bd6.woff","563c4bd6da24f5ce46e7aee2aace04f9"],["/myportal/static/media/Roboto-BoldItalic.94008e69.woff2","94008e69aaf05da75c0bbf8f8bb0db41"],["/myportal/static/media/Roboto-Italic.4357beb8.woff2","4357beb823a5f8d65c260f045d9e019a"],["/myportal/static/media/Roboto-Italic.6521f388.woff","6521f388081e84791dba294c9e7cfb4e"],["/myportal/static/media/Roboto-Light.c8405cfa.woff","c8405cfa0df9fb2e47ef1c516cef59a8"],["/myportal/static/media/Roboto-Light.d26871e8.woff2","d26871e8149b5759f814fd3c7a4f784b"],["/myportal/static/media/Roboto-LightItalic.e8eaae90.woff2","e8eaae902c3a4dacb9a5062667e10576"],["/myportal/static/media/Roboto-LightItalic.f6dd13d5.woff","f6dd13d54d88ff5668074e3ea6d7932a"],["/myportal/static/media/Roboto-Medium.7b225d4d.woff","7b225d4d9324ee54ce6d9ec50e339668"],["/myportal/static/media/Roboto-Medium.90d16760.woff2","90d1676003d9c28c04994c18bfd8b558"],["/myportal/static/media/Roboto-MediumItalic.13ec0eb5.woff2","13ec0eb5bdb821ff4930237d7c9f943f"],["/myportal/static/media/Roboto-MediumItalic.5df7f053.woff","5df7f0532c1c39e04011b2ab0be1fe3c"],["/myportal/static/media/Roboto-Regular.73f0a88b.woff2","73f0a88bbca1bec19fb1303c689d04c6"],["/myportal/static/media/Roboto-Regular.878ad715.woff","878ad7158f6fa9136d796d4bad613bc2"],["/myportal/static/media/Roboto-Thin.03fb3a93.woff","03fb3a93c4a33abb815862cd83b3940a"],["/myportal/static/media/Roboto-Thin.ad538a69.woff2","ad538a69b0e8615ed0419c4529344ffc"],["/myportal/static/media/Roboto-ThinItalic.4ced2a97.woff","4ced2a97efbc5f12663c750fbc318e83"],["/myportal/static/media/Roboto-ThinItalic.5b4a33e1.woff2","5b4a33e176ff736a74f0ca2dd9e6b396"],["/myportal/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/myportal/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/myportal/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/myportal/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/myportal/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/myportal/static/media/raleway-bold-webfont.1ad917ee.woff2","1ad917eea8b4c921992d925cac64490f"],["/myportal/static/media/raleway-bold-webfont.474c1ebf.woff","474c1ebf2a0a463d9a03a29a065ae8f2"],["/myportal/static/media/raleway-regular-webfont.50a248dc.woff2","50a248dc33ced2bbd235a7a9a473825b"],["/myportal/static/media/raleway-regular-webfont.dda65b55.woff","dda65b551e6241174edd384d2a44085b"],["/myportal/static/media/raleway-semibold-webfont.1d574968.woff2","1d574968db21bd1eb692175bbe77dd32"],["/myportal/static/media/raleway-semibold-webfont.34173a45.woff","34173a45af2c9b30a252fbe77c5364c8"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,o){var c=new URL(e);return o&&c.pathname.match(o)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],o=new URL(a,self.location),c=createCacheKey(o,hashParamName,t,/\.\w{8}\./);return[o.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(o){return setOfCachedUrls(o).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return o.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),o="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,o),e=urlsToCacheKeys.has(t));var c="/myportal/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});