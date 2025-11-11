import React from "react";
import "./FeatureCard.css";

export default function FeatureCard({ title, subtitle, img}) {
  return (
    <section className="feature-card">
      <div className="feature-text">    
        <h3 className="feature-title">{title}</h3>
        <p className="feature-sub">{subtitle}</p>
      </div>

      <div className="feature-image">
        <img src={img} alt={title} />
      </div>
    </section>
  );
}
