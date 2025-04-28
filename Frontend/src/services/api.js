// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true,  // important to allow cookies (JWT tokens)
});

export default api;
