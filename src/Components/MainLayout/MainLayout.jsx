import React from 'react';
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';
import ScrollToTop from '../ScrollTop/ScrollTop';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default MainLayout;