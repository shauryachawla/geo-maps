import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAt9f1hPGXb5DF8baNNp93945wjvEfZwA8",
    authDomain: "geo-ninjas-b555b.firebaseapp.com",
    databaseURL: "https://geo-ninjas-b555b.firebaseio.com",
    projectId: "geo-ninjas-b555b",
    storageBucket: "geo-ninjas-b555b.appspot.com",
    messagingSenderId: "222993781590",
    appId: "1:222993781590:web:631b7cf3abc039e7b77cf7"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore()