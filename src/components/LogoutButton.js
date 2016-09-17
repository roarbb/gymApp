import React from 'react'
import {Button} from 'elemental'

const LogoutButton = ({onLogoutClick}) => {
  return (
    <Button type="hollow-danger" onClick={onLogoutClick}>Logout</Button>
  )
};

export default LogoutButton;
