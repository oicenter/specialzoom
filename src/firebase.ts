// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";


import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCIiFnS1MVfnxzETni0hzz0H2y0gAcUSgI",
    authDomain: "oicenter-zoom-disabilities.firebaseapp.com",
    databaseURL: "https://oicenter-zoom-disabilities.firebaseio.com",
    projectId: "oicenter-zoom-disabilities",
    storageBucket: "oicenter-zoom-disabilities.appspot.com",
    messagingSenderId: "740369851153",
    appId: "1:740369851153:web:aa600b7190fef71062e2b0",
    measurementId: "G-C1QVSP5K9P"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;