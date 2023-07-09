import {Component} from 'react'

import './index.css'

class Logout extends Component {
  render() {
    const {btnText, logFn} = this.props
    console.log(btnText)
    console.log(logFn)
    return (
      <button type="button" className="button" onClick={logFn}>
        {btnText}
      </button>
    )
  }
}

export default Logout
