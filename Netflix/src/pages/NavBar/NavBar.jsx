import React from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="navbar-logo">NETFLIX</div>

      <div className="navbar-right">
        <select className="language-select">
          <option value="en">English</option>
          <option value="hi">Tamil</option>
        </select>
        <button onClick={() => navigate("/signin")} className="signin-btn">
          Sign In
        </button>
      </div>
    </header>
  );
}

export default NavBar;
