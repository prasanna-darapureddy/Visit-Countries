import './index.css'

const CountriesListItems = props => {
  const {eachCountryDetails, addThumbnail} = props
  const {name, isVisited} = eachCountryDetails

  const onVisitButton = () => {
    addThumbnail(isVisited)
  }

  return (
    <li className="country-names-list-item">
      <p className="country-name-item">{name}</p>
      {isVisited ? (
        <p className="visited-button">Visited</p>
      ) : (
        <button type="button" className="visit-button" onClick={onVisitButton}>
          Visit
        </button>
      )}
    </li>
  )
}
export default CountriesListItems
