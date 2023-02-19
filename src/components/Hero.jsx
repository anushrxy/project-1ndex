import React, { useEffect } from "react";
import { baseHero, maticHero } from "../assets";
import { Link } from "react-router-dom";
import Button from "./shared/Button";

const Hero = ({ handle }) => {
      console.log(handle)

  
  return (
    <div className="flex h-screen items-start">
      <div className="w-full sm:w-[50vw] my-auto">
        <div className="text-[30px] sm:text-[5vw] font-bold leading-tight sm:text-start text-center px-[32px]">
          Manage And Save Like a Pro with PayPol
        </div>
        <div className="text-secondary text-base sm:text-2xl font-semibold sm:w-[50vw] w-full sm:text-start text-center px-[32px] my-[15px]">
          PayPol lets you Send And receive tokens on the polygon network with a
          simple interface
        </div>
        <div className="pl-[0px] sm:pl-[32px] my-[25px] mx-auto sm:text-start text-center flex sm:justify-start justify-center flex-row gap-x-2">
          {!handle.length && (
            <Link to="/login">
              <Button>Get a Handle</Button>
            </Link>
          )}
          <Button> <a href="#About"> KNOW MORE</a></Button>
        </div>
      </div>
      <div className="w-[50vw] hidden flex-col items-center sm:flex my-auto lg:m-[0]">
        <img
          src={maticHero}
          alt=""
          className="w-[45%]  relative animate-wiggle "
        />
        <img src={baseHero} className="w-[60%]" alt="" />
      </div>
    </div>
  );
};

export default Hero;
