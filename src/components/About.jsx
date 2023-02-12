import React from "react";

const About = () => {
  return (
    <div id="About">
      <div className="flex items-center my-[15px] px-[32px]">
        <div className="h-[60px] w-[6px] bg-secondary rounded-xl"></div>
        <div className="font-semibold text-[30px] sm:text-[60px] leading-10 ml-[20px]">About Us</div>
      </div>
      <div className="grid grid-cols-8 px-[32px] mt-[2rem]">
        <div className="col-span-10 border-[2px] border-secondary rounded-lg p-[10px]">Lorem ipsum rounded-xl Lorem ipsum rounded-xl Lorem ipsum rounded-xl Lorem ipsum rounded-xl Lorem ipsum rounded-xl rounded-xl rorounded-xl rounded-xl rounded-xl rounded-xl rounded-xl rounded-xl rounded-xl rounded-xl rounded-xl rounded-xl rounded-xl rounded-xl rounded-xl rounded-xl rounded-xl rounded rounded-xl rounded-xl rounded-xl rounded-xl rounded-xl rounded rounded-xl rounded-xl rounded-xl rounded-xl rounded-xl rounded</div>
      </div>
    </div>
  );
};

export default About;
