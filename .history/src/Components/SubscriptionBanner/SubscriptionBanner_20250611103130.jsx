import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../Styles/SubscriptionBanner.scss';
import { useTranslation } from 'react-i18next';
import { FiCheckCircle } from 'react-icons/fi';

const SubscriptionBanner = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_cnfxn9i',
        'template_7j0zadm',
        {
          from_email: email,
          message: `New subscription from ${email}`
        },
        'AieVsw39wXmJV7CGu'
      );

      setIsSubmitting(false);
      setSubscribed(true);
      setEmail('');

      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="subscription-banner">
      <div className="banner-content">
        <h2>{t("SubscriptionBanner.title")}</h2>
        <p>{t("SubscriptionBanner.description")}</p>
        {subscribed ? (
          <div className="success-message">
            <FiCheckCircle className="success-icon" />
            <span>{t("SubscriptionBanner.success_message")}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder={t("SubscriptionBanner.placeholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
            />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? t("SubscriptionBanner.loading", "Göndərilir...") : t("SubscriptionBanner.button")}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SubscriptionBanner;