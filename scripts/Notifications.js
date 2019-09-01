Notification.requestPermission()

const check = () => {
  if (!('serviceWorker' in navigator)) {
    throw new Error('No Service Worker support!')
  }
  if (!('PushManager' in window)) {
    throw new Error('No Push API Support!')
  }
}

const registerServiceWorker = async () => {
    const swRegistration = await navigator.serviceWorker.register('/scripts/ServiceWorker.js')
  return swRegistration
}

const requestNotificationPermission = async () => {
  const permission = await window.Notification.requestPermission()
  if (permission !== 'granted') {
    console.warn('Ne pare rau.')
  }
}

const main = async () => {
    check();
    const swRegistration = await registerServiceWorker()
    const permission = await requestNotificationPermission()
}
main()
