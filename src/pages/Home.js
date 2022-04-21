import React from 'react'
import {useState} from 'react'; 
import DropdownMenu from '../components/DropdownMenu'
import Search from '../components/Search'
// import image from "images/vg-5.jpg"; 

function Home() {
  const [searchInput, setSearchInput] = useState('');

  const onChange = (event) => {
    setSearchInput(event.currentTarget.value);
    console.log('search input is:', searchInput);
  }

  return (
    <>
      <div className={'bg-white h-3/5 relative'}>

      <span className={'flex justify-center'}>
        <Search onChange={onChange} searchInput={searchInput} setSearchInput={setSearchInput} />
      </span>
     
      <img className={'z-0 h-full'} alt='img' src={`images/bg-new-2-copy.jpg`}/>
      </div>
      
      
      {/* bjbj */}
      <div className={'h-screen  w-full flex flex-row'}>
      <div className={'h-full w-1/2 bg-pistachio'}>
        
      </div>
        <div className={'h-full w-1/2 bg-pistachio3 flex justify-center items-center relative'}>
        <img className={'h-24 absolute top-28 right-44'} alt='img' src={`images/tape1.png`}/> 
        <img className={'h-3/5 border-white border-8 justify-center'} alt='img' src={`images/pic1.jpg`}/>
        </div>
      </div>
       {/* box 3 */}
      <div className={'bg-white h-20'}></div>

        {/* box2 */}
    <div className={'h-screen bg-white'}>
      <div className={'flex flex-row '}>
          <div className={'my-10 ml-24 w-5/6 bg-coffe h-14'}>

          </div>
          <div className={'my-10 mr-24 ml-0 text-xl text-center w-1/6 bg-white'}>
              <h2 className={'logo2'}>Some Of Our Categories</h2>
          </div>
        </div>
        <div className={'flex flex-row mx-24'}>
          <div className={'h-96 w-1/4 bg-peach'}>
            <img  
                  className = {'h-96 w-full cursor-pointer'}  
                  alt='img'
                  src={`images/decor1.jpg`}
                  />
          </div>
          <div className={'h-96  w-1/4 bg-peach ml-6'}>
          <img  
                  className = {'h-96 w-full cursor-pointer'}  
                  alt='img'
                  src={`images/Cake1.jpg`}
                  />
          </div>
          <div className={'h-96  w-1/4 bg-peach ml-6 '}>
          <img  
                  className = {'h-96 w-full cursor-pointer'}  
                  alt='img'
                  src={`images/Activities10.jpg`}
                  />
          </div>
          <div className={'h-96  w-1/4 bg-peach ml-6'}>
          <img  
                  className = {'h-96 w-full cursor-pointer'}  
                  alt='img'
                  src={`images/photoshoot3.jpg`}
                  />
          </div>
        </div>
        <div className={'flex flex-row mx-24 my-6'}>
          <div className={'text-center w-1/3'}>
            <h1 className={'logo2 text-lg'}>Decorations</h1>
            <p className={'my-3 text-sm'}>Find out the perfect decorations for your party </p>
            <button className={'bg-dark-coffe text-white font2 text-sm py-2 px-6'}>Learn More</button>
          </div>
          <div className={'text-center ml-3 w-1/3'}>
            <h1 className={'logo2 text-lg'}>Cakes</h1>
            <p className={'text-sm my-3'}>fmkem femkem fkemek fmekm kefnkn </p>
            <button className={'bg-dark-coffe text-white font2 text-sm py-2 px-6'}>Learn More</button>
          </div>
          <div className={'text-center ml-3 w-1/3'}>
            <h1 className={'logo2 text-lg'}>Activities</h1>
            <p className={'text-sm my-3'}>fmkem femkem fkemek fmekm kefnkn feknfk </p>
            <button className={'bg-dark-coffe text-white font2 text-sm py-2 px-6'}>Learn More</button>
          </div>
          <div className={'text-center w-1/3'}>
            <h1 className={'logo2 text-lg'}>Potographers</h1>
            <p className={'my-3 text-sm'}>Find out the perfect decorations for your party </p>
            <button className={'bg-dark-coffe text-white font2 text-sm py-2 px-6 hover-bg-coffe'}>Learn More</button>
          </div>
      </div>
      </div>
      
      {/* box 3 */}
      <div className={'bg-white h-20'}></div>
      {/* box1 */}

      <div className={'w-full h-screen relative'}>
          <div className={'h-2/5 bg-white text-center p-14'}>
            <h2 className={'logo2-italic text-lg'}>Plan The Perfect Party In Just Few Steps Steps Steps</h2>
            <h2 className={'logo2-italic text-lg'}>Plan The Perfect Party In Just Few Steps </h2>
            <div className={'flex flex-row justify-center'}>
            <p className={'font-ligth text-right text-sm pr-3 py-3'}>text text text text text text texttext text text text <br /> text text text texttext text text text textfrf textfrf<br /> ttextfrftextfrfext text text texttexvtt  rfrf<br />trffextextfextfrftextfrft text text tex<br /> </p>
            <p className={'font-ligth text-left text-sm pl-3  py-3'}>text text text text text text texttext text text text <br /> text text text texttext text text text frfrfrfr<br /> textfrftextfrftextfrftext text text texttexvtvt frfr<br />frfrtextfrfxtfrftextfrfext text text <br /> </p>
          </div>
          <h2 className={'logo2 text-md text-center'}>Get Started</h2>
          </div>
        <div className={'flex justify-center '}>
          <img className={'z-1 h-36 absolute top-60'} alt='img' src={`images/line.png`} />
        </div>
        <div className={'h-3/5 bg-peach '}>
          <div className={'flex flex-row justify-center'}>
          <div className={'py-10 h-full w-1/6'}>1</div> 
          <div className={'py-10 h-full w-1/6'}>2</div>
          <div className={'py-10 w-1/6 border'}>3</div>
          <div className={'py-10 w-1/6 border'}>4</div>
            <div className={'py-10 w-1/6 border'}>5</div>
            <div className={' py-10 w-1/6 border'}>6</div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Home
{/* <div className={'h-screen bg-red-100 bg-blend-lighten'}style={{ backgroundImage:`url(images/vg-5.jpg)`}}> */ }
      {/* <div className={'bg-blend-lighten bg-red-500'}>
      <img  
                className = {'bg-blend-lighten bg-red-500'}  
                alt='img'
                src={`images/vg-5.jpg`}
                    />
      </div> */}
      // <div className={'h-screen w-screen'}style={{ backgroundImage:`url(images/bg-new-2.jpg)`}}></div>