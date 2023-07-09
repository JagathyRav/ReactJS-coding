import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  mango = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  banana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="bgContainer">
        <div className="content-container">
          <h1 className="heading">
            Bob ate {mangoCount} mangoes {bananaCount} bananas
          </h1>
          <div className="cards-container">
            <div className="card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button type="button" className="button" onClick={this.mango}>
                Eat Mango
              </button>
            </div>

            <div className="card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button type="button" className="button" onClick={this.banana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
