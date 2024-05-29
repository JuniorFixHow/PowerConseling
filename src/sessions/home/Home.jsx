import './home.css';
import IMG from '../../assets/imgs/solutions-backround-1.png';

const Home = () => {
  return (
    <div id='home' className='home' >
        <div className="home-container">
            <div className="home-left">
                <h1 className='title' >We are a global digital services and solutions provider.</h1>
                <a href="#services">
                    <button>Learn More</button>
                    <img className='home-img' src={IMG} alt="startup-3267505_1920.jpg" />
                </a>
            </div>
            <div className="home-center">
                <img src={IMG} alt="startup-3267505_1920.jpg" />
            </div>
            <div className="home-right">
            <span className='welcome-text' >
                AcuPower Group is a certified partner in the Acumatica ERP ecosystem. Our company is built foremost on integrity and excellence ensuring the service you receive not only meet but exceed your expectations.
                <br />
                <br />
                AcuPower provides services to every vertical within Acumatica with our expertise in the Construction and Payroll suites. We do this using a streamlined model proven to increase the efficacy of each project we take on.
            </span>
            </div>
        </div>
    </div>
  )
}

export default Home