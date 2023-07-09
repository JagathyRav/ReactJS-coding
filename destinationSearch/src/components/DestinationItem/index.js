// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationItem} = props
  const {name, imgUrl} = destinationItem
  console.log(name, imgUrl)

  return (
    <li className="card">
      <img src={imgUrl} className="image" alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}
export default DestinationItem
