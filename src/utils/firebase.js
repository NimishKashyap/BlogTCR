import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD1s-8Sf12fmY-hLOsKxxgnaWbadv4fSAs",
    authDomain: "blog-tcr.firebaseapp.com",
    databaseURL: "https://blog-tcr-default-rtdb.firebaseio.com",
    projectId: "blog-tcr",
    storageBucket: "blog-tcr.appspot.com",
    messagingSenderId: "498347895780",
    appId: "1:498347895780:web:d69b03e1185c198f6375f1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const storage = firebaseApp.storage();

export default firebaseApp;
export { db, storage };
