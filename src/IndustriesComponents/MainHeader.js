import React from "react";
import { useSpring, animated } from "react-spring";
import '../App.css'

export default function MainHeader(props) {
    const animation = useSpring({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { duration: 1000},
    });

    return (
        <animated.div className='text-black items-center justify-center bg-transparent w-full h-screen' style={animation}>
        <div className=''>
          <center>
          <h3 className='pt-40 text-slate-600 block' id='section_font'>-{props.top}-</h3>
          <h1 className='text-center lg:text-6xl md:text-4xl sm:text-3xl text-2xl text-black block tracking-tighter' id='section_font'>{props.main}</h1>  
          <h4 className='block justify-center lg:pt-10 pt-5 lg:w-1/2 font-mono tracking-tight sm:px-5 px-5 lg:px-0' id='section_font'>{props.des}</h4>
          <button className='h-20 mx-5 my-5 text-center w-52 bg-black text-white text-xl font-thin transform transition-all duration-200 hover:scale-105 hover:bg-transparent hover:border hover:border-black hover:text-black rounded-full' id='section_font'>{props.button}</button>
          </center>
        </div>
      </animated.div>
    )
}