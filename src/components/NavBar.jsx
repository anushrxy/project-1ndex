import { RiHandCoinLine } from "react-icons/ri";
import "../App.css";

import React, { useState } from "react";

const Nav = () => {
  let Links = [
    { name: "About", link: "/" },
    { name: "Features", link: "/" },
    { name: "Guide", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full top-0 left-0 relative z-[10]">
      <div className="flex items-center justify-between bg-[#1B1E1F] px-10 h-[96px] shadow-nav">
        <div className="cursor-pointer flex items-center text-2xl">
          <RiHandCoinLine alt="logo" className="h-[96px]" />
          <p className="font-bold ml-[10px]">AnyMoney</p>
        </div>

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
          className={`flex flex-col lg:flex-row items-center justify-start lg:pb-0 pb-12 absolute lg:static bg-[#1B1E1F] lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 transition-all duration-500 ease-in ${
            open ? "top-20 lg:pt-0 pt-10 h-screen lg:h-auto" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="lg:ml-[8px] ml-0 btn btn-ghost btn-lg">
              <div>
                <a
                  href={link.link}
                  className="duration-500"
                >
                  {link.name}
                </a>
              </div>
            </li>
          ))}
          <div className="btn btn-outline btn-lg lg:ml-[8px] ml-0">Sign In</div>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
