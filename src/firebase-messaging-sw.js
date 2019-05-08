importScripts('https://www.gstatic.com/firebasejs/5.2.0/firebase.js');
importScripts('https://www.gstatic.com/firebasejs/5.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.2.0/firebase-messaging.js');

 // Initialize Firebase
 var config = {
  messagingSenderId: "695744899438"
};

firebase.initializeApp(config);

var messaging = firebase.messaging();