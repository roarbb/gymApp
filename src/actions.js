import fetch from 'isomorphic-fetch'

const setFacebookUser = (response) => {
  return {
    type: 'SAVE_FACEBOOK_USER',
    response: response
  }
}

const setApiUser = (response) => {
  return {
    type: 'SAVE_API_USER',
    response: response
  }
}

export const saveLoggedUser = (response) => {
  return dispatch => {
    dispatch(setFacebookUser(response));

    return fetch(`http://localhost:8081/user/${response.email}`)
      .then(response => response.json())
      .then(json => dispatch(setApiUser(json)))
      .catch(response => console.log(response))
  }
}

export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER'
  }
}
