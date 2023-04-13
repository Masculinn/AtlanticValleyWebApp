import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from "react-spring";

import '../App.css'

import Logo from '../extra_styles/Logo.png'
import Hero from './Header_hero.js'

export default function Header(props) {
  const [hoverMobile, setHoverMobile] = useState(false)
  const [color, setColor] = useState(true)
  const [bar, setBar] = useState(false)
  
  const mobileStyle = {
    backgroundColor: color ? '#FFFFFF' : '#000000',
    color: color ? '#000000' : '#FFFFFF'
  }

  const animBar = useSpring({
    transform: bar ? 'scale(1.05)' : 'scale(1)',
    backgroundColor: bar ? 'transparent' : 'transparent',
    boxShadow: bar
      ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      : '0 10px 30px -12px rgba(0, 0, 0, 0.1)',
      display:  (window.innerWidth < 1020) ? 'none' : 'flex',
  })

  const handleClick = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  // DOM MANAGEMENT STARTS HERE 

  return (
    <header className="text-black sticky backdrop-blur-sm top-0" style={{display: props.on ? '' : 'none'}} 
    >
    <nav className="flex items-center justify-between flex-wrap p-6"
          onMouseLeave={() => {
            setBar(prev => !prev)
          }}      
    >
      <div className="flex items-center flex-shrink-0 ">
        <Link to={''}>
          <img src={Logo} height={(window.innerWidth > 1020) ? '200px' : '150px'} width={(window.innerWidth > 1020) ? '150px' :'125px'} alt='' className='ml-5'/>
        </Link>
      </div>
      <div className="flex lg:hidden">
        <br />
        <button className="flex items-center px-3 py-2 rounded-lg bg-white text-black border border-white hover:text-white hover:bg-black hover:border-black" 
          onClick={() => 
            {
              setColor(prev => !prev)
              setHoverMobile(prev => !prev)
          }}
          style={mobileStyle}
          >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className="w-full flex-grow lg:items-center lg:w-auto hidden lg:block">
        <div className="text-sm lg:flex-grow lg:justify-end">            
        <a id='section_font' href="main.js" className="block mt-4 pt-2.5 lg:inline-block lg:mt-0 text-black hover:text-blue-950 mr-10 float-right">
            <span className="material-symbols-outlined -mt-0.5">
              language
            </span>
          </a>
          <a id='section_font' href="/contact" className="block mt-4 pt-2.5 lg:inline-block lg:mt-0 text-black hover:text-blue-950 mr-10 float-right">
            <Link to=''>İLETİŞİME GEÇİN</Link>
          </a>
          <a id='section_font' href="/whoweare" className="block mt-4 pt-2.5 lg:inline-block lg:mt-0 text-black hover:text-blue-950 mr-10 float-right">
          BİZ KİMİZ?
          </a>
          <a id='section_font' href="/investing" className="block mt-4 pt-2.5 lg:inline-block lg:mt-0 text-black hover:text-blue-950 mr-10 float-right">
          AVRUPA'DA YATIRIM
          </a>
          <a id='section_font' href="/home" className="block mt-4 pt-2.5 lg:inline-block lg:mt-0 text-black hover:text-blue-950 mr-10 float-right" 
            onMouseEnter={() => {
                setBar(prev => !prev)
            }}
          >
            {bar ? 'ENDÜSTRİLER ↑' : 'ENDÜSTRİLER ↓'}
          </a>
        </div>
      </div>
      {bar  && (
        <animated.div className="absolute top-full left-0 right-0 w-full h-38 backdrop-blur-sm -mt-6 shadow-xl" style={animBar}>
          <animated.button id='section_font' className="h-16 w-1/6 bg-transparent text-center justify-center mx-10 text-black tracking-tighter font-semibold transform transition-all duration-500 hover:scale-110 hover:bg-black hover:text-white hover:w-2/5" onClick={handleClick}>
            <Link to={'/Industries/government-incentive'}>Devlet Teşvikleri</Link>
          </animated.button>
          <animated.button id='section_font' className="h-16 w-1/6 bg-transparent text-center justify-center mx-10 text-black tracking-tighter font-semibold transform transition-all duration-500 hover:scale-110 hover:bg-black hover:text-white hover:w-2/5" onClick={handleClick}>
            <Link to={'/Industries/e-trade'}>E-Ticaret</Link>
          </animated.button>
          <animated.button id='section_font' className="text-sm h-16 w-1/6 bg-transparent text-center justify-center mx-10 text-black tracking-tighter font-semibold transform transition-all duration-500 hover:scale-110 hover:bg-black hover:text-white hover:w-2/5" onClick={handleClick}>
            <Link to={'/Industries/information-technology'}>IT Hizmetleri</Link>
          </animated.button>
          <animated.button id='section_font' className="text-sm h-16 w-1/6 bg-transparent text-center justify-center mx-10 text-black tracking-tighter font-semibold transform transition-all duration-500 hover:scale-110 hover:bg-black hover:text-white hover:w-2/5" onClick={handleClick}>
            <Link to={'/Industries/digital-marketing'}>Dijital Pazarlama</Link>
          </animated.button>
          <animated.button id='section_font' className="text-sm h-16 w-1/6 bg-transparent text-center justify-center mx-10 text-black tracking-tighter font-semibold transform transition-all duration-500 hover:scale-110 hover:bg-black hover:text-white hover:w-2/5" onClick={handleClick}>
            <Link to={'/Industries/fmcg'}>Hızlı Tüketim Ürünleri</Link>
          </animated.button>
          <animated.button id='section_font' className="h-16 w-1/6 bg-transparent text-center justify-center mx-10 text-black tracking-tighter font-semibold transform transition-all duration-500 hover:scale-110 hover:bg-black hover:text-white hover:w-2/5" onClick={handleClick}>
            <Link to={'/Industries/energy'}>Enerji</Link>
          </animated.button>
        </animated.div>
      )}
    </nav>  
    <Hero on={hoverMobile} />
  </header>
  );
}