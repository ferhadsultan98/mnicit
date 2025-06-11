import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Server,
  Shield,
  Cloud,
  Code,
} from "lucide-react";
import "../../../Styles/Footer.scss";
import MNLogo from "../../../../public/assets/fullwhitelogo.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const services = t("footer.services", { returnObjects: true });
  const quickLinks = t("footer.quickLinks", { returnObjects: true });
  const contactInfo = t("footer.contactInfo", { returnObjects: true });
  const socialLinks = t("footer.socialLinks", { returnObjects: true });

  return (
    <footer className="itFooter">
      <div className="footerContainer">
        {/* Main Footer Content */}
        <div className="footerContent">
          {/* Company Info */}
          <div className="footerSection">
            <div className="footerLogo">
              <img src={MNLogo} alt="MNLogo" />
            </div>
            <p className="companyDescription">{t("footer.companyDescription")}</p>
            <div className="socialLinks">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.link} className="socialLink">
                  {[<Facebook size={20} />, <Twitter size={20} />, <Linkedin size={20} />, <Instagram size={20} />][index]}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="footerSection">
            <h4>{t("footer.servicesTitle")}</h4>
            <ul className="footerLinks">
              {services.map((service, index) => (
                <li key={index}>
                  <a href={service.link}>
                    {[<Shield size={16} />, <Cloud size={16} />, <Code size={16} />, <Server size={16} />][index]} {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footerSection">
            <h4>{t("footer.quickLinksTitle")}</h4>
            <ul className="footerLinks">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footerSection">
            <h4>{t("footer.contactTitle")}</h4>
            <div className="contactInfo">
              {contactInfo.map((contact, index) => (
                <div key={index} className="contactItem">
                  {[<Phone size={16} />, <Mail size={16} />, <MapPin size={16} />][index]}
                  <span>{contact.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footerBottom">
          <div className="footerBottomContent">
           <p>© {new Date().getFullYear()} MN ICIT. Bütün hüquqlar qorunur.</p>
            <div className="footerBottomLinks">
              {t("footer.bottomLinks", { returnObjects: true }).map((link, index) => (
                <a key={index} href={link.link}>{link.name}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;