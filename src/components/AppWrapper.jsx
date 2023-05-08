import React from 'react';
import Header from './Header';
import Footer from './Footer';
import WrapRouter from '../router/WrapRouter';

function AppWrapper({ children }) { // add missing parameter destructuring
  return ( 
    <>
      {console.log("router")}
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default AppWrapper;