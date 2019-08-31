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
    showLocalNotification('This is title', 'this is the message', swRegistration);
}
main();
