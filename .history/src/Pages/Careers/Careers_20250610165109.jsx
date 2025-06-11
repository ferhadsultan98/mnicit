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
    { icon: <FaDollarSign />, title: 'İT Sənayesində Karyera Yüksəlişi' },
    { icon: <FaHeart />, title: 'İnnovativ İş Mühiti və Komanda Mədəniyyəti' },
    { icon: <FaGraduationCap />, title: 'Təhsil Dəstəyi' },
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
               
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;