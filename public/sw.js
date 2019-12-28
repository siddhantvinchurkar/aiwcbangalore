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
    "revision": "b5a06cb355fc746e5697cdfb872c62ad"
  },
  {
    "url": "index.html",
    "revision": "7e261814e41ef132f779b0caf1bfa9b8"
  },
  {
    "url": "lighthouse-cache_assisted_load.html",
    "revision": "f9e892a2459841cccbb5e892b5315efd"
  },
  {
    "url": "lighthouse-first_load.html",
    "revision": "685f7c73f2a151f7233c8df83cdd53e4"
  },
  {
    "url": "manifest.json",
    "revision": "aea5a1a82374edbcbb1622804872789e"
  },
  {
    "url": "resources/images/404.webp",
    "revision": "0d6ca04f8ceb6d96213aaa60d23266be"
  },
  {
    "url": "resources/images/icons/favicon_144.png",
    "revision": "74e39a609f7e278374b2c2a891d48663"
  },
  {
    "url": "resources/images/icons/favicon_192.png",
    "revision": "6a4b087c8df135188838c29773f0415f"
  },
  {
    "url": "resources/images/icons/favicon_192.webp",
    "revision": "9e923eeca7f3b98d90c6c5cd022b15e3"
  },
  {
    "url": "resources/images/icons/favicon_48.png",
    "revision": "82ff99af780d83a89c2541c2cd1a8f0a"
  },
  {
    "url": "resources/images/icons/favicon_512.png",
    "revision": "2af69ac8a0a55eb3100d7ebf0fb3f1ee"
  },
  {
    "url": "resources/images/icons/favicon_512.webp",
    "revision": "e0bf512291c45a7c20d9a6df36bf427e"
  },
  {
    "url": "resources/images/icons/favicon_72.png",
    "revision": "07a138daf329f2e04a59bff7f8ddecb1"
  },
  {
    "url": "resources/images/icons/favicon_96.png",
    "revision": "7a3e39d346f33414058e9a0c915a056f"
  },
  {
    "url": "resources/images/icons/og_512.jpg",
    "revision": "5a9b3b3d582fb22507363da012a77909"
  },
  {
    "url": "resources/images/image_1/1366x768.webp",
    "revision": "d95d5b9eda917fae2a1f9b5a1856b770"
  },
  {
    "url": "resources/images/image_1/1920x1080.webp",
    "revision": "9ea9b0bb8e7792a973ae6a071bbaee80"
  },
  {
    "url": "resources/images/image_1/432x768.webp",
    "revision": "3d80a465b5e53c9f4eaee8cdc1d0782e"
  },
  {
    "url": "resources/images/image_10/1366x768.webp",
    "revision": "ea98702cd16ac427923c2baccb107c3b"
  },
  {
    "url": "resources/images/image_10/1920x1080.webp",
    "revision": "2e8c3a5027e25b7a95b2ab04fb28e6ae"
  },
  {
    "url": "resources/images/image_10/432x768.webp",
    "revision": "53e0a70d4941125b39f7d88af91a2de0"
  },
  {
    "url": "resources/images/image_11/1366x768.webp",
    "revision": "757cb840c3353567fbff45812f1d0e13"
  },
  {
    "url": "resources/images/image_11/1920x1080.webp",
    "revision": "e990baf1028b0fddf75d8409a4482749"
  },
  {
    "url": "resources/images/image_11/432x768.webp",
    "revision": "d76c4861b3226beb9a81e8e9eaa84560"
  },
  {
    "url": "resources/images/image_2/1366x768.webp",
    "revision": "a3989edab2a4771d8c627e3a7ffc9034"
  },
  {
    "url": "resources/images/image_2/1920x1080.webp",
    "revision": "59ce2d0da54537058bc59cf0d5aec66e"
  },
  {
    "url": "resources/images/image_2/432x768.webp",
    "revision": "67ebcdde44ba2d583d041d16f60702d5"
  },
  {
    "url": "resources/images/image_3/1366x768.webp",
    "revision": "d919d0a423501219e682fd6b7ca8fd54"
  },
  {
    "url": "resources/images/image_3/1920x1080.webp",
    "revision": "6b3dd5753217a1c5ff50ff3c1d091b68"
  },
  {
    "url": "resources/images/image_3/432x768.webp",
    "revision": "bb2cd04a9bd0616213a4fe22773c22d2"
  },
  {
    "url": "resources/images/image_4/1366x768.webp",
    "revision": "770ab21b1151a983c59c5117ae5d42c7"
  },
  {
    "url": "resources/images/image_4/1920x1080.webp",
    "revision": "78ab31a4a959e29f43da5acc15f105d7"
  },
  {
    "url": "resources/images/image_4/432x768.webp",
    "revision": "e69a25176fe874c627c7ba4313514ec3"
  },
  {
    "url": "resources/images/image_5/1366x768.webp",
    "revision": "e4e8df90d3edeb0079b84b20693129a2"
  },
  {
    "url": "resources/images/image_5/1920x1080.webp",
    "revision": "c3093a28eee7e0275091517944b37baf"
  },
  {
    "url": "resources/images/image_5/432x768.webp",
    "revision": "6428c0aedf6b637e169a633305f9f511"
  },
  {
    "url": "resources/images/image_6/1366x768.webp",
    "revision": "cad6d0aba87395d6a9186a20a839b045"
  },
  {
    "url": "resources/images/image_6/1920x1080.webp",
    "revision": "13f6c12ecfaf1abe96f612f5f6271015"
  },
  {
    "url": "resources/images/image_6/432x768.webp",
    "revision": "1fdcf67be52eb9a796c9678da96c8232"
  },
  {
    "url": "resources/images/image_7/1366x768.webp",
    "revision": "ab7873b1773a0b742e50bccfc6acb70c"
  },
  {
    "url": "resources/images/image_7/1920x1080.webp",
    "revision": "a35e0c80e783d6afe7af8edbae10df19"
  },
  {
    "url": "resources/images/image_7/432x768.webp",
    "revision": "9450c950d39db0e043940da8f51d5c40"
  },
  {
    "url": "resources/images/image_8/1366x768.webp",
    "revision": "7acbdb3b10cfade020b1aeacd639c83f"
  },
  {
    "url": "resources/images/image_8/1920x1080.webp",
    "revision": "048d585592a213575abe6db3760f6e9b"
  },
  {
    "url": "resources/images/image_8/432x768.webp",
    "revision": "c253a613233d9d40c54998068e1f326b"
  },
  {
    "url": "resources/images/image_9/1366x768.webp",
    "revision": "f5569684c3888de09f2e59c1a1af86e8"
  },
  {
    "url": "resources/images/image_9/1920x1080.webp",
    "revision": "59a80d17deda3ddf32ae082f79701da7"
  },
  {
    "url": "resources/images/image_9/432x768.webp",
    "revision": "70e817f09cb19d336d5352d9ca6620e5"
  },
  {
    "url": "resources/images/mrs_margaret_cousins.webp",
    "revision": "573bbb1b32b1484de9e109fbee17cfea"
  },
  {
    "url": "resources/scripts/firebase-analytics.js",
    "revision": "326350755aa2a2bf3c73ae9e75886d34"
  },
  {
    "url": "resources/scripts/firebase-app.js",
    "revision": "308a195c508c4d00cf441236020a6292"
  },
  {
    "url": "resources/scripts/firebase-auth.js",
    "revision": "242f28298727c31074470f04c1f811b5"
  },
  {
    "url": "resources/scripts/firebase-firestore.js",
    "revision": "a25058afba66062f3f811083ee5e4539"
  },
  {
    "url": "resources/scripts/firebase-performance.js",
    "revision": "e554b7647439d7d3ae2d267c5bf75b35"
  },
  {
    "url": "resources/scripts/jquery.min.js",
    "revision": "220afd743d9e9643852e31a135a9f3ae"
  },
  {
    "url": "resources/scripts/lazysizes.min.js",
    "revision": "d8513e7860f747ccf55c52308943beab"
  },
  {
    "url": "resources/scripts/main.js",
    "revision": "85da9b813ea4ea662492047dac46bf2c"
  },
  {
    "url": "resources/scripts/materialize.min.js",
    "revision": "87d84bf8b4cc051c16092d27b1a7d9b3"
  },
  {
    "url": "resources/scripts/sweetalert.js",
    "revision": "609aa78f6cbd0b9a45a3b1f893c99db8"
  },
  {
    "url": "resources/sounds/hmm.wav",
    "revision": "14784a2ef1c717eb2ae055ea5703f415"
  },
  {
    "url": "resources/styles/main.css",
    "revision": "6a5dc59587274826b7f9106162304b80"
  },
  {
    "url": "resources/styles/material-icons.css",
    "revision": "e836a138540b4f2b2a9ac67d677699ca"
  },
  {
    "url": "resources/styles/materialize.min.css",
    "revision": "1035ecff3f17989aa89f6bb37efa21ed"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
