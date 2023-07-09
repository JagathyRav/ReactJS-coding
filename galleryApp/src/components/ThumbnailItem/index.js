import './index.css'

const ThumbnailItem = props => {
  const {thumbnail, displayActualImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnail

  const displayImage = () => {
    displayActualImage(id)
  }

  const activeImageThumbnail = isActive ? 'activeImg' : ''

  return (
    <li>
      <button
        type="button"
        className={`button ${activeImageThumbnail}`}
        onClick={displayImage}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} className="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailItem
