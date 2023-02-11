import React, { useState } from "react";
import { Auth, useAuth } from "@arcana/auth-react";
import { useNavigate } from "react-router-dom";
import { abi } from "../assets/abi";
import { ethers } from "ethers";

const Login = () => {
  const onLogin = () => {
    console.log("logged in");
    const navigate = useNavigate();
    navigate("/");
    
  };

  
  const auth = useAuth();

  

  const[count,setCount] = useState(0)
  async function signTxn() {
    try{
        console.log("Trying...")
        console.log(await auth.isLoggedIn)
        const arcanaProvider = await auth.connect
        arcanaProvider ? console.log("Arcana Provider") : console.log("X Arcana Provider");
        const provider = new ethers.providers.Web3Provider(arcanaProvider)
        provider ? console.log("Provider") : console.log("X Provider")
        // const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        !signer ? console.log("X Signer") : console.log("Signer")
        const appAddress = "0xCf39211D66F4fc8c52C45831FfB2c669e0Cc5c68";
        const contract = new ethers.Contract(appAddress,abi,signer);
        await contract.addName(`arcanawallet ${count}`);
        setCount(count+1);
        
        
    }
    catch(e) {
        console.error(e)
    }

  }

  return (
    <div>
      {auth.loading ? (
        <p className="text-5xl btn btn-outline btn-accent rounded-lg py-5 my-5 w-fit block h-fit mx-auto ">
          Loading
        </p>
      ) : auth.isLoggedIn ? (
        <>
          <p className="text-5xl btn btn-outline btn-accent rounded-lg py-5 my-5 w-fit block h-fit mx-auto ">
            Logged In
          </p>
          <button className="btn btn-outline btn-accent rounded-lg py-5 my-5 w-fit block h-fit mx-auto " onClick={signTxn}>
            Sign Txn
          </button>
        </>
      ) : (
        <div>
          <Auth
            externalWallet={false}
            onLogin={onLogin}
          />
        </div>
      )}
    </div>
  );
};

export default Login;

