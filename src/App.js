import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Components/Header.js'
import Slogan from './Components/Slogan.js'
import Stats from './Components/Stats.js'
import World from './Components/World.js'
import Partners from './Components/Partners.js'
import Footer from './Components/Footer.js'

import Main from './Components/Main.js'

// Pages
import DigitalMarketing from './Industries/DigitalMarketing.js';
import InformationTech from './Industries/InformationTech.js';
import GovernmentIncentive from './Industries/GovernmentIncentive.js';
import Energy from './Industries/Energy.js';
import ETrade from './Industries/ETrade.js';
import Fmcg from './Industries/Fmcg.js';
import Investing from './Components/Investing.js'
import WhoWeAre from './Components/WhoWeAre.js'
import Contact from './Components/Contact.js'

import './App.css'
import './index.css'

export default function App() {
  return (
    <Router>
      <Header on={true}/>
      <Routes>
        <Route exact path="" element={<Main on={true} />}/>
        <Route path ="/Industries/digital-marketing" element={<DigitalMarketing />}/>
        <Route path ="/investing" element={<Investing />}/>
        <Route path ="/whoweare" element={<WhoWeAre />}/>
        <Route path ="/contact" element={<Contact />}/>
        <Route path ="/Industries/energy" element={<Energy />}/>
        <Route path ="/Industries/e-trade" element={<ETrade />}/>
        <Route path ="/Industries/fmcg" element={<Fmcg />}/>
        <Route path ="/Industries/information-technology" element={<InformationTech />}/>
        <Route path ="/Industries/government-incentive" element={<GovernmentIncentive />}/>
      </Routes>
      <Slogan on={true}/>
      <World on={true}/>
      <Stats on={true}/>
      <Partners on={true}/>
      <Footer on={true}/>
    </Router>
  );
}

