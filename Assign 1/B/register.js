
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-analytics.js";


import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.7.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBLD3BIGwAwIoMNuYRNNchgWrnVpdFFCzQ",
    authDomain: "web-2-e3291.firebaseapp.com",
    projectId: "web-2-e3291",
    storageBucket: "web-2-e3291.firebasestorage.app",
    messagingSenderId: "423842183559",
    appId: "1:423842183559:web:f26e6a35f4531976ed3b22",
    measurementId: "G-MKNJH7Y446"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

const submit = document.getElementById('submit');
submit.addEventListener('click', function (event) {
    event.preventDefault()

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            alert("creating");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert("err");
        });
})
