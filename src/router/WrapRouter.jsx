import React from 'react';
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import routerList from '../router/router';
import AppWrapper from '../components/AppWrapper';
import ProtectedRoute from './ProtectedRoute';

function WrapRouter(props) {
    return (
        <AppWrapper>
            <Routes>
            {routerList.map((d, i) =>
          d.isProtected
            ? ProtectedRoutes(d, i)
            : SimpleRoutes(d, i)
        )}
            </Routes>
            </AppWrapper>
    )
}

const ProtectedRoutes = (d, i) => (
    <Route
      key={i}
      path={d.path}
      element={
        <ProtectedRoute>
          <d.Component />
        </ProtectedRoute>
      }
    />
  )

  const SimpleRoutes = (d, i) => (
    
    <Route
      key={i}
      path={d.path}
      element={
        
          <d.Component />
       
      }
    />
    
  )

export default WrapRouter;