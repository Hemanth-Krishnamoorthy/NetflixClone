import React from "react";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import "./InfoSection.css";

export default function InfoSection() {
  const features = [
    {
      id: 1,
      title: "Enjoy on your TV.",
      subtitle:
        "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      img: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
    },
    {
      id: 2,
      title: "Download your shows to watch offline.",
      subtitle:
        "Save your favourites easily and always have something to watch.",
      img: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
      reverse: true,
    },
    {
      id: 3,
      title: "Watch everywhere.",
      subtitle:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      img: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png",
    },
  ];

  return (
    <div className="info-section">
        <h1 className="Text">MORE REASON TO JOIN</h1>
      {features.map((f) => (
        <FeatureCard key={f.id} {...f} />
      ))}
    </div>
  );
}
    