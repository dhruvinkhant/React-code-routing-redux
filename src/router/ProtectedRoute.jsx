import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
  return (
    <div>
      {localStorage.getItem("user") && <>{children}</>}
      {!localStorage.getItem("user") && <Navigate to="/login" />}
    </div>
  )
}
