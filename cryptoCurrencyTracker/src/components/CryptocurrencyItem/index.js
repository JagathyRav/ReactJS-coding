import './index.css'

const CryptocurrencyItem = props => {
  const {item} = props

  const {currencyName, usdValue, euroValue, currencyLogo} = item

  return (
    <li className="list-item">
      <div className="logo-name-container">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p className="item-name">{currencyName}</p>
      </div>
      <p>{usdValue}</p>
      <p>{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
