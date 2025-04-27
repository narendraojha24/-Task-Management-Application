import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // change if different
});

const user = JSON.parse(localStorage.getItem("user"));
if (user) {
  api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
}

export default api;
