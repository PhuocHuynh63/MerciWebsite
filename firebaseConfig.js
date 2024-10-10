// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDx2nuQiuRKaamUUeQrgLi5BRwebe3bL5Y",
    authDomain: "merci-7c36b.firebaseapp.com",
    projectId: "merci-7c36b",
    storageBucket: "merci-7c36b.appspot.com",
    messagingSenderId: "251817239467",
    appId: "1:251817239467:web:0db9274c35bbf5ec3da8ee",
    measurementId: "G-4RBM98XX4F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);