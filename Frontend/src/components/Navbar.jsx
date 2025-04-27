import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="navbar">
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>Task Manager</Link>
      {user && <button onClick={logout}>Logout</button>}
    </div>
  );
};

export default Navbar;
