import React from 'react'
import { Link } from "react-router-dom";

function DropdownMenu(props) {
  return (
      <div className={'ease-in duration-300 sm:hidden bg-pistachio w-screen h-screen'}>
          <nav className={'flex justify-center'}>
        <ul className={'text-2xl p-3 font2 divide-y text-white'}>
        <li onClick={props.handleClick} className={'py-5 px-6 text-center font-ligth hover:text-black hover:font-semibold'}><Link to="/">Home</Link></li>
                <li onClick={props.handleClick} className={'py-5 px-6 text-center font-ligth hover:text-black hover:font-semibold'}><Link to="/categories">Categories</Link></li>
                <li onClick={props.handleClick} className={'py-5 px-6 text-center font-ligth hover:text-black hover:font-semibold'}><Link to="/to-do's">Birthday Check-List</Link></li>
                <li onClick={props.handleClick} className={'py-5 px-6 text-center font-ligth hover:text-black hover:font-semibold'}><Link to="/about">About</Link></li>
                <li onClick={props.handleClick} className={'py-5 px-6 text-center font-ligth hover:text-black hover:font-semibold'}><Link to="/contact">Contact</Link></li>
            </ul>
      </nav>
    </div>
  )
}

export default DropdownMenu
