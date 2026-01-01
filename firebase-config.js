// Firebase Configuration
// REPLACE THESE VALUES WITH YOUR OWN FIREBASE PROJECT CONFIGURATION
// 1. Go to console.firebase.google.com
// 2. Create a new project
// 3. Go to Project Settings -> General -> Your apps -> Web app
// 4. Copy the "firebaseConfig" object values here

const firebaseConfig = {
    apiKey: "AIzaSyDzE2tJ-VE34M3RQeHhgFi_86DWFG_vFGo",
    authDomain: "my-portfolio-de506.firebaseapp.com",
    projectId: "my-portfolio-de506",
    storageBucket: "my-portfolio-de506.firebasestorage.app",
    messagingSenderId: "665814974400",
    appId: "1:665814974400:web:40b56c804f23c05cae5225",
    measurementId: "G-0QG5X05JK4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);