import React from 'react'
import { baseHero, maticHero } from '../assets'

const Hero = () => {
  return (
    <div className='flex '>
      <div className='w-[50vw] aspect-square'> h </div>
      <div className='w-[50vw] flex flex-col items-center '>
        <img src={maticHero} alt="" className='w-[45%]  relative animate-wiggle   ' />
        <img src={baseHero} className='w-[60%]' alt="" />
      </div>
    </div>

  )
}

export default Hero