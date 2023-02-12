import React from "react";

const Hero = ({children}) => {
  return (
    <button className="border-[2px] rounded-lg border-secondary hover:text-secondary px-[30px] py-[10px] text-white hover:border-white font-medium">
      {children}
    </button>
  );
};

export default Hero;
