// Write your code here.
import './index.css'

function CardItem(props) {
  const {card} = props

  return (
    <li className={`${card.className} ${'card'}`}>
      <h1 className="cardHeading">{card.title}</h1>
      <p className="cardDescription">{card.description}</p>
      <img src={card.imgUrl} alt={card.title} className="image" />
    </li>
  )
}

export default CardItem
