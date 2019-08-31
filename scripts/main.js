if ('serviceWorker' in navigator && 'PushManager' in window) {
  console.log('Service Worker and Push is supported');

  navigator.serviceWorker.register('/scripts/Lucrator.js')
  .then(function(swReg) {
    console.log('Service Worker is registered', swReg);

    swRegistration = swReg;
  })
  .catch(function(error) {
    console.error('Service Worker Error', error);
  });
} else {
  console.warn('Push messaging is not supported');
  pushButton.textContent = 'Push Not Supported';
}

Notification.requestPermission().then((permission) => {
  if (permission === 'granted') {
    alert('Multumim!');
  } else {
    alert('O sa va tinem minte parerea.');
  }
});
