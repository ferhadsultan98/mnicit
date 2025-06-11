import React from "react";
import {
  FaLaptopCode,
  FaCloud,
  FaShieldAlt,
  FaMobile,
  FaDatabase,
  FaCogs,
  FaNetworkWired,
  FaChartLine,
  FaHeadset,
} from "react-icons/fa";
import "../../Styles/ServicesSection.scss";

const ServicesSection = () => {
  const servicesData = [
    {
      id: 1,
      icon: <FaLaptopCode />,
      title: "SAP Sistemlərinin Tətbiki və Texniki Dəsteyi",
      description: "SAP sistemlərinin tətbiki və texniki dəsteyi xidmətləri.",
      features: [
        "Tətbik Optimizasiyası",
        "Texniki Dəstək",
        "Potensial Problemlər",
      ],
    },
    {
      id: 2,
      icon: <FaCogs />,
      title: "SAP Modullarının Təkmilləşdirilməsi və Konfiqurasiyası",
      description: "SAP modullarının təkmilləşdirilməsi və konfiqurasiyası.",
      features: [
        "Fəaliyyət Optimizasiyası",
        "Modul Konfiqurasiyası",
        "Proses Standartlaşdırma",
      ],
    },
    {
      id: 3,
      icon: <FaDatabase />,
      title: "SAP ERP Haqqında Ətraflı İşçi Təlimi",
      description: "SAP ERP haqqında ətraflı işçi təlimi xidmətləri.",
      features: [
        "Proqramlama Təlimi",
        "Sistem İntegrasiyası",
        "İstifadəçi Dəstəyi",
      ],
    },
    {
      id: 4,
      icon: <FaNetworkWired />,
      title: "Texnologiya Həlləri və İntegrasiya",
      description: "Texnologiya həlləri və inteqrasiya xidmətləri.",
      features: [
        "Məhsul Optimizasiyası",
        "İntegrasiya Dəstəyi",
        "Məlumat Fasilitəsi",
      ],
    },
    {
      id: 5,
      icon: <FaCloud />,
      title: "Kompleks Məsləhət Xidmətləri",
      description: "Kompleks məsləhət xidmətləri təklif edirik.",
      features: ["Strateji Məsləhət", "Optimizasiya Dəstəyi", "Bazar Təhlili"],
    },
    {
      id: 6,
      icon: <FaMobile />,
      title: "Proqram və Veb Xidməti",
      description: "Proqram və veb xidmətləri təklif edirik.",
      features: [
        "Tətbiq İnkişafı",
        "Veb Xidmət İntegrasiyası",
        "Proses Optimizasiyası",
      ],
    },
    {
      id: 7,
      icon: <FaChartLine />,
      title: "UX/UI və Qrafik Dizayn",
      description: "UX/UI və qrafik dizayn xidmətləri.",
      features: [
        "İstifadəçi Təcrübəsi",
        "Qrafik Dizayn",
        "Vizual İdentifikasiya",
      ],
    },
    {
      id: 8,
      icon: <FaNetworkWired />,
      title: "Şəbəkə və Sistem Arxitektura Həlləri",
      description: "Şəbəkə və sistem arxitektura həlləri.",
      features: [
        "İnfrastruktur Dizaynı",
        "Performans Optimizasiyası",
        "Məlumat Təhlükəsizliyi",
      ],
    },
    {
      id: 9,
      icon: <FaCloud />,
      title: "Bulud və IT İnfrastruktur Xidmətləri",
      description: "Bulud və IT infrastruktur xidmətləri.",
      features: [
        "Məlumat Saxlama",
        "İnfrastruktur İdarəetmə",
        "Performans Təkmilləşdirmə",
      ],
    },
  ];

  return (
    <section className="servicesSection" id="services">
      <div className="servicesContainer">
        <div className="servicesHeader">
          <h2 className="servicesTitle">Xidmətlərimiz</h2>
          <p className="servicesSubtitle">
            Texnologiya dünyasının hər sahəsində ixtisaslaşmış komandamızla sizə
            ən yaxşı həlləri təklif edirik
          </p>
        </div>

        <div className="servicesGrid">
          {servicesData.map((service) => (
            <div key={service.id} className="serviceCard">
              <div className="serviceCardInner">
                <div className="serviceCardFront">
                  <div className="serviceIcon">{service.icon}</div>
                  <h3 className="serviceTitle">{service.title}</h3>
                  <p className="serviceDescription">{service.description}</p>
                </div>

                <div className="serviceCardBack">
                  <h3 className="serviceTitle">{service.title}</h3>
                  <ul className="serviceFeatures">
                    {service.features.map((feature, index) => (
                      <li key={index} className="serviceFeature">
                        <span className="featureBullet">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="servicesFooter">
          <p className="servicesFooterText">
            Layihəniz üçün xüsusi həll axtarırsınız? Dərhal əlaqə saxlayın!
          </p>
          <button className="ctaButton">Pulsuz Məsləhət Al</button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
