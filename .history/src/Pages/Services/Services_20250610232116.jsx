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
} from "react-icons/ci";
import "../../Styles/ServicesSection.scss";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const { t } = useTranslation();

  const servicesData = t("services.servicesData", { returnObjects: true }).map(
    (service, index) => ({
      ...service,
      icon: [
        <FaLaptopCode />,
        <FaCogs />,
        <FaDatabase />,
        <FaNetworkWired />,
        <FaCloud />,
        <FaMobile />,
        <FaChartLine />,
        <FaNetworkWired />,
        <FaCloud />,
      ][index],
    })
  );

  return (
    <section className="servicesSection" id="services">
      <div className="servicesContainer">
        <div className="servicesHeader">
          <h2 className="servicesTitle">{t("services.title")}</h2>
          <p className="servicesSubtitle">{t("services.subtitle")}</p>
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
          <p className="servicesFooterText">{t("services.footerText")}</p>
          <button className="ctaButton">{t("services.ctaButton")}</button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;