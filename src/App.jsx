import React, { useEffect, useState } from 'react'
import NavBarFirst from "../src/components/NavBar.first"
import { Routes, Route } from 'react-router-dom';
import { Home, Login, Gullak } from './pages';
import { useAuth } from '@arcana/auth-react';
import { ethers } from 'ethers';

const App = () => {
  const[connectedAdd,setConnectedAdd] = useState("");
  const[balance,setBalance] = useState(0);

  const exec = async()=>{
    const auth = useAuth();
    const arcanaProvider = await auth.connect()
    const provider = new ethers.providers.Web3Provider(arcanaProvider)
    setConnectedAdd(await provider.send("eth_requestAccounts", []));
    let balance = await provider.getBalance(connectedAdd[0])
    let balanceInEth = ethers.utils.formatEther(balance);
    setBalance(balanceInEth);
    console.log(balance)
    return balance

}

// useEffect(()=>{
//   exec().then((data)=>{
//     console.log(data)
//   })
// },[])
  return (
    <div className='overflow-hidden'>
      <NavBarFirst/>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/Gullak' element={<Gullak/>}/>
      </Routes>
    </div>
  )
}

export default App