'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.ico": "7003fe0a98fd6f7b9af4f39522f67981",
"index.html": "c824b085b0d7164de92b761e3d62ad17",
"/": "c824b085b0d7164de92b761e3d62ad17",
"main.dart.js": "af99521a13cedc388f6011a185a21220",
"main.dart": "d41d8cd98f00b204e9800998ecf8427e",
"assets/LICENSE": "23854d99d914d0ada429e3c7b4ad78ac",
"assets/AssetManifest.json": "2434a5395ad5cdb6bc53c7d2028b1991",
"assets/FontManifest.json": "9d49e88cde2554e286f2bb7b60c152d5",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/consumer_retail.png": "29c8e376ed4552cae5e3d5df6adca94c",
"assets/assets/team_sudip_simha.jpeg": "acfd6195b3cf355286b6a5328ceb68f3",
"assets/assets/retail_billing.jpeg": "e024b492feeddda196b969c15931ac96",
"assets/assets/team_deepthi_srihari.jpeg": "03b90e2fbbc196e9e98582bc40fb3a31",
"assets/assets/customization.png": "3b898a3ff2b181e6166bdd09d9313787",
"assets/assets/audit.png": "8a9597ada72ab0dea195470ce6800fa5",
"assets/assets/abs3.jpeg": "b9bce2f770b6023760253fac09e7dccb",
"assets/assets/biz_logo.jpeg": "f64707098369869d3a0c7027295d4511",
"assets/assets/abs2.jpeg": "0ee3ece5cd1287b0cc1c407b8c035d0f",
"assets/assets/medical_equipment.jpeg": "fb2d34c9a61432a08d3900d87a59fc3e",
"assets/assets/team_divya.jpeg": "0c9104b1475960eaf289b798ae8d72fc",
"assets/assets/abs1.jpeg": "4c74d81050d7262dead3c33b8716ae49",
"assets/assets/icons/ic_google.png": "8d61a1ae36dbd9d82305eab43cdb07fa",
"assets/assets/icons/left-arrow.png": "5f531e7d104687b5abd68825329d6684",
"assets/assets/icons/ic_linkedIn.png": "5b5479e865a403692971bdf905e09998",
"assets/assets/icons/ic_dribbble.png": "ab2d08e303c4d0ee5467e4c272fdfd8b",
"assets/assets/icons/ic_evernote.png": "19de46a5b8348420d099e78fde665955",
"assets/assets/icons/right-arrow-white.png": "33c148de64f067cea0d8f24d42604a35",
"assets/assets/icons/right-arrow.png": "9215030787c943ad47984c81fa4678ef",
"assets/assets/icons/ic_twitter.png": "83651994320dc0d3c7ad896ad058bb53",
"assets/assets/icons/left-arrow-white.png": "d34d99ba27296fe0f4459e2c5751e2b0",
"assets/assets/team_accamma.jpeg": "915c488b87c12f67a6b64ca990d7f160",
"assets/assets/integration.png": "1fdc22f37c403319f6e736bd03419f0e",
"assets/assets/ml.png": "4aa62f36614550a63939d08c1e62a927",
"assets/assets/performance.png": "dea60a4dfe079d050f89c24f7df39db7",
"assets/assets/product1.png": "6c9a1f0fe4a8120a5f7a20d6b4a26e00",
"assets/assets/fonts/Nexa-Bold.otf": "c9f309b3d47969ecac64a77a6c672594",
"assets/assets/fonts/MaterialIcons-Regular.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/assets/fonts/Nexa-Light.otf": "12108809f49c49bcdc126dcecc938761",
"assets/assets/fonts/Product-Sans-Regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/assets/fonts/Quicksand-Regular.otf": "3ce1580b66db6742cecd4b41519fb5f1",
"assets/assets/personalization.png": "869369f5816a651c194458451356cabb",
"assets/assets/programmer-3.gif": "5083e0a2a7dcaae07c142e8b87036a27"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
