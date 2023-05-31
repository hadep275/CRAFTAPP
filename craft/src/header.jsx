import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  let username = "";
  const token = localStorage.getItem("token");
  if (token) {
    const payload = token.split(".")[1];
    const decodedPayload = atob(payload);
    const { username: decodedUsername } = JSON.parse(decodedPayload);
    username = decodedUsername;
  }

  return (
    <header>
      <Link to="/" className="logo">
        Craftapp™
        <h4>
          A <i>CraftApp</i> for crafting. 
        </h4>
      </Link>
      <nav>
        {isLoggedIn ? (
          <>
            <span className="welcome-message">
              Welcome {username}!
            </span>
            <br />
            <br />
            <button onClick={handleLogout} className="button-navigation">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" class="button-navigation">
              <b>Login | </b>
            </Link>
            <Link to="/register" class="button-navigation">
              <b>Register</b>
              </Link>
          </>
        )}
      </nav>
    </header>
  );
}
