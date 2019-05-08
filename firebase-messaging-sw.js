importScripts('https://www.gstatic.com/firebasejs/5.2.0/firebase.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({
    messagingSenderId: "695744899438"
});

const messaging = firebase.messaging();