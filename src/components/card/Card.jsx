import './card.css';

const Card = ({title, link}) => {
  return (
    <div className='card' >
        <img src={link} alt="" />
        <span className='card-title' >{title}</span>
    </div>
  )
}

export default Card