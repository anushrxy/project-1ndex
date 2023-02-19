import React from "react";
import { RiHandCoinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-neutral mt-[5rem] px-[32px] py-[5rem]">
      <div className="grid md:grid-cols-12 grid-cols-1">
        <div className="sm:col-span-4 font-bold text-3xl flex flex-col gap-y-[20px] md:mb-0 mb-[25px]">
          <div className="flex gap-x-[4px] items-center">
            <img src="https://res.cloudinary.com/dmofs5r4h/image/upload/v1676812236/logo-02_puw7kb.png" className="w-10"/>
            <p>PayPol</p>
          </div>
          <div className="flex gap-x-[15px] text-lg">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>
        <div className="md:col-span-4 font-medium cursor-pointer md:mb-0 mb-[25px]">
          <ul>
            <li>
              <Link to="/terms">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/privacypolicy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/support">Support Us</Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4 md:mb-0 mb-[25px]">
          <p className="font-bold text-lg">Location</p>
          <p className="font-semibold">
            Dhirubhai Ambani Hall of Residence, NIT Rourkela, Odisha
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
