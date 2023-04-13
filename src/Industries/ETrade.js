import React from 'react'
import MainHeader from '../IndustriesComponents/MainHeader.js';
import Graph from '../IndustriesComponents/Graph.js';
import '../App.css'


export default function ETrade() {
    return (
        <div>
            <MainHeader 
                top="Elektronik Ticaret" 
                main="Milyarlarca dolarlık işlem hacmiyle her geçen gün büyüyor."
                des="E-Ticaret Dunyasi, insanların bildiğinin aksine pasif gelir kaynağı olmadığını çok daha kapsamlı ve geniş bir operasyon olduğunun farkındayız. Tedarik zinciri planlamasından maliyet kazançlı depo fikrine, depodan marka copyright işlemlerine kadarki bütün alt elementleri ile markalarımıza profesyonel hizmetler veriyoruz."
                button="Referanslarımız"
            />
            <Graph 
                name1="Value_name" 
                name2="Value_name2"
                val1={36}
                val2={64}
                worth1={246}
                worth2={354}
                link="Euromonitor International"
                header="Global e-ticaret hacminin 2016-2020 yılları arasında yıllık ortalama büyüme hacmi %21 ile toplam 2,5 Trilyon Dolardır"
                desc=""
            />
            {/* <Steps /> */}
        </div>
    )
}