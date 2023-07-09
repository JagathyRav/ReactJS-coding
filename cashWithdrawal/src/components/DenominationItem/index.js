import './index.css'

const DenominationItem = props => {
  const {denomination, withdraw} = props
  const {value} = denomination
  const onWithdraw = () => {
    withdraw(value)
  }

  return (
    <li>
      <button className="button" type="button" onClick={onWithdraw}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
