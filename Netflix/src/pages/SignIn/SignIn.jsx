import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Please fill in both email and password.");
      return;
    }

    const validEmail = / \S+@\S+\.\S+/.test(email);
    if (!validEmail) {
      alert("Please enter a valid email address.");
      return;
    }

    
    alert(`Signed in as: ${email}`);


    navigate("/");
  };

  return (
    <div className="signin-page">
      <div className="signin-backdrop" />

      <div className="signin-box">
        <div className="signin-header">
          <div className="signin-logo">NETFLIX</div>
        </div>

        <div className="signin-content">
          <h2>Sign In</h2>

          <form className="signin-form" onSubmit={handleSignIn}>
            <input
              type="email"
              placeholder="Email or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />

            <button type="submit" className="signin-submit">
              Sign In
            </button>
          </form>

          <div className="signin-extra">
            <p>
              New to Netflix?{" "}
              <span className="signin-link" onClick={() => navigate("/")}>
                Sign up now
              </span>
            </p>
            <p className="signin-note">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
