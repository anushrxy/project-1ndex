import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AuthProvider, CHAIN } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";
import { BrowserRouter } from 'react-router-dom';
// import Web3 from "web3"

const appAddress = 'c7d67b8c243fc2be269f188ce225ce18472e1dc4'
const auth = new AuthProvider(`${appAddress}`, {
  network: 'testnet', 
  position: 'right', 
  theme: 'dark', 
  alwaysVisible: false, 
  chainConfig: {
    chainId: CHAIN.POLYGON_MUMBAI_TESTNET, 
    rpcUrl: 'https://polygon-mumbai.g.alchemy.com/v2/Ifo0nkR33bwWSq-EsiCaY0V-MyRtqcM8',
    },
})

useEffect(()=>{
  {async function arcanaInit() {
  await auth.init();
}
    
    arcanaInit();}
},[])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProvideAuth provider={auth}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProvideAuth>
  </React.StrictMode>,
)
