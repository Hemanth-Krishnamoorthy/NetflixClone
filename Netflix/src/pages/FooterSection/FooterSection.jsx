import React from "react";
import "./FooterSection.css";

export default function FooterSection() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <p className="footer-question">Questions? Call 000-800-919-1694</p>

        <div className="footer-links">
          <div>
            <a href="">FAQ</a><br />
            <a href="">Investor Relations</a><br />
            <a href="">Privacy</a><br />
            <a href="">Speed Test</a>
          </div>

          <div>
            <a href="">Help Centre</a><br />
            <a href="">Jobs</a><br />
            <a href="">Cookie Preferences</a><br />
            <a href="">Legal Notices</a>
          </div>

          <div>
            <a href="">Account</a><br />
            <a href="">Ways to Watch</a><br />
            <a href="">Corporate Information</a><br />
            <a href="">Only on Netflix</a>
          </div>

          <div>
            <a href="">Media Centre</a><br />
            <a href="">Terms of Use</a><br />
            <a href="">Contact Us</a>
          </div>
        </div>

        <div className="footer-bottom">
          <select className="footer-language">
            <option>English</option>
            <option>Tamil</option>
          </select>

          <p className="footer-copy">Netflix India</p>
        </div>
      </div>
    </footer>
  );
}
