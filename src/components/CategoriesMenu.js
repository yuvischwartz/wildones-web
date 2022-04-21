import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react'; 

function CategoriesMenu(props) {
    
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
   
    return (
        <>
          <div className={'mt-1 px-6 mx-0 py-2 bg-pistachio text-white absolute'}>
          <ul className={'w-full cursor-pointer '}>
                    <li className={'font-ligth text-black py-1 hover:bg-gray-200 cursor-pointer'}>Decorations</li>
                    {/* <li className={'font-ligth text-black py-1 hover:bg-gray-200 cursor-pointer'}>Balloons</li> */}
                    <li className={'font-ligth text-black py-1 cursor-pointer'}>Activities</li>
                    <li className={'font-ligth text-black py-1 cursor-pointer'}>Cake</li>
                    <li className={'font-ligth text-black py-1 cursor-pointer'}>Food</li>
                    <li className={'font-ligth text-black py-1 cursor-pointer'}>Deserts</li>
            <li className={'font-ligth text-black py-1 cursor-pointer'}>Party Rentals</li>
            <li className={'font-ligth text-black py-1 cursor-pointer'}>Invitations</li>
            <li className={'font-ligth text-black py-1 cursor-pointer'}>Photographer</li>
              </ul>
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