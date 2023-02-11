import React, { useState } from 'react'
import NavBar from "../src/components/NavBar"
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Hero, Login } from './pages';
import { useAuth } from '@arcana/auth-react';
import { ethers } from 'ethers';

const App = () => {

  const[connectedAdd,setConnectedAdd] = useState("");
  const[balance,setBalance] = useState(0);

  
  if(useAuth().isLoggedIn) {
    const fetchAdd = async() => {
    const auth = useAuth();
    const arcanaProvider = await auth.loginWithSocial('google')  
    const provider = new ethers.providers.Web3Provider(arcanaProvider)
    setConnectedAdd(await provider.send("eth_requestAccounts", []));

    let balance = await provider.getBalance(connectedAdd[0])
    let balanceInEth = ethers.utils.formatEther(balance);
    setBalance(balanceInEth);
    
    }
    fetchAdd();
  }
  
  return (
    <div className='overflow-hidden'>
      <NavBar/>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Hero/>} />
        
      </Routes>
      <div className="mockup-window border bg-base-300">
        <div className="flex justify-center px-4 py-16 bg-base-200">
          {(connectedAdd=="") ? `Not Connected!` : `Connected to: ${connectedAdd[0]} Balance: ${balance} Matic`} 
        </div>
      </div>
    </div>
  )
}

export default App