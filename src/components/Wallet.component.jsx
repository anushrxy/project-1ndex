import React, { useState, useEffect } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebaseconfig";
import "../App.css";
import { async } from "@firebase/util";
import { useAuth } from "@arcana/auth-react";
import { ethers } from "ethers";
import { abiUserHandles } from "../contract";

function WalletComponent({address, handle}) {
  const [balance,setBalance] = useState(0);
  const [isHandle, setIsHandle] = useState("handle" || "address" || "ens");
  const [data, setData] = useState({ "to": '', "value": 0, "date": null });
  const initialState = "true";
  const [available, setAvailable] = useState(initialState);

  const auth = useAuth();
  async function fetchBalance() {
    const arcanaProvider = await auth.connect();
    const provider = new ethers.providers.Web3Provider(arcanaProvider);
    const accBalance = await provider.getBalance(address);
    const balValue = ethers.utils.formatEther(accBalance);
    setBalance(balValue);

  }
  useEffect(() => {
  

    fetchBalance();
    
    
    
    // querySelector = isHandle?"handle":"address";
    if (data.to.length < 3) {

      if (data.to.slice(0, 2) === "0x") {
        //isHandle false implies that an address is being input
        setIsHandle("address");
        
      }
      else if (data.to.slice(0, 1) === "@") {
        setIsHandle("handle")
      }
      // else if (data.to.length == 0) {
        //   setAvailable("unchecked")
        // }
        else {
          //isHandle true imples that the input is handle
          setIsHandle("ens");
        }
      }
      
    }, [data.to])
      


  const addRequest = async () => {
    console.log(data.to)

    try {

      const alertsRef = collection(db, `handles/${data.to}/alerts`);
      // const alertsRef = db.collection("handles").doc(user.handle).collection("alerts");

      await setDoc(doc(alertsRef), { "date": new Date(), "from": handle, "value": data.value, "status": "unread" });
      console.log("requestbuttonclicked");
      return(<h1>Request Sent</h1>)
    } catch (error) {
      console.log(error);
      return(<h1>Something went Wrong</h1>)
    }




  }



  const [tabStatus, setTabStatus] = useState("");
  const [defaultTabStatus, setDefaultTabStatus] = useState("tab-active");
  const [defaultBtnStatus, setDefaultBtnStatus] = useState("");
  const [btnStatus, setBtnStatus] = useState("hidden");
  // const [FromStatus, setFromStatus] = useState(true);
  // const [ToStatus, setToStatus] = useState(true);
  const handleClick = () => {
    if (tabStatus === "tab-active") {
      setTabStatus("");
      setBtnStatus("hidden");
    } else {
      setTabStatus("tab-active");
      setBtnStatus("");
    }
    if (defaultTabStatus === "tab-active") {
      setDefaultTabStatus("");
      setDefaultBtnStatus("hidden");
      // setFromStatus(false)
      // setToStatus(true)
    } else {
      setDefaultTabStatus("tab-active");
      setDefaultBtnStatus("");
      // setFromStatus(true)
      // setToStatus(false)
    }
  };

  async function sendMatic() {
    const arcanaProvider = await auth.connect();
    const provider = new ethers.providers.Web3Provider(arcanaProvider);
    const signer = provider.getSigner();
    
    if(isHandle=="address" || isHandle=="ens"){
      const txn = {
        to: data.to,
        value: ethers.utils.parseEther(data.value)
      }
      const txnHash = await signer.sendTransaction(txn);
      if(txnHash){
        setData({ "to": '', "value": 0, "date": null });
      }
    }
    if(isHandle=="handle"){
      const contractAddress = "0x64AF05A9DaD9BbD9Dd580963E14e1e3b5825ffbC";
      const contract = new ethers.Contract(contractAddress,abiUserHandles,signer)
      const address = await contract.fetchAddress(data.to);
      const txn = {
        to: address,
        value: ethers.utils.parseEther(data.value)
      }
      const txnHash = await signer.sendTransaction(txn);
      if(txnHash){
        setData({ "to": '', "value": 0, "date": null });
      }
    }
    
  }

  return (
    <div className="mt-[5px] mx-[20px] bg-inherit">
      <div className="flex justify-center items-center">
        <div className="card bg-[#3c287f87] shadow-xl my-[15px] min-w-[50%] pt-2 px-6 pb-6 sm:pb-8">
          <div className="flex flex-col justify-start items-center mt-3 font-bold py-4 px-10">

            <div className="flex w-full justify-evenly gap-10 items-center mb-3 sm:mb-3">
              <img
                src="https://picsum.photos/200"
                className="hidden sm:block w-40 h-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
              />
              <div className='flex flex-col gap-10'>
                <h1 className='text-primary sm:text-end text-center font-bold text-5xl md:text-6xl mb-5'>
                  gm {handle}
                </h1>

                <p className='text-xl text-thin '>
                  address <span className='sm:inline-block block input input-disabled bg-base-300 p-x-5 py-2 sm:ml-5 my-2 sm:my-0 ml-0 cursor-default '>{address} </span>
                </p>
                <p className='text-xl text-thin '>
                  Balance
                  <div className='sm:inline-block block my-2 md:my-0'>
                    <span className='input py-2 input-disabled bg-base-300 p-x-5 sm:ml-5 cursor-default'>{balance}
                      <span className='bg-secondary px-5 py-2  -mr-5 ml-2 rounded-r-lg'>MATIC </span>
                    </span>
                    <span className='input py-2 input-disabled bg-base-300  p-x-5 sm:ml-5 cursor-default'>{balance}
                      <span className=' bg-secondary px-5 py-2  -mr-5 ml-2 rounded-r-lg'>INR </span>
                    </span>
                  </div>
                </p>
              </div>
            </div>
            <div className="bg-base-300 mt-3 w-full rounded-md">
              <div className="tabs tabs-boxed justify-center">
                <p
                  className={`${defaultTabStatus} tab transition-all duration-500`}
                  onClick={handleClick}
                >
                  Send Tokens
                </p>
                <p
                  className={`${tabStatus} tab transition-all duration-500`}
                  onClick={handleClick}
                >
                  Request Tokens
                </p>
              </div>
              <div className="flex flex-col w-full bg-primary text-base-300 items-center py-4 px-2 rounded-b-md">
                <div className="flex flex-col">
                  <div className="flex items-end gap-x-1">
                    <label className="label w-20  ">
                      <span className="label-text text-base-300">You:</span>
                    </label>
                    <input
                      type="text"
                      placeholder="@username"
                      className="input w-full text-base-300 font-normal border-t-0 border-x-0 border-b-[2px] border-base-300 outline-none rounded-none  text-xl disabled:bg-primary bg-primary placeholder:text-gray-500 placeholder:text-xl"
                      value={handle}
                      // disabled={FromStatus}
                      disabled
                    />
                  </div>
                  <div className="flex items-end gap-x-1">
                    <label className="label w-20">
                      <span className="label-text text-base-300">Their Address</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="@username"
                      className="input w-full text-base-300 font-normal bg-primary border-t-0 border-x-0 border-b-[2px] border-base-300 outline-none rounded-none placeholder:text-gray-500 placeholder:text-xl text-xl disabled:bg-primary"
                      value={data.to} onChange={(e) => { setData({ ...data, to: e.target.value }) }}
                    // disabled={ToStatus}
                    />
                  </div>
                  {(available == "true" || defaultTabStatus == "tab-active") && <div className="flex items-end gap-x-1">
                    <label className="label w-20">
                      <span className="label-text text-base-300">Amount:</span>
                    </label>
                    <input required
                      type="number"
                      step={0.01}
                      placeholder="0.00"
                      className="input w-full text-base-300 font-normal bg-primary border-t-0 border-x-0 border-b-[2px] border-base-300 outline-none rounded-none placeholder:text-gray-500 placeholder:text-xl text-xl"
                      value={0.0 || data.value} onChange={(e) => { setData({ ...data, value: e.target.value }) }}
                    />
                  </div>}
                </div>
                <button
                  className={`${defaultBtnStatus} btn btn-outline border-[2px] border-base-300 mt-5 text-base-300 hover:bg-base-300 hover:text-primary hover:border-none`} onClick={sendMatic}
                >
                  Send Tokens
                </button>
                {available !== "true" && <button
                  className={`${btnStatus} btn btn-outline border-[2px] border-base-300 mt-5 text-base-300 hover:bg-base-300 hover:text-primary hover:border-none`}
                  onClick={""}
                >
                  {available === "unchecked" ? "Verify Receiver" : available === "false" ? `${isHandle} not found` : "loading"}
                </button>}

                {
                  available == "true" && <button
                    className={`${btnStatus} btn btn-outline border-[2px] border-base-300 mt-5 text-base-300 hover:bg-base-300 hover:text-primary hover:border-none`}
                    onClick={addRequest}
                  >
                    Send Request
                  </button>
                }


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletComponent;
