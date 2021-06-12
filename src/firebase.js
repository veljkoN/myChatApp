import firebase from 'firebase/app'
import "firebase/auth"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyApLtz3MO6PJ4G3n_KAsM45sDVP1W4URAw",
    authDomain: "chat-app-e1205.firebaseapp.com",
    projectId: "chat-app-e1205",
    storageBucket: "chat-app-e1205.appspot.com",
    messagingSenderId: "822396317576",
    appId: "1:822396317576:web:f48152c4bdbf6d2c8f543d",
    measurementId: "G-GEF1YCLS1W"
  }).auth()