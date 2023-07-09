import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleLike, deleteComment} = props
  const {
    id,
    name,
    comment,
    isLiked,
    createdAt,
    initialClassName,
  } = commentDetails
  console.log(isLiked)

  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickLike = () => {
    toggleLike(id)
  }

  const onClickDelete = () => {
    deleteComment(id)
  }

  return (
    <li className="commentContainer">
      <div className="commentParticulars">
        <p className={initialClassName}>{name[0]}</p>
        <div className="commentDetails">
          <p className="name">
            {name} <span className="createdTime"> {createdAt} ago</span>
          </p>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="commentOptions">
        <div className="likeContainer">
          <img src={likeImageUrl} alt="like" className="icon" />
          <button type="button" className="button" onClick={onClickLike}>
            Like
          </button>
        </div>
        <button
          type="button"
          className="button"
          onClick={onClickDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="icon"
          />
        </button>
      </div>
      <hr className="separator" />
    </li>
  )
}
export default CommentItem
