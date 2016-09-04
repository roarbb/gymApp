import fetch from 'isomorphic-fetch'
import config from './config'

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
    dispatch(setFacebookUser(response))

    return fetch(`${config.apiUrl}user/${response.email}`)
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

export const fetchMax = (userHash) => {
  return dispatch => {
    dispatch(startFetching())

    fetch(`${config.apiUrl}max/${userHash}`)
      .then(response => response.json())
      .then(json => dispatch(setMax(json)))
      .catch(err => console.log(err))
  }
}

export const setMax = (response) => {
  return {
    type: 'SAVE_MAX',
    response: response
  }
}

const startFetching = () => {
  return {
    type: 'START_MAX_FETCHING'
  }
}
