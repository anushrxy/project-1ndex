import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";
import { BrowserRouter } from 'react-router-dom';

const provider = new AuthProvider(`c7d67b8c243fc2be269f188ce225ce18472e1dc4`)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProvideAuth provider={provider}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProvideAuth>
  </React.StrictMode>,
)
