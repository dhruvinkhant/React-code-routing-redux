import React, { Suspense } from 'react';
// import Header from './Header';
import Footer from './Footer';
import WrapRouter from '../router/WrapRouter';

const Header  = React.lazy(() => import("./Header"));

function AppWrapper({ children }) { // add missing parameter destructuring
  return ( 
    <>
      {console.log("router")}
      <Suspense fallback={<div>Loading...</div>}>
      <Header />
      {children}
      <Footer />
      </Suspense>
    </>
  );
}

export default AppWrapper;