import React from 'react'
import MainHeader from '../IndustriesComponents/MainHeader.js';
import Graph from '../IndustriesComponents/Graph.js';
import Referances from '../IndustriesComponents/Referances.js';
import PersonCard from '../IndustriesComponents/PersonCard.js';

import Mukan from '../extra_styles/IndustriesImages/mukan.png'
import '../App.css'

  
export default function Fmcg() {
    return (
        <div className=''>
          <MainHeader 
              top="Hizli tüketim ürünleri" 
              main="Doğru yerdesiniz..."
              des="Dunyanin en buyuk yatirim sektorlerinden bir tanesinin bilgi teknolojileri oldugu gercegi herkes tarafindan biliniyor. Biz de bu yolda yaratici farkli ve orijinal cozumler sunuyoruz"  
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
            <PersonCard 
                name={"Mukan Olcayto"}
                jobTitle={"Consultant Manager"}
                image={Mukan}
            />
            <Referances />
        </div>
    )
}