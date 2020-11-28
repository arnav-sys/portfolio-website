import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyDbaN0G-xn4TIPgFgLAJz3c6jrLcyjerwY",
    authDomain: "social-media-app-c1d15.firebaseapp.com",
    databaseURL: "https://social-media-app-c1d15.firebaseio.com",
    projectId: "social-media-app-c1d15",
    storageBucket: "social-media-app-c1d15.appspot.com",
    messagingSenderId: "844334141096",
    appId: "1:844334141096:web:a026ea3af557ddd075fc9d",
    measurementId: "G-2EBX20FJJT"
  };
  // Initialize Firebase
  var firebaseApp = firebase.initializeApp(firebaseConfig);

var db = firebaseApp.firestore();

export { db };