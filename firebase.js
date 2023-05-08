import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyBRqXuG91yRK8FqEYZobzuAbEFWEDKTC0s",
    authDomain: "chatroom-ff802.firebaseapp.com",
    projectId: "chatroom-ff802",
    storageBucket: "chatroom-ff802.appspot.com",
    messagingSenderId: "269962245926",
    appId: "1:269962245926:web:7e87133393e768c19f33e7",
  })
  .auth();
