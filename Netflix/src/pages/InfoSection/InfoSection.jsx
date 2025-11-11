import React, { useState, useEffect } from "react";
import axios from "axios";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import "./InfoSection.css";

export default function InfoSection() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {

    const fetchFeatures = async () => {
      try {
        const response = await axios.get("http://localhost:3000/features");
        setFeatures(response.data);
      } catch (error) {
        console.error("Error fetching features:", error);
      }
    };

    fetchFeatures();
  }, []);

  return (
    <div className="info-section">
      <h1 className="Text">MORE REASON TO JOIN</h1>
      {features.map((f) => (
        <FeatureCard key={f.id} {...f} />
      ))}
    </div>
  );
}
