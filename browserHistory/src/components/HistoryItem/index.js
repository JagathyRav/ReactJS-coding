import './index.css'

const HistoryItem = props => {
  const {historyItem, deleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  const onDelete = () => {
    deleteHistoryItem(id)
  }

  return (
    <li className="historyItem">
      <p className="time">{timeAccessed}</p>
      <div className="itemDetails">
        <img src={logoUrl} alt="domain logo" className="websiteLogo" />
        <p className="title">{title}</p>
        <p className="domainUrl">{domainUrl}</p>
      </div>
      <button
        type="button"
        className="button"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
