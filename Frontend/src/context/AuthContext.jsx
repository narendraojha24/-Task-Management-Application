import { createContext, useContext, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")));
  const navigate = useNavigate();

  const login = async (email, password) => {
    const res = await api.post("/auth/login", { email, password });
    localStorage.setItem("user", JSON.stringify(res.data));
    api.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
    setUser(res.data);
    navigate("/");
  };

  const register = async (email, password) => {
    await api.post("/auth/register", { email, password });
    navigate("/login");
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    delete api.defaults.headers.common["Authorization"];
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
