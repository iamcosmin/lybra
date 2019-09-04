navigator.serviceWorker.register('/scripts/sw.js')
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  showInstallPromotion();
});
