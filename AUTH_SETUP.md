# Authentication System Setup Guide

This guide will help you set up the authentication system for your portfolio website. You have two options:

## Option 1: Firebase Authentication (Recommended for Beginners)

### Step 1: Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Enter project name: "your-portfolio-auth"
4. Follow the setup wizard

### Step 2: Enable Authentication
1. In Firebase Console, go to "Authentication"
2. Click "Get started"
3. Enable "Email/Password" authentication
4. Enable "Google" authentication

### Step 3: Get Firebase Config
1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps"
3. Click "Add app" → Web app
4. Copy the config object

### Step 4: Update auth.html
Replace the Firebase config in `auth.html`:

```javascript
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef123456"
};
```

### Step 5: Enable Firestore Database
1. Go to "Firestore Database" in Firebase Console
2. Click "Create database"
3. Choose "Start in test mode"
4. Select a location

## Option 2: Node.js Backend (Advanced)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Set Up MongoDB
1. Install MongoDB locally or use MongoDB Atlas
2. Create a database named "portfolio_users"

### Step 3: Create Environment File
Create a `.env` file in your project root:

```env
PORT=3000
JWT_SECRET=your-super-secret-jwt-key-here
MONGODB_URI=mongodb://localhost:27017/portfolio_users
GOOGLE_CLIENT_ID=your-google-client-id-here
GOOGLE_CLIENT_SECRET=your-google-client-secret-here
NODE_ENV=development
```

### Step 4: Set Up Google OAuth
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Go to "Credentials"
5. Create OAuth 2.0 Client ID
6. Add authorized origins: `http://localhost:3000`
7. Add authorized redirect URIs: `http://localhost:3000/auth.html`

### Step 5: Update auth.html for Node.js Backend
Replace the Firebase code with this Node.js version:

```javascript
// API Base URL
const API_BASE = 'http://localhost:3000/api';

// Register User
async function registerUser(name, email, password) {
    try {
        const response = await fetch(`${API_BASE}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            return data;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        throw error;
    }
}

// Login User
async function loginUser(email, password) {
    try {
        const response = await fetch(`${API_BASE}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            return data;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        throw error;
    }
}

// Google Authentication
async function googleAuth(token) {
    try {
        const response = await fetch(`${API_BASE}/google-auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            return data;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        throw error;
    }
}
```

### Step 6: Start the Server
```bash
npm start
```

## Adding Login Link to Your Portfolio

Add this to your navigation in `index.html`:

```html
<li><a href="auth.html" target="_blank">Login</a></li>
```

## Features Included

### ✅ Authentication Features
- **Email/Password Registration & Login**
- **Google OAuth Integration**
- **JWT Token Authentication**
- **Password Hashing (bcrypt)**
- **User Profile Management**

### ✅ Security Features
- **Password Validation**
- **JWT Token Expiration**
- **CORS Protection**
- **Input Validation**
- **Error Handling**

### ✅ User Experience
- **Beautiful UI Design**
- **Responsive Layout**
- **Loading States**
- **Error Messages**
- **Success Notifications**
- **Form Validation**

### ✅ Data Storage
- **MongoDB Database** (Node.js option)
- **Firestore Database** (Firebase option)
- **User Profiles**
- **Login History**

## File Structure

```
My_Portfolio/
├── auth.html              # Login/Signup page
├── server.js              # Node.js backend (Option 2)
├── package.json           # Node.js dependencies
├── AUTH_SETUP.md          # This setup guide
├── index.html             # Main portfolio
├── courses.html           # Courses page
└── ... (other files)
```

## Testing the Authentication

1. **Open** `auth.html` in your browser
2. **Try registering** with email/password
3. **Try logging in** with Google
4. **Check the database** to see stored users
5. **Test protected routes** with JWT tokens

## Troubleshooting

### Common Issues:

1. **Firebase Config Error**: Make sure you copied the correct config
2. **MongoDB Connection**: Ensure MongoDB is running
3. **Google OAuth**: Check client ID and redirect URIs
4. **CORS Issues**: Verify the API base URL matches your server

### Getting Help:
- Check browser console for errors
- Check server logs for backend errors
- Verify all environment variables are set
- Ensure all dependencies are installed

## Next Steps

After setup, you can:
1. **Customize the UI** to match your portfolio theme
2. **Add more authentication providers** (Facebook, GitHub, etc.)
3. **Create user dashboards** for registered users
4. **Add course enrollment tracking**
5. **Implement email verification**
6. **Add password reset functionality**

## Security Notes

- **Never commit** your `.env` file to version control
- **Use strong JWT secrets** in production
- **Enable HTTPS** in production
- **Regularly update** dependencies
- **Monitor** authentication logs
- **Implement rate limiting** for production use

---

**Choose Option 1 (Firebase) if you want a quick, managed solution.**
**Choose Option 2 (Node.js) if you want full control and customization.** 