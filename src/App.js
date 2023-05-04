//https://github.com/48Stephen/Spotify-Insiperd-Pages
//https://spotify-inspired-pages.web.app
//https://www.lifeatspotify.com/


import { useInView } from "framer-motion"
import { useRef, useEffect } from 'react';

const App = () => {



  const ref = useRef(null)
  const pink = useRef(null)

  const isInView = useInView(ref)
  const isPinkInView = useInView(pink)


  return (
    <>
     
      <div className="bg-gradient-to-r from-[#ff4632] to-[#fd633d] sticky top-0 min-h-screen overflow-hidden  items-center flex justify-center overflow-x-auto">
        <div className='text-8xl font-bold text-white'>
          Join the band
          </div>
      </div>
      
       
      <div id="who-are-we"></div> 
      <div className="bg-white min-h-screen flex sticky top-0 border border-[#1010181f] rounded-t-3xl">
        
        <a href='#who-are-we' className='w-full absolute'>
          <div className='text-3xl whitespace-nowrap pl-20 h-fit p-10 text-left text-black hover:opacity-70 ease-in-out transition duration-500'>
            Who are we
          </div>
        </a>
        
        <div className='flex w-full justify-center items-center'>
          <div className={`text-5xl`}>
          One band, no solo artists
          </div>
        </div>
      </div>
    

    
      <div id="where-we-belong"></div> 
      <div className='bg-white min-h-screen w-full flex sticky top-[120px] border border-[#1010181f]  rounded-t-3xl'>
        <a href='#where-we-belong' className='w-full absolute'>
          <div className='text-3xl whitespace-nowrap pl-20 h-fit p-10 text-left text-black hover:opacity-70 ease-in-out transition duration-500'>
              Where we belong
          </div>
        </a>
        <div className='flex w-full justify-center items-center'>
          <div className={`text-5xl`}>
          Listening and learning
          </div>
        </div>
      </div>
    


        
      <div id="how-we-act"></div> 
      <div className={`min-h-screen relative top-[120px] border border-[#1010181f]  transition-all ease-in-out duration-500  ${isInView == true ? 'bg-[#2d46b9] ' : 'bg-white  rounded-t-3xl' }`}>
        
      <a href='#how-we-act' className='w-full absolute'>
          <div className='text-3xl whitespace-nowrap pl-20 h-fit p-10 text-left text-black hover:opacity-70 ease-in-out transition duration-500'>
              How we act
          </div>
        </a>
      
      </div>
    
      <div className={`grid grid-cols-1 w-full min-h-screen absolute rounded-t-3xl justify-center transition-all ease-in-out duration-500 ${isInView == true ? 'bg-[#2d46b9] border-white text-white' : 'bg-white border-[#1010181f] text-black' }`}>
    
        <div className={`text-5xl flex transition-all self-center ease-in-out duration-500 justify-self-center mb-40`}>
          Featured Jobs
        </div>
        
        <div className='w-full justify-evenly self-center flex '>
            <div ref={ref}></div>
        </div>

  
        <div className={`grid grid-cols-1 w-full justify-center min-h-screen transition-all ease-in-out duration-500  ${isInView == true ? 'bg-[#2d46b9] text-white' : 'bg-white text-black'}`}>
        
          <div className={"text-5xl text-center flex self-center justify-self-center"}>
            Here, there, everywhere
          </div>
    
        </div>


        <div className={`grid grid-cols-1 w-full justify-center text-black min-h-screen transition-all ease-in-out duration-500 ${isPinkInView == true ? 'bg-[#ffcdd2]' : 'bg-white' }`}>
        
          <div className={"text-5xl text-center flex self-center justify-self-center transition-all ease-in-out duration-500 "}>
            Fresh Content
          </div>

          <div className='w-full justify-evenly self-center'>
            <div ref={pink} ></div>
          </div>
        
    
        </div>
      
      </div>
          
          
    
  
    </>
  );
}

export default App;
