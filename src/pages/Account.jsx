import React, { useEffect, useState } from "react";
import { db } from "../../firebaseconfig";
import { ethers } from "ethers";
import { useAuth } from "@arcana/auth-react";
import { abiUserHandles } from "../contract";
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
  doc, updateDoc
} from "firebase/firestore";
import { maticHero } from "../assets";
import Button from "../components/shared/Button";

const Alert = ({ from, amount, id , handle,getData}) => {
  const auth = useAuth();
    const rejectRequest = async() => { 
        console.log("reject request run");
        const docRef= doc(db,`handles/${handle}/alerts/${id}`);
        await updateDoc(docRef, {
            status : 'ignored'
          });
        getData();
    };
    const acceptRequest = async() => { 
        console.log("accept request run");
        const arcanaProvider = await auth.connect();
        const provider = new ethers.providers.Web3Provider(arcanaProvider);
        const signer = provider.getSigner();
        const contractAddress = "0x64AF05A9DaD9BbD9Dd580963E14e1e3b5825ffbC";
        const contract = new ethers.Contract(contractAddress,abiUserHandles,signer)
        const address = await contract.fetchAddress(from);
        const txn = {
          to: address,
          value: ethers.utils.parseEther(amount)
        }
        const txnHash = await signer.sendTransaction(txn);
        console.log(txnHash);
        const docRef= doc(db,`handles/${handle}/alerts/${id}`);
        await updateDoc(docRef, {
            status : 'accepted'
          });
        getData();
        console.log('accepted')
    };


    return (
        <div className="alert shadow-lg">
            <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-primary flex-shrink-0 w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                </svg>
                <p className="mx-2  ">
                    <span className="font-semibold text-accent">{from}</span> has
                    requested {amount} Matic
                </p>
            </div>
            <div className="flex flex-wrap items-center justify-center">
                <button className="btn btn-sm btn-ghost" onClick={rejectRequest}>
                    Reject Request
                </button>
                <button className="btn btn-sm btn-accent" onClick={acceptRequest}>Send {amount} Matic</button>
            </div>
        </div>
    );
};

const Account = ({maticRate, handle, address,balance,balanceInr}) => {
   
    const [alertsData, setAlertsData] = useState();


    const getData = async () => {
        const alertsRef = collection(db, `handles/${handle}/alerts`);
        const q = query(
            alertsRef,
            where("status", "==", "unread"),
            orderBy("date", "desc"),
            limit(5)
        );
        const querySnapshot = await getDocs(q);
        const data = [];
        querySnapshot.forEach((doc) => {
            data.push(doc);
        });
        setAlertsData(data);
        console.log(alertsData);
    };

    useEffect(() => {
        getData();
    }, []);

  // getData();

  return (
    <div className="flex w-[80vw] sm:w-full justify-evenly p-10 mx-auto ">
      <div className="hidden md:block ">
        <img src={maticHero} alt="" />
      </div>
      <div className="flex flex-col gap-10">
        <h1 className="text-primary sm:text-start text-center font-bold text-5xl md:text-6xl mb-5">
          gm {handle}
        </h1>
        <p className="text-xl text-thin ">
          address{" "}
          <span className="sm:inline-block block input input-disabled bg-neutral p-x-5 py-2 sm:ml-5 my-2 sm:my-0 ml-0 cursor-default ">
            {address}{" "}
          </span>
        </p>
        <p className="text-xl text-thin ">
          Balance
          <div className="sm:inline-block block my-2 md:my-0">
            <span className="input py-2 input-disabled bg-neutral p-x-5 sm:ml-5 cursor-default">
              {balance}
              <span className="bg-base-300 px-5 py-2  -mr-5 ml-2 rounded-r-lg">
                MATIC{" "}
              </span>
            </span>
            <span className="input py-2 input-disabled bg-neutral p-x-5 sm:ml-5 cursor-default">
              {balanceInr}
              <span className="bg-base-300 px-5 py-2  -mr-5 ml-2 rounded-r-lg">
                INR{" "}
              </span>
            </span>
          </div>
        </p>

        {/* Requests Component */}
        <div className="-mb-30">
          <h1 className="text-2xl w-fit m-auto font-semibold my-5">Requests</h1>
          <div className="flex flex-col items-center gap-10 sm:max-h-[30vh] overflow-auto ">
            {alertsData?.map((doc) => {
              return <Alert from={doc.data().from} amount={doc.data().value} handle={handle
            } id={doc.id} getData={getData} />;
            })}
          </div>
          <button className=" underline underline-offset-4 mt-4 mb-6 ">
            View all transactions
          </button>
        </div>
        <div>
          <Button>Log Out</Button>
        </div>
      </div>
    </div>
  );
};

export default Account;
