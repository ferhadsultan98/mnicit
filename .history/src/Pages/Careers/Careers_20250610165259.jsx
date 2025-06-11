import React from "react";
import "../../Styles/CareersSection.scss";
import { AiOutlineRise } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";

const CareersSection = () => {
  const benefits = [
    { icon: <AiOutlineRise />, title: "İT Sənayesində Karyera Yüksəlişi" },
    {
      icon: <HiOutlineUserGroup />,
      title: "İnnovativ İş Mühiti və Komanda Mədəniyyəti",
    },
    {
      icon: <FaGraduationCap />,
      title: "Çevik İş Şərtləri və Davamlı Öyrənmə",
    },
  ];

  return (
    <section className="careersSection" id="careers">
      <div className="careersContainer">
        <div className="careersHeader">
          <h2 className="careersTitle">Karyeranızı Bizimlə Formalaşdırın</h2>
          <p className="careersSubtitle">
            Texnologiyanın gələcəyini formalaşdıran komandamıza qoşulun.
            İnnovativ layihələr, gözəl iş yoldaşları və inkişaf imkanları sizi
            gözləyir.
          </p>
        </div>

        <div className="cultureSection">
          <div className="cultureContent">
            <div className="cultureText">
              <h3>Niyə Bizimlə İşləməlisiniz?</h3>
              <p>
                Texnologiyaya həvəsli, daim öyrənən və inkişaf edən komandanın
                bir hissəsi olun. Müasir texnologiyalarla işləyin,
                yaradıcılığınızı göstərin və karyeranızı növbəti səviyyəyə
                qaldırın.
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
