import React, { useState, useEffect, useRef } from 'react';
import '../../../Styles/Header.scss';
import MNLogoDefault from '../../../../public/assets/fullwhitelogo.png';
import MNLogoScrolled from '../../../../public/assets/logo.png';
import { Spin } from 'hamburger-react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 700);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isDropdownOpen) setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const scrollToSection = (sectionId) => {
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const changeLanguage = (lng) => {
    localStorage.setItem('i18nextLng', lng);
    i18n.changeLanguage(lng);
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo" onClick={() => scrollToSection('top')}>
          <img src={MNLogoDefault} alt="MN ICIT Loqosu" />
        </div>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a
            href="#services"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('services');
            }}
          >
            {t('header.services')}
          </a>
          <a
            href="#careers"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('careers');
            }}
          >
            {t('header.careers')}
          </a>
          <a
            href="#about"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
          >
            {t('header.about')}
          </a>
          <a
            href="#contact"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            {t('header.contact')}
          </a>

          <div className="language-switcher" ref={dropdownRef}>
            <button className="lang-toggle" onClick={toggleDropdown}>
              {i18n.language.toUpperCase()} <span className="dropdown-icon">{isDropdownOpen ? '▲' : '▼'}</span>
            </button>
            <div className={`dropdown-menu ${isDropdownOpen ? 'active' : ''}`}>
              <button
                className={`dropdown-item ${i18n.language === 'az' ? 'active' : ''}`}
                onClick={() => changeLanguage('az')}
              >
                AZ
              </button>
              <button
                className={`dropdown-item ${i18n.language === 'en' ? 'active' : ''}`}
                onClick={() => changeLanguage('en')}
              >
                EN
              </button>
              <button
                className={`dropdown-item ${i18n.language === 'ru' ? 'active' : ''}`}
                onClick={() => changeLanguage('ru')}
              >
                RU
              </button>
            </div>
          </div>
        </nav>

        <div className="hamburger">
          <Spin toggled={isMenuOpen} toggle={toggleMenu} size={24} className='hamburgerIcon'/>
        </div>
      </div>
    </header>
  );
};

export default Header;