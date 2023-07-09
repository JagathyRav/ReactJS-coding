import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, selectSuggestion} = props
  const {suggestion} = suggestionItem

  const onButton = () => {
    selectSuggestion(suggestion)
  }

  return (
    <li className="list-item-container">
      <p>{suggestion}</p>
      <button className="button" type="button" onClick={onButton}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
