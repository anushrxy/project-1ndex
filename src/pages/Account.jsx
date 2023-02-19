import React from 'react'
import { maticHero } from '../assets'

const Alert = ({ from, amount }) => (
    <div className="alert shadow-lg">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-primary flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <p className='mx-2  '><span className='font-semibold text-accent'>@{from}</span> has requested {amount} Matic</p>
        </div>
        <div className="flex flex-wrap items-center justify-center">
            <button className="btn btn-sm btn-ghost">Reject Request</button>
            <button className="btn btn-sm btn-accent">Send {amount} Matic</button>
        </div>
    </div>
)


const Account = () => {
    const account = "raj";
    const address = "0xabs123456789012345678901234567890";
    const balance = "6969";
    const balanceInr = "69k";


    return (
        <div className='flex w-[80vw] sm:w-full justify-evenly items-center mt-10 sm:mt-0 h-[70vh] p-10 mx-auto '>
            <div className='hidden md:block '>
                <img src={maticHero} alt="" />
            </div>
            <div className='flex flex-col gap-10'>
                <h1 className='text-primary sm:text-start text-center font-bold text-5xl md:text-6xl mb-5'>
                    gm @{account}
                </h1>

                <p className='text-xl text-thin '>
                    address <span className='sm:inline-block block input input-disabled bg-neutral p-x-5 py-2 sm:ml-5 my-2 sm:my-0 ml-0 cursor-default '>{address} </span>
                </p>
                <p className='text-xl text-thin '>
                    Balance
                    <div className='sm:inline-block block my-2 md:my-0'>
                    <span className='input py-2 input-disabled bg-neutral p-x-5 sm:ml-5 cursor-default'>{balance}
                        <span className='bg-base-300 px-5 py-2  -mr-5 ml-2 rounded-r-lg'>MATIC </span>
                    </span>
                    <span className='input py-2 input-disabled bg-neutral p-x-5 sm:ml-5 cursor-default'>{balance}
                        <span className='bg-base-300 px-5 py-2  -mr-5 ml-2 rounded-r-lg'>INR </span>
                    </span>
                    </div>
                </p>

                {/* Requests Component */}
                <div className='flex flex-col items-center gap-10 max-h-[50vh] overflow-auto'>
                    <h1 className='text-2xl font-semibold mt-5'>Requests</h1>
                    <Alert from={"rajwithmatic"} amount={"69"} />
                </div>
            </div>
        </div>
    )
}

export default Account