import React, { useEffect, useState } from 'react'
import NavBarFirst from "../src/components/NavBar.first"
import { Routes, Route } from 'react-router-dom';
import { Home, Login } from './pages';
import { useAuth } from '@arcana/auth-react';
import { ethers } from 'ethers';
import Nav from './components/NavBar.user';

const App = () => {
  const[connectedAdd,setConnectedAdd] = useState("");
  const[balance,setBalance] = useState(0);
  const [address, setAddress] = useState('');

  const exec = async()=>{
    const auth = useAuth();
    const arcanaProvider = await auth.connect()
    const provider = new ethers.providers.Web3Provider(arcanaProvider)
    setConnectedAdd(await provider.send("eth_requestAccounts", []));
    let balance = await provider.getBalance(connectedAdd[0])
    let balanceInEth = ethers.utils.formatEther(balance);
    setAddress(auth.user.address);
    setBalance(balanceInEth);
    console.log(balance)
    return balance

}
exec();

// useEffect(()=>{
//   exec().then((data)=>{
//     console.log(data)
//   })
// },[])
  return (
    <div className='overflow-hidden'>
      {!connectedAdd && <NavBarFirst/>}
      {connectedAdd && <Nav address={address} />}
      
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App