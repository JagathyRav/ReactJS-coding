import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    const searchValue = event.target.value
    this.setState({searchInput: searchValue.toLowerCase()})
  }

  selectSuggestion = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion.toLowerCase().includes(searchInput),
    )

    return (
      <div className="appContainer">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <ul className="suggestionContainer">
          <li className="searchContainer">
            <img
              className="searchImg"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="searchText"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </li>
          {searchResults.map(eachSuggestion => (
            <SuggestionItem
              key={eachSuggestion.suggestion}
              suggestionItem={eachSuggestion}
              selectSuggestion={this.selectSuggestion}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default GoogleSuggestions
