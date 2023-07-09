// Write your code here

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  generateRandomNumber = () => {
    this.setState({randomNumber: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="bgContainer">
        <div className="cardContainer">
          <h1 className="heading">Random Number</h1>
          <p className="descp">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.generateRandomNumber}
          >
            Generate
          </button>
          <p className="number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
