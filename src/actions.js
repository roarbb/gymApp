import fetch from 'isomorphic-fetch'
import config from './config'
import {browserHistory} from 'react-router'


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

const encrypt = (string) => {
  const date = new Date
  const msg = `${date.getDay()}${date.getDay()}${date.getHours()}${date.getFullYear()}`

  const CryptoJS = require("crypto-js")
  return CryptoJS.AES.encrypt(string, msg.toString())
}

export const saveLoggedUser = (response) => {
  return dispatch => {
    dispatch(setFacebookUser(response))

    return fetch(`${config.apiUrl}user/${encodeURIComponent(encrypt(response.email))}`)
      .then(response => response.json())
      .then(json => {
        dispatch(setApiUser(json))
        browserHistory.push('/')
      })
      .catch(response => {
        console.log(response)
        dispatch(logoutUser())
      }
    )
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

export const postMax = (userHash, name, weight) => {
  return dispatch => {

    const payload = {
      userHash,
      name,
      weight
    }

    return fetch(`${config.apiUrl}max/${userHash}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(newMaxId => {
      dispatch(setNewMax({
        id: newMaxId,
        discipline: name,
        max: weight
      }))
      browserHistory.push('/')
    })
    .catch(err => console.log(err))
  }
}

const setNewMax = (max) => {
  return {
    type: 'INSERT_NEW_MAX',
    max
  }
}
