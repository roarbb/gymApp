import {connect} from 'react-redux'
import {saveUser} from '../actions'
import Login from '../components/Login'

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch, ownprops) => {
  return {
    onSaveUser: (response) => {
      dispatch(saveUser(response))
    }
  };
};

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default LoginContainer
