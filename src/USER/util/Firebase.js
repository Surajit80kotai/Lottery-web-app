// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCVdTwiHdb2SkbuvAjmAnpOMQpaZdNq71w",
    authDomain: "lotteryproject-social-auth.firebaseapp.com",
    projectId: "lotteryproject-social-auth",
    storageBucket: "lotteryproject-social-auth.appspot.com",
    messagingSenderId: "465250659566",
    appId: "1:465250659566:web:a387ce97e49bc839afd7ff",
    measurementId: "G-NS2W3PP9EV"

    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID,
    // measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
// console.log(firebaseConfig)
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const google = new GoogleAuthProvider()
export const facebook = new FacebookAuthProvider()