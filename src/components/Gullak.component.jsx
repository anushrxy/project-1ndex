import React, { useState } from "react";
import "../App.css";

function GullakComponent() {
  const [tabStatus, setTabStatus] = useState("");
  const [defaultTabStatus, setDefaultTabStatus] = useState("tab-active");
  const [defaultBtnStatus, setDefaultBtnStatus] = useState("");
  const [btnStatus, setBtnStatus] = useState("hidden");
  const handleClick = () => {
    if (tabStatus === "tab-active") {
      setTabStatus("");
      setBtnStatus("hidden");
    } else {
      setTabStatus("tab-active");
      setBtnStatus("");
    }
    if (defaultTabStatus === "tab-active") {
      setDefaultTabStatus("");
      setDefaultBtnStatus("hidden");
    } else {
      setDefaultTabStatus("tab-active");
      setDefaultBtnStatus("");
    }
  };

  const matic = 20.22;
  const real_value = 6969;
  return (
    <div className="mt-[20px] sm:mt-[50px] mx-[20px] bg-inherit">
      <div className="flex justify-center items-center">
        {/* <img
          src="https://res.cloudinary.com/dmofs5r4h/image/upload/v1676300234/7062156_877_Converted_-02_t1p9ub.png"
          className="w-[37%] sm:block hidden"
        /> */}
        <div className="card bg-[#3c287f87] shadow-xl my-[15px] min-w-[50%] pt-2 px-6 pb-6 sm:pb-8">
          <div className="flex flex-col justify-start items-center mt-3 font-bold">
            <p className="text-2xl sm:text-3xl  font-medium text-[#ffffff9c]">
              Gullak Holdings
            </p>
            <span className="text-4xl sm:text-6xl mt-3 sm:mt-3">
              {matic} Matic
            </span>
            <p className="text-xl sm:text-3xl font-light mt-0.5">
              {real_value} INR
            </p>
            <div className="bg-base-300 mt-3 w-full rounded-md">
              <div className="tabs tabs-boxed justify-center">
                <p
                  className={`${defaultTabStatus} tab transition-all duration-500`}
                  onClick={handleClick}
                >
                  Add
                </p>
                <p
                  className={`${tabStatus} tab transition-all duration-500`}
                  onClick={handleClick}
                >
                  Reedem
                </p>
              </div>
              <div className="flex flex-col w-full bg-primary text-base-300 items-center py-4 px-2 rounded-b-md">
                <input
                  type="text"
                  placeholder="0.00"
                  className="input w-full max-w-[150px] text-base-300 font-normal bg-primary border-t-0 border-x-0 border-b-[2px] border-base-300 outline-none rounded-none placeholder:text-gray-500 placeholder:text-xl text-xl text-center"
                />
                <button
                  className={`${defaultBtnStatus} btn btn-outline border-[2px] border-base-300 mt-5 text-base-300 hover:bg-base-300 hover:text-primary hover:border-none`}
                >
                  Add to Gullak
                </button>
                <button
                  className={`${btnStatus} btn btn-outline border-[2px] border-base-300 mt-5 text-base-300 hover:bg-base-300 hover:text-primary hover:border-none`}
                >
                  Reedem from Gullak
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GullakComponent;
