/* eslint-disable react/prop-types */
import './sidebar.css';
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { FaGlobe } from "react-icons/fa6";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({setCurrentTab, currentTab, showSide, setShowSide}) => {
  const {dispatch} = useContext(AuthContext);
  const openSite = ()=>{
    window.open('https://www.powerxcelitsolutions.com/', '_blank')
  }

  const navigate = useNavigate();

  const handleLogout = ()=>{
    dispatch({type:'LOGOUT'});
    navigate('/login');
  }

  const showAcademy = ()=>{
    setCurrentTab('aca');
    setShowSide('hide');
  }
  const showMessage = ()=>{
    setCurrentTab('mes');
    setShowSide('hide');
  }

  return (
    <div className={`sidebar ${showSide}`} >
        <div className="side-top">
          <div onClick={showAcademy} className={currentTab==='aca'?"side-one2":"side-one"}>
            <HiMiniUserGroup className={currentTab==='aca'?"side-icon2":"side-icon"} />
            <span className={currentTab==='aca'?"side-text2":"side-text"}>Academy</span>
          </div>
          <div onClick={showMessage} className={currentTab==='mes'?"side-one2":"side-one"}>
            <MdEmail className={currentTab==='mes'?"side-icon2":"side-icon"} />
            <span className={currentTab==='mes'?"side-text2":"side-text"}>Messages</span>
          </div>
          <div onClick={openSite} className="side-one">
            <FaGlobe className='side-icon' />
            <span className="side-text">Visit Public Site</span>
          </div>
        </div>
        <div className="side-down">
          <div onClick={handleLogout} className="side-one">
            <CiLogout className='side-icon' />
            <span className="side-text">Logout</span>
          </div>
        </div>
    </div>
  )
}

export default Sidebar