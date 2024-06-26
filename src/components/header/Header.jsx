/* eslint-disable react/prop-types */
import './header.css';
import LOGO from '../../assets/imgs/logo.png';
import { useState } from 'react';
import { IoMdMenu } from "react-icons/io";

const Header = ({showMenu, setShowMenu}) => {
  const [currentTitle, setCurrentTitle] = useState('');
  
  const openBooking = ()=>{
    window.open('https://calendly.com/powerconsulting24/30min', '_blank')
  }

  const headerLinks = [
    {
      link:'#services',
      text:'Our Services'
    },
    {
      link:'#industry',
      text:'Industry'
    },
    {
      link:'#support',
      text:'Support'
    },
    {
      link:'#academy',
      text:'Academy'
    },
    {
      link:'#aboutus',
      text:'About Us'
    },
    {
      link:'#contact',
      text:'Contact'
    },
  ]
  
  const toggleMenu = ()=>{
    if(showMenu === 'hcenter'){
      setShowMenu('menu')
    }else{
      setShowMenu('hcenter')
    }
  }

  const pressHeaderTitle = (link)=>{
    setCurrentTitle(link);
    setShowMenu('hcenter');
  }

  return (
    <header className='header' >
      <div className="header-container">
        <a href='#home' className="logo">
          <img src={LOGO} alt='logo' className='logo-img' />
        </a>
        <IoMdMenu onClick={toggleMenu} className='menu-icon' size={25} />
        <div className={`hcenter ${showMenu}`}>
          {
            headerLinks.map(item=>(
              <a onClick={()=>pressHeaderTitle(item.link)} key={item.link} href={item.link} className={currentTitle===item.link?"header-click":"header-item"}>{item.text}</a>
            ))
          }
          <button className='book-call' onClick={openBooking} >Book a call</button>
        </div>
        <div></div>
      </div>
    </header>
  )
}

export default Header