import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD52Ro63lKnWE1FT1S4XaCGKcuauY_faoc",
  authDomain: "resetemailccc.firebaseapp.com",
  projectId: "resetemailccc",
  storageBucket: "resetemailccc.appspot.com",
  messagingSenderId: "299435504310",
  appId: "1:299435504310:web:abbf5541e84d763fca6c17"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = () => firebase.auth()
const output = {firebase, firebaseConfig, auth}

export default output