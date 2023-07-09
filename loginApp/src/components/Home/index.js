import {Component} from 'react'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'
import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  logEvent = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === true) {
      this.setState(() => ({isLoggedIn: false}))
    } else {
      this.setState(() => ({isLoggedIn: true}))
    }
  }

  render() {
    const {isLoggedIn} = this.state
    const message = isLoggedIn ? 'Welcome User' : 'Please Login'
    const btnText = isLoggedIn ? 'Logout' : 'Login'

    return (
      <div className="container">
        <div className="cardContainer">
          <Message message={message} />
          {isLoggedIn ? (
            <Logout btnText={btnText} logFn={this.logEvent} />
          ) : (
            <Login btnText={btnText} logFn={this.logEvent} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
