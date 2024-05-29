import { useState } from 'react';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Academy from '../academy/Academy';
import './dashboard.css';
import Messages from '../messages/Messages';
import { IoMdMenu } from "react-icons/io";

const Dashboard = () => {
  const [currentTab, setCurrentTab] = useState('aca');
  const [openMessage, setOpenMessage] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const [showSide, setShowSide] = useState('hide');


  const toggle = () =>{
    if(showSide === 'hide'){
      setShowSide('sidebar');
    }else{
      setShowSide('hide');
    }
  }

  return (
    <div className="dashboard">
      <Header />
      <div className="dash-container">
        {
          showSide === 'hide' &&
          <IoMdMenu onClick={toggle} className='menu-icon' />
        }
        <Sidebar showSide={showSide} setShowSide={setShowSide} setCurrentTab={setCurrentTab} currentTab={currentTab} />
        <div className="content">
          {currentTab === "aca" ? (
            <Academy
              currentItem={currentItem}
              setCurrentItem={setCurrentItem}
              openMessage={openMessage}
              setOpenMessage={setOpenMessage}
              setShowSide={setShowSide}
              />
              ) : (
              <Messages 
                currentItem={currentItem}
                setCurrentItem={setCurrentItem}
                openMessage={openMessage}
                setOpenMessage={setOpenMessage}
                setShowSide={setShowSide}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard