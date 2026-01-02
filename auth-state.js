// Auth State Handler
const loginNavLink = document.getElementById('loginLink');

if (loginNavLink) {
    auth.onAuthStateChanged(user => {
        if (user) {
            // User is signed in.
            console.log("User is logged in:", user.uid);

            // Fetch user details from Firestore
            db.collection('users').doc(user.uid).get().then((doc) => {
                if (doc.exists) {
                    const userData = doc.data();
                    const firstName = userData.fullname.split(' ')[0]; // Get first name
                    // Update Login Link to show Name
                    loginNavLink.innerHTML = `Hi, ${firstName}`;
                    loginNavLink.href = "#"; // Prevent navigation to login page

                    // Optional: Add a logout option or dropdown later
                    // For now, adding a simple click listener to logout for demo purposes might be annoying if they just want to see name.
                    // Let's just change the text as requested. 
                    // "their name should need to shown at log in navbar"

                    // If we want to allow logout, we could change href to logout or add a listener. 
                    // For this specific request, I'll just show the name. 
                    // But usually clicking "Hi, Name" should do something.
                    // Converting to a logout button on click:
                    loginNavLink.addEventListener('click', (e) => {
                        e.preventDefault();
                        if (confirm("Do you want to logout?")) {
                            auth.signOut().then(() => {
                                window.location.href = "index.html";
                            });
                        }
                    });

                } else {
                    console.log("No such user document!");
                    loginNavLink.innerHTML = "Hi, User";
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

        } else {
            // User is signed out.
            console.log("User is logged out");
            loginNavLink.innerHTML = "Login";
            loginNavLink.href = "login.html";
        }
    });
}
