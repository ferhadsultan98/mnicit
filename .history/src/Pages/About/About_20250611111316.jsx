import React, { useRef } from "react";
import {
  Code,
  Shield,
  Zap,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import "../../Styles/AboutSection.scss";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();
  const contactRef = useRef(null);

  const teamMembers = [
    {
      name: t("about.teamMembers.0.name"),
      position: t("about.teamMembers.0.position"),
      email: t("about.teamMembers.0.email"),
    },
    {
      name: t("about.teamMembers.1.name"),
      position: t("about.teamMembers.1.position"),
      email: t("about.teamMembers.1.email"),
    },
    {
      name: t("about.teamMembers.2.name"),
      position: t("about.teamMembers.2.position"),
      email: t("about.teamMembers.2.email"),
    },
    {
      name: t("about.teamMembers.3.name"),
      position: t("about.teamMembers.3.position"),
      email: t("about.teamMembers.3.email"),
    },
  ];

  const achievements = t("about.achievements", { returnObjects: true });
  const features = t("about.features", { returnObjects: true });

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="aboutSection" id="about">
      <div className="container">
        <div className="headerContent">
          <div className="headerText">
            <h2 className="mainTitle">{t("about.title")}</h2>
            <p className="subtitle">{t("about.subtitle")}</p>
          </div>
          <div className="headerVisual">
            <div className="visualElement">
              <div className="floatingCard">
                <Code className="cardIcon" />
                <span>{t("about.visuals.innovation")}</span>
              </div>
              <div className="floatingCard">
                <Shield className="cardIcon" />
                <span>{t("about.visuals.security")}</span>
              </div>
              <div className="floatingCard">
                <Zap className="cardIcon" />
                <span>{t("about.visuals.performance")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mainContent">
          <div className="contentText">
            <h3 className="contentTitle">{t("about.contentTitle")}</h3>
            <p className="contentDescription">{t("about.contentDescription")}</p>

            <div className="featuresList">
              {features.map((feature, index) => (
                <div key={index} className="featureItem">
                  <CheckCircle className="checkIcon" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button
              className="ctaButton"
              ref={contactRef}
              onClick={scrollToContact}
            >
              <span>{t("about.ctaButton")}</span>
              <ArrowRight className="buttonIcon" />
            </button>
          </div>

          <div className="contentVisual">
            <div className="visualCard">
              <div className="cardHeader">
                <Users className="cardHeaderIcon" />
                <span>{t("about.teamTitle")}</span>
              </div>
              <div className="cardContent">
                <p>{t("about.teamDescription")}</p>
                <div className="teamStats">
                  <div className="statItem">
                    <Award className="statIcon" />
                    <span>{t("about.teamStats.certified")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="clientsSection"></div>

        {/* <div className="achievementsSection">
          <div className="achievementsGrid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievementCard">
                <div className="achievementNumber">{achievement.number}</div>
                <div className="achievementLabel">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;