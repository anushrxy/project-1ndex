import React from "react";
import {FaEthereum} from "react-icons/fa"

const About = () => {

  const features=[
    {
      name:'Application-specific handles',
      desc:'We provide users with easy to remember application-specific handles that can be used to send and receive tokens.'
    },
    {
      name:'ENS integration',
      desc:'Our application is integrated with Ethereum Name Service (ENS), which allows users to register domain names for their Ethereum addresses to simplify sending and recieving.'
    },
    {
      name:'Sending Requests for Token',
      desc:'Users of our app can send out token requests to other users to recieve token from them.'
    },
    {
      name:'Address book',
      desc:'beta Our application allows users to create an address book of their contacts, which makes it easy to send tokens to people they frequently transact with.'
    },
  ]

  return (
    <div id="About">
      <div className="flex items-center my-[15px] px-[32px]">
        <div className="h-[60px] w-[6px] bg-secondary rounded-xl"></div>
        <div className="font-semibold text-[30px] sm:text-[60px] leading-10 ml-[20px]">
          About Us
        </div>
      </div>
      <div className="grid grid-cols-8 px-[32px] mt-[2rem]">
        <div className="col-span-10 rounded-lg p-[10px] text-lg">
          PayPol is a web3-based application that makes it easy for users to
          send tokens and requests for tokens to other users using our
          application-specific handles, ENS, or addresses. Our application is
          built on the blockchain, which provides a decentralized, secure, and
          transparent way to transfer value between users.
        </div>
        <div className="flex sm:flex-row col-span-8 flex-col gap-1">
          {features.map((item)=>(<div key={item.name} className="w-[90%] sm:w-96 bg-neutral shadow-xl">
            <div className="card-body flex flex-col gap-10">
              <h2 className="card-title text-3xl">{item.name}</h2>
              <p className="text-lg">{item.desc}</p>
            </div>
          </div>))}
          
        </div>
      </div>
    </div>
  );
};

export default About;
