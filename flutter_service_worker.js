'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e789d4efa35d5cd13c810933ed393397",
"assets/AssetManifest.bin.json": "a4549c4bd0db468f700dd70c7edf413a",
"assets/AssetManifest.json": "3478d7f2c37b502b7c41528faa7ff2da",
"assets/assets/audios/diabetes.mp3": "39c244ba1325b5fe0a34191ae9ca8345",
"assets/assets/audios/relaksasi.mp3": "488a153594ae9fdad549e07178a51510",
"assets/assets/audios/tesaudio.mp3": "88111cb8334d50b2d70938dc9f5f6a08",
"assets/assets/documents/laporubm_template.xlsx": "d1e7e8c056d5e656ab91ec52f8534771",
"assets/assets/documents/lenteraptm_template.xlsx": "1179dc5f18dc0ad023bd218137cfd362",
"assets/assets/documents/pandu_template.xlsx": "2172e9b677b6af80c074a41166e0c877",
"assets/assets/documents/pmoptm_template.xlsx": "4b50ac695f115b48d7df893691d8fbad",
"assets/assets/documents/posbindu_template.xlsx": "4169756d8af9412192b517df131eb6cd",
"assets/assets/documents/privacy_policy.md": "e64e5491ee5c77ac8b613c4f40ce843d",
"assets/assets/images/3AnsxT_iTRk_thumb.jpg": "0bb47cfcb79d04f5ef2b170fdfc5d74b",
"assets/assets/images/7p49YlOfCS4_thumb.jpg": "9c4271664da3bb4255ed1fc4be52e971",
"assets/assets/images/96ZPwmtjpJQ_thumb.jpg": "b9ec154f8be2316dea1ecc972420baf4",
"assets/assets/images/bg.png": "221e0680c954600dd8cb247ee89474eb",
"assets/assets/images/bg_light.png": "475d4a2e4b49e1ac19852c61e3f530ce",
"assets/assets/images/bg_light_seamless.png": "083341f1078d6bdeea43ae27f2f7e4fd",
"assets/assets/images/C9oj7fTGEhA_thumb.jpg": "fff2779f4a2335c6a08120dd424d0b6b",
"assets/assets/images/DHs9Ozdj4QU_thumb.jpg": "4202e5c163d7c4ce0f70b98af03d78f1",
"assets/assets/images/diabetes_thumb.jpg": "33e158c5704230359c13e9b662ede0f2",
"assets/assets/images/Dr8c67za_TU_thumb.jpg": "548f1d3068bb6b9af9c912ff70a72323",
"assets/assets/images/EJe6h7xJxJM_thumb.jpg": "34df38036a3d096f63277cd363cd2d55",
"assets/assets/images/Ek79TyiuLSw_thumb.jpg": "4376311ad1fd39c9e02dfe7cb0b822c2",
"assets/assets/images/FKgTIZGESbY_thumb.jpg": "11ee3251de34c4ef7c6c5854e24289ea",
"assets/assets/images/fL2sHqUISEY_thumb.jpg": "2f0b4f3fe275ff6026a4bdac4d12611f",
"assets/assets/images/google.png": "a1e1d65465c69a65f8d01226ff5237ec",
"assets/assets/images/gtiB9sHQ8XE_thumb.jpg": "6273aa00053a50f1d26c66f00827ae80",
"assets/assets/images/he%2520gu%2520Point.jpg": "acdb41b639f9892fa0cb09dad89bbb9c",
"assets/assets/images/headphone_button.png": "5b7a736cc0c2cd00f844a7ad54c3e2f8",
"assets/assets/images/Jian%2520Jing%2520Point.jpg": "37eb0fe39260ea9c17cfe2dd4b3f1ad5",
"assets/assets/images/jNQ1o4Zm9zo_thumb.jpg": "32b1194748d7df8b3a6172487cc0a32e",
"assets/assets/images/KvdIvtJMWxo_thumb.jpg": "156a2caa94e210aec6e0fb68a9f2e1a5",
"assets/assets/images/logo.png": "913a2b8553486899689b96ae0b35be3d",
"assets/assets/images/logo_awaspedas.png": "5428ed1e099ab6ff17d8f83de96b834d",
"assets/assets/images/logo_eposbinduptm.png": "61a645cdab6f0b7a483c9b49e28ae279",
"assets/assets/images/logo_gemar.png": "606e497db21b18ecc136cd2d979b39f4",
"assets/assets/images/logo_germas.png": "2b5a5c0cc1f7e7def94c2b434b504de6",
"assets/assets/images/logo_kemenkes.png": "3c30f08d3c20a97c79cad17e948a2df7",
"assets/assets/images/logo_lenteraptm.png": "7df0929e60cd17131e45b847ab59dffb",
"assets/assets/images/logo_pandu.png": "a26e7387b7caf2172a60a95f9c56dca3",
"assets/assets/images/logo_puskesmas.png": "6b74c7287e39352a851c1e66c2ace3ae",
"assets/assets/images/logo_semestaptm.png": "a9916ecac25b5b4fb1a425d57b14b2d7",
"assets/assets/images/logo_silipatonline.png": "fefac942d09b47dc4d37bd39f353625a",
"assets/assets/images/logo_tabalong.png": "5e70beee6036428b19a4daf7510f5acf",
"assets/assets/images/LV-3%2520(Tai%2520Chong)%2520Point.jpg": "b273243ca3fa6f8819d31bf64154f55f",
"assets/assets/images/meja1_button.png": "6b8cb9db01e784b96ca187b907ca8c56",
"assets/assets/images/meja2_button.png": "507d74fd1a4b6d82047b195becc5343e",
"assets/assets/images/meja3_button.png": "3650155617d8266adf8d6524efd24702",
"assets/assets/images/meja4_button.png": "3e11f956f0d6982128571140638cd770",
"assets/assets/images/meja5_button.png": "a510e2929b37c91c3a1ec1b02d28f3c9",
"assets/assets/images/Nei%2520Guan%2520Point.jpg": "2438e36eabf11ef6467f78bc3abc4fa0",
"assets/assets/images/p0crf_8OmPo_thumb.jpg": "330292a11bc6baf9facc2351321c51ff",
"assets/assets/images/pandu_testitik.jpg": "4a88f6f95a0ff6325072fb73d288fc21",
"assets/assets/images/PC-6%2520(Neiguan)%2520Point.jpg": "2438e36eabf11ef6467f78bc3abc4fa0",
"assets/assets/images/pCjSM6wGl8I_thumb.jpg": "547c7b36ee8b4b3c079d289a92e06d2d",
"assets/assets/images/p_EgzAZ2k8Q_thumb.jpg": "73987be0d6c7218c7a9a6225cfa6a788",
"assets/assets/images/relaksasi_thumb.jpg": "e6e5d575197ca607bd983f381da029dd",
"assets/assets/images/rPaZzz12pmQ_thumb.jpg": "eb4fe8d32547900aebb74d812cff7213",
"assets/assets/images/SAuXf_saITQ_thumb.jpg": "a097f77225fccbc69ee2f7d2d44fd17c",
"assets/assets/images/SP-6%2520(Sanyinjiao)%2520Point.jpg": "89c37a22cccbc1336152e0e382d78a5b",
"assets/assets/images/T1tOh98Iw3E_thumb.jpg": "0961f5b1936c69a40e2af9eb4c4de2d2",
"assets/assets/images/Taiyang%2520Point.jpg": "42eb1ab8104905345e516b8fafaf35a4",
"assets/assets/images/tesaudio_thumb.jpg": "88c4419474e05a73d4d9cf95020138b0",
"assets/assets/images/tesvideo_thumb.jpg": "dbaef1c853d1e125d3712073bd49b60c",
"assets/assets/images/xjsW_o21jpw_thumb.jpg": "fa5adaae32ab4d98ff4ee8a90494bb11",
"assets/assets/images/ZO6Bo2Fctms_thumb.jpg": "d06f9742b9a716349502c655f2eb704a",
"assets/assets/images/Zu%2520San%2520Li%2520Point.jpg": "4d0df4428dcd600d4035b8f8b7a3825d",
"assets/assets/images/Zuip-8ldpfw_thumb.jpg": "e83cf3138ab31794fe5a3adbcba0f5fd",
"assets/assets/videos/tesvideo.mp4": "791e9747b237032eac31a0ebe198d217",
"assets/assets/videos/tesvideo_audio.mp3": "0fc20aef320978444d5d747da6f90e12",
"assets/assets/videos/tesvideo_thumb.jpg": "4346f0036e25fec7925c01b57c24aa61",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a53c75d2da76619b30d84291440619c8",
"assets/NOTICES": "a15f083939efe385fe5b5d559839f92c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "c14b5d3970c5fa8b92ea1c67de716ae0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bb4b62bfa21eb3dd0a12b261e2ef50aa",
"/": "bb4b62bfa21eb3dd0a12b261e2ef50aa",
"main.dart.js": "3d3495bed4d66d43a865b5e2adbbfde6",
"manifest.json": "97d6eee781803cc070e38a92ce60b4ea",
"version.json": "2fcf1fbf413af478b2f267f9604937d7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
