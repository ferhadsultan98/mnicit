import React from 'react';
import '../../Styles/Home.scss';
import HomeVideo from '../../../public/assets/homeland.mp4'

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src={HomeVideo} type="video/mp4" />
        </video>
        <div className="hero-content">
          <h1>
İnnovasiya et, Rəqabətdə üstün ol, Uğur əldə et!</h1>
          <p>Biz biznesinizi gücləndirmək üçün bulud hesablamaları, kiber təhlükəsizlik, proqram təminatı inkişafı və İT konsaltinq daxil olmaqla qabaqcıl İT həlləri təqdim edirik.</p>
          <button className="cta-btn">Ətraflı Öyrən</button>
        </div>
      </div>
    </div>
  );
};

export default Home;