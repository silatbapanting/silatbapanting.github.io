// Please see this file for the latest firebase-js-sdk version:
// https://github.com/firebase/flutterfire/blob/master/packages/firebase_core/firebase_core_web/lib/src/firebase_sdk_version.dart
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBzV5l5qWR3BKSjee-ZGvSMIJ3FtwSOjHc",
  authDomain: "silatbapanting.firebaseapp.com",
  projectId: "silatbapanting",
  storageBucket: "silatbapanting.firebasestorage.app",
  messagingSenderId: "525856169664",
  appId: "1:525856169664:web:932e81a352a7896c249725"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});