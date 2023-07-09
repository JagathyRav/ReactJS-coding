import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {feedbackStatus: false}

  submitFeedback = () => {
    this.setState({feedbackStatus: true})
  }

  render() {
    const {resources} = this.props
    const {feedbackStatus} = this.state
    let feedback

    if (feedbackStatus === false) {
      feedback = (
        <>
          <h1 className="question">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="emojiContainer">
            {resources.emojis.map(eachEmoji => (
              <li key={eachEmoji.id} className="eachEmoji">
                <button
                  className="button"
                  type="button"
                  onClick={this.submitFeedback}
                >
                  <img
                    src={eachEmoji.imageUrl}
                    alt={eachEmoji.name}
                    className="emoji"
                  />
                </button>
                <p className="emojiName">{eachEmoji.name}</p>
              </li>
            ))}
          </ul>
        </>
      )
    } else {
      feedback = (
        <>
          <img
            src={resources.loveEmojiUrl}
            className="emoji"
            alt="love emoji"
          />
          <h1 className="thanking">Thank You!</h1>
          <p className="descp">
            We will use your feedback to improve our customer support
            performance.
          </p>
        </>
      )
    }
    return (
      <div className="appContainer">
        <div className="feedbackContainer">{feedback}</div>
      </div>
    )
  }
}

export default Feedback
