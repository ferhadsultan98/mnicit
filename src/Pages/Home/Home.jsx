import React, { useRef } from "react";
import "../../Styles/Home.scss";
import HomeImage from "../../../public/assets/mnicit.jpg";
import { IoIosArrowDropright } from "react-icons/io";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const contactRef = useRef(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home">
      <div className="hero">
        <img src={HomeImage} alt="Hero Image" className="hero-image" />
        <div className="hero-content">
          <h1>{t("home.heading")}</h1>
          <p>{t("home.paragraph")}</p>
          <button className="ctaButtonHome" onClick={scrollToContact}>
            {t("home.button")}
            <IoIosArrowDropright className="ctaİconHome" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;