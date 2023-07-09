// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {showFirstName: false, showLastName: false}

  firstName = () => {
    const {showFirstName} = this.state
    if (showFirstName) {
      this.setState(() => ({showFirstName: false}))
    } else {
      this.setState(() => ({showFirstName: true}))
    }
  }

  lastName = () => {
    const {showLastName} = this.state

    if (showLastName) {
      this.setState(() => ({showLastName: false}))
    } else {
      this.setState(() => ({showLastName: true}))
    }
  }

  render() {
    const {showFirstName, showLastName} = this.state
    console.log(showFirstName, showLastName)

    const fName = (
      <div className="nameContainer">
        <p className="name">Joe</p>
      </div>
    )

    const lName = (
      <div className="nameContainer">
        <p className="name">Jonas</p>
      </div>
    )

    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="cardsContainer">
          <div>
            <button type="button" className="button" onClick={this.firstName}>
              Show/Hide Firstname
            </button>
            {showFirstName ? fName : null}
          </div>

          <div>
            <button type="button" className="button" onClick={this.lastName}>
              Show/Hide Lastname
            </button>
            {showLastName ? lName : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
