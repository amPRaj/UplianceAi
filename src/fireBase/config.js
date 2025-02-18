import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Web App's Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdjsoV2f_2vkxMoLP5_dss-odk3V6O3HM",
  authDomain: "upliance-f41e3.firebaseapp.com",
  projectId: "upliance-f41e3",
  storageBucket: "upliance-f41e3.firebasestorage.app",
  messagingSenderId: "352601035530",
  appId: "1:352601035530:web:abe5b599350a0a563520f3",
  measurementId: "G-VS0BR0YSMK"
};

// Initialize Firebase Config
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);