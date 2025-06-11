import React from "react";
import "../../Styles/Home.scss";
import HomeVideo from "../../../public/assets/homeland.mp4";
import { IoIosArrowDropright } from "react-icons/io";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home">
      <div className="hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src={HomeVideo} type="video/mp4" />
        </video>
        <div className="hero-content">
          <h1>{t("heading")}</h1>
          <p>{t("paragraph")}</p>
          <button className="ctaButtonHome">
            {t("button")}
            <IoIosArrowDropright className="ctaİconHome" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;