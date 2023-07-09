import './index.css'

const LanguageFilterItem = props => {
  const {languageDetails, updateActiveLanguageId, isActive} = props
  const {id, language} = languageDetails

  const buttonClassName = isActive
    ? 'filter-button active-filter'
    : 'filter-button'

  const onClickLanguage = () => {
    updateActiveLanguageId(id)
  }

  return (
    <li>
      <button
        type="button"
        className={buttonClassName}
        onClick={onClickLanguage}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
