
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB0uLb7jEV6_DbjUR2GQkFSmJBzAui9dcw",
  authDomain: "palki-wed-management.firebaseapp.com",
  projectId: "palki-wed-management",
  storageBucket: "palki-wed-management.appspot.com",
  messagingSenderId: "350200856084",
  appId: "1:350200856084:web:ff3b6935c9db5bda353101"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;