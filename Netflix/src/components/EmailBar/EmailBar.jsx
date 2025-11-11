import React, { useState } from "react";
import "./EmailBar.css";

export default function EmailBar() {
  const [email, setEmail] = useState("");

  const handleGetStarted = () => {
    if (!email.trim()) {
      alert("Please enter your email address.");
      return;
    }
    alert(`You entered: ${email}`);
    setEmail("");
  };

  return (
    <section className="email-section">
      <h3 className="email-heading">
        Ready to watch? Enter your email to create or restart your membership.
      </h3>

      <div className="email-container">
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="email-input"
        />
        <button className="email-button" onClick={handleGetStarted}>
          Get Started <span className="arrow">➜</span>
        </button>
      </div>
    </section>
  );
}
