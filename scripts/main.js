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

messaging.getToken().then((currentToken) => {
if (currentToken) {
sendTokenToServer(currentToken);
updateUIForPushEnabled(currentToken);
} else {
// Show permission request.
console.log('No Instance ID token available. Request permission to generate one.');
// Show permission UI.
updateUIForPushPermissionRequired();
setTokenSentToServer(false);
}
}).catch((err) => {
console.log('An error occurred while retrieving token. ', err);
showToken('Error retrieving Instance ID token. ', err);
setTokenSentToServer(false);
});

messaging.onTokenRefresh(() => {
  messaging.getToken().then((refreshedToken) => {
    console.log('Token refreshed.');
    // Indicate that the new Instance ID token has not yet been sent to the
    // app server.
    setTokenSentToServer(false);
    // Send Instance ID token to app server.
    sendTokenToServer(refreshedToken);
    // ...
  }).catch((err) => {
    console.log('Unable to retrieve refreshed token ', err);
    showToken('Unable to retrieve refreshed token ', err);
  });
});








messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
  // ...
});
