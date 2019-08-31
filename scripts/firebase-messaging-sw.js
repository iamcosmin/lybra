importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  'messagingSenderId': 'YOUR-SENDER-ID'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.usePublicVapidKey("BOCpB0jTfrq3F2qtSVBvkT9wxvExrGAaBCuRaDcF9PGOQY-wBIdlKyXbtf-B8RjlMwMQfpzELVN-gDOhAxcbsIc");

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Buna ziua!';
  const notificationOptions = {
    body: 'Acesta este un test. Nu este nevoie de nimic suplimentar!',
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
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
