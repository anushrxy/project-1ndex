import React from "react";

const Hero = ({children}) => {
  return (
    <button className="border-[2px] rounded-lg border-primary px-[30px] py-[10px] text-primary hover:border-base-100 font-medium bg-none hover:bg-accent hover:text-base-100 transition-all duration-[150] ease-in">
      {children}
    </button>
  );
};

export default Hero;
