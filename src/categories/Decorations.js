import Topbar2 from '../components/Topbar2';
import React from 'react'

function Decorations() {
    return (
      <>
        
        {/* <div className={'w-screen h-36 relative flex justify-start ml-5 '}>
                <div> <img  
                className = {'h-20 my-8 cursor-pointer'}  
                alt='img'
                src={`/images/logos/logo.png`}
                />
                    
                    <p className={'text-center text-sm text'}>Go whild one</p>
                    </div> 
            </div> */}
      <div className={'h-fit w-full relative'}>
         <Topbar2 />
      <div className={'flex justify-center text-center relative mt-5 p-0'}>
          <img  
            className={'h-5/6 w-full z-0'}  
                alt='img'
                src={`/images/banner.png`}
          />
          <h1 className={'text-7xl logo z-50 absolute top-32 text-peach'}>Decorations</h1>
          </div>
          {/* <h1 className={'absolute left-10 top-96 pt-5'}>hello</h1> */}
          <div className={'flex flex-row justify-start'}>
          <button className={'absolute left-10 top-96 mt-8 px-5 py-1 bg-pistachio logo2 text-black text-lg hover-bg-coffe'}>Add A Review</button>
          <button className={'absolute left-52 top-96 mt-8 px-5 py-1 bg-pistachio logo2 text-black text-lg hover-bg-coffe'}>Choose A Location<i className={'fas fa-caret-down text-md pl-1'} /></button>
          </div>
          <h2 className={'logo2-italic text-xl mx-20 border-b border-black'}>North Miami Beach</h2>
          <div className={'mx-20 my-8 grid grid-cols-12 gap-8'}>
          <div className={'col-span-3 bg-peach h-80'}>
             1 
          </div>
          <div className={'col-span-3 bg-peach'}>
              2
          </div>
          <div className={'col-span-3 bg-peach'}>
              2
          </div>
          <div className={'col-span-3 bg-peach'}>
              2
          </div>
          <div className={'col-span-3 bg-peach h-80'}>
             1 
          </div>
          <div className={'col-span-3 bg-peach'}>
              2
          </div>
          <div className={'col-span-3 bg-peach'}>
              2
          </div>
          <div className={'col-span-3 bg-peach'}>
              2
          </div>
          </div>
          </div>
    </>
  )
}

export default Decorations
