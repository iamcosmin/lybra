navigator.serviceWorker.register('/scripts/sw.js');

function inapoi() {
   window.history.back();
}

document.addEventListener('DOMContentLoaded', (event) => {
   ((localStorage.getItem('mode') || 'dark') === 'dark') ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark')
 })
