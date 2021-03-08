import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyD-hZWBk8zEZA-NJXsB79sbWEYOOCdJEkA",
    authDomain: "clone-53283.firebaseapp.com",
    projectId: "clone-53283",
    storageBucket: "clone-53283.appspot.com",
    messagingSenderId: "235726371630",
    appId: "1:235726371630:web:2bd6108d3c973f8376d8bf",
    measurementId: "G-C20DNKXDFX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebaseApp.firestore();

  export { db, auth };