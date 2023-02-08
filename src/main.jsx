import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";

const provider = new AuthProvider(`aed154c1721d2970239f33c6045f27ba51b3ad6c`)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProvideAuth provider={provider}>
      
    <App />
    </ProvideAuth>
  </React.StrictMode>,
)
