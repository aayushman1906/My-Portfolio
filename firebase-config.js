// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzE2tJ-VE34M3RQeHhgFi_86DWFG_vFGo",
    authDomain: "my-portfolio-de506.firebaseapp.com",
    projectId: "my-portfolio-de506",
    storageBucket: "my-portfolio-de506.firebasestorage.app",
    messagingSenderId: "665814974400",
    appId: "1:665814974400:web:40b56c804f23c05cae5225",
    measurementId: "G-0QG5X05JK4"
};

// Initialize Firebase (Compat / Namespaced version)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Export auth and db for use in other files
const auth = firebase.auth();
const db = firebase.firestore();

// Fix for "Failed to get document because the client is offline" error
db.settings({ experimentalForceLongPolling: true });

// Optional: Analytics (requires firebase-analytics.js script to be loaded, ignoring for now to ensure Auth/DB works)
// const analytics = firebase.analytics();