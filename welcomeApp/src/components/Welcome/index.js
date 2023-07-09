// Write your code here

import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {status: 'Subscribe'}

  clickEvent = () => {
    const {status} = this.state

    if (status === 'Subscribe') {
      this.setState(() => ({status: 'Subscribed'}))
    } else {
      this.setState(() => ({status: 'Subscribe'}))
    }
  }

  render() {
    const {status} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="descp">Thank you! Happy Learning</p>
        <button type="button" className="button" onClick={this.clickEvent}>
          {status}
        </button>
      </div>
    )
  }
}

export default Welcome
