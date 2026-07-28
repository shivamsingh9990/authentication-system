# Authentication System - Complete Setup Guide

This is a full-stack authentication system with React frontend and Node.js/Express backend with MongoDB.

## 📋 Project Structure

```
authentication-system/
├── src/                          # React frontend
│   ├── pages/
│   │   ├── Signup.jsx           # User registration page
│   │   ├── Login.jsx            # User login page
│   │   └── Dashboard.jsx        # User dashboard (protected)
│   ├── context/
│   │   └── AuthContext.jsx      # Authentication state management
│   ├── components/
│   │   └── ProtectedRoute.jsx   # Route protection wrapper
│   ├── App.jsx                  # Main app with routing
│   └── main.jsx                 # Entry point
├── server/                       # Node.js backend
│   ├── config/
│   │   └── db.js               # MongoDB connection
│   ├── models/
│   │   └── User.js             # User schema
│   ├── routes/
│   │   └── auth.js             # Auth endpoints
│   └── server.js               # Express server
├── package.json                 # Frontend dependencies
├── vite.config.js              # Vite configuration
└── README.md                    # This file
```

## 🚀 Prerequisites

Before starting, make sure you have:
1. **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
2. **MongoDB** - Either:
   - Local MongoDB server running on `localhost:27017`
   - Or MongoDB Atlas (cloud) - update connection string in `server/config/db.js`

## ⚙️ Installation & Setup

### Step 1: Install Frontend Dependencies

```bash
cd "c:\Users\Shivam\authentication system"
npm install
```

Already done! You have:
- react-router-dom (for routing)
- axios (for API calls)
- tailwindcss (for styling)

### Step 2: Install Backend Dependencies

```bash
cd server
npm install
```

This will install:
- express (web framework)
- mongoose (MongoDB ODM)
- bcryptjs (password hashing)
- jsonwebtoken (JWT authentication)
- cors (cross-origin requests)
- dotenv (environment variables)

### Step 3: Set Up MongoDB

**Option A: Local MongoDB**
- Download and install MongoDB from [mongodb.com](https://www.mongodb.com/try/download/community)
- Start MongoDB service:
  - **Windows**: MongoDB should start automatically after installation
  - **Mac/Linux**: Run `mongod` in terminal

**Option B: MongoDB Atlas (Cloud)**
1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account and cluster
3. Get your connection string
4. Update `server/config/db.js`:
   ```javascript
   await mongoose.connect('YOUR_ATLAS_CONNECTION_STRING', {
   ```

### Step 4: Update Backend Secret (Optional but Recommended)

In `server/routes/auth.js`, change this line:
```javascript
const JWT_SECRET = 'your_secret_key_change_this_in_production';
```

Use a strong, random secret key.

## 🎯 Running the Application

### Terminal 1: Start the Backend Server

```bash
cd server
npm run dev
```

You should see:
```
Server running on http://localhost:5000
Make sure MongoDB is running on mongodb://localhost:27017
```

### Terminal 2: Start the Frontend Development Server

```bash
# From the main project directory
npm run dev
```

You should see:
```
  ➜  Local:   http://localhost:5173/
```

## 📱 Using the Application

1. **Open** http://localhost:5173/ in your browser
2. **Sign Up**: Create a new account with:
   - Full Name
   - Email
   - Password (min 6 characters)
   - Confirm Password

3. **Login**: Use your registered email and password

4. **Dashboard**: After login, you'll see your profile with:
   - Your name
   - Email address
   - Account status
   - Member since date

5. **Logout**: Click the Logout button to exit

## 🔐 Features

✅ User Registration/Signup
✅ Secure Password Hashing (bcryptjs)
✅ User Login with JWT Authentication
✅ Protected Dashboard (requires authentication)
✅ User Data Persistence (MongoDB)
✅ Responsive Design (Tailwind CSS)
✅ CORS Enabled for frontend-backend communication
✅ Error Handling & Validation

## 🛠️ API Endpoints

### Signup
- **URL**: `POST http://localhost:5000/api/auth/signup`
- **Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response**: Returns user data and JWT token

### Login
- **URL**: `POST http://localhost:5000/api/auth/login`
- **Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response**: Returns user data and JWT token

## 📝 Component Details

### Signup.jsx
- Form validation (all fields required)
- Password confirmation
- Minimum password length (6 characters)
- Saves user to MongoDB
- Redirects to Dashboard on success

### Login.jsx
- Email and password validation
- Compares with stored hashed password
- Creates JWT token
- Stores token in localStorage

### Dashboard.jsx
- Protected route (redirects to login if not authenticated)
- Displays user name, email, account status
- Shows member since date
- Logout functionality

### AuthContext.jsx
- Manages user authentication state
- Persists user data in localStorage
- Provides useAuth hook for components

### ProtectedRoute.jsx
- Wraps protected pages
- Redirects unauthenticated users to login
- Shows loading state

## 🐛 Troubleshooting

### "Cannot connect to MongoDB"
- Make sure MongoDB is running
- Check connection string in `server/config/db.js`
- On Windows, check if MongoDB service is started

### "CORS Error"
- Backend must be running on port 5000
- Frontend must be running on port 5173
- CORS is configured in server.js

### "Port already in use"
- Backend: Change port in `server.js` (const PORT)
- Frontend: Change port in `vite.config.js`

### "User already exists"
- Email must be unique per user
- Try signing up with a different email

## 📚 Technologies Used

### Frontend
- React 19
- React Router DOM (v6+)
- Axios (HTTP client)
- Tailwind CSS
- Vite (build tool)

### Backend
- Node.js & Express
- MongoDB & Mongoose
- JWT (JSON Web Tokens)
- bcryptjs (password hashing)
- CORS

## 🔄 Data Flow

1. **Signup**: User fills form → Sent to backend → Password hashed → Saved to MongoDB → JWT token created → Redirect to Dashboard
2. **Login**: User enters credentials → Backend verifies → JWT token created → User data stored in localStorage → Redirect to Dashboard
3. **Dashboard**: Protected route checks for user → Shows user details from auth context → Logout clears data

## 📌 Security Notes

⚠️ **For Production:**
- Use environment variables for sensitive data
- Change JWT_SECRET to a strong value
- Use HTTPS instead of HTTP
- Enable MongoDB authentication
- Add rate limiting
- Add input validation & sanitization
- Use secure password requirements
- Add email verification

## 🤝 Support

If you encounter any issues:
1. Check browser console for errors (F12)
2. Check terminal for backend errors
3. Verify MongoDB is running
4. Check ports (5000 for backend, 5173 for frontend)
5. Clear localStorage if experiencing state issues

---

**Enjoy your authentication system!** 🎉
