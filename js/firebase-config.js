import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getFirestore, collection, addDoc, GeoPoint, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { getStorage, getDownloadURL, ref, uploadBytesResumable } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE_J_pB3hTExniLk3YJzeWlXvewz--5XI",
  authDomain: "lerep-homestay.firebaseapp.com",
  projectId: "lerep-homestay",
  storageBucket: "lerep-homestay.appspot.com",
  messagingSenderId: "1034352528751",
  appId: "1:1034352528751:web:5b80b5ee91197b29192c9a",
  measurementId: "G-KRKE47PKGS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

// Get the authentication instance
const auth = getAuth(app);

export { app, auth, db, storage, getDownloadURL, ref, uploadBytesResumable, collection, addDoc, GeoPoint, query, where, getDocs, getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut };