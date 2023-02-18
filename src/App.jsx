import React, { useEffect, useState } from 'react'
import NavBarFirst from "../src/components/NavBar.first"
import SendRequest from './components/SendRequest'
import { Routes, Route } from 'react-router-dom';
import { Home, Login, Gullak, Wallet } from './pages';
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
const handle="rajwitheth";

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
        <Route path='/login' element={<Login address={address}/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/Gullak' element={<Gullak/>}/>
         <Route path='/request' element={<SendRequest address={address} handle={handle} />}></Route>
        <Route path='/Wallet' element={<Wallet/>}/>
      </Routes>
    </div>
  )
}

export default App