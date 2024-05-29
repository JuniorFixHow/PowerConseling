
import { useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import About from './sessions/about/About'
import Academy from './sessions/academy/Academy'
import Contact from './sessions/contact/Contact'
import Difference from './sessions/difference/Difference'
import Home from './sessions/home/Home'
import NextStep from './sessions/nextStep/NextStep'
import Services from './sessions/services/Services'

function App() {
  const [showMenu, setShowMenu] = useState('hcenter');
  return (
    <>
    <Header showMenu={showMenu} setShowMenu={setShowMenu} />
    <div onClick={()=>setShowMenu('hcenter')} className='app-main'>
      <Home />
      <Services />
      <NextStep />
      <Difference />
      <Academy />
      <About />
      <Contact />
      <Footer />
    </div>
    </>
  )
}

export default App
