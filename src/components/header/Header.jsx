import './header.css';
import LOGO from '../../assets/imgs/logo.png';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <img src={LOGO} alt="logo" />
        <span className="header-text">AcuPower Admin Portal</span>
      </div>
    </header>
  )
}

export default Header