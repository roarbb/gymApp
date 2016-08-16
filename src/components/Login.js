import React, {PropTypes} from 'react'
import FacebookLogin from 'react-facebook-login'

const Login = ({onSaveUser, user}) => {
  let content = <FacebookLogin
    appId="223180534746400"
    autoLoad={true}
    fields="name,email,picture"
    callback={onSaveUser} />

  if(user.name) {
    content = <h2>Logged in as {user.name}</h2>
  }

  return (
    <div>
      <h1>Login</h1>

      {content}
    </div>
  )
};

Login.propTypes = {
  onSaveUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default Login;
