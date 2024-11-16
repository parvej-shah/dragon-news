import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router.jsx'
import React from 'react'
import { AuthProvider } from './auth/AuthProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
  </StrictMode>,
)