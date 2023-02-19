import { useAuth } from '@arcana/auth-react';
import { ethers } from 'ethers';
import React, { useState } from 'react'
import { abiUserHandles } from '../contract';


const CreateHandle = () => {
  const [available, setAvailable] = useState("unchecked");
  const [value, setValue] = useState("");
  const auth = useAuth();

  const checkAvailability= async()=>{
    
    const arcanaProvider = await auth.connect();
    const provider = new ethers.providers.Web3Provider(arcanaProvider);
    const signer = provider.getSigner();
    const addressUserHandle = "0xA61D71A2f44293b8684A1F40c16aE6bbd1718B45" ;
    const contract = new ethers.Contract(addressUserHandle,abiUserHandles,signer);
    const handleExists = await contract.checkHandle(value);
    if(handleExists){
      setAvailable("false");
    }
    if(!handleExists){
      setAvailable("true");
    }
    
  }
  return (
    <div className="mt-[20px] sm:mt-[50px] mx-[20px] flex justify-center  p-5 ">
      <div className="form-control flex flex-col items-center bg-[#3c287f87] shadow-xl my-[15px] min-w-[50%] pt-2 px-6 pb-6 sm:pb-8  rounded-lg ">
        <h1 className='text-4xl font-bold font-sans text-white my-10'>
          Looks Like You Don't Have A Handle Yet...
        </h1>
        
        <label className="input-group w-fit mx-auto ">
          <span>Your Handlle</span>
          <input type="text" placeholder="Starts with @..." className="input input-bordered" value={value} onChange={(e)=>{e.preventDefault(); setAvailable("unchecked"); setValue(e.target.value);}} />
        </label>
        <button
          className={` btn  border-[2px] border-base-300 mt-5 text-base-300 hover:bg-base-300 hover:text-primary hover:border-none`}
          onClick={()=>{setAvailable('loading');checkAvailability(value)}}
        >
         {available==="unchecked"?"Check And Claim":available==="false"?"Try Another":available=="loading"?"loading":"Claim This Address"}
        </button>
      </div>
    </div>
  )
}

export default CreateHandle;