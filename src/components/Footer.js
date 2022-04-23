import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
    return (
      <>
    <div className={'w-screen h-72 sm:h-48 grid grid-cols-12 rounded relative bg-dark-coffe'}>
          <div className={'col-span-12 bg-dark-coffe '}>
            <div className={'flex sm:justify-between my-5 mx-2 sm:mx-20 text-white'}>
                  <div>
                    <ul>
                        <li className={'py-1 font-semibold'}><Link to="/">Home</Link></li>
                        <li className={'py-1 text-sm'}><Link to="/about">About</Link></li>
                        <li className={'py-1 text-sm'}><Link to="/to-do's">Birthday Check-List</Link></li>
                        <li className={'py-1 text-sm'}><Link to="/contact">Contact</Link></li>
                    </ul>
                  </div>
                  <div className={'flex justify-center'}>
                    <h1 className={'hidden sm:inline-block font-semibold'}><Link to="/categories">Categories</Link></h1>
                            <ul className={'px-5 cursor-pointer'}>
                        <li className={'py-0.5 font-semibold sm:hidden'}><Link to="/categories">Categories</Link></li>
                        <li className={'py-0.5 text-sm'}>Categories</li>
                        <li className={'py-0.5 text-sm'}>Category 1</li>
                        <li className={'py-0.5 text-sm'}>Category 2</li>
                        <li className={'py-0.5 text-sm'}>Category 3</li>
                        <li className={'py-0.5 text-sm'}>Category 3</li>
                      </ul>
                      <ul className={' px-1 sm:px-5 cursor-pointer'}>
                        <li className={'py-0.5 text-sm'}>Category 1</li>
                        <li className={'py-0.5 text-sm'}>Category 1</li>
                        <li className={'py-0.5 text-sm'}>Category 2</li>
                        <li className={'py-0.5 text-sm'}>Category 3</li>
                        <li className={'py-0.5 text-sm'}>Category 3</li>
                    </ul>
                  </div>
                  <div>
                        <h2 className={'font-semibold'}><Link to="/contact">Contact Us</Link></h2> 
                        <div className={'flex flex-row'}>
                        <i className={'fa-solid fa-at text-md text-white'}/>
                        <p className={'font2 text-sm text-white px-0.5'}>info@wildones.me</p>
                        </div>
                  </div>
                  <div>
                            <h2 className={'font-semibold'}>Subscribe</h2> 
                            <div class="mt-4 flex">
                            <input type="text" className={'p-2 border border-grey-light round text-black text-sm h-auto'}
                            placeholder={'Your email address here'}/>
                                <button className={'border border-grey-light text-white rounded-sm h-auto text-xs font2 p-3 hover:text-black hover:bg-white hover:border-black'}>
                                    Subscribe</button>
                            </div>
                            <h3 className={'font2 text-sm py-1'}>Get digital marketing updates in your mailbox!</h3>
                            <h3 className={'font2 text-xs pt-10 absolute bottom-1 '}>Copyright © Yuval Schwartz 2022</h3>
                  </div>
            </div>
          </div>
      </div>
      </>
  )
}

export default Footer
