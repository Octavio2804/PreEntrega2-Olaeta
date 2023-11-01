import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAecxlbd9eITNjyJZbJyh7TfrsEv-Kng70",
  authDomain: "preentrega3-olaeta.firebaseapp.com",
  projectId: "preentrega3-olaeta",
  storageBucket: "preentrega3-olaeta.appspot.com",
  messagingSenderId: "419677106164",
  appId: "1:419677106164:web:88afba0bbce2dc45e353a1",
  measurementId: "G-BVJW5R6SMZ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);