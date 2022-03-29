/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "39dae20306457070c5eb41da1568dfcb"
  },
  {
    "url": "assets/css/0.styles.b00e95d5.css",
    "revision": "4e10c81a07192524a60ac94d78c7702f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6309cb6b.js",
    "revision": "8f6e05bbaa4399439af2aacbf81b85ad"
  },
  {
    "url": "assets/js/11.5915d0ab.js",
    "revision": "42932ff0ec94d939ea1e7bcada3ebd35"
  },
  {
    "url": "assets/js/12.fceb965a.js",
    "revision": "7a2d85396e34226ee3aba9ca46eca364"
  },
  {
    "url": "assets/js/13.8b52201a.js",
    "revision": "1e2934d6bf6f07b4e2555ec2cfb98aeb"
  },
  {
    "url": "assets/js/14.846d5e35.js",
    "revision": "63d6ffd5e0dac8c8890ec27e8da2fa8d"
  },
  {
    "url": "assets/js/15.ac4cf0a4.js",
    "revision": "b919135916284a273b0b38862b725b10"
  },
  {
    "url": "assets/js/16.7cbe8001.js",
    "revision": "a71b511e41f181b33f009fa227b8b02a"
  },
  {
    "url": "assets/js/17.2a234cee.js",
    "revision": "9920534e6d5a0c529292020bea1ad963"
  },
  {
    "url": "assets/js/18.ae9de322.js",
    "revision": "bcd9afad560c65a1e06bc2a20e4488f4"
  },
  {
    "url": "assets/js/2.4a947834.js",
    "revision": "eebbddc42c5217bd3dbd7bb52a575f20"
  },
  {
    "url": "assets/js/3.4a56f623.js",
    "revision": "203b010b2786284ef0dc5b91ca728ccf"
  },
  {
    "url": "assets/js/4.f47c04d3.js",
    "revision": "94b68f0d720b997237c2eabf93ff995d"
  },
  {
    "url": "assets/js/5.38ad60d4.js",
    "revision": "9658e28bc7966405a2b748a3b8e434ea"
  },
  {
    "url": "assets/js/6.7872b8df.js",
    "revision": "3401ab5189bb6eab1cfa240254a6dfea"
  },
  {
    "url": "assets/js/7.8f186fdf.js",
    "revision": "438dd9ed4e3594e2238b1f81d932ddb0"
  },
  {
    "url": "assets/js/8.b788a75b.js",
    "revision": "8b66cd4f4513eaddb9868842a6747b4d"
  },
  {
    "url": "assets/js/9.0497973d.js",
    "revision": "f2a96273351d29339dc2008ba3d3cf79"
  },
  {
    "url": "assets/js/app.e1862e68.js",
    "revision": "f606124b723473bc35919c922572d1ed"
  },
  {
    "url": "config/index.html",
    "revision": "896d14da55237d2480a2990d0a4639b7"
  },
  {
    "url": "django/django-start.html",
    "revision": "1635cd3a7aab028cdd6498b974d0fd24"
  },
  {
    "url": "git/git-start.html",
    "revision": "5abcd0c5ddc2cd9a937862c778e99039"
  },
  {
    "url": "guide/index.html",
    "revision": "4ffe92eac25e5e7fe690fba8eb9350dc"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "6bb3015f4417ebe862c913a368a7fc4b"
  },
  {
    "url": "images/maskable_icon_x128.png",
    "revision": "3efb27691294b081f6b5e3de552cb181"
  },
  {
    "url": "images/maskable_icon_x192.png",
    "revision": "ef8082f2f2b13ed00faeccb9e290cf0c"
  },
  {
    "url": "images/maskable_icon_x384.png",
    "revision": "6cb38020d6542cea43ecf44a3b6a3dd2"
  },
  {
    "url": "images/maskable_icon_x48.png",
    "revision": "d305a1b17751d6d8001aec0382660b4b"
  },
  {
    "url": "images/maskable_icon_x512.png",
    "revision": "21cf4c794e0e46c4ae7ac7426c29174f"
  },
  {
    "url": "images/maskable_icon_x72.png",
    "revision": "660309aed4d8fdad541c46e28fd779f1"
  },
  {
    "url": "images/maskable_icon_x96.png",
    "revision": "1cc1731bb5da7da8631f4f59359677ad"
  },
  {
    "url": "images/maskable_icon.png",
    "revision": "21cf4c794e0e46c4ae7ac7426c29174f"
  },
  {
    "url": "index.html",
    "revision": "3bf4804635c71a1ce3548796504f7888"
  },
  {
    "url": "intro.html",
    "revision": "6b7b64336273ed427be148cc5b667802"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
