import React, { useEffect, useState } from "react";
import { Auth, useAuth } from "@arcana/auth-react";
import { redirect } from "react-router-dom";
import { ethers } from "ethers";
import { async } from "postcss-js";
import { collection, getDocs } from "firebase/firestore";
import { db, app } from '../../firebaseconfig'
import CreateHandle from '../components/CreateHandle';


const Login = ({address, handle}) => {
  const auth = useAuth();

  const onLogin = async () => {

    const handlesRef = collection(db, "handles");

    console.log("logged in");
    // Fetches connected address
    const arcanaProvider = await auth.connect();
    const provider = new ethers.providers.Web3Provider(arcanaProvider);
    const addressConnected = await provider.send("eth_requestAccounts", []);
    console.log(addressConnected[0]) 


    //firebase query test
    

//     const q = query(handlesRef, where("address", "==", addressConnected[0]));

// const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });

    return redirect("/");
  };


  const logOut = async () => {
    await auth.logout()
  }



  const [count, setCount] = useState(0)
  async function signTxn() {
    
    try {console.log("Start...");
    // await auth.init();
    const arcanaProvider = await auth.connect();
    const provider = new ethers.providers.Web3Provider(arcanaProvider);
    const signer = provider.getSigner();
    const accountsArr = provider.send("eth_requestAccounts", []);
    const account = accountsArr[0];
    // setAddress(account);
    console.log(await provider.getBlockNumber());
    }
    catch(e) {console.log(e)}




    // const provider2 = new ethers.providers.Web3Provider(window.ethereum)

    // MetaMask requires requesting permission to connect users accounts



 


  }  

  useEffect(() => {
    if(handle.length){
      setHandleExists(true);
    }
  
  }, [handle])
  


  const [handleExists, setHandleExists] = useState(false);



  return (
    <div>
      {auth.loading ? (
        <p className="text-5xl btn btn-outline btn-accent rounded-lg py-5 my-5 w-fit block h-fit mx-auto ">
          Loading
        </p>
      ) : auth.isLoggedIn ? (
        <>
         {/* {handleExists && <> <p className="text-5xl btn btn-outline btn-accent rounded-lg py-5 my-5 w-fit block h-fit mx-auto ">
            Logged In
          </p>
          <button className="btn btn-outline btn-accent rounded-lg py-5 my-5 w-fit block h-fit mx-auto " onClick={signTxn}>
            Sign Txn
          </button>
          <button className="btn btn-outline btn-accent rounded-lg py-5 my-5 w-fit block h-fit mx-auto " onClick={logOut}>
            Logout
          </button></>} */}

          <div className="">
      {!handleExists && <CreateHandle></CreateHandle>}
      </div>
        </>
      ) :  (
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

