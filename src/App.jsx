import React, { useEffect, useState } from 'react'
import NavBarFirst from "../src/components/NavBar.first"
import SendRequest from './components/SendRequest'
import { Routes, Route } from 'react-router-dom';
import { Home, Login, Gullak,Account,Wallet } from './pages';
import { useAuth } from '@arcana/auth-react';
import { ethers } from 'ethers';
import Nav from './components/NavBar.user';
import axios from 'axios';
import { abiUserHandles } from './contract';

const App = () => {
  const[connectedAdd,setConnectedAdd] = useState("");
  const[balance,setBalance] = useState(0);
  const [address, setAddress] = useState('');
  const [userHandle, setUserHandle] = useState("")
  const [maticRate, setMaticRate] = useState(125);
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

      const addressUserHandle = "0x64AF05A9DaD9BbD9Dd580963E14e1e3b5825ffbC";
      const contract = new ethers.Contract(addressUserHandle,abiUserHandles,signer);
      const handle = await contract.fetchHandle();
      console.log(handle);
      if(handle == "#DNE") {
        setUserHandle("");
      }
      else {
        setUserHandle(handle);
      }
    }
    catch(e) {console.log(e);}
    // console.log("End");

}

const fetchCurrentRate=async()=>{
  let headersList = {
    "content-type": "application/json",
    "x-api-key": "a3125637-2c31-48de-b6a0-f8b504562507" 
   }
   
   let bodyContent = JSON.stringify({"currency": "INR",
   "code": "MATIC",
   "meta": true});
   
   let reqOptions = {
     url: "https://api.livecoinwatch.com/coins/single",
     method: "POST",
     headers: headersList,
     data: bodyContent,
   }
   
   let response = await axios.request(reqOptions);
   setMaticRate(await response.data.rate);
   console.log(maticRate)
   
}

useEffect(()=>{
  exec();
  fetchCurrentRate();
})









const handle="rajwitheth";

  return (
    <div className='overflow-hidden'>
      {!address && <NavBarFirst/>}
      {address && <Nav address={address} handle={userHandle}/>}
      
      <Routes>
        <Route path='/login' element={<Login address={address}/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/Gullak' element={<Gullak/>}/>
        <Route path='/user' element={<Account/>}/>
        <Route path='/request' element={<SendRequest address={address} handle={userHandle} />}></Route>
        <Route path='/Wallet' element={<Wallet address={address} handle={userHandle}/>}/>
      </Routes>
    </div>
  )
}

export default App