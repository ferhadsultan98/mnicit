import React from "react";
import "../../Styles/Home.scss";
import HomeVideo from "../../../public/assets/homeland.mp4";

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
          <button className="button">
            Apply Now
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
