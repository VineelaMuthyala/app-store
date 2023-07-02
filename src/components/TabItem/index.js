import './index.css'

const TabItem = props => {
  const {tabDetails, tabSelected, isSelected} = props
  const {displayText, tabId} = tabDetails

  const tabStyling = isSelected ? 'tab-name-blue' : 'tab-name'

  const onClickTab = () => {
    tabSelected(tabId)
  }

  return (
    <li className="tab-container">
      <button type="button" className="btn" onClick={onClickTab}>
        <p className={tabStyling}>{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
