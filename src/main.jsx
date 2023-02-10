import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AuthProvider, CHAIN } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";
import { BrowserRouter } from 'react-router-dom';

const appAddress = 'c7d67b8c243fc2be269f188ce225ce18472e1dc4'
const auth = new AuthProvider(`${appAddress}`, {
  network: 'testnet', 
  position: 'right', 
  theme: 'dark', 
  alwaysVisible: false, 
  chainConfig: {
    chainId: CHAIN.POLYGON_MUMBAI_TESTNET, 
    rpcUrl: 'https://fragrant-greatest-sky.matic-testnet.discover.quiknode.pro/51a324530a248242144de9b79fc28e6f2272e30d/', 
  },
})



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProvideAuth provider={auth}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProvideAuth>
  </React.StrictMode>,
)
