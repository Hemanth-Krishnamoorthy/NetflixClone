import React from "react";
import NavBar from "../NavBar/NavBar";
import HeroSection from "../HeroSection/HeroSection";
import InfoSection from "../InfoSection/InfoSection";
import FAQSection from "../FAQSection/FAQSection";
import "./NetflixPage.css";
import FooterSection from "../FooterSection/FooterSection";
import EmailBar from "../../components/EmailBar/EmailBar";
import TrendingSection from "../TrendingSection/TrendingSection";


function NetflixPage() {
  return (
    <div className="netflix-page">
      <NavBar />
      <HeroSection/>
      <TrendingSection/>
      <InfoSection/>
      <FAQSection/>
      <EmailBar/>
      <FooterSection/>
    </div>
  );
}

export default NetflixPage;
