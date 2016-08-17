import fetch from 'isomorphic-fetch'

export const saveLoggedUser = (response) => {
  return {
    type: 'SAVE_LOGGED_USER',
    response: response
  }
};

export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER'
  }
};
