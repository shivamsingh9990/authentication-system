# 🚀 Quick Start - Authentication System

## What's Ready to Go

✅ **Frontend** (React + Vite + Tailwind)
- Signup page with form validation
- Login page with authentication
- Protected Dashboard with user details
- Context-based auth state management
- All dependencies installed

✅ **Backend** (Node.js + Express + MongoDB)
- Express server setup
- MongoDB connection configured
- Signup & Login API endpoints
- Password hashing with bcryptjs
- JWT token generation
- All dependencies installed

---

## 🎯 To Get Started (5 minutes)

### 1️⃣ Start MongoDB
**Windows:**
- MongoDB should auto-start after installation
- Or manually: Run MongoDB from Services or Command Prompt

**Mac:**
```bash
brew services start mongodb-community
```

**Linux:**
```bash
sudo systemctl start mongod
```

**Or Use MongoDB Atlas (Cloud):**
- Go to: https://www.mongodb.com/cloud/atlas
- Create free cluster
- Update connection string in: `server/config/db.js`

---

### 2️⃣ Start Backend Server

**Open Terminal 1:**
```bash
cd "c:\Users\Shivam\authentication system\server"
npm run dev
```

**Expected Output:**
```
Server running on http://localhost:5000
Make sure MongoDB is running on mongodb://localhost:27017
```

---

### 3️⃣ Start Frontend Server

**Open Terminal 2:**
```bash
cd "c:\Users\Shivam\authentication system"
npm run dev
```

**Expected Output:**
```
➜  Local:   http://localhost:5173/
```

---

### 4️⃣ Open in Browser
- Go to: **http://localhost:5173/**
- You'll see the Login page

---

## 📝 Test the Flow

### Sign Up (Create Account)
1. Click "Sign up here" link
2. Fill in:
   - Full Name: `John Doe`
   - Email: `john@example.com`
   - Password: `password123`
   - Confirm Password: `password123`
3. Click **Sign Up**
4. ✅ You'll be redirected to Dashboard

### Login
1. Logout from Dashboard
2. Use your email & password to login
3. ✅ You'll see your details on Dashboard

### Dashboard
- Shows your name, email, status
- Shows member since date
- Logout button to exit

---

## 📁 Project Structure Created

```
c:\Users\Shivam\authentication system\
├── src/
│   ├── pages/
│   │   ├── Signup.jsx        ← Registration page
│   │   ├── Login.jsx         ← Login page
│   │   └── Dashboard.jsx     ← Protected dashboard
│   ├── components/
│   │   └── ProtectedRoute.jsx  ← Route protection
│   ├── context/
│   │   └── AuthContext.jsx   ← Auth state
│   └── App.jsx               ← Routing setup
│
├── server/
│   ├── config/db.js          ← MongoDB connection
│   ├── models/User.js        ← User schema
│   ├── routes/auth.js        ← Login/Signup endpoints
│   ├── server.js             ← Main server file
│   └── package.json
│
├── package.json              ← Frontend deps
├── SETUP_GUIDE.md           ← Detailed setup
└── QUICK_START.md           ← This file
```

---

## 🔧 Features

- ✅ User Registration with validation
- ✅ Secure password hashing (bcryptjs)
- ✅ JWT-based authentication
- ✅ Protected routes (Dashboard requires login)
- ✅ MongoDB data persistence
- ✅ Responsive design (Tailwind CSS)
- ✅ Error handling & validation

---

## ❌ Troubleshooting

### "MongoDB connection error"
- Windows: Check Services for MongoDB
- Make sure port 27017 is available
- Or use MongoDB Atlas

### "CORS Error"
- Make sure backend is running on port 5000
- Make sure frontend is running on port 5173

### "Cannot POST /api/auth/signup"
- Backend server might not be running
- Check that it says "Server running on http://localhost:5000"

### "Port already in use"
- Close other apps using port 5000 or 5173
- Or change ports in server.js and vite.config.js

---

## 📚 Next Steps

- **Customize**: Update colors, fonts in Tailwind
- **Add Features**: Profile picture, password reset, etc.
- **Deploy**: Use Render/Railway for backend, Vercel for frontend
- **Production**: Change JWT_SECRET, add .env file, enable HTTPS

---

## 📞 Need Help?

Check `SETUP_GUIDE.md` for:
- Detailed setup instructions
- API endpoint details
- Complete troubleshooting
- Security considerations
- Technology stack details

---

**Everything is ready to run!** Start with step 1️⃣ above. 🎉
