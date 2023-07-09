// Write your code here.

import './index.css'

const BannerCardItem = props => {
  const {bannerCard} = props

  return (
    <li className={`${bannerCard.className} ${'card'}`}>
      <h1 className="heading">{bannerCard.headerText}</h1>
      <p className="description">{bannerCard.description}</p>
      <button type="button" className="btn">
        Show More
      </button>
    </li>
  )
}

export default BannerCardItem
