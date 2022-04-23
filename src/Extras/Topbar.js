import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react'; 
import DropdownMenu from '../components/DropdownMenu';

function Topbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    console.log('clicked')
  }

  return (
    <>
    <div className={'w-screen h-10 sm:h-8 bg-peach flex justify-between sm:justify-start sm:px-10'}>
      
        <p className={click ?  'text-red-500' : 'text-white font2 py-2 px-2 text-sm sm:text-md'}>Get 10% off your order get 10 precent celebrate</p>
      <div onClick={handleClick} className={'text-white text-2xl py-2 px-5'}>
        <i className={click ? 'fa-solid fa-xmark sm:hidden float-left cursor-pointer hover:text-black' : 'fa-solid fa-bars sm:hidden float-left cursor-pointer hover:text-black'}></i>
      </div>
      </div>
      {click && <DropdownMenu handleClick={handleClick}/>}
      </>
  )
}

export default Topbar
