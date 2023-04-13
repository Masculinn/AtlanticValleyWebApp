import React from 'react'
import MainHeader from '../IndustriesComponents/MainHeader.js';
import Graph from '../IndustriesComponents/Graph.js';
import Referances from '../IndustriesComponents/Referances.js';
// import mukan from '../extra_styles/IndustriesImages/mukan.png'
import '../App.css'


   //Pie values
  
export default function DigitalMarketing() {
      // <PersonCard name={'Mukan Olcayto'} jobTitle={'Consultant Partner'} image={mukan} explanation={'Explanation goes here'}/>

      const Steps = () => {
        return (
            <div className='text-black items-center justify-center bg-transparent w-full h-screen'>
              <h1 className='pt-10 text-5xl tracking-tighter' id='def'>
                <center>
                  ~ Dijital Pazarlama Sureci 
                </center>
              </h1>
            </div>
            )
          }


    return (
        <div className=''>
          <MainHeader 
              top="Dijital Çözümler" 
              main="Gelişen Pazarda Yerinizi Alın"
              des="Gelişen ve değişen yeni Dünya düzeninde kitlere hitap etmenin en etkili yollarından birinin Dijital Pazarlama olduğunun farkındayiz. Varşova ve İstanbul'daki dijital labimizle markalarımıza dijital pazarlama alanında hizmetler veriyoruz"
              button="Referanslarımız"
            />
            {/* <button className='h-20 mx-5 my-5 text-center w-60 bg-white text-black text-xl font-thin transform transition-all duration-200 hover:scale-105 hover:bg-white hover:border hover:border-black hover:text-black ' id='section_font'>Devlet Teşvikleri  →</button> */}
            <Graph 
                name1="Digital Marketing" 
                name2="Manual Marketing"
                val1={72}
                val2={28}
                worth1={436}
                worth2={196}
                link="Statista Research Department"
                header="Dijital reklamcılık hacminin 2021 yılında 436$ milyon dolar olduğunu biliyor muydunuz?"
                desc="(Bu hacmin 2023'ün son çeyreğinde 602,25 milyar dolara ulaşacağı tahmin ediliyor.)"
            />
            <Steps />
            <Referances />
            <br /> 
            <br /> 
            <br /> 
            <br /> 
            <br /> 
        </div>
    )
}