import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputTextLength: 0}

  onChangeSearchInput = event => {
    const inputText = event.target.value
    this.setState({inputTextLength: inputText.length})
  }

  render() {
    const {inputTextLength} = this.state

    return (
      <div className="appContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
        <div className="calculateContainer">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <p className="label">Enter the phrase</p>

          <input
            type="text"
            id="inputId"
            placeholder="Enter the phrase"
            className="inputText"
            onChange={this.onChangeSearchInput}
          />

          <p className="count">No.of letters: {inputTextLength}</p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
