import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const About = props => {
  const {history} = props
  const jwtToken = Cookies.get('jwt_token')

  if (jwtToken === undefined) {
    history.replace('/login')
  }

  return (
    <div>
      <Header />
      <h1>About Route</h1>
      <LogoutButton />
    </div>
  )
}

export default withRouter(About)
