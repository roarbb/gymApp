import React, {PropTypes} from 'react'

const LogoutButton = ({onLogoutClick}) => {
  return (
    <a onClick={onLogoutClick}>[Logout]</a>
  )
};

export default LogoutButton;
