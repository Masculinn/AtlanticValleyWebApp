import React from 'react'
import { useSpring, animated } from "react-spring";

import sakura from '../extra_styles/IndustriesImages/sakuragarden.png'
import santa from '../extra_styles/IndustriesImages/santa.png'

export default function Referances(ref) {
  const animation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000},
  });

    return (
        <animated.div className='h-screen w-full bg-transparent' style={animation}>
        <div className='w-full items-center text-center flex flex-auto lg:flex-row'>
          <div className='lg:w-1/2 h-auto bg-white mx-12 shadow-2xl'>
            <img src={sakura} alt='etsy'className='object-cover'/>
            <h2 className=' pt-6 text-2xl' id='section_font'>- Sakura Garden -</h2>
            <p className=' pt-4 px-8' id='section_font'>Amerika'daki Santa Esmeralda ve Sakura Garden mucehver markalarimizda dijital pazarlama cozumelerimiz ile 2 yila yakin bir surede toplam 1,5 Milyon Dolarlik bir ciro elde ettik.</p>
              <button className='h-16 text-center w-44 bg-black text-white text-xl font-thin transform transition-all duration-200 hover:scale-105 hover:bg-transparent hover:border hover:border-black hover:text-black rounded-full hover:pl-6 my-4' id='section_font' href=''>Sakura →</button>
          </div>
          <div className='lg:w-1/2 h-4/5 bg-white mx-12 shadow-2xl'>
            <img src={santa} alt='etsy' className='object-cover'/>
            <h2 className=' pt-6 text-2xl' id='section_font'>- Santa Esemeralda -</h2>
            <p className=' pt-4 px-8' id='section_font'>Amerika'daki Santa Esmeralda ve Sakura Garden mucehver markalarimizda dijital pazarlama cozumelerimiz ile 2 yila yakin bir surede toplam 1,5 Milyon Dolarlik bir ciro elde ettik.</p>
              <button className='h-16 text-center w-44 bg-black text-white text-xl font-thin transform transition-all duration-200 hover:scale-105 hover:bg-transparent hover:border hover:border-black hover:text-black rounded-full hover:pl-6 my-4' id='section_font' href=''>Santa →</button>
          </div>
        </div>
      </animated.div>
    )
}