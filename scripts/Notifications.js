const registerServiceWorker = async () => {
  const swRegistration = await navigator.serviceWorker.register('/scripts/ServiceWorker.js')
  return swRegistration
}
const check = () => {
  if (!('PushManager' in window)) {
  throw new Error('No Push API Support!')
}
}

const showLocalNotification = (title, body, swRegistration) => {

    const options = {
        "body": "Buna ziua!",

    };

    swRegistration.showNotification(title, options);
}
const main = async () => {
    check();
    const swRegistration = await registerServiceWorker();
    showLocalNotification('This is title', 'this is the message', swRegistration);
}
main();
