import React from 'react'
import { Auth, useAuth } from "@arcana/auth-react";



const onLogin = () => {
  // Route to authenticated page
}

const App = () => {
  
  const auth = useAuth();
  return (
    <div>
      {auth.loading ? (
        "Loading"
      ) : auth.isLoggedIn ? (
        <p>Logged In</p>
      ) : (
        <div>
          <Auth externalWallet={true} theme={"dark"} onLogin={onLogin}/>
        </div>
      )}
      <div className="mockup-window border bg-base-300">
        <div className="flex justify-center px-4 py-16 bg-base-200">Hello!</div>
      </div>
    </div>
  )
}

export default App