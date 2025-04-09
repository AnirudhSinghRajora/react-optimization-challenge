// import { useState, useEffect } from 'react';
import './App.css'
import Time from './components/clock/Time'
import Essay1 from './components/clock/Essay1'
import RandomInfo from './components/clock/RandomInfo'
import Game from './components/clock/Game'

function App() {
  // const [mouseMoveTrigger, setMouseMoveTrigger] = useState(0);

  // useEffect(() => {
  //   const handleMouseMove = () => {
  //     setMouseMoveTrigger((prev) => prev + 1); 
  //   };

  //   window.addEventListener('mousemove', handleMouseMove);

  //   return () => window.removeEventListener('mousemove', handleMouseMove);
  // }, []);

  // const [scrollTrigger, setScrollTrigger] = useState(0); 

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollTrigger((prev) => prev + 1); 
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);
  return (
    <>
     <div className='p-6 bg-gray-800'>
        <Time/>
      {/* <div className='flex-auto gap-0 justify-between items-center flex-wrap'> */}
        <RandomInfo/>
        {/* <div className='flex justify-between align-center flex-wrap '> */}
          <Game/>
          {/* <Essay1 /> */}

        {/* </div> */}

      {/* </div> */}
     </div>
    </>
  )
}

export default App
