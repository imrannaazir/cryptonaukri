// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpi-VZuwcBmvzcMUosEjeZzRc2qRQwK0E",
    authDomain: "crypto-naukri.firebaseapp.com",
    projectId: "crypto-naukri",
    storageBucket: "crypto-naukri.appspot.com",
    messagingSenderId: "456927550470",
    appId: "1:456927550470:web:097e6d89e1d111cc313787"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
