import { useAuth } from '@arcana/auth-react';
import { ethers } from 'ethers';
import React, { useState } from 'react'
import { abiUserHandles } from '../contract';


const CreateHandle = () => {
  const [available, setAvailable] = useState("unchecked");
  const [value, setValue] = useState("");
  const [handleclaimed, setHandleClaimed] = useState(false);
  const [handleButtonText, setHandleButtonText] = useState("")
  const auth = useAuth();

  const checkAvailability= async()=>{
    
    const arcanaProvider = await auth.connect();
    const provider = new ethers.providers.Web3Provider(arcanaProvider);
    const signer = provider.getSigner();
    const addressUserHandle = "0x64AF05A9DaD9BbD9Dd580963E14e1e3b5825ffbC" ;
    const contract = new ethers.Contract(addressUserHandle,abiUserHandles,signer);
    const handleExists = await contract.checkHandle(value);
    console.log(handleExists);
    if(handleExists){
      setAvailable("false");
    }
    if(!handleExists){
      setAvailable("true");
    } 
  }

  const claimHandle = async() => {
    const arcanaProvider = await auth.connect();
    const provider = new ethers.providers.Web3Provider(arcanaProvider);
    const signer = provider.getSigner();
    const addressUserHandle = "0x64AF05A9DaD9BbD9Dd580963E14e1e3b5825ffbC" ;
    const contract = new ethers.Contract(addressUserHandle,abiUserHandles,signer);
    const claimAddress = await contract.addHandle(value);
    (claimAddress) ? setAvailable("claimed") : console.log("Issue with Claim Handle.")
     
  }

  const handleButtonClick = async()=>{
    if(available=="unchecked"){
      checkAvailability();

    }
    else if(available=="true"){
      claimHandle();
    }
    

  }

  return (
    <div className="mt-[20px] sm:mt-[50px] mx-[20px] flex justify-center p-5 ">
      <div className="form-control flex flex-col items-center bg-[#3c287f87] shadow-xl my-[15px] min-w-[50%] pt-2 px-6 pb-6 sm:pb-8  rounded-lg ">
        <h1 className='text-4xl font-bold font-sans text-white my-10'>
          Looks Like You Don't Have A Handle Yet...
        </h1>
        
        <label className="input-group w-fit mx-auto ">
          <span>Your Handle</span>
          <input type="text" placeholder="Starts with @..." className="input input-bordered" value={value} onChange={(e)=>{e.preventDefault(); setAvailable("unchecked"); setValue(e.target.value);}} />
        </label>
        <button
          className={` btn  border-[2px] border-base-300 mt-5 text-base-300 hover:bg-base-300 hover:text-primary hover:border-none`}
          onClick={()=>{setAvailable('loading'); handleButtonClick()}}
        >
         {available==="unchecked"?"Check And Claim":available==="false"?"Try Another":available=="loading"?"loading":available=="claimed"?"Claimed!":available=="true"?"Claim this Handle":"Error"}
        </button>
      </div>
    </div>
  )
}

export default CreateHandle;