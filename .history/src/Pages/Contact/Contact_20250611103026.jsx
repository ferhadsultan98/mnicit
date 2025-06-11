import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, User, Building, CheckCircle, Globe, Linkedin, Twitter, Facebook } from 'lucide-react';
import emailjs from '@emailjs/browser';
import '../../Styles/ContacSection.scss';
import { useTranslation } from 'react-i18next';

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = t('contact.contactInfo', { returnObjects: true }).map((info, index) => ({
    ...info,
    icon: [<Mail className="contactIcon" />, <Phone className="contactIcon" />, <MapPin className="contactIcon" />, <Clock className="contactIcon" />][index]
  }));

  const services = t('contact.services', { returnObjects: true });
  const socialLinks = t('contact.socialLinks', { returnObjects: true }).map((social, index) => ({
    ...social,
    icon: [<Linkedin className="socialIcon" />, <Twitter className="socialIcon" />, <Facebook className="socialIcon" />, <Globe className="socialIcon" />][index]
  }));

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
      console.error('EmailJS error:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contactSection" id='contact'>
      <div className="container">
        <div className="headerContent">
          <h2 className="mainTitle">{t('contact.title')}</h2>
          <p className="subtitle">{t('contact.subtitle')}</p>
        </div>

        <div className="mainContent">
          <div className="formSection">
            <div className="formCard">
              <div className="formHeader">
                <MessageCircle className="formHeaderIcon" />
                <div>
                  <h3 className="formTitle">{t('contact.formTitle')}</h3>
                  <p className="formDescription">{t('contact.formDescription')}</p>
                </div>
              </div>

              {isSubmitted ? (
                <div className="successMessage">
                  <CheckCircle className="successIcon" />
                  <h4>{t('contact.successMessage.title')}</h4>
                  <p>{t('contact.successMessage.description')}</p>
                </div>
              ) : (
                <form className="contactForm" onSubmit={handleSubmit}>
                  <div className="formRow">
                    <div className="formGroup">
                      <label className="formLabel">
                        <User className="labelIcon" />
                        {t('contact.formLabels.name')}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="formInput"
                        placeholder={t('contact.formPlaceholders.name')}
                        required
                      />
                    </div>
                    <div className="formGroup">
                      <label className="formLabel">
                        <Mail className="labelIcon" />
                        {t('contact.formLabels.email')}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="formInput"
                        placeholder={t('contact.formPlaceholders.email')}
                        required
                      />
                    </div>
                  </div>

                  <div className="formRow">
                    <div className="formGroup">
                      <label className="formLabel">
                        <Building className="labelIcon" />
                        {t('contact.formLabels.company')}
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="formInput"
                        placeholder={t('contact.formPlaceholders.company')}
                      />
                    </div>
                    <div className="formGroup">
                      <label className="formLabel">{t('contact.formLabels.service')}</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="formSelect"
                      >
                        <option value="">{t('contact.formPlaceholders.service')}</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="formGroup">
                    <label className="formLabel">
                      <MessageCircle className="labelIcon" />
                      {t('contact.formLabels.message')}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="formTextarea"
                      placeholder={t('contact.formPlaceholders.message')}
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
                        {t('contact.submitButton.submitting')}
                      </>
                    ) : (
                      <>
                        <Send className="buttonIcon" />
                        {t('contact.submitButton.default')}
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
                            <a href='https://www.google.com/maps/place/B%C3%BCrotime+Baku/@40.3886404,49.8681644,663m/data=!3m2!1e3!4b1!4m6!3m5!1s0x40307d006336b661:0x4eb1905ae1e41940!8m2!3d40.3886404!4d49.8707393!16s%2Fg%2F11x1qp65xs?entry=ttu&g_ep=EgoyMDI1MDYwOC4wIKXMDSoASAFQAw%3D%3D' className="infoLink" target='_blank'>{detail}</a>
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
              <h4 className="socialTitle">{t('contact.socialTitle')}</h4>
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