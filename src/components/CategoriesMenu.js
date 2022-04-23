import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react'; 

function CategoriesMenu(props) {
    
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
   
    return (
      <>
        <div className={'z-50 bg-pistachio text-black  w-80 h-36 absolute mt-2 left-40 '}>
          <div className={'flex flex-row justify-between'}>
            <ul className={'p-2 mx-2'}>
              <li className={'logo2 text-md cursor-pointer hover:border-b hover:border-black'}><Link to="/categories/decorations">Decorations</Link></li>
              <li className={'logo2 text-md'}>Activities</li>
              <li className={'logo2 text-md'}>Cake</li>
              <li className={'logo2 text-md'}>Photographer</li>
            </ul>
            <ul className={'p-2 mx-2'}>
              <li className={'logo2 text-md'}>Food</li>
              <li className={'logo2 text-md'}>Deserts</li>
              <li className={'logo2 text-md'}>Party Rentals</li>
              <li className={'logo2 text-md'}>Amazon's links</li>
            </ul>
          </div>  
        </div>
      </>
  
  )
}

export default CategoriesMenu

   {/* <div className={'bg-red-400 h-20 w-20 absolute'}>
                Hello
            </div> */}
      {/* <ul
        onClick={handleClick}
        className={click ? 'hidden' : 'absolute pt-2 mt-1 px-6 text-white text-sm bg-pistachio'}
      >
        {CategoriesMenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul> */}

        // <div className={'h-20 w-20 bg-red-400'}>
    //   CategoriesMenu
    // </div>

    // const CategoriesMenuItems = [
    //   {
    //     title: 'Balloons',
    //     path: '/about',
    //     cName: 'dropdown-link'
    //   },
    //   {
    //     title: 'Consulting',
    //     path: '/about',
    //     cName: 'dropdown-link'
    //   },
    //   {
    //     title: 'Design',
    //     path: '/about',
    //     cName: 'dropdown-link'
    //   },
    //   {
    //     title: 'Development',
    //     path: '/about',
    //     cName: 'dropdown-link'
    //   }
    // ];