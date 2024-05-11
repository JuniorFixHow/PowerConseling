import './header.css';
import LOGO from '../../assets/imgs/logo.png';
import { useState } from 'react';

const Header = () => {
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
      link:'#contact',
      text:'Contact'
    },
  ]

  return (
    <header className='header' >
      <div className="header-container">
        <a href='#home' className="logo">
          <img src={LOGO} alt='logo' className='logo-img' />
        </a>
        <div className="hcenter">
          {
            headerLinks.map(item=>(
              <a onClick={()=>setCurrentTitle(item.link)} key={item.link} href={item.link} className={currentTitle===item.link?"header-click":"header-item"}>{item.text}</a>
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