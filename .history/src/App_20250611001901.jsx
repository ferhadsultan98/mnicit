import React from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import ServicesSection from './Pages/Services/Services';
import CareersSection from './Pages/Careers/Careers';
import AboutSection from './Pages/About/About';
import ContactSection from './Pages/Contact/Contact';
import MainLayout from './Components/MainLayout/MainLayout';
import i18n from "./Languages/i18n";
import { I18nextProvider } from 'react-i18next';
import SubscriptionBanner from './Components/SubscriptionBanner/SubscriptionBanner';
import QuestionAccordion from './Pages/QuestionAccordion/QuestionAccordion';
function App() {
  return (
    <I18nextProvider i18n={i18n}>
    <MainLayout>
      <Home />
      <ServicesSection />
      <CareersSection />
      <AboutSection />
      <ContactSection />
      <SubscriptionBanner/>
      <QuestionAccordion/>
    </MainLayout>
    </I18nextProvider>
  );
}

export default App;