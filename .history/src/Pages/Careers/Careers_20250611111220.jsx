import React from "react";
import "../../Styles/CareersSection.scss";
import { AiOutlineRise } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { GrNetwork } from "react-icons/gr";
import { useTranslation } from "react-i18next";

const CareersSection = () => {
  const { t } = useTranslation();

  const benefits = t("careers.benefits", { returnObjects: true }).map(
    (benefit, index) => ({
      ...benefit,
      icon: [
        <AiOutlineRise />,
        <HiOutlineUserGroup />,
        <GrNetwork />,
      ][index],
    })
  );

  return (
    <section className="careersSection" id="careers">
      <div className="careersContainer">
       

        <div className="cultureSection">
          <div className="cultureContent">
            <div className="cultureText">
              <h3>{t("careers.cultureTitle")}</h3>
              <p>{t("careers.cultureText")}</p>
            </div>
            <div className="cultureStats">
              {t("careers.cultureStats", { returnObjects: true }).map(
                (stat, index) => (
                  <div key={index} className="statItem">
                    <span className="statNumber">{stat.number}</span>
                    <span className="statLabel">{stat.label}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div className="benefitsSection">
          <h3 className="benefitsTitle">{t("careers.benefitsTitle")}</h3>
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