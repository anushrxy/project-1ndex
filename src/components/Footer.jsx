import React from "react";
import { RiHandCoinLine } from "react-icons/ri";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="bg-neutral mt-[5rem] px-[32px] py-[5rem]">
      <div className="grid md:grid-cols-12 grid-cols-1">
        <div className="sm:col-span-4 font-bold text-3xl flex flex-col gap-y-[20px] md:mb-0 mb-[25px]">
          <div className="flex gap-x-[7px] items-center">
            <RiHandCoinLine />
            <p>AnyBunny</p>
          </div>
          <div className="flex gap-x-[15px] text-lg">
            <FaFacebookF/>
            <FaInstagram/>
            <FaTwitter/>
            <FaLinkedinIn/>
          </div>
        </div>
        <div className="md:col-span-4 font-medium cursor-pointer md:mb-0 mb-[25px]">
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Careers</li>
            <li>Support Us</li>
          </ul>
        </div>
        <div className="md:col-span-4 font-medium md:mb-0 mb-[25px]">Dhirubhai Ambani Hall of Residence, NIT Rourkela, Sundergarh, Odisha</div>
      </div>
    </div>
  );
};

export default Footer;
