import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">AuthApp</Link>
      </div>
      <div className="nav-links">
        {user ? (
          <>
            <span className="user-greeting">Hi, <strong>{user.name}</strong></span>
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <button onClick={handleLogout} className="btn outline-btn">Logout</button>
          </>
        ) : (
          <Link to="/login" className="btn primary-btn">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
