import './index.css'

const ThumbnailItem = props => {
  const {eachCountryDetails, deleteThumbnail} = props
  const {id, imageUrl, name} = eachCountryDetails

  const onRemoveClick = () => {
    deleteThumbnail(id)
  }

  return (
    <>
      <li className="card-item-container">
        <img src={imageUrl} alt=" thumbnail" className="country-img" />
        <div className="description-container">
          <p className="country-name">{name}</p>
          <button
            type="button"
            className="remove-button"
            onClick={onRemoveClick}
          >
            Remove
          </button>
        </div>
      </li>
    </>
  )
}
export default ThumbnailItem
