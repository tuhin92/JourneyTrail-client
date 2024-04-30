// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBipJUb6l9_s5a3rEL0TmVFDPB12vF9jQY",
  authDomain: "journy-trail.firebaseapp.com",
  projectId: "journy-trail",
  storageBucket: "journy-trail.appspot.com",
  messagingSenderId: "653968554334",
  appId: "1:653968554334:web:f1be6af05bda01208db7cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;