import React from 'react'

import '../App.css'
 
export default function Stats(props) {
    return (
        <div className=" text-white items-center justify-center bg-transparent w-full h-screen scale-75" style={{display: !props.on ? 'none' : 'flex'}}>
           <div class="flex flex-col lg:flex-row">
                <div id='section_font' class="w-full lg:w-1/3 p-8 lg:p-40 bg-transparent text-black text-4xl lg:border-r-2 lg:border-black">
                <h2 class='text-6xl text-blue-700'>+4 Ülkede</h2> 
                    <br />
                    <p>ile birçok ülkede hizmet vermekteyiz</p>
                </div>
                <div id='section_font' class="w-full lg:w-1/3 p-8 lg:p-40 bg-transparent text-black text-4xl lg:border-r-2 lg:border-black">
                   
                    <h2 class='text-6xl text-blue-700'>+8 <br /> YIL</h2> 
                    <br />
                    <p>J.P. Morgan şirketinde başlayan danışmanlık serüveni</p>
                </div>
                <div id='section_font' class="w-full lg:w-1/3 p-8 lg:p-40 bg-transparent text-black text-4xl lg:border-none">
                    <h2 class='text-6xl text-blue-700'>+5m <br />Euro</h2> 
                    <br />
                    <p>Toplamı 5m aşan yatırım miktarı</p>
                </div>
            </div>
        </div>
        )
}