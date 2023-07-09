import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {coinState: 'heads', heads: 0, tails: 0, totalTosses: 0}

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        coinState: 'heads',
        heads: prevState.heads + 1,
        totalTosses: prevState.totalTosses + 1,
      }))
    } else {
      this.setState(prevState => ({
        coinState: 'tails',
        tails: prevState.tails + 1,
        totalTosses: prevState.totalTosses + 1,
      }))
    }
  }

  render() {
    const {coinState, heads, tails, totalTosses} = this.state
    const coinUrl =
      coinState === 'heads'
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="appContainer">
        <div className="coinContainer">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="state">Heads (or) Tails</p>
          <img src={coinUrl} alt="toss result" className="coin" />
          <button className="button" type="button" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="countContainer">
            <p className="counts">Total: {totalTosses}</p>
            <p className="counts">Heads: {heads}</p>
            <p className="counts">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
