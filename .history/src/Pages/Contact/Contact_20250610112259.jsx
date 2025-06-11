import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, User, Building, CheckCircle, Globe, Linkedin, Twitter, Facebook } from 'lucide-react';
import emailjs from '@emailjs/browser';
import '../../Styles/ContacSection.scss';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="contactIcon" />,
      title: "E-poçt Ünvanı",
      details: ["info@itservices.com", "support@itservices.com"],
      link: "mailto:info@itservices.com"
    },
    {
      icon: <Phone className="contactIcon" />,
      title: "Telefon Nömrəsi",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="contactIcon" />,
      title: "Ofis Ünvanı",
      details: ["123 Texnologiya Küçəsi", "San Fransisko, CA 94102"],
      link: "https://maps.google.com"
    },
    {
      icon: <Clock className="contactIcon" />,
      title: "İş Saatları",
      details: ["B.e - C.: 09:00 - 18:00", "Şənbə: 10:00 - 16:00"],
      link: null
    }
  ];

  const services = [
    "Veb İnkişaf",
    "Mobil Tətbiq İnkişafı",
    "Bulud Həlləri",
    "Kiber Təhlükəsizlik",
    "İT Konsaltinq",
    "Sistem İnteqrasiyası",
    "Rəqəmsal Marketinq",
    "Digər"
  ];

  const socialLinks = [
    { icon: <Linkedin className="socialIcon" />, name: "LinkedIn", link: "#" },
    { icon: <Twitter className="socialIcon" />, name: "Twitter", link: "#" },
    { icon: <Facebook className="socialIcon" />, name: "Facebook", link: "#" },
    { icon: <Globe className="socialIcon" />, name: "Veb Sayt", link: "#" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_2ofros8',
        'template_pzqir1t',
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          service: formData.service,
          message: formData.message
        },
        '1Q_1dNInzrruztMRK'
      );

      setIsSubmitting(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          message: ''
        });
      }, 3000);
    } catch (error) {
      console.error('EmailJS xətası:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contactSection" id='contact'>
      <div className="container">
        <div className="headerContent">
          <h2 className="mainTitle">
            Bizimlə Əlaqə
          </h2>
          <p className="subtitle">
            Biznesinizi innovativ İT həlləri ilə dəyişdirməyə hazırsınızmı? 
            Layihənizi müzakirə edək və birlikdə möhtəşəm bir şey yaradaq.
          </p>
        </div>

        <div className="mainContent">
          <div className="formSection">
            <div className="formCard">
              <div className="formHeader">
                <MessageCircle className="formHeaderIcon" />
                <div>
                  <h3 className="formTitle">Bizə mesaj göndərin</h3>
                  <p className="formDescription">24 saat ərzində sizə cavab verəcəyik</p>
                </div>
              </div>

              {isSubmitted ? (
                <div className="successMessage">
                  <CheckCircle className="successIcon" />
                  <h4>Mesaj Uğurla Göndərildi!</h4>
                  <p>Bizimlə əlaqə saxladığınız üçün təşəkkür edirik. Tezliklə sizə cavab verəcəyik.</p>
                </div>
              ) : (
                <form className="contactForm" onSubmit={handleSubmit}>
                  <div className="formRow">
                    <div className="formGroup">
                      <label className="formLabel">
                        <User className="labelIcon" />
                        Tam Ad *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="formInput"
                        placeholder="Tam adınızı daxil edin"
                        required
                      />
                    </div>
                    <div className="formGroup">
                      <label className="formLabel">
                        <Mail className="labelIcon" />
                        E-poçt Ünvanı *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="formInput"
                        placeholder="E-poçt ünvanınızı daxil edin"
                        required
                      />
                    </div>
                  </div>

                  <div className="formRow">
                    <div className="formGroup">
                      <label className="formLabel">
                        <Building className="labelIcon" />
                        Şirkət Adı
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="formInput"
                        placeholder="Şirkət adınızı daxil edin"
                      />
                    </div>
                    <div className="formGroup">
                      <label className="formLabel">Xidmət Maraqları</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="formSelect"
                      >
                        <option value="">Xidmət seçin</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="formGroup">
                    <label className="formLabel">
                      <MessageCircle className="labelIcon" />
                      Layihə Təfərrüatları *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="formTextarea"
                      placeholder="Layihəniz, tələbləriniz və zaman planınız haqqında bizə məlumat verin..."
                      rows="5"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className={`submitButton ${isSubmitting ? 'submitting' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner" />
                        Göndərilir...
                      </>
                    ) : (
                      <>
                        <Send className="buttonIcon" />
                        Mesaj Göndər
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="infoSection">
            <div className="infoCards">
              {contactInfo.map((info, index) => (
                <div key={index} className="infoCard">
                  <div className="infoIconWrapper">
                    {info.icon}
                  </div>
                  <div className="infoContent">
                    <h4 className="infoTitle">{info.title}</h4>
                    <div className="infoDetails">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="infoDetail">
                          {info.link ? (
                            <a href={info.link} className="infoLink">{detail}</a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="socialSection">
              <h4 className="socialTitle">Bizi İzləyin</h4>
              <div className="socialLinks">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.link} className="socialLink" title={social.name}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;