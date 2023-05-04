import logo from './logo.svg';
import './App.css';
import { useScroll, motion, useTransform, useInView, inView } from "framer-motion"
import { useRef, useEffect } from 'react';

function App() {



  let { scrollYProgress } = useScroll();
  let yscroll = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const ref = useRef(null)
  const isInView = useInView(ref)
  useEffect(() => {
    console.log("Element is in view: ", isInView)
  }, [isInView])

  return (
    <>
      {/*  */}
      <div className="bg-gradient-to-r from-[#ff4632] to-[#fd633d] sticky top-0 h-screen overflow-hidden  items-center flex justify-center overflow-x-auto">
        <div className='text-5xl text-white'>
          Join the band
          </div>
      </div>


      
       
           <div id="who-are-we"></div>
        
          <div className="bg-white h-screen sticky top-0  border border-[#1010181f] rounded-t-3xl">
            <a href='#who-are-we'>
            <div className='text-5xl pl-20 p-10 text-left text-black'>
              Who are we
            </div>
            </a>
          </div>
        

        
         <div id="where-we-are"></div> 
    
          
          <div className='bg-white h-screen sticky top-[128px] border border-[#1010181f]  rounded-t-3xl'>
            <a href='#where-we-are'>
            <div className='text-5xl pl-20 p-10 text-left text-black'>
              Where we are
            </div>
            </a>
          </div>
    


        
        
          <div className='bg-white h-screen relative top-[236px] border border-[#1010181f]  rounded-t-3xl'>
            <a href='#where-we-are'>
            <div className='text-5xl pl-20 p-10 text-left text-black'>
              Where we are
            </div>
            </a>
          </div>
    
          <div className={` h-screen absolute border flex  rounded-t-3xl flex-col justify-center ${isInView == true ? 'bg-blue-500 border-white text-white' : 'bg-white border-[#1010181f] text-black' }`}>
           
            <div className={`text-5xl p-10 flex self-center justify-self-start`}>
              Featured Jobs
            </div>
            
            <div ref={ref} className='self-center'>
                <div className='w-40 h-40 border border-white'>

                </div>
            </div>
          
          </div>


    
  
    </>
  );
}

export default App;








