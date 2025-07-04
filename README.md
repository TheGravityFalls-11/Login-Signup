 🔐 Login & Signup System - MERN Stack

This is a full-stack Login & Signup system built using the MERN stack (MongoDB, Express, Vite, and Node.js). It features full DB connectivity, secure authentication, and a modular folder structure for easy expansion.

--------------------------------------------------

📁 Project Structure

Login_SignUp_mern/
├── client/                 # Frontend (Vite + JS/HTML/CSS)
│   ├── public/
│   ├── src/
│   ├── index.html
│   ├── vite.config.js
│   ├── eslint.config.js
│   └── package.json
│
├── server/                 # Backend (Node.js + Express + MongoDB)
│   ├── models/             # Mongoose schemas (e.g., User model)
│   ├── index.js            # Entry point for backend
│   └── package.json
│
├── .gitignore
└── README.md

--------------------------------------------------

🚀 Getting Started

1. Clone the Repository

git clone https://github.com/TheGravityFalls-11/Login_SignUp_mern.git
cd Login_SignUp_mern

2. Install Dependencies

Client:
cd client
npm install

Server:
cd ../server
npm install

3. Run the Project

Start Backend:
cd server
node index.js

Start Frontend (in a new terminal):
cd client
npm run dev

--------------------------------------------------

🧠 Features

🔐 User Signup  
🔐 User Login  
🔐 Password Hashing (bcrypt recommended)  
✅ Form Validations  
🧠 MongoDB Integration with Mongoose  
📡 Frontend-Backend Communication via APIs  
💻 Clean folder structure (MERN-ready)

--------------------------------------------------

📌 Tech Stack

Frontend:  Vite + HTML + JavaScript + CSS  
Backend:   Node.js + Express.js  
Database:  MongoDB + Mongoose

--------------------------------------------------

🙌 Contributing

Feel free to fork this repo, make improvements, and submit a pull request.

--------------------------------------------------

📃 License

This project is open-source and available under the MIT License.
