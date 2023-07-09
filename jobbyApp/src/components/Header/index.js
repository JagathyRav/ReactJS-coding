import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="navbar-container">
      <ul className="header-list-items">
        <li className="list-item1 link-item">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="website-logo"
            />
          </Link>
        </li>
        <li className="list-item2 link-item">
          <Link to="/">
            <li className="home-heading home">Home</li>
          </Link>
          <Link to="/jobs">
            <li className="jon-heading home">Jobs</li>
          </Link>
        </li>
        <li className="link-item">
          <button
            type="button"
            className="logout-button"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(Header)
