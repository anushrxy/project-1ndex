import React, { useState } from 'react'


const CreateHandle = () => {
  const [available, setAvailable] = useState("unchecked");
  const [value, setValue] = useState(null);

  const checkAvailability=()=>{
    
    if(true|| valueExists){
      setAvailable("false");
    }
    else{
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
          <input type="text" placeholder="yourname.eth" className="input input-bordered" value={value} onChange={(e)=>{e.preventDefault(); setAvailable("unchecked"); setValue(e.target.value);}} />
        </label>
        <button
          className={` btn  border-[2px] border-base-300 mt-5 text-base-300 hover:bg-base-300 hover:text-primary hover:border-none`}
          onClick={()=>{setAvailable('loading');checkAvailability(value)}}
        >
         {available==="unchecked"?"Check Availability":available==="false"?"Try Another":available=="loading"?"loading":"Claim This Address"}
        </button>
      </div>
    </div>
  )
}

export default CreateHandle;