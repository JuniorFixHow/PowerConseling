import { useState } from 'react';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Academy from '../academy/Academy';
import './dashboard.css';
import Messages from '../messages/Messages';

const Dashboard = () => {
  const [currentTab, setCurrentTab] = useState('aca');
  const [openMessage, setOpenMessage] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  return (
    <div className="dashboard">
      <Header />
      <div className="dash-container">
        <Sidebar setCurrentTab={setCurrentTab} currentTab={currentTab} />
        <div className="content">
          {currentTab === "aca" ? (
            <Academy
              currentItem={currentItem}
              setCurrentItem={setCurrentItem}
              openMessage={openMessage}
              setOpenMessage={setOpenMessage}
              />
              ) : (
              <Messages 
                currentItem={currentItem}
                setCurrentItem={setCurrentItem}
                openMessage={openMessage}
                setOpenMessage={setOpenMessage}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard