import React from "react";
import "../../Styles/Home.scss";
import HomeVideo from "../../../public/assets/homeland.mp4";
import { IoIosArrowDropright } from "react-icons/io";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src={HomeVideo} type="video/mp4" />
        </video>
        <div className="hero-content">
          <h1>İnnovasiya et, Rəqabətdə üstün ol, Uğur əldə et!</h1>
          <p>
            ERP sistemləri ilə iş proseslərinizi optimallaşdırır, daha səmərəli
            və rəqabətədavamlı hala gətiririk. Yenilikçi, etibarlı və
            fərdiləşdirilmiş həllərimizlə şirkətinizin davamlı inkişafını
            dəstəkləyir, uğurlarınıza güc qatırıq!
          </p>
          <button className="ctaButton">
            Apply Now
            <IoIosArrowDropright className="ctaİcon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
