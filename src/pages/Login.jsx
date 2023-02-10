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
        
        const arcanaProvider = await auth.loginWithSocial('google')
        const provider = new ethers.providers.Web3Provider(arcanaProvider)
        const signer = provider.getSigner();
        const appAddress = "0xde2F83d99A94194B19FdFCECF0264A238a9e4685";
        const contract = new ethers.Contract(appAddress,abi,signer);
        contract.addName(`arcanawallet ${count}`);
        setCount(count+1);
        
    }
    catch(e) {
        console.log(e);
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
          <button className="btn mx-auto" onClick={signTxn}>
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

