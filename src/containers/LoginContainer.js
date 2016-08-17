import {connect} from 'react-redux'
import {saveLoggedUser} from '../actions'
import Login from '../components/Login'

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch, ownprops) => {
  return {
    onFacebookLoginResponse: (response) => {
      dispatch(saveLoggedUser(response))
    }
  };
};

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default LoginContainer
