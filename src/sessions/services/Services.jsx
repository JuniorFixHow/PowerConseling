import Card from '../../components/card/Card';
import './services.css';
import LINK from '../../assets/imgs/w-type-of-chart.png';
import LINK2 from '../../assets/imgs/w-how-does-forex-trading-work.png';
import LINK5 from '../../assets/imgs/w-forex-trading.png';
import LINK3 from '../../assets/imgs/w-forex-trading-platform.png';
import LINK4 from '../../assets/imgs/w-forex-market.png';
import LINK6 from '../../assets/imgs/PNG-Service-Acquisition-v2.png';
import LINK7 from '../../assets/imgs/medical-writing-transparent-background-from-vector.png';

const Services = () => {
  return (
    <div id='services' className="services">
      <span className='subtitle' >We take your business to the next level</span>
      <span className='text-content' >
        Our Acumatica services range from supporting your customer needs to assisting you as a VAR with your business processes.  Regardless if you need something a la carte or more intensive, we have a solution for you.
      </span>
      <div className="card-container">  
        <div className="cards">
            <Card title='Implementation Services' link={LINK} />
            <Card title='Re-Implementation Services' link={LINK2} />
            <Card title='Support Services' link={LINK3} />
            <Card title='Consultant Training' link={LINK4} />
        </div>
        <div className="cards">
            <Card title='Pre-Sales Services' link={LINK5} />
            <Card title='VAR Business Processs Services' link={LINK6} />
            <Card title='Business Process Optimization Package' link={LINK7} />
        </div>
      </div>
    </div>
  );
}

export default Services