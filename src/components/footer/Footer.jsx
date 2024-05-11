import './footer.css';
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <span className='sub-text' >&copy; 2024 Power Consulting. All Rights Reserved.</span>
      <a href="#home">
        <IoIosArrowDroprightCircle className='footer-icon' />
      </a>
    </footer>
  )
}

export default Footer