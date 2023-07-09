import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleStar} = props
  const {id, title, date, isStarred} = appointmentDetails

  const starImageUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    toggleStar(id)
  }

  return (
    <li className="appointmentItem">
      <div className="appointment">
        <p className="appointmentTitle">{title}</p>
        <p className="appointmentDate">{date}</p>
      </div>
      <button
        type="button"
        className="starButton"
        onClick={onClickStar}
        data-testid="star"
      >
        <img className="starImage" src={starImageUrl} alt="star" />
      </button>
    </li>
  )
}

export default AppointmentItem
