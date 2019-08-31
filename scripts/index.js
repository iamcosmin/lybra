if ('serviceWorker' in navigator && 'PushManager' in window) {
  console.log('Service Worker and Push is supported');

  navigator.serviceWorker.register('/scripts/ServiceWorker.js')
  .then(function(swReg) {
    alert('Service Worker is registered', swReg);

    swRegistration = swReg;
  })
  .catch(function(error) {
    alert('Service Worker Error', error);
  });
} else {
  alert('Push messaging is not supported');
}

Notification.requestPermission().then((permission) => {
  if (permission === 'granted') {
    alert('Multumim!');
  } else {
    alert('O sa va tinem minte parerea.');
  }
});
