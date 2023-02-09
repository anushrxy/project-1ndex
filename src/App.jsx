import React from 'react'
import { Auth, useAuth } from "@arcana/auth-react";
import NavBar from "../src/components/NavBar"
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Hero, Login } from './pages';

const App = () => {
  
  return (
    <div className='overflow-hidden'>
      <NavBar/>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Hero/>} />
        
      </Routes>
      <div className="mockup-window border bg-base-300">
        <div className="flex justify-center px-4 py-16 bg-base-200">Hello!</div>
      </div>
    </div>
  )
}

export default App