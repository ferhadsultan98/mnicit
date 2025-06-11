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