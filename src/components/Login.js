import React, {PropTypes} from 'react'
import FacebookLogin from 'react-facebook-login'
import Logout from '../containers/Logout'
import {Card, Glyph} from 'elemental'

const Login = ({onFacebookLoginResponse, user}) => {
  let content = <Card className="logged-card m-x-auto">
    <div>Please login with your Facebook account.</div>
    <hr />
    <FacebookLogin
      appId="223180534746400"
      autoLoad={false}
      fields="name,email,picture"
      cssClass="Button Button--hollow-primary"
      callback={onFacebookLoginResponse} />
  </Card>

  if(user.name) {
    content = <Card className="logged-card m-x-auto">
      <img src={user.picture.data.url} alt="avatar" className="img-rounded"/>
      <div><Glyph icon='shield' type='primary' /> Logged in as {user.name}</div>
      <hr />
      <Logout />
    </Card>
  }

  return (
    <div id="login-screen" className="text-xs-center">
      {content}
    </div>
  )
};

Login.propTypes = {
  onFacebookLoginResponse: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default Login;
