import React, {PropTypes} from 'react'
import FacebookLogin from 'react-facebook-login'
import Logout from '../containers/Logout'

const Login = ({onFacebookLoginResponse, user}) => {
  let content = <FacebookLogin
    appId="223180534746400"
    autoLoad={false}
    fields="name,email,picture"
    callback={onFacebookLoginResponse} />

  if(user.name) {
    content = <h2>Logged in as {user.name} <Logout /></h2>
  }

  return (
    <div>
      <h1>Login</h1>

      {content}
    </div>
  )
};

Login.propTypes = {
  onFacebookLoginResponse: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default Login;
