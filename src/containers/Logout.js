import {connect} from 'react-redux'
import {logoutUser} from '../actions'
import LogoutButton from '../components/LogoutButton'

const mapStateToProps = (state) => {}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogoutClick: () => {
      dispatch(logoutUser())
    }
  }
}

const Logout = connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoutButton);

export default Logout
