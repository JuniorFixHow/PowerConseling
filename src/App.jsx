
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Academy from './sessions/academy/Academy'
import Contact from './sessions/contact/Contact'
import Difference from './sessions/difference/Difference'
import Home from './sessions/home/Home'
import NextStep from './sessions/nextStep/NextStep'
import Services from './sessions/services/Services'

function App() {

  return (
    <div className='app-main'>
      {/* set an onpress function as a prop for the header */}
      <Header />
      <Home />
      {/* set IDs as props for these components */}
      <Services />
      <NextStep />
      <Difference />
      <Academy />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
