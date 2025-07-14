# Cursorr Login App

A modern full stack login page using Node.js, Express, MongoDB, and a responsive HTML/CSS/JS frontend.

## Features
- User registration and login
- Passwords hashed with bcrypt
- JWT authentication
- Modern, responsive UI

## Prerequisites
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Setup

1. **Clone or download this repository.**
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:**
   - Create a `.env` file in the root directory:
     ```env
     MONGO_URI=mongodb://localhost:27017/cursorr
     JWT_SECRET=your_jwt_secret
     ```
4. **Start MongoDB** (if not already running):
   ```bash
   mongod
   ```
5. **Start the server:**
   ```bash
   npm run dev
   ```
   Or for production:
   ```bash
   node index.js
   ```
6. **Open your browser:**
   - Go to [http://localhost:5000](http://localhost:5000)

## Project Structure
```
Cursorr/
  index.js
  models/
    User.js
  routes/
    auth.js
  public/
    index.html
    style.css
    script.js
  package.json
  .env
```

## Notes
- For production, use a strong JWT secret and secure your environment variables.
- You can expand this app with protected routes, user profiles, etc. 