import React from 'react'
import { Navigate } from 'react-router-dom';

export default function NormalRoute({ children }) {
  return (
    <div>
      {localStorage.getItem("user") &&  <Navigate to="/" />}
      {!localStorage.getItem("user") && <>{children}</>}
    </div>
  )
}
