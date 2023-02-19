import React, { useEffect } from 'react'
import { useState } from 'react';

import { db } from '../../firebaseconfig';
import { collection, query, where, getDocs, doc, setDoc   } from "firebase/firestore";



const SendRequest = ({address, handle}) => {
  const [isHandle, setIsHandle] = useState("handle"||"address"||"ens");
  const [data, setData] = useState({"to":'',"value":0,"date":null});
  const initialState="true";

  const [available, setAvailable] = useState(initialState);
  //firebase setdocs

  const handlesRef = collection(db, "handles");




  useEffect(() => {

    // querySelector = isHandle?"handle":"address";
    if (data.to.length < 3) {

      if (data.to.slice(0, 2) === "0x") {
        //isHandle false implies that an address is being input
        setIsHandle("address");

      }
      else if(data.to.slice(0,1)==="@"){
        setIsHandle("handle")
      }
      else {
        //isHandle true imples that the input is handle
        setIsHandle("ens");
      }
    }

  }, [data.to])

  const checkDatabaseForHandle = async () => {

    console.log('Button Clicked')
    setAvailable('loading')

    // Create a query against the collection.
    const q = query(handlesRef, where("handle", "==", data.to));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, doc.data())
      setData({...data,to:doc.data().handle});
    });
    if(data.to.length){
      setAvailable("true");
    }
  }

  const addRequest = async () => {
    console.log(data.to)
    const alertsRef = collection(db, `handles/${data.to}/alerts`);
    // const alertsRef = db.collection("handles").doc(user.handle).collection("alerts");
    
    await setDoc(doc(alertsRef), {"date": new Date(),"from":handle,"value":data.value,"status":"unread"});
    console.log("requestbuttonclicked");




  }


  return (
    <div className='flex justify-center mt-20 mb-10'>
      <div className="form-control flex-col gap-4 ">

        <label className="input-group input-group-vertical text-3xl ">
          <span className='p-5'>Address of the Person</span>
          <input required type="text" placeholder="Your Seggsy handle" value={data.to} onChange={(e)=>{setAvailable(initialState);setData({...data,to:e.target.value})}} className="input input-bordered p-10" />
        </label>


        {available === "true" && <label className="input-group w-fit text-right">
          <input required type="text" placeholder="0.01" value={data.value} onChange={(e)=>{setData({...data,value:e.target.value})}} className="input input-bordered" />
          <span>MATIC</span>
        </label>}


        {available !== "true" && <button
          className={` btn  border-[2px] border-base-300 mt-5 text-base-300 hover:bg-base-300 hover:text-primary hover:border-none`}
          onClick={checkDatabaseForHandle}
        >
          {available === "unchecked" ? "Verify Receiver" : available === "false" ? "Address not found" : "loading"}
        </button>}


        {
          available == "true" && <button
            className={`btn border-[2px] border-base-300 mt-5 text-base-300 hover:bg-base-300 hover:text-primary hover:border-none`}
            onClick={addRequest}
          >
            Send Request
          </button>
        }
      </div>

    </div>
  )
}

export default SendRequest