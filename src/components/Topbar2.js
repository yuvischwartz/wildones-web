import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react'; 
import DropdownMenu from './DropdownMenu';
import CategoriesMenu from './CategoriesMenu';

function Topbar() {
  const [click, setClick] = useState(false);
  const [categoriesMenu, setCategoriesMenu] = useState(false);

  const handleClick = () => {
    setClick(!click);
    setCategoriesMenu(!categoriesMenu);
    console.log('clicked')
  }

  // const onMouseEnter = () => {
  //   if (window.innerWidth < 960) {
  //     setCategoriesMenu(false);
  //   } else {
  //     setCategoriesMenu(true);
  //   }
  // };

  // const onMouseLeave = () => {
  //   if (window.innerWidth < 960) {
  //     setCategoriesMenu(false);
  //   } else {
  //     setCategoriesMenu(false);
  //   }
  // };

  return (
      <>
    <div className={'grid grid-cols-12 w-screen h-12 sm:h-10 '}>
        
        <div className={'col-span-9 bg-peach'}>
                
          <ul className={'flex flex-row text-md text-black pt-2 justify-between sm:mx-20 mx-3 '}>
                      <li className={'logo2 text-left text-sm text-white sm:hidden pt-1'}>Hello, UserName welcome back!</li>
                      <li className={'hidden sm:inline-block logo2 cursor-pointer hover:border-b hover:border-black'}>Home</li>
                      <li onClick={handleClick}
                        // onMouseEnter={onMouseEnter}
                        // onMouseLeave={onMouseLeave}
                        className={'hidden sm:inline-block logo2 cursor-pointer '}>
                      Categories <i className={'fas fa-caret-down text-md pl-1'} />
              {categoriesMenu && <CategoriesMenu handleClick={handleClick}
                // onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
              />}
                      </li>
                      <li className={'hidden sm:inline-block logo2 cursor-pointer hover:border-b hover:border-black'}>Birthday </li>
                      <li className={'hidden sm:inline-block logo2 cursor-pointer hover:border-b hover:border-black'}>About</li>
                      <li className={'hidden sm:inline-block logo2 cursor-pointer hover:border-b hover:border-black'}>Contact Us</li>
                  </ul>
                
            </div>    
              <div className={'col-span-3 bg-white text-sm'}>
                <div className={'flex justify-center pt-2 text-black'}>
                      <p className={'hidden sm:inline-block logo2 pr-4 pt-1'}>Hello, UserName!</p>
                      <button className={'hidden sm:inline-block px-5 py-1 bg-pistachio logo2 text-black text-sm hover-bg-coffe'}>Log Out</button>
                </div>
                <div onClick={handleClick}>
                <i className={click ? 'fa-solid fa-xmark sm:hidden flex justify-center cursor-pointer text-coffe text-xl pt-1 hover-coffe' : 'fa-solid fa-bars sm:hidden cursor-pointer text-coffe flex justify-center text-xl pt-1 hover-coffe'}></i>
                </div>
          </div>
          
    </div>
    {/* <div className={'w-screen h-10 sm:h-8 bg-peach flex justify-between sm:justify-start sm:px-10'}>
      
        <p className={click ?  'text-red-500' : 'text-white font2 py-2 px-2 text-sm sm:text-md'}>Get 10% off your order get 10 precent celebrate</p>
      <div onClick={handleClick} className={'text-white text-2xl py-2 px-5'}>
        <i className={click ? 'fa-solid fa-xmark sm:hidden float-left cursor-pointer hover:text-black' : 'fa-solid fa-bars sm:hidden float-left cursor-pointer hover:text-black'}></i>
      </div>
      </div> */}
      {click && <DropdownMenu handleClick={handleClick}/>}
      </>
  )
}

export default Topbar
