import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAQvNBqvi43qT_hmfzJ1dDD5NopBzQQlTQ",
    authDomain: "whatapp-clone-283c1.firebaseapp.com",
    projectId: "whatapp-clone-283c1",
    storageBucket: "whatapp-clone-283c1.appspot.com",
    messagingSenderId: "235833922402",
    appId: "1:235833922402:web:741f4ba7d795dc7086523b",
    measurementId: "G-39PELN625S"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);