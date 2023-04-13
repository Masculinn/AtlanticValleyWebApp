import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTransition, animated } from "react-spring";

const Header_hero = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const hero_style = {
    display: props.on ? 'inline-block' : 'none'
  }

  const transitions = useTransition(showMenu, {
    from: { opacity: 0, transform: 'translateY(-50%)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(-50%)' }
  });

  return (
    <div className="top-0 hidden text-sm ml-10 bg-transparent backdrop-blur-md shadow-gray-500 hover:h-auto " style={(window.innerWidth < 1020) ? hero_style : {display: 'none'}}>
      <button id='section_font' className="lg:mt-0 text-black hover:text-slate-600 mr-4" onClick={() => { setShowMenu(prev => !prev) }}>
        {showMenu ? 'INDUSTRIES ↑' : 'INDUSTRIES ↓'}
      </button>
      {transitions(
        (style, item) => item && (
          <animated.div className="bg-transparent bg-opacity-50 justify-center items-center" style={style}>
            <div className="px-2">
              <div className="inline-block">
                <button onClick={() => {setShowMenu(prev => !prev )}} id="section_font" className="py-1 my-2 px-2 block border border-black rounded-sm bg-black text-white tracking-tight font-semibold"><Link to='/Industries/digital-marketing'>Nullam imperdiet</Link></button>
                <button onClick={() => {setShowMenu(prev => !prev )}} id="section_font" className="py-1 my-2 px-2 block border border-black rounded-sm bg-black text-white tracking-tight font-semibold"><Link to='/Industries/energy'>Vestibulum</Link></button>
                <button onClick={() => {setShowMenu(prev => !prev )}} id="section_font" className="py-1 my-2 px-2 block border border-black rounded-sm bg-black text-white tracking-tight font-semibold"><Link to='/Industries/e-trade'>Praesent non</Link></button>
                <button onClick={() => {setShowMenu(prev => !prev )}} id="section_font" className="py-1 my-2 px-2 block border border-black rounded-sm bg-black text-white tracking-tight font-semibold"><Link to='/Industries/fmcg'>Nullam orci</Link></button>
              </div>
            </div>
          </animated.div>
        )
      )}
      <button id='section_font' className="block mt-4 lg:mt-0 text-black hover:text-slate-600 mr-4">
        WHO WE ARE?
      </button>
      <button id='section_font' className="block mt-4 lg:mt-0 text-black hover:text-slate-600 mr-4 ">
        PARTNERS
      </button>
      <button id='section_font' className="block mt-4 lg:mt-0 text-black hover:text-slate-600 mr-4 pb-6">
        CONTACT US
      </button>
    </div>  
  )
}

export default Header_hero;
