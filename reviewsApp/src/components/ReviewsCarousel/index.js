import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewIndex: 0}

  next = () => {
    const {reviewIndex} = this.state

    if (reviewIndex === 3) this.setState({reviewIndex: 3})
    else this.setState({reviewIndex: reviewIndex + 1})
  }

  previous = () => {
    const {reviewIndex} = this.state
    if (reviewIndex === 0) this.setState({reviewIndex: 0})
    else this.setState({reviewIndex: reviewIndex - 1})
  }

  render() {
    const {reviewIndex} = this.state
    console.log(reviewIndex)
    const {reviewsList} = this.props
    const reviewProfile = reviewsList[reviewIndex]

    return (
      <div className="appContainer">
        <h1 className="heading">Reviews</h1>
        <div className="reviewsContainer">
          <button
            type="button"
            className="button"
            onClick={this.previous}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="arrow"
              alt="left arrow"
            />
          </button>
          <div className="reviewContainer">
            <img
              src={reviewProfile.imgUrl}
              className="reviewImg"
              alt={reviewProfile.username}
            />
            <p className="name">{reviewProfile.username}</p>
            <p className="company">{reviewProfile.companyName}</p>
            <p className="review">{reviewProfile.description}</p>
          </div>
          <button
            type="button"
            className="button"
            onClick={this.next}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="arrow"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
