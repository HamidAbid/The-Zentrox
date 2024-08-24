import React, { useState } from 'react'
import './App.css';
import HomePage from './screens/HomePage';
import AboutPage from './screens/AboutPage';
import PortfolioPage from './screens/PortfolioPage';
import ContactPage from './screens/ContactPage'
import Navbar from './components/Navbar';
import Discover from './components/Discover';


export default function App() {

  const [activePage, setActivePage] = useState('Home');

function hamid(activePage){
  if (activePage === 'Contact') {

    return(<ContactPage/>)
  }
 else if (activePage === 'About') {
  
    return(<AboutPage/>)
  }
  else if (activePage === 'Portfolio') {
  
    return(<PortfolioPage/>)
  }
  else {
   
    return(<HomePage/>)
  }
}

  return (
    <div>
      <Navbar active='open' value={activePage} setActivePage={setActivePage} />

     { hamid(activePage)}
 
        
      

    </div>
  )
}

