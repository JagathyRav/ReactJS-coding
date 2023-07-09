import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  changeUI = () => {
    const {isDarkMode} = this.state
    if (isDarkMode) this.setState(() => ({isDarkMode: false}))
    else this.setState(() => ({isDarkMode: true}))
  }

  render() {
    const {isDarkMode} = this.state
    // console.log(isDarkMode)
    const uiClass = isDarkMode ? 'dark' : 'light'
    const headingClass = isDarkMode ? 'lightHeading' : 'darkHeading'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'
    // console.log(buttonText)

    return (
      <div className="container">
        <div className={uiClass}>
          <h1 className={headingClass}>Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.changeUI}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
