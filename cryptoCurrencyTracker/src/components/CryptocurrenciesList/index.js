import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

const CryptocurrenciesList = props => {
  const {cryptoCurrenciesList} = props

  return (
    <div className="crypto-currency-container">
      <h1 className="heading">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="image"
      />
      <ul className="currency-list">
        <div className="list-headings-container">
          <p>Coin Type</p>
          <p>USD</p>
          <p>EURO</p>
        </div>
        {cryptoCurrenciesList.map(item => (
          <CryptocurrencyItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  )
}
export default CryptocurrenciesList
