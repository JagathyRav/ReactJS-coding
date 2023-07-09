// Write your code here
import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  onClickEvent = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <br />
          <span className="count">{count}</span> times
        </h1>
        <p>Click the button to increase the count!</p>
        <button type="button" className="button" onClick={this.onClickEvent}>
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
