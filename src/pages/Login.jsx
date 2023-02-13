import React, { useState } from "react";
import { Auth, useAuth } from "@arcana/auth-react";
import { redirect } from "react-router-dom";
import { abi } from "../contract";
import { ethers } from "ethers";
import { async } from "postcss-js";


const Login = () => {
  const auth = useAuth();

  const onLogin = async() => {
    console.log("logged in");
    // Fetches connected address 
    const arcanaProvider = await auth.connect();
    const provider = new ethers.providers.Web3Provider(arcanaProvider)
    const addressConnected = await provider.send("eth_requestAccounts", [])
    console.log(addressConnected[0])
    return redirect("/");
  };

  const logOut = async() => {
    await auth.logout()
  }

  

  

  const[count,setCount] = useState(0)
  async function signTxn() {
    
        // console.log("Trying...")
        console.log(auth.isLoggedIn)
        const arcanaProvider = await auth.connect();
        const provider = new ethers.providers.Web3Provider(arcanaProvider)
        const signer = provider.getSigner()
        // const appAddress = "0x64dFCB285194A889d5B163443A74431F2E034CB3" ;
        // const contract = new ethers.Contract(appAddress,abi,signer);
        // const res =await contract.addName(`arcanawallet${count}`);
        // console.log(res);
        // console.log("dsdsd")

        // const txnSend = {
        //   to: "0x171a893e5675092304ccC4bf0d2335d553ABD81A",
        //   value: ethers.utils.parseEther("0.1")
        // }
        // // const signedTxn = signer.signTransaction(txnSend);
        // const res = await signer.sendTransaction(txnSend);
        // console.log(res);
        console.log(auth)
        const info = await auth.user ;
        console.log(`id: ${info.id} \naddress: ${info.address}`)



       
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
          <button className="btn btn-outline btn-accent rounded-lg py-5 my-5 w-fit block h-fit mx-auto " onClick={logOut}>
            Logout
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

