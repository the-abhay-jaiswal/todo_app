import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA0zxpHFYAW-IH6wbCybnu1cqGcy-Hiut8",
    authDomain: "todo-app-80f44.firebaseapp.com",
    projectId: "todo-app-80f44",
    storageBucket: "todo-app-80f44.appspot.com",
    messagingSenderId: "392316902793",
    appId: "1:392316902793:web:435b37337f3de2b5731558",
    measurementId: "G-4PZED27CWP"
});

const db = firebaseApp.firestore();

export default db;