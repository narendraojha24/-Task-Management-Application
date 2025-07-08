8# 📋 Task Management Application

A full-stack MERN application for managing personal tasks with authentication, filtering, and CRUD operations.

---

## 🚀 Tech Stack

| Frontend      | Backend        | Database |
| :------------ | :------------- | :------- |
| React.js (Vite) | Node.js, Express.js | MongoDB (Mongoose ORM) |
| Axios, React Router | JWT Authentication | |

---

## 🛠 Setup Instructions

### Backend Setup

1. **Navigate to Backend folder**

```bash
cd Backend
```

2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file**

```env
PORT=5000
MONGO_URI=your_mongodb_connection_url
JWT_SECRET=your_jwt_secret
```

4. **Run Backend Server**

```bash
npm run dev
```

Backend will run on `http://localhost:5000/`.

---

### Frontend Setup

1. **Navigate to Client folder**

```bash
cd client
```

2. **Install dependencies**

```bash
npm install
```

3. **Run Frontend**

```bash
npm run dev
```

Frontend will run on `http://localhost:5173/`.

---

## 🧩 Brief Explanation of Technical Choices and Architecture

- **Frontend:**  
  - React with Functional Components and Hooks (useState, useEffect, useContext, Custom Hooks).
  - Axios for making API requests.
  - React Router DOM for routing (Login, Register, Dashboard).
  - CSS for styling (without external frameworks like Tailwind).
  
- **Backend:**  
  - Express.js for building RESTful APIs.
  - MongoDB with Mongoose ODM for schema modeling.
  - JWT for authentication (stored securely in HTTP-only cookies).
  - Middleware for authentication (`protect` function).
  - Error Handling middlewares.


## 🗄️ Database Schema Description

### User Schema (`users` collection)

| Field     | Type    | Description          |
| :-------- | :------ | :------------------- |
| `_id`     | ObjectId | MongoDB Unique ID     |
| `name`    | String  | User's name            |
| `email`   | String  | Unique email address   |
| `password`| String  | Hashed password        |

---

### Task Schema (`tasks` collection)

| Field        | Type     | Description               |
| :----------- | :------- | :------------------------ |
| `_id`        | ObjectId | MongoDB Unique ID          |
| `userId`     | ObjectId | Associated User ID (Reference) |
| `title`      | String   | Task title                 |
| `description`| String   | Task description           |
| `status`     | String   | 'completed' / 'incomplete' |
| `priority`   | String   | 'Low' / 'Medium' / 'High'  |
| `createdAt`  | Date     | Auto-generated creation date |

---

## 🖥️ How to Run the Application Locally

1. **Start Backend first**

```bash
cd Backend
npm install
npm run dev
```

2. **Start Frontend**

```bash
cd client
npm install
npm run dev
```





