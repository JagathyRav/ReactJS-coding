// Write your code here

import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}

  accelerateEvent = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({
        speed: prevState.speed + 10,
      }))
    }
  }

  brakeEvent = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({
        speed: prevState.speed - 10,
      }))
    }
  }

  render() {
    let {speed} = this.state
    if (speed > 200) speed = 200
    else if (speed < 0) speed = 0
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h1 className="speed">Speed is {speed}mph</h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            type="button"
            className="button1"
            onClick={this.accelerateEvent}
          >
            Accelerate
          </button>
          <button type="button" className="button2" onClick={this.brakeEvent}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
