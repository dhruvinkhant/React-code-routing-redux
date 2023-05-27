import React, { Suspense } from 'react';
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import routerList from '../router/router';
import AppWrapper from '../components/AppWrapper';
import ProtectedRoute from './ProtectedRoute';
import NormalRoute from './NormalRoute';

const WrapRouter = () => {
  return (
    <AppWrapper>
        <Suspense fallback={<div>Loading...</div>}>
      <Routes>
          {routerList.map((d, i) =>
            d.isProtected
              ? ProtectedRoutes(d, i)
              : SimpleRoutes(d, i)
          )}
      </Routes>
        </Suspense>
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
      <NormalRoute>
      <d.Component />
       </NormalRoute>

    }
  />

)

export default WrapRouter;