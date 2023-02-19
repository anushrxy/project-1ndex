import React, { useEffect, useState } from 'react'
import NavBarFirst from "../src/components/NavBar.first"
import SendRequest from './components/SendRequest'
import { Routes, Route } from 'react-router-dom';
import { Home, Login, Gullak,Account,Wallet } from './pages';
import { useAuth } from '@arcana/auth-react';
import { ethers } from 'ethers';
import Nav from './components/NavBar.user';

const App = () => {
  const[connectedAdd,setConnectedAdd] = useState("");
  const[balance,setBalance] = useState(0);
  const [address, setAddress] = useState('');
  const auth = useAuth();
  // const[notDone,setNotDone] = useState(true);

const exec = async()=>{
    // console.log("Start...");
    // await auth.init();
    try{
      const arcanaProvider = await auth.connect();
      const provider = new ethers.providers.Web3Provider(arcanaProvider);
      const signer = provider.getSigner();
      const accountsArr = await provider.send("eth_requestAccounts", []);
      const account = accountsArr[0];
      setAddress(account);
    }
    catch(e) {console.log(e);}
    // console.log("End");

}

useEffect(()=>{
  exec();
})









const handle="rajwitheth";

  return (
    <div className='overflow-hidden'>
      {!address && <NavBarFirst/>}
      {address && <Nav address={address} />}
      
      <Routes>
        <Route path='/login' element={<Login address={address}/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/Gullak' element={<Gullak/>}/>
        <Route path='/user' element={<Account/>}/>
         <Route path='/request' element={<SendRequest address={address} handle={handle} />}></Route>
        <Route path='/Wallet' element={<Wallet/>}/>
      </Routes>
    </div>
  )
}

export default App