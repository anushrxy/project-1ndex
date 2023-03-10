import { RiHandCoinLine } from "react-icons/ri";
import {BiClipboard} from "react-icons/bi"
import "../App.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = ({address, handle}) => {


  let Links = [
    { name: "Wallet", link: "/Wallet" },
    { name: "Gullak", link: "/gullak" },
    { name: "Account", link: "/user" },
  ];
  let [open, setOpen] = useState(false);
  
  return (
    <div className="shadow-md w-auto top-0 left-0 relative z-[10]">
      <div className="flex items-center justify-between px-10 h-[96px] shadow-nav">
        <Link to='/' className="cursor-pointer flex items-center text-2xl">
        <img src="https://res.cloudinary.com/dmofs5r4h/image/upload/v1676812236/logo-02_puw7kb.png" className="h-[46px]"/>
          <p className="font-bold ml-[5px]">PayPol</p>
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className=" absolute right-8 cursor-pointer lg:hidden h-full flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
            name={open ? "close" : "menu"}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div>

        <ul
          className={`flex flex-col lg:flex-row items-center justify-start lg:pb-0 pb-12 absolute lg:static bg-default lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 transition-all duration-500 ease-in ${
            open
              ? "top-20 lg:pt-0 pt-10 h-screen lg:h-auto z-[10] bg-neutral"
              : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <Link to={link.link} >
            <li
              key={link.name}
              className="lg:ml-[8px] ml-0 btn btn-ghost btn-lg"
            >
              <div>
                <p className="duration-500">
                  {link.name}
                </p>
              </div>
            </li>
            </Link>
          ))}
          <Link to={`${handle.length?"/user":"/login"}`} className="btn btn-accent btn-outline text-white btn-lg lg:ml-[8px] ml-0" onClick={()=>{ navigator.clipboard.writeText(address);}}>{handle || address} <span className="ml-4 text-white"><BiClipboard/></span></Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
