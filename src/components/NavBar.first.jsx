import { RiHandCoinLine } from "react-icons/ri";
import "../App.css";

import React from "react";
import { Link } from "react-router-dom";

const NavFirst = () => {
  return (
    <div className="shadow-md w-auto top-0 left-0 relative z-[10]">
      <div className="flex items-center justify-between sm:px-10 px-3 h-[96px] shadow-nav">
        <Link to='/' className="cursor-pointer flex items-center text-2xl">
        <img src="https://res.cloudinary.com/dmofs5r4h/image/upload/v1676812236/logo-02_puw7kb.png" className="h-[55px]"/>
          <p className="font-bold ml-[10px]">PayPol</p>
        </Link>
          <Link to='/login' className="btn btn-accent btn-outline text-white sm:btn-lg lg:ml-[8px] ml-0 btn-sm">Sign In</Link>
      </div>
    </div>
  );
};

export default NavFirst;
