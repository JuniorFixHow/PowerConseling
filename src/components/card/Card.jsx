/* eslint-disable react/prop-types */
import './card.css';

const Card = ({title, link, text, openWidget}) => {
  return (
    <div onClick={openWidget} className='card' >
        <img src={link} alt="" />
        <span className='card-title' >{title}</span>
        <span className='sub-text justify' >{text}</span>
    </div>
  )
}

export default Card