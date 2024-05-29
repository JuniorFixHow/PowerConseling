import Card from '../../components/card/Card';
import './services.css';
// import LINK from '../../assets/imgs/w-type-of-chart.png';
// import LINK2 from '../../assets/imgs/w-how-does-forex-trading-work.png';
// import LINK5 from '../../assets/imgs/w-forex-trading.png';
// import LINK3 from '../../assets/imgs/w-forex-trading-platform.png';
// import LINK4 from '../../assets/imgs/w-forex-market.png';
// import LINK6 from '../../assets/imgs/PNG-Service-Acquisition-v2.png';
// import LINK7 from '../../assets/imgs/medical-writing-transparent-background-from-vector.png';
import { CardContent } from '../../constant/Data';
import { useState } from 'react';

const Services = () => {
  const [currentId, setCurrentId] = useState(null);
  const openWidget = (id) =>{
    if(currentId === null){
      setCurrentId(id)
    }
    else{
      setCurrentId(null)
    }
  }
  return (
    <div id='services' className="services">
      <span className='subtitle service-text' >We take your business to the next level</span>
      <span className='text-content' >
        Our Acumatica services range from supporting your customer needs to assisting you as a VAR with your business processes.  Regardless if you need something a la carte or more intensive, we have a solution for you.
      </span>
      <div className="card-container">  
        <div className="cards">
          {
            CardContent.map(item=>(
              <div className='card-wrap' key={item.id}>      
                <Card openWidget={()=>openWidget(item.id)} text={currentId === item.id ? item.text : ''} title={item.title} link={item.img} />
              </div>
            ))
          }
        </div>
        
      </div>
    </div>
  );
}

export default Services