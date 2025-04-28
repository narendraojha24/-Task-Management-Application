# Task Management Application 📝

A full-stack web application that allows users to register, log in, and manage their personal tasks — with features like adding, updating, deleting, and filtering tasks.

---

## 📦 Tech Stack

| Layer | Technology |
|:--|:--|
| Frontend | React.js (with Hooks, Context API, Axios) |
| Backend | Node.js, Express.js |
| Database | MongoDB (with Mongoose) |
| Authentication | JWT (JSON Web Tokens) |
| Styling | CSS Modules |

---

## 🛠 Setup Instructions

### ⚙️ Prerequisites
- Node.js (v14+ recommended)
- MongoDB (Atlas cloud database or local installation)

---

### 🚀 Frontend Setup (`client/`)

```bash
cd client
npm install
npm run dev


🚀 Backend Setup (server/)

cd server
npm install
npx nodemon server.js


🔧 How to Run Locally (Step-by-Step) :

Clone the repository.
Set up backend first: install dependencies, configure .env, and start server.
Then set up frontend: install dependencies and run dev server.
Make sure backend (port 5000) is running before frontend.
Visit http://localhost:5173/ to use the app.

📊 Database Schema
➡️ User Model

Field	Type	Description
email	String	User email (unique)
password	String	Hashed password
➡️ Task Model

Field	Type	Description
title	String	Title of the task
description	String	Details about the task
status	String	"incomplete" (default) or "complete"
priority	String	"Low", "Medium", "High"
createdAt	Date	Timestamp when the task was created
userId	ObjectId	Reference to the User who created the task

🏗️ Technical Choices & Architecture :

React with Hooks and Context API: Simplifies state management, especially for authentication.
Axios: Easy HTTP requests from frontend to backend.
Node.js + Express.js: Lightweight backend, perfect for building RESTful APIs.
MongoDB with Mongoose: Flexible NoSQL database to store user and task data.
JWT Authentication: Secure, stateless authentication using tokens.
CSS Modules: Local scoped CSS to prevent style conflicts.
Folder Structure: Clean separation of concerns — Components, Pages, Context, Services, etc.

✨ Features Implemented:

User registration & login with JWT
Protected routes (Tasks only accessible after login)
Create, Read, Update (mark complete), and Delete Tasks (CRUD)
Filter tasks by status (All, Active, Completed)
Basic error handling (invalid login, etc.)
Responsive and user-friendly UI






