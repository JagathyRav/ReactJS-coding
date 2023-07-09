import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  withdraw = value => {
    this.setState(prevBalance => ({balance: prevBalance.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="appContainer">
        <div className="transactionContainer">
          <div className="nameContainer">
            <p className="dp">S</p>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balanceContainer">
            <p className="yourBalance">Your Balance</p>
            <p className="balAmount">{balance}</p>
          </div>
          <p className="inRupees">In Rupees</p>
          <p className="heading">Withdraw</p>
          <p className="choose">CHOOSE SUM (IN RUPEES)</p>
          <ul className="withdrawal-options-container">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                denomination={eachDenomination}
                key={eachDenomination.id}
                withdraw={this.withdraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
