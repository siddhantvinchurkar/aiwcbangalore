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
    "revision": "7362e8901608b18321d53089e9db8888"
  },
  {
    "url": "lighthouse-cache_assisted_load.html",
    "revision": "d5ec21ddfd0958c0cd755171607050ef"
  },
  {
    "url": "lighthouse-first_load.html",
    "revision": "adb21db8c4806307ea44eedd5cecdfaa"
  },
  {
    "url": "manifest.json",
    "revision": "1f39bf8beb654f1e227fe10cbbe723a7"
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
    "url": "resources/images/image_0/768x432.webp",
    "revision": "610bc170e91b611ffc49c0d672a953ec"
  },
  {
    "url": "resources/images/image_1/1366x768.webp",
    "revision": "db0b20b061ce6c87c002b019e476df5b"
  },
  {
    "url": "resources/images/image_1/1920x1080.webp",
    "revision": "ec414952e3f37c77497e7f1678e79d7e"
  },
  {
    "url": "resources/images/image_1/432x768.webp",
    "revision": "2d968242a5502f274e1b9c1a0bb983cb"
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
    "url": "resources/images/image_12/1366x768.webp",
    "revision": "eb3e9ddf85c76bf9c8caf3263b74fbfd"
  },
  {
    "url": "resources/images/image_12/1920x1080.webp",
    "revision": "eaa219aeab64f4ef73954ab502523308"
  },
  {
    "url": "resources/images/image_12/432x768.webp",
    "revision": "9afe574a2fbaaf75bad82510d6c357e4"
  },
  {
    "url": "resources/images/image_13/1366x768.webp",
    "revision": "2aa552f2a9688ae44236f7e3f738888b"
  },
  {
    "url": "resources/images/image_13/1920x1080.webp",
    "revision": "8f9efe427ecd12e49114ca30084c674e"
  },
  {
    "url": "resources/images/image_13/432x768.webp",
    "revision": "67b849fdbaf2c7c6c1b073a2b53e425b"
  },
  {
    "url": "resources/images/image_14/1366x768.webp",
    "revision": "db83a76aa84c2b060d94b0e3fcc179e0"
  },
  {
    "url": "resources/images/image_14/1920x1080.webp",
    "revision": "749c29a747d8ff8db5b19f1086b88a66"
  },
  {
    "url": "resources/images/image_14/432x768.webp",
    "revision": "ef4cc3430ff7179b7d99bff074ac2f38"
  },
  {
    "url": "resources/images/image_15/1366x768.webp",
    "revision": "0dc0caeb472c859ccf626ac6644c27a8"
  },
  {
    "url": "resources/images/image_15/1920x1080.webp",
    "revision": "8a65f3eb652571c78fd7863965111e5f"
  },
  {
    "url": "resources/images/image_15/432x768.webp",
    "revision": "d17b0dc65d7b09673fce38e106d77c54"
  },
  {
    "url": "resources/images/image_16/1366x768.webp",
    "revision": "20b0c34a86f98170a4dcf3067b6a39d3"
  },
  {
    "url": "resources/images/image_16/1920x1080.webp",
    "revision": "6292c31e407f58977b0773f60d260c81"
  },
  {
    "url": "resources/images/image_16/432x768.webp",
    "revision": "cc28063782cbcedcb52eac263ea9cf2f"
  },
  {
    "url": "resources/images/image_17/1366x768.webp",
    "revision": "8736a13dba5cc35a3b3e28b9d7b01465"
  },
  {
    "url": "resources/images/image_17/1920x1080.webp",
    "revision": "4a366f1315b184a8156e434f19650f67"
  },
  {
    "url": "resources/images/image_17/432x768.webp",
    "revision": "bd2b12ddc881ec655aae44316e49fa16"
  },
  {
    "url": "resources/images/image_18/1366x768.webp",
    "revision": "da468879ba3b8e18c11a6756be5740b5"
  },
  {
    "url": "resources/images/image_18/1920x1080.webp",
    "revision": "18a613c54add3dff69198a29ff92a302"
  },
  {
    "url": "resources/images/image_18/432x768.webp",
    "revision": "e11c8d5bc4b996f64be3dd66d257f4e1"
  },
  {
    "url": "resources/images/image_19/1366x768.webp",
    "revision": "a45dac616a852e3e132a9afb75f3ee51"
  },
  {
    "url": "resources/images/image_19/1920x1080.webp",
    "revision": "60d99030d5e66ac2967db64eb5a0841d"
  },
  {
    "url": "resources/images/image_19/432x768.webp",
    "revision": "4296ac61c2bf807aab2d1664de454449"
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
    "url": "resources/images/image_20/1366x768.webp",
    "revision": "34a0f99ede2966f848b505a74e64fa37"
  },
  {
    "url": "resources/images/image_20/1920x1080.webp",
    "revision": "3044b970ac7ed9df3b83f6b117951346"
  },
  {
    "url": "resources/images/image_20/432x768.webp",
    "revision": "a723b81e3ccb83e0e458574f11e64ea8"
  },
  {
    "url": "resources/images/image_21/1366x768.webp",
    "revision": "8b3196b3db0c53afd91891de1e29a994"
  },
  {
    "url": "resources/images/image_21/1920x1080.webp",
    "revision": "a959d602644eb4e17eff4fdba28cec31"
  },
  {
    "url": "resources/images/image_21/432x768.webp",
    "revision": "03c80f0bd7edc50a817301d4780ed0a8"
  },
  {
    "url": "resources/images/image_22/1366x768.webp",
    "revision": "2400d9f57c2694f605280a1e5d6b176e"
  },
  {
    "url": "resources/images/image_22/1920x1080.webp",
    "revision": "e85800c984fff5694159a2f66e81eade"
  },
  {
    "url": "resources/images/image_22/432x768.webp",
    "revision": "faa5db9755f3aa5e2ed0d9906a5aeac3"
  },
  {
    "url": "resources/images/image_23/1366x768.webp",
    "revision": "6f620cba2d02630c124941a7e3b857db"
  },
  {
    "url": "resources/images/image_23/1920x1080.webp",
    "revision": "fb73c789fda2eeae47e704d6648b4bcc"
  },
  {
    "url": "resources/images/image_23/432x768.webp",
    "revision": "11e205c95f89ba8dea9a4af1241441b7"
  },
  {
    "url": "resources/images/image_24/1366x768.webp",
    "revision": "87e516dda7c168cbc5c0a0a73af6e58f"
  },
  {
    "url": "resources/images/image_24/1920x1080.webp",
    "revision": "e92ed4e7ea57dedbeb30550c1d8e2ec4"
  },
  {
    "url": "resources/images/image_24/432x768.webp",
    "revision": "abe9ed84ab4259a510c4b7d46aba1c18"
  },
  {
    "url": "resources/images/image_25/1366x768.webp",
    "revision": "63c611f247c06bad18ba4a9807151a46"
  },
  {
    "url": "resources/images/image_25/1920x1080.webp",
    "revision": "be161af7bfe6d2402de5939234903223"
  },
  {
    "url": "resources/images/image_25/432x768.webp",
    "revision": "edd306d87bc80e33ae6dad88cfaed407"
  },
  {
    "url": "resources/images/image_26/1366x768.webp",
    "revision": "0c147fc8afa920e0d682a2aa25f4875d"
  },
  {
    "url": "resources/images/image_26/1920x1080.webp",
    "revision": "c632a9d7cb97b01037596551a23397f9"
  },
  {
    "url": "resources/images/image_26/432x768.webp",
    "revision": "8f402a4c4ca3abbcd51426122369ed93"
  },
  {
    "url": "resources/images/image_27/1366x768.webp",
    "revision": "24f80dd2f8847c5307072f045ee0d4fc"
  },
  {
    "url": "resources/images/image_27/1920x1080.webp",
    "revision": "ff951dfac30e5f3826facefba8887f90"
  },
  {
    "url": "resources/images/image_27/432x768.webp",
    "revision": "821b2bd53d6f468104708b8213f03473"
  },
  {
    "url": "resources/images/image_28/1366x768.webp",
    "revision": "6c55e433ed7b2c63b8e118c4c40fbd6b"
  },
  {
    "url": "resources/images/image_28/1920x1080.webp",
    "revision": "2e58d127d6a1d4b4d413ea565398d6e8"
  },
  {
    "url": "resources/images/image_28/432x768.webp",
    "revision": "cc621cf62e33586fd306575f4482fb82"
  },
  {
    "url": "resources/images/image_29/1366x768.webp",
    "revision": "a68e9e226f551cd70396e7279b63eea3"
  },
  {
    "url": "resources/images/image_29/1920x1080.webp",
    "revision": "cdb1513000805838900635f57b46a9b4"
  },
  {
    "url": "resources/images/image_29/432x768.webp",
    "revision": "13a4aafea09a5f43a704c2fec7e61424"
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
    "url": "resources/images/image_30/1366x768.webp",
    "revision": "63fd464daafe4aac80d827deae4c5735"
  },
  {
    "url": "resources/images/image_30/1920x1080.webp",
    "revision": "e1f15749845e96fab6f1ae165bdf40c0"
  },
  {
    "url": "resources/images/image_30/432x768.webp",
    "revision": "4442eed5dac135ecf229fdae52b3baff"
  },
  {
    "url": "resources/images/image_31/1366x768.webp",
    "revision": "7916ff4450abfae1293f94b735af12a2"
  },
  {
    "url": "resources/images/image_31/1920x1080.webp",
    "revision": "49668f26cffa32bdb8ef00f82654e85b"
  },
  {
    "url": "resources/images/image_31/432x768.webp",
    "revision": "b3c2a3521a88d0201be9e156bdf7c097"
  },
  {
    "url": "resources/images/image_32/1366x768.webp",
    "revision": "75382ceee6e43744a6c29c2aba58a6de"
  },
  {
    "url": "resources/images/image_32/1920x1080.webp",
    "revision": "a947f41a351e879b565c220dbb276c5e"
  },
  {
    "url": "resources/images/image_32/432x768.webp",
    "revision": "6d8e94806572f48a79287907a7113c6b"
  },
  {
    "url": "resources/images/image_33/1366x768.webp",
    "revision": "f08dbe600e065cf5dbe59627fe15380a"
  },
  {
    "url": "resources/images/image_33/1920x1080.webp",
    "revision": "4cad6d0be3f7fa0d9affb72b73a41e9c"
  },
  {
    "url": "resources/images/image_33/432x768.webp",
    "revision": "ec2047979e451de61aaac5cfedee8a39"
  },
  {
    "url": "resources/images/image_34/1366x768.webp",
    "revision": "1328c89dd4daec219006b2af1e1cf5c4"
  },
  {
    "url": "resources/images/image_34/1920x1080.webp",
    "revision": "aa0e482265d9e826dd355f2f47a175dc"
  },
  {
    "url": "resources/images/image_34/432x768.webp",
    "revision": "ca9120bd1e7bea323896f0a749b08611"
  },
  {
    "url": "resources/images/image_35/1366x768.webp",
    "revision": "563450cd0dab14a13ad04789741ada88"
  },
  {
    "url": "resources/images/image_35/1920x1080.webp",
    "revision": "960899fa52d74179222b02fc1ede2f2d"
  },
  {
    "url": "resources/images/image_35/432x768.webp",
    "revision": "7f1aa81369dc706329b838b8a89136d4"
  },
  {
    "url": "resources/images/image_36/1366x768.webp",
    "revision": "cc4a5db12a92c78356959e0e3c4a665e"
  },
  {
    "url": "resources/images/image_36/1920x1080.webp",
    "revision": "172084dc5ea546bca51a835167e7c7c0"
  },
  {
    "url": "resources/images/image_36/432x768.webp",
    "revision": "cb497b27c19cebb540a3caa086e71e56"
  },
  {
    "url": "resources/images/image_37/1366x768.webp",
    "revision": "d5b8505399d2fc35e4bc4492fbd1fa5c"
  },
  {
    "url": "resources/images/image_37/1920x1080.webp",
    "revision": "dddd6a406ca916892becf2515ee62fb9"
  },
  {
    "url": "resources/images/image_37/432x768.webp",
    "revision": "be3916f89b43daed87e37298051f51f2"
  },
  {
    "url": "resources/images/image_38/1366x768.webp",
    "revision": "e2249264f9e8484756cafc91e9edd091"
  },
  {
    "url": "resources/images/image_38/1920x1080.webp",
    "revision": "9ea9b0bb8e7792a973ae6a071bbaee80"
  },
  {
    "url": "resources/images/image_38/432x768.webp",
    "revision": "80d93551bd77979652c07233561d4a6b"
  },
  {
    "url": "resources/images/image_39/1366x768.webp",
    "revision": "9fb1040491d67be68f56b1c7bb94ddac"
  },
  {
    "url": "resources/images/image_39/1920x1080.webp",
    "revision": "8eee45bf181475d5d8295ffef050de80"
  },
  {
    "url": "resources/images/image_39/432x768.webp",
    "revision": "ef41c141911e9d20c47918e8143247d5"
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
    "url": "resources/images/member_images/1.webp",
    "revision": "36bce89f3973403d76c3306e7ce28f31"
  },
  {
    "url": "resources/images/member_images/10.webp",
    "revision": "70fb687785921408568a3447b0a414ae"
  },
  {
    "url": "resources/images/member_images/11.webp",
    "revision": "14b0dd0a47638770081960319b579de3"
  },
  {
    "url": "resources/images/member_images/12.webp",
    "revision": "4950fbf18184a4a82a3771fa8456c340"
  },
  {
    "url": "resources/images/member_images/13.webp",
    "revision": "10cb14407b2cb19ebade8e2c99b43e78"
  },
  {
    "url": "resources/images/member_images/14.webp",
    "revision": "e5f9d3b2b09ae19c32ce1bf757d80c69"
  },
  {
    "url": "resources/images/member_images/2.webp",
    "revision": "81abc91db45ac64cbba403569baa4308"
  },
  {
    "url": "resources/images/member_images/3.webp",
    "revision": "317ecae2f77e3c113749de9f870fc455"
  },
  {
    "url": "resources/images/member_images/4.webp",
    "revision": "98595dddd5855f30a015e9cebdd1303b"
  },
  {
    "url": "resources/images/member_images/5.webp",
    "revision": "00dc99223d561f9acc0836a1ccb9d59d"
  },
  {
    "url": "resources/images/member_images/6.webp",
    "revision": "d69495d2aa57ff7b860d23e7029452c3"
  },
  {
    "url": "resources/images/member_images/7.webp",
    "revision": "f05495b86bec29e3ac8a16d3dbb202e4"
  },
  {
    "url": "resources/images/member_images/8.webp",
    "revision": "af8187c23c6af0e60dc9b5ccae9f7d9e"
  },
  {
    "url": "resources/images/member_images/9.webp",
    "revision": "cf96ce5d6b48df12d1df22df54ca16db"
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
    "revision": "b1aba3d5ea4dc31274af2f461986c74c"
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
    "revision": "f5d442b7c3387889c75cde5d98e66c9e"
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
