import {Component} from 'react'
import HistoryItem from '../HistoryItem'

import './index.css'

class BrowserHistory extends Component {
  state = {searchInput: '', historyList: initialHistoryList}

  onChangeSearchInput = event => {
    const searchValue = event.target.value
    this.setState({searchInput: searchValue.toLowerCase()})
  }

  deleteHistoryItem = id => {
    const filteredHistoryList = initialHistoryList.filter(
      eachHistoryItem => eachHistoryItem.id !== id,
    )
    this.setState({historyList: filteredHistoryList})
  }

  render() {
    const {searchInput, historyList} = this.state
    const {initialHistoryList} = this.props
    const searchedList = historyList.filter(eachHistoryItem =>
      eachHistoryItem.title.toLowerCase().includes(searchInput),
    )

    if (searchedList === null) {
      const historyList = <p className="empty">There is no history to show</p>
    } else {
      const historyList = (
        <ul className="listContainer">
          {searchedList.map(eachHistoryItem => (
            <HistoryItem
              key={eachHistoryItem.id}
              historyItem={eachHistoryItem}
              deleteHistoryItem={this.deleteHistoryItem}
            />
          ))}
        </ul>
      )
    }

    return (
      <div className="appContainer">
        <div className="headerContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="historyLogo"
          />
          <div className="searchContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="searchImg"
            />
            <input
              type="search"
              className="search"
              placeholder="Search history"
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>
        <div className="historyContainer">{historyList}</div>
      </div>
    )
  }
}

export default BrowserHistory
