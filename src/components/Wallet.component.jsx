import React, { useState } from "react";
import "../App.css";

function WalletComponent() {
  const UserName = "anmol";
  const Address = 6969;
  const Balance = 6969;

  const [tabStatus, setTabStatus] = useState("");
  const [defaultTabStatus, setDefaultTabStatus] = useState("tab-active");
  const [defaultBtnStatus, setDefaultBtnStatus] = useState("");
  const [btnStatus, setBtnStatus] = useState("hidden");
  // const [FromStatus, setFromStatus] = useState(true);
  // const [ToStatus, setToStatus] = useState(true);
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
      // setFromStatus(false)
      // setToStatus(true)
    } else {
      setDefaultTabStatus("tab-active");
      setDefaultBtnStatus("");
      // setFromStatus(true)
      // setToStatus(false)
    }
  };

  return (
    <div className="mt-[5px] mx-[20px] bg-inherit">
      <div className="flex justify-center items-center">
        <div className="card bg-[#3c287f87] shadow-xl my-[15px] min-w-[50%] pt-2 px-6 pb-6 sm:pb-8">
          <div className="flex flex-col justify-start items-center mt-3 font-bold">
            <p className="text-2xl sm:text-3xl  font-medium text-[#ffffff9c] mb-3 sm:mb-3 border-b-2 border-b-primary">
              Wallet
            </p>
            <div className="flex w-full justify-evenly gap-10 items-center mb-3 sm:mb-3">
              <img
                src="https://picsum.photos/200"
                className="hidden sm:block w-40 h-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
              />
              <div className="flex flex-col">
                <span className="text-5xl sm:text-6xl ">gm {UserName}</span>
                <div className="flex flex-col mt-3 sm:mt-5">
                  <p className="font-normal">Address: </p>
                  <p
                    className="text-sm sm:text-xl font-light mt-0.5 input input-sm input-field"
                    disabled
                  >
                    {Address}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="font-normal">Balance: </p>
                  <p
                    className="text-sm sm:text-xl font-light mt-0.5 input input-sm input-field"
                    disabled
                  >
                    {Balance}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-base-300 mt-3 w-full rounded-md">
              <div className="tabs tabs-boxed justify-center">
                <p
                  className={`${defaultTabStatus} tab transition-all duration-500`}
                  onClick={handleClick}
                >
                  Send
                </p>
                <p
                  className={`${tabStatus} tab transition-all duration-500`}
                  onClick={handleClick}
                >
                  Receive
                </p>
              </div>
              <div className="flex flex-col w-full bg-primary text-base-300 items-center py-4 px-2 rounded-b-md">
                <div className="flex flex-col">
                  <div className="flex items-end gap-x-1">
                    <label className="label">
                      <span className="label-text text-base-300">To:</span>
                    </label>
                    <input
                      type="text"
                      placeholder="@username"
                      className="input w-full text-base-300 font-normal bg-primary border-t-0 border-x-0 border-b-[2px] border-base-300 outline-none rounded-none placeholder:text-gray-500 placeholder:text-xl text-xl disabled:bg-primary"
                      // disabled={ToStatus}
                    />
                  </div>
                  <div className="flex items-end gap-x-1">
                    <label className="label">
                      <span className="label-text text-base-300">From:</span>
                    </label>
                    <input
                      type="text"
                      placeholder="@username"
                      className="input w-full text-base-300 font-normal border-t-0 border-x-0 border-b-[2px] border-base-300 outline-none rounded-none  text-xl disabled:bg-primary bg-primary placeholder:text-gray-500 placeholder:text-xl"
                      value={UserName}
                      // disabled={FromStatus}
                      disabled
                    />
                  </div>
                  <div className="flex items-end gap-x-1">
                    <label className="label">
                      <span className="label-text text-base-300">Amount:</span>
                    </label>
                    <input
                      type="text"
                      placeholder="0.00"
                      className="input w-full text-base-300 font-normal bg-primary border-t-0 border-x-0 border-b-[2px] border-base-300 outline-none rounded-none placeholder:text-gray-500 placeholder:text-xl text-xl"
                    />
                  </div>
                </div>
                <button
                  className={`${defaultBtnStatus} btn btn-outline border-[2px] border-base-300 mt-5 text-base-300 hover:bg-base-300 hover:text-primary hover:border-none`}
                >
                  Send Tokens
                </button>
                <button
                  className={`${btnStatus} btn btn-outline border-[2px] border-base-300 mt-5 text-base-300 hover:bg-base-300 hover:text-primary hover:border-none`}
                >
                  Send Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletComponent;
