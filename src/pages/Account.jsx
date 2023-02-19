import React, { useEffect, useState } from "react";
import { db } from "../../firebaseconfig";
import {
    collection,
    query,
    where,
    orderBy,
    limit,
    getDocs,
    updateDoc,
    doc,
} from "firebase/firestore";
import { maticHero } from "../assets";

const Alert = ({ from, amount, id , account,getData}) => {
    const rejectRequest = async() => { 
        console.log("reject request run");
        const docRef= doc(db,`handles/${account}/alerts/${id}`);
        await updateDoc(docRef, {
            status : 'ignored'
          });
        getData();
    };
    const acceptRequest = async() => { 
        console.log("reject request run");
        const docRef= doc(db,`handles/${account}/alerts/${id}`);
        await updateDoc(docRef, {
            status : 'accepted'
          });
        getData();
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
                    <span className="font-semibold text-accent">@{from}</span> has
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

const Account = ({maticRate}) => {
    const account = "@rajwithmatic";
    const address = "0xabs123456789012345678901234567890";
    const balance = "6969";
    const balanceInr = balance*Math.round((maticRate*100))/100;
    const [alertsData, setAlertsData] = useState();


    const getData = async () => {
        const alertsRef = collection(db, `handles/${account}/alerts`);
        const q = query(
            alertsRef,
            where("status", "==", "unread"),
            orderBy("date", "desc"),
            limit(5)
        );
        const querySnapshot = await getDocs(q);
        const data = [];
        await querySnapshot.forEach((doc) => {
            data.push(doc);
        });
        setAlertsData(data);
        console.log(alertsData);
    };

    useEffect(() => {
        console.log(balanceInr)
        getData();
    }, []);

    // getData();

    return (
        <div className="flex w-[80vw] sm:w-full justify-evenly items-center mt-10 sm:mt-20 sm:h-[70vh] p-10 mx-auto ">
            <div className="hidden md:block ">
                <img src={maticHero} alt="" />
            </div>
            <div className="flex flex-col gap-10">
                <h1 className="text-primary sm:text-start text-center font-bold text-5xl md:text-6xl mb-5">
                    gm @{account}
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
                            return (
                                <Alert
                                    from={doc.data().from}
                                    amount={doc.data().value}
                                    id={doc.id}
                                    account={account}
                                    getData={getData}
                                />
                            );
                        })}
                    </div>
                    <button className=" underline underline-offset-4 mt-4 mb-6 ">
                        View all transactions
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Account;
