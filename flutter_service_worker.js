'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "8fdcc578daa4692b1cdee57163520de8",
"assets/assets/pictogram_background.png": "0e5360f404376f0e4afde84abe3b87ca",
"assets/assets/pictogram_foreground.png": "f3600caf49fbeb4765373a85b46f45a5",
"assets/assets/pictogram_round.png": "e5d4e3fd0ec009d26dcbd4eecf7c4301",
"assets/assets/splash.png": "d81eddfc9d23a2415e474c32d1b690c6",
"assets/FontManifest.json": "1c47cab8474ed9dd210bd524fa3568bc",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/SF-Pro-Text-Black.otf": "9875774fefc26faacc37ca46859bf743",
"assets/fonts/SF-Pro-Text-Bold.otf": "3abde616ea2c2652c9c1130181e1aa93",
"assets/fonts/SF-Pro-Text-BoldItalic.otf": "c6a15e9d0247d6c18c60f7623bb94b14",
"assets/fonts/SF-Pro-Text-Heavy.otf": "471632c59ee06222938a22a8e248a2b8",
"assets/fonts/SF-Pro-Text-Light.otf": "a6f3d6ba1964e1a5ff8a9f044ea4bc31",
"assets/fonts/SF-Pro-Text-LightItalic.otf": "43d59e2e49e71947b2b071f7f2f011fa",
"assets/fonts/SF-Pro-Text-Medium.otf": "b21791d484d0ee056d789bd7910d1383",
"assets/fonts/SF-Pro-Text-MediumItalic.otf": "7200d5816a0ef2ffb61b8085b6646dfb",
"assets/fonts/SF-Pro-Text-Regular.otf": "f38dce0a923f80b613ee1c7450c7a807",
"assets/fonts/SF-Pro-Text-RegularItalic.otf": "fa9fdf3624cdb506adadb743d34dedb3",
"assets/fonts/SF-Pro-Text-Semibold.otf": "9b1cbed4f1e6a2ef9822e944e0332b26",
"assets/fonts/SF-Pro-Text-Thin.otf": "673fae3861a62cc50b2e3a4f8e5e42c6",
"assets/fonts/SF-Pro-Text-ThinItalic.otf": "05d1f7821c575d4f6609987d3ad09e98",
"assets/LICENSE": "5d99efa7a892087fc72086e47122437a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "ca9ce9ff0676a9b04ef0f8a3ad17dd08",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "8e7f807ef943bff1f6d3c2c6e0f3769e",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "1fdba418fdb6f8d7536d2389a8d32c99",
"/": "1fdba418fdb6f8d7536d2389a8d32c99",
"main.dart.js": "40e5d51950d7728b48a5dd8e3e7edf80",
"manifest.json": "ed3feb9dacf9bce89aafadf36e0e76f0"
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
