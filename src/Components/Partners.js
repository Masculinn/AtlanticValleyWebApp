import React, {useEffect, useState} from "react";

import '../App.css'

import logo1 from '../extra_styles/Sponsors/edmlogo.png'
import logo2 from '../extra_styles/Sponsors/etsy_logo.png'
import logo3 from '../extra_styles/Sponsors/masislogo.png'
import logo4 from '../extra_styles/Sponsors/onurlogo.png'
import logo5 from '../extra_styles/Sponsors/AWS.png'
import logo6 from '../extra_styles/Sponsors/React.png'
import logo7 from '../extra_styles/Sponsors/Tailwind CSS.png'

export default function Partners(props) {
    const [count, setCount] = useState(0);
    const logos = [logo5, logo6, logo7];
    const [logoQueue, setLogoQueue] = useState([...logos]);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setLogoQueue(prevQueue => {
          const nextQueue = [...prevQueue];
          const nextLogo = nextQueue.shift(this);
          nextQueue.push(nextLogo);
          return nextQueue;
        });
      }, 2500);
      return () => clearInterval(interval);
    }, []);
    
    useEffect(() => {
      setCount(logoQueue[0]);
    }, [logoQueue]);
    
    return (
        <div className="text-black items-center justify-center bg-transparent w-full h-screen" style={{display: !props.on ? 'none' : 'flex'}}>
            <div className="">
                <div className=" bg-transparent p-5  text-center " id="section_font">
                    <p className=" lg:text-lg md:text-m sm:text-sm text-sm text-slate-600">-Büyürken yanında olduğumuz-</p>
                    <h2 className="tracking-tight lg:text-3xl md:text-xl sm:text-lg text-2xl text-black text-center">Profesyonel destek için bizi tercih eden iş ortaklarımız</h2>            
                </div>
                <div className="justify-center text-center">
                    <div class="relative inline-flex overflow-x-hidden">
                        <div class="py-12 whitespace-nowrap" id="marquee1">
                            <img alt="" src={logo1} class="lg:mx-14 md:mx-10 sm:mx-8 mx-2 inline-flex lg:h-30 lg:w-32 md:h-20 md:w-24 h-14 w-16" />
                            <img alt="" src={logo2} class="lg:mx-14 md:mx-10 sm:mx-8 mx-2 inline-flex lg:h-30 lg:w-32 md:h-20 md:w-24 h-14 w-16" />
                            <img alt="" src={logo3} class="lg:mx-14 md:mx-10 sm:mx-8 mx-2 inline-flex lg:h-30 lg:w-32 md:h-20 md:w-24 h-14 w-16" />
                            <img alt="" src={logo4} class="lg:mx-14 md:mx-10 sm:mx-8 mx-2 inline-flex lg:h-30 lg:w-32 md:h-20 md:w-24 h-14 w-16" />
                            <img alt="" src={count} class="lg:mx-14 md:mx-10 sm:mx-8 mx-2 inline-flex lg:h-32 lg:w-32 md:h-20 md:w-20 h-14 w-16" />
                        </div>
                        <div class="absolute top-0 py-12 whitespace-nowrap" id="marquee2">
                            <img alt="" src={logo1} class="lg:mx-14 md:mx-10 sm:mx-8 mx-2 inline-flex lg:h-30 lg:w-32 md:h-20 md:w-24 h-14 w-16" />
                            <img alt="" src={logo2} class="lg:mx-14 md:mx-10 sm:mx-8 mx-2 inline-flex lg:h-30 lg:w-32 md:h-20 md:w-24 h-14 w-16" />
                            <img alt="" src={logo3} class="lg:mx-14 md:mx-10 sm:mx-8 mx-2 inline-flex lg:h-30 lg:w-32 md:h-20 md:w-24 h-14 w-16" />
                            <img alt="" src={logo4} class="lg:mx-14 md:mx-10 sm:mx-8 mx-2 inline-flex lg:h-30 lg:w-32 md:h-20 md:w-24 h-14 w-16" />
                            <img alt="" src={count} class="lg:mx-14 md:mx-10 sm:mx-8 mx-2 inline-flex lg:h-32 lg:w-32 md:h-20 md:w-20 h-14 w-16" />
                        </div>
                    </div>
                </div>
            </div>        
        </div>
        )
}