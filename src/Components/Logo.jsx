import React from 'react'
import logo from "../assets/logo.png";


function Logo() {
  return (
    <div className="flex justify-center items-center">
      <img src={logo} alt="Logo" className='h-12' />
    </div>
  )
}

export default Logo