import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

import './index.css'

const userDetails = {
  username: 'rahul',
  password: 'rahul@2021',
}

const Login = props => {
  const {history} = props
  const token = Cookies.get('jwt_token')

  if (token !== undefined) {
    history.replace('/')
  }

  const onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  const onClickLogin = async () => {
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    onSubmitSuccess(data.jwt_token)
  }

  return (
    <div className="login-container">
      <h1>Please Login</h1>
      <button type="button" className="login-button" onClick={onClickLogin}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default withRouter(Login)
