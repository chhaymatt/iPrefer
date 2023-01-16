// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBrK77T55dBMoPo9DaMVM99DhKB3jIwr2U",
	authDomain: "ipre-f1090.firebaseapp.com",
	projectId: "ipre-f1090",
	storageBucket: "ipre-f1090.appspot.com",
	messagingSenderId: "85512928237",
	appId: "1:85512928237:web:fb7fa15683dce05707c5e4",
	measurementId: "G-9L8P1LNTWB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
