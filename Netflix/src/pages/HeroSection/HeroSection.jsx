import React from "react";
import "./HeroSection.css";
import EmailBar from "../../components/EmailBar/EmailBar";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="container hero-content">
          <h1 className="hero-title">
            Unlimited movies,
            <br />
            shows, and more
          </h1>

          <p className="hero-sub">
            Watch anywhere. Cancel anytime. Starts at ₹149.
          </p>

 
          <EmailBar/>
        </div>
      </div>
    </section>
  );
}
