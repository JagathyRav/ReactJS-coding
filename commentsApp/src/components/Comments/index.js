import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
    commentsCount: 0,
  }

  onNameChange = event => {
    this.setState({name: event.target.value})
  }

  onCommentChange = event => {
    this.setState({comment: event.target.value})
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      createdAt: formatDistanceToNow(new Date()),
      initialClassName: initialBackgroundColorClassName,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
      commentsCount: prevState.commentsCount + 1,
    }))
  }

  toggleLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    /* const {commentsList} = this.state
    const filteredList = commentsList.filter(
      eachComment => eachComment.id !== id,
    )
    this.setState(prevState => ({
      commentsList: [...filteredList],
      commentsCount: prevState.commentsCount - 1,
    })) */

    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachComment => id !== eachComment.id,
      ),
      commentsCount: prevState.commentsCount - 1,
    }))
  }

  render() {
    const {commentsList, name, comment, commentsCount} = this.state

    return (
      <div className="appContainer">
        <h1 className="heading">Comments</h1>
        <div className="commentFormContainer">
          <form className="formContainer" onSubmit={this.addComment}>
            <p className="sub-heading">Say something about 4.0 Technologies</p>
            <input
              className="nameInput"
              onChange={this.onNameChange}
              value={name}
              placeholder="Your Name"
            />
            <textarea
              rows="5"
              cols="80"
              className="textarea"
              value={comment}
              placeholder="Your Comment"
              onChange={this.onCommentChange}
            />
            <button type="submit" className="submitButton">
              Add comment
            </button>
          </form>

          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="image"
          />
        </div>
        <hr className="separator" />
        <p className="commentsCount">
          <span className="count">{commentsCount}</span> Comments
        </p>
        <ul className="commentsContainer">
          {commentsList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              commentDetails={eachComment}
              toggleLike={this.toggleLike}
              deleteComment={this.deleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
