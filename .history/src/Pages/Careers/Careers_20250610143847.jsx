import React, { useState } from 'react';
import { 
  FaCode, 
  FaCloud, 
  FaShieldAlt, 
  FaMobile, 
  FaDatabase, 
  FaCogs,
  FaMapMarkerAlt,
  FaClock,
  FaDollarSign,
  FaUsers,
  FaHeart,
  FaGraduationCap,
  FaCoffee,
  FaGamepad,
  FaMedkit,
  FaPlane,
  FaSearch,
  FaFilter,
  FaChevronRight
} from 'react-icons/fa';
import '../../Styles/CareersSection.scss';

const CareersSection = () => {


 

  const benefits = [
    { icon: <FaDollarSign />, title: 'Rəqabətli Maaş', desc: 'Sektor standartından yuxarı maaş' },
    { icon: <FaHeart />, title: 'Səhiyyə Sığortası', desc: 'Xüsusi səhiyyə sığortası və yoxlama' },
    { icon: <FaGraduationCap />, title: 'Təhsil Dəstəyi', desc: 'Konfrans, kurs və sertifikat dəstəyi' },
    { icon: <FaCoffee />, title: 'Çevik İş', desc: 'Uzaqdan/hibrid iş seçimi' },
    { icon: <FaGamepad />, title: 'Oyun Otağı', desc: 'PS5, masa tenisi, dart' },
    { icon: <FaPlane />, title: 'İllik Məzuniyyət', desc: '25+ gün illik məzuniyyət hüququ' }
  ];




  return (
    <section className="careersSection" id='careers'>
      <div className="careersContainer">
        <div className="careersHeader">
          <h2 className="careersTitle">Karyeranızı Bizimlə Formalaşdırın</h2>
          <p className="careersSubtitle">
            Texnologiyanın gələcəyini formalaşdıran komandamıza qoşulun. İnnovativ layihələr, 
            gözəl iş yoldaşları və inkişaf imkanları sizi gözləyir.
          </p>
        </div>

        <div className="cultureSection">
          <div className="cultureContent">
            <div className="cultureText">
              <h3>Niyə Bizimlə İşləməlisiniz?</h3>
              <p>
                Texnologiyaya həvəsli, daim öyrənən və inkişaf edən komandanın bir hissəsi olun. 
                Müasir texnologiyalarla işləyin, yaradıcılığınızı göstərin və karyeranızı 
                növbəti səviyyəyə qaldırın.
              </p>
            </div>
            <div className="cultureStats">
              <div className="statItem">
                <span className="statNumber">50+</span>
                <span className="statLabel">Komanda Üzvü</span>
              </div>
              <div className="statItem">
                <span className="statNumber">100+</span>
                <span className="statLabel">Tamamlanmış Layihə</span>
              </div>
              <div className="statItem">
                <span className="statNumber">5+</span>
                <span className="statLabel">İllik Təcrübə</span>
              </div>
            </div>
          </div>
        </div>

        <div className="benefitsSection">
          <h3 className="benefitsTitle">İşçi Üstünlükləri</h3>
          <div className="benefitsGrid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefitCard">
                <div className="benefitIcon">{benefit.icon}</div>
                <h4 className="benefitTitle">{benefit.title}</h4>
                <p className="benefitDesc">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;