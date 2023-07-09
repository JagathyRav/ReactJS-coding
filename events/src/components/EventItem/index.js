import './index.css'

const EventItem = props => {
  const {eventDetails, onClickEvent} = props
  const {imageUrl, name, location, registrationStatus} = eventDetails

  const onClickItem = () => {
    onClickEvent(registrationStatus)
  }

  return (
    <li className="event-item">
      <button type="button" className="event-button" onClick={onClickItem}>
        <img src={imageUrl} alt="event" className="event-image" />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
