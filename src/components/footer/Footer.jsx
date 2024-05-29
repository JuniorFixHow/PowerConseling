import './footer.css';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaTwitter, FaFacebookSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer >
      <div className="footer-container">
        <span className='sub-text' >&copy; 2024 AcuPower. All Rights Reserved.</span>
        <div className="socials">
          <FaTwitter className='social' />
          <FaFacebookSquare className='social' />
          <FaLinkedin className='social' />
          <FaInstagramSquare className='social' />
        </div>
      </div>
      <a href="#home">
        <IoIosArrowDroprightCircle className='footer-icon' />
      </a>
    </footer>
  )
}

export default Footer