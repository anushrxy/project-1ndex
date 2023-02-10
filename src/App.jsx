import React, { useState } from 'react'
import NavBar from "../src/components/NavBar"
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Hero, Login } from './pages';
import { useAuth } from '@arcana/auth-react';

const App = () => {

  const[connectedAdd,setConnectedAdd] = useState("");
  const[balance,setBalance] = useState(0);
  
  if(useAuth().isLoggedIn) {
    const fetchAdd = async() => {const auth = useAuth();
    const provider = auth.provider
    setConnectedAdd(await provider.request({ method: 'eth_accounts' }));
    await provider.request({ method: 'eth_getBalance' }).then((balance) => {
      const balanceInEth = ethers.utils.formatEther(balance);
      setBalance(balanceInEth);
    })
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
          {(connectedAdd=="") ? `Not Connected!` : `Connected to: ${connectedAdd} Balance: ${balance} Matic`} 
        </div>
      </div>
    </div>
  )
}

export default App