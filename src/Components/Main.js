import React from 'react'

import '../App.css'
export default function Main(props) {
    const Header = () => {
        return (
            <div className=' -mt-40'>
                <header className=' text-center lg:text-6xl md:text-4xl sm:text-3xl text-3xl text-black' id='def'>BÜYÜRKEN YANINIZDAYIZ.</header>
                <p id='section_font' className='text-center mt-5 text-gray-600 lg:text-lg md:text-lg sm:text-sm text-xs lg:px-52'>Atlantic Valley Partners, küresel bir yönetim danışmanlığı firmasıdır. Önde gelen işletmelerin, hükümetlerin ve kurumların güvenilir danışmanıyız.</p>
                <center>
                    <button className='h-16 mx-5 my-5 text-center w-44 bg-black text-white text-xl font-thin transform transition-all duration-200 hover:scale-105 hover:bg-transparent hover:border hover:border-black hover:text-black rounded-full' id='section_font' href=''>Biz Kimiz?</button>
                </center>
            </div>            
        )
    }

    return (
        <div>
            <main className='text-white items-center justify-center bg-transparent w-full h-screen' id='main' style={{display: !props.on ? 'none' : 'flex'}}>
                <Header />
            </main>
        </div>
    )
}