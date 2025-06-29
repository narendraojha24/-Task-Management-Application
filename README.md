# 📋 Task Management Application

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

- **Architecture Overview:**
  ```
  Frontend (React)
      ↓ (Axios API calls)
  Backend (Node + Express)
      ↓
  MongoDB Database
  ```

---

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

3. **Visit the App**

Open your browser and go to:

```
http://localhost:5173/
```

✅ Now you can register, login, create tasks, update them, delete them, and filter by status!

---

## 🌱 Seed Data for Testing

You can use the following **test users** and **sample tasks** after registration:

### Test Users

| Name         | Email               | Password  |
| :----------- | :------------------- | :-------- |
| Alice Johnson | alice@example.com    | 123456    |
| Bob Smith     | bob@example.com      | 123456    |
| Charlie Brown | charlie@example.com  | 123456    |

---

### Sample Tasks

| Title               | Description              | Priority | Status     |
| :------------------ | :------------------------ | :------- | :--------- |
| Complete Assignment | Finish the React project   | High     | Incomplete |
| Buy Groceries       | Milk, Bread, Eggs          | Medium   | Completed  |
| Morning Exercise    | Yoga and Meditation        | Low      | Incomplete |

---

## 📌 API Routes Summary

| Method | Route                   | Description         |
| :----- | :---------------------- | :------------------ |
| POST   | `/api/users/register`    | Register a user     |
| POST   | `/api/users/login`       | Login a user        |
| POST   | `/api/users/logout`      | Logout user         |
| GET    | `/api/users/profile`     | Get user profile    |
| POST   | `/api/tasks`             | Create task         |
| GET    | `/api/tasks`             | Get all tasks       |
| PUT    | `/api/tasks/:id`         | Update task         |
| DELETE | `/api/tasks/:id`         | Delete task         |
| GET    | `/api/tasks/filter`      | Filter tasks by status |

---
