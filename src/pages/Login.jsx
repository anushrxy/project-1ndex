import React from 'react'
import { Auth, useAuth } from "@arcana/auth-react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const onLogin = () => {
        console.log('logged in')
        const navigate = useNavigate();
        navigate("/")

    }

    const auth = useAuth();

    return (
        <div >
            {auth.loading ? (
                <p className='text-5xl btn btn-outline btn-accent rounded-lg py-5 my-5 w-fit block h-fit mx-auto '>Loading
                </p>
            ) : auth.isLoggedIn ? (
                <p className='text-5xl btn btn-outline btn-accent rounded-lg py-5 my-5 w-fit block h-fit mx-auto '>Logged In</p>
            ) : (
                <div>
                    <Auth externalWallet={true} theme={"dark"} onLogin={onLogin} />
                </div>
            )}
        </div>
    )
}

export default Login