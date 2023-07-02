import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails
  return (
    <li className="app-container">
      <img className="app-image" alt={appName} src={imageUrl} />
      <p className="name-text">{appName}</p>
    </li>
  )
}
export default AppItem
