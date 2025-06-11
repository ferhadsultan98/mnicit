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
const Footer = () => {
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
            <p className="companyDescription">
              Müasir IT həlləri və peşəkar xidmətlərlə biznesinizi gələcəyə
              hazırlayırıq. Texnologiya sahəsində 10+ il təcrübə.
            </p>
            <div className="socialLinks">
              <a href="#" className="socialLink">
                <Facebook size={20} />
              </a>
              <a href="#" className="socialLink">
                <Twitter size={20} />
              </a>
              <a href="#" className="socialLink">
                <Linkedin size={20} />
              </a>
              <a href="#" className="socialLink">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="footerSection">
            <h4>Xidmətlərimiz</h4>
            <ul className="footerLinks">
              <li>
                <a href="#">
                  <Shield size={16} /> Kibertəhlükəsizlik
                </a>
              </li>
              <li>
                <a href="#">
                  <Cloud size={16} /> Cloud Həlləri
                </a>
              </li>
              <li>
                <a href="#">
                  <Code size={16} /> Web Development
                </a>
              </li>
              <li>
                <a href="#">
                  <Server size={16} /> Server İdarəetməsi
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footerSection">
            <h4>Sürətli Keçidlər</h4>
            <ul className="footerLinks">
              <li>
                <a href="#">Haqqımızda</a>
              </li>
              <li>
                <a href="#">Portfel</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Karyera</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footerSection">
            <h4>Əlaqə</h4>
            <div className="contactInfo">
              <div className="contactItem">
                <Phone size={16} />
                <span>+994 50 123 45 67</span>
              </div>
              <div className="contactItem">
                <Mail size={16} />
                <span>info@mnicit.az</span>
              </div>
              <div className="contactItem">
                <MapPin size={16} />
                <span>Bakı, Azərbaycan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footerBottom">
          <div className="footerBottomContent">
           <p>© {new Date().getFullYear()} MN ICIT. Bütün hüquqlar qorunur.</p>
            <div className="footerBottomLinks">
              <a href="#">Məxfilik Siyasəti</a>
              <a href="#">İstifadə Şərtləri</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
