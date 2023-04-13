import React from "react";
import { Link } from "react-router-dom";
import '../App.js'

export default function Slogan(props) {
    return (
        <div className="text-white items-center justify-center bg-blue-950 bg-opacity-95 w-full h-screen" style={{display: !props.on ? 'none' : 'flex',}}>
        <div>
            <p id="section_font" className="lg:text-6xl md:text-5xl sm:text-4xl text-center text-white text-4xl tracking-tighter m-4">
            Avrupada'ki faaliyetlerinizin %60'ının devlet desteği ile karşılandığını biliyor muydunuz?</p>
            <p id="section_font" className="lg:text-lg md:text-m sm:text-sm text-center  text-white tracking-tight pl-4">
            Size en uygun devlet teşviklerinin neler olduğunu öğrenmek ister misiniz? <br />
                <button className='lg:h-20 lg:w-60 h-16 w-48 mx-5 my-5 text-center bg-white text-black lg:text-xl text-lg font-thin transform transition-all duration-200 hover:scale-105 hover:bg-black hover:border hover:border-black hover:text-white hover:pl-6' id='section_font'><Link to={'/Industries/government-incentive'}>Devlet Teşvikleri  →</Link></button>
            </p>
        </div>
      </div>
      
    )
}