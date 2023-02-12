import React, { useState } from "react";
import { Auth, useAuth } from "@arcana/auth-react";
import { redirect } from "react-router-dom";
import { abi } from "../contract";
import { ethers } from "ethers";


const Login = () => {
  const onLogin = () => {
    console.log("logged in");
    return redirect("/");
  };

  
  const auth = useAuth();

  

  const[count,setCount] = useState(0)
  async function signTxn() {
    
        // console.log("Trying...")
        console.log(auth.isLoggedIn)
        // const arcanaProvider = await auth.connect
        // console.log(arcanaProvider)
        // arcanaProvider ? console.log("Arcana Provider") : console.log("X Arcana Provider");
        // const provider = new ethers.providers.Web3Provider(arcanaProvider)
        // provider ? console.log("Provider") : console.log("X Provider")
        // // const provider = new ethers.providers.Web3Provider(window.ethereum);
        // const signer = await provider.getSigner();
        // !signer ? console.log("X Signer") : console.log("Signer")
        // console.log(abi)
        // console.log(signer)
        // setCount(count+1);
        //await auth.init()
        const arcanaProvider = await auth.connect();

        const provider = new ethers.providers.Web3Provider(arcanaProvider)

         const signer = provider.getSigner()

        const appAddress = "0x64dFCB285194A889d5B163443A74431F2E034CB3" ;
        const contract = new ethers.Contract(appAddress,abi,signer);
        const res =await contract.addName(`arcanawallet${count}`);
        console.log(res);
        console.log("dsdsd")

       
        // const provider2 = new ethers.providers.Web3Provider(window.ethereum)

// MetaMask requires requesting permission to connect users accounts

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

