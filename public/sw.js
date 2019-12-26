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
    "revision": "f08fc654167ee59b95f3be0469131aff"
  },
  {
    "url": "index.html",
    "revision": "7b7792a9201d8b318bd9a7873a7436b0"
  },
  {
    "url": "manifest.json",
    "revision": "aea5a1a82374edbcbb1622804872789e"
  },
  {
    "url": "resources/images/404.png",
    "revision": "35699d80023c096c95188d74fda5a8cb"
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
    "url": "resources/images/image_1/1366x768.png",
    "revision": "faca70cb49918db63b3001d0c40e991d"
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
    "url": "resources/images/image_1/432x768.png",
    "revision": "eb08189dd4d185eb72e0ff2c256aea68"
  },
  {
    "url": "resources/images/image_1/432x768.webp",
    "revision": "3d80a465b5e53c9f4eaee8cdc1d0782e"
  },
  {
    "url": "resources/images/image_10/1366x768.png",
    "revision": "c50e781a67ae67837d5338ec3298fdfa"
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
    "url": "resources/images/image_10/432x768.png",
    "revision": "eb5d8b0438d5d967250c3baaf9f56837"
  },
  {
    "url": "resources/images/image_10/432x768.webp",
    "revision": "53e0a70d4941125b39f7d88af91a2de0"
  },
  {
    "url": "resources/images/image_11/1366x768.png",
    "revision": "883141cc62be57038f5dbbf4f6478c36"
  },
  {
    "url": "resources/images/image_11/1366x768.webp",
    "revision": "757cb840c3353567fbff45812f1d0e13"
  },
  {
    "url": "resources/images/image_11/1920x1080.png",
    "revision": "6ff10e101facfadce071b87d31fc4626"
  },
  {
    "url": "resources/images/image_11/1920x1080.webp",
    "revision": "e990baf1028b0fddf75d8409a4482749"
  },
  {
    "url": "resources/images/image_11/432x768.png",
    "revision": "46a8a460faaaf2e68f0bbad55cbfc598"
  },
  {
    "url": "resources/images/image_11/432x768.webp",
    "revision": "d76c4861b3226beb9a81e8e9eaa84560"
  },
  {
    "url": "resources/images/image_2/1366x768.png",
    "revision": "5556207ff7d73baa8ef47eacdfd0b4cd"
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
    "url": "resources/images/image_2/432x768.png",
    "revision": "915b5ee1254eb77dfb2ace457f464af6"
  },
  {
    "url": "resources/images/image_2/432x768.webp",
    "revision": "67ebcdde44ba2d583d041d16f60702d5"
  },
  {
    "url": "resources/images/image_3/1366x768.png",
    "revision": "b886adebacb2e4f4cc8aca34dc54b8b2"
  },
  {
    "url": "resources/images/image_3/1366x768.webp",
    "revision": "d919d0a423501219e682fd6b7ca8fd54"
  },
  {
    "url": "resources/images/image_3/1920x1080.png",
    "revision": "59d5a6fb7404442cc91749bfa8861c34"
  },
  {
    "url": "resources/images/image_3/1920x1080.webp",
    "revision": "6b3dd5753217a1c5ff50ff3c1d091b68"
  },
  {
    "url": "resources/images/image_3/432x768.png",
    "revision": "20bca2df022d0f31072fa03444de7c91"
  },
  {
    "url": "resources/images/image_3/432x768.webp",
    "revision": "bb2cd04a9bd0616213a4fe22773c22d2"
  },
  {
    "url": "resources/images/image_4/1366x768.png",
    "revision": "a3630a1578b5b44a672e0e1a28913082"
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
    "url": "resources/images/image_4/432x768.png",
    "revision": "015025bda868dc7f06fabfb5b72bd4ae"
  },
  {
    "url": "resources/images/image_4/432x768.webp",
    "revision": "e69a25176fe874c627c7ba4313514ec3"
  },
  {
    "url": "resources/images/image_5/1366x768.png",
    "revision": "aaf325bba4fd2c680384a2c792939ac5"
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
    "url": "resources/images/image_5/432x768.png",
    "revision": "815730f99dcfd8cac9a40e730b9f3f93"
  },
  {
    "url": "resources/images/image_5/432x768.webp",
    "revision": "6428c0aedf6b637e169a633305f9f511"
  },
  {
    "url": "resources/images/image_6/1366x768.png",
    "revision": "051904114bb0bf3883da7688f5789379"
  },
  {
    "url": "resources/images/image_6/1366x768.webp",
    "revision": "cad6d0aba87395d6a9186a20a839b045"
  },
  {
    "url": "resources/images/image_6/1920x1080.png",
    "revision": "c03cf89098dc0bcac3382fa88236af3d"
  },
  {
    "url": "resources/images/image_6/1920x1080.webp",
    "revision": "13f6c12ecfaf1abe96f612f5f6271015"
  },
  {
    "url": "resources/images/image_6/432x768.png",
    "revision": "e7ff62782cd34afdc941ae45a3f04776"
  },
  {
    "url": "resources/images/image_6/432x768.webp",
    "revision": "1fdcf67be52eb9a796c9678da96c8232"
  },
  {
    "url": "resources/images/image_7/1366x768.png",
    "revision": "eb666c2848c0b6482692b06b0818cb52"
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
    "url": "resources/images/image_7/432x768.png",
    "revision": "177cbe1c49c3ed2e5f35cc77a6ead554"
  },
  {
    "url": "resources/images/image_7/432x768.webp",
    "revision": "9450c950d39db0e043940da8f51d5c40"
  },
  {
    "url": "resources/images/image_8/1366x768.png",
    "revision": "4013d0ad2d3e117212b64724a0aa8169"
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
    "url": "resources/images/image_8/432x768.png",
    "revision": "8c8f403c819609803e98cab39500ee00"
  },
  {
    "url": "resources/images/image_8/432x768.webp",
    "revision": "c253a613233d9d40c54998068e1f326b"
  },
  {
    "url": "resources/images/image_9/1366x768.png",
    "revision": "41658a2e2ea90c41ff95a56565ce64f5"
  },
  {
    "url": "resources/images/image_9/1366x768.webp",
    "revision": "f5569684c3888de09f2e59c1a1af86e8"
  },
  {
    "url": "resources/images/image_9/1920x1080.png",
    "revision": "bdc0c9e97b10c8ef40e30aabae87cc6e"
  },
  {
    "url": "resources/images/image_9/1920x1080.webp",
    "revision": "59a80d17deda3ddf32ae082f79701da7"
  },
  {
    "url": "resources/images/image_9/432x768.png",
    "revision": "a3f03b74c71da188bbb9dfc992feef12"
  },
  {
    "url": "resources/images/image_9/432x768.webp",
    "revision": "70e817f09cb19d336d5352d9ca6620e5"
  },
  {
    "url": "resources/images/mrs_margaret_cousins.jpg",
    "revision": "c0879a6d8d670ced13d11f1b873afb2b"
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
    "url": "resources/scripts/firebase-functions.js",
    "revision": "af960814a76d8dbe391e1e7bde4118ca"
  },
  {
    "url": "resources/scripts/firebase-messaging.js",
    "revision": "5ae2ed3138b43326f5995e5c3352035b"
  },
  {
    "url": "resources/scripts/firebase-performance.js",
    "revision": "e554b7647439d7d3ae2d267c5bf75b35"
  },
  {
    "url": "resources/scripts/firebase-remote-config.js",
    "revision": "be8a4a220131ba602665715a43c10542"
  },
  {
    "url": "resources/scripts/firebase-storage.js",
    "revision": "587eb64581b465728220b557f6003650"
  },
  {
    "url": "resources/scripts/jquery-ui.min.js",
    "revision": "c15b1008dec3c8967ea657a7bb4baaec"
  },
  {
    "url": "resources/scripts/jquery.min.js",
    "revision": "220afd743d9e9643852e31a135a9f3ae"
  },
  {
    "url": "resources/scripts/main.js",
    "revision": "61c5f6791e0d447f8b4ccd439c2b908f"
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
