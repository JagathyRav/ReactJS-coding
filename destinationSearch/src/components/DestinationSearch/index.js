// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    const searchInputVal = event.target.value
    this.setState({searchInput: searchInputVal.toLowerCase()})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    const searchedDestinations = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="bgContainer">
        <h1 className="heading">Destination Search</h1>
        <div className="searchContainer">
          <input
            type="search"
            placeholder="Search"
            onChange={this.onChangeSearchInput}
            className="search"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="icon"
          />
        </div>
        <ul className="cardsContainer">
          {searchedDestinations.map(eachDestination => (
            <DestinationItem
              key={eachDestination.id}
              destinationItem={eachDestination}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
