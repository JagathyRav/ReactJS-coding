import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    elapsedSeconds: 0,
    isTimerRunning: false,
  }

  componentWillUnmount() {
    this.clearTimerInterval()
  }

  clearTimerInterval = () => clearInterval(this.intervalId)

  incrementTimeElapsedInSeconds = () => {
    const {elapsedSeconds} = this.state

    this.setState(prevState => ({
      elapsedSeconds: prevState.elapsedSeconds + 1,
    }))
  }

  startTimer = () => {
    this.intervalId = setInterval(this.incrementTimeElapsedInSeconds, 1000)
    this.setState(prevState => ({isTimerRunning: !prevState.isTimerRunning}))
  }

  stopTimer = () => {
    this.clearTimerInterval()
    this.setState(prevState => ({isTimerRunning: !prevState.isTimerRunning}))
  }

  resetTimer = () => {
    const {elapsedSeconds} = this.state
    this.clearTimerInterval()
    this.setState({elapsedSeconds: 0, isTimerRunning: false})
  }

  getElapsedSecondsInTimeFormat = () => {
    const {elapsedSeconds} = this.state

    const minutes = Math.floor(elapsedSeconds / 60)
    const seconds = Math.floor(elapsedSeconds % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    const {elapsedSeconds, isTimerRunning} = this.state

    const isStartButtonDisabled = isTimerRunning === true
    const isStopButtonDisabled = isTimerRunning === false

    return (
      <div className="appContainer">
        <h1 className="heading">Stopwatch</h1>
        <div className="timerContainer">
          <div className="subHeading">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="stopwatch"
            />
            <p className="timer">Timer</p>
          </div>
        </div>

        <h1 className="time">{this.getElapsedSecondsInTimeFormat()}</h1>

        <div className="buttonContainer">
          <button
            type="button"
            className="button startButton"
            onClick={this.startTimer}
            disabled={isStartButtonDisabled}
          >
            Start
          </button>
          <button
            type="button"
            className="button stopButton"
            onClick={this.stopTimer}
            disabled={isStopButtonDisabled}
          >
            Stop
          </button>
          <button
            type="button"
            className="button resetButton"
            onClick={this.resetTimer}
          >
            Reset
          </button>
        </div>
      </div>
    )
  }
}

export default Stopwatch
