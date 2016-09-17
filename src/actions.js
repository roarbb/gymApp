import fetch from 'isomorphic-fetch'
import config from './config'
import {browserHistory} from 'react-router'
import {actions} from 'react-redux-form'

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
  const date = new Date()
  const msg = `${date.getDay()}${date.getDay()}${date.getHours()}${date.getFullYear()}`

  const CryptoJS = require("crypto-js")
  return CryptoJS.AES.encrypt(string, msg.toString())
}

export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER'
  }
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

const startFetching = () => {
  return {
    type: 'START_MAX_FETCHING'
  }
}

export const setMax = (response) => {
  return {
    type: 'SAVE_MAX',
    response: response
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

const setNewMax = (max) => {
  return {
    type: 'INSERT_NEW_MAX',
    max
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

const updateMaxItem = (max) => {
  return {
    type: 'UPDATE_MAX',
    max
  }
}

export const setFormDataIfNeeded = (max, userHash, maxId = 0) => {
 return dispatch => {
   if(max.length === 0) {
     fetch(`${config.apiUrl}max/${userHash}`)
       .then(response => response.json())
       .then(json => {
         const activeMax = json.find(item => {
           return item.id === parseInt(maxId, 10)
         })
         if(!activeMax) {
           dispatch(actions.change('add', { discipline: '', weight: '' }))
         } else {
           dispatch(actions.change('add', activeMax))
         }
       })
       .catch(err => console.log(err))
   }

   if(maxId && max.length > 0) {
     const activeMax = max.find(item => {
       return item.id === parseInt(maxId, 10)
     })

     dispatch(actions.change('add', activeMax))
   } else {
     dispatch(actions.change('add', { discipline: '', weight: '' }))
   }
 }
}

export const updateMax = (maxId, userHash, name, weight) => {
 return dispatch => {

   const payload = {
     maxId,
     userHash,
     name,
     weight
   }

   return fetch(`${config.apiUrl}max/${userHash}/${maxId}`, {
     method: 'PUT',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(payload)
   })
   .then(response => {
     dispatch(updateMaxItem({
       id: maxId,
       discipline: name,
       max: weight
     }))
     browserHistory.push(`/max/${maxId}`)
   })
   .catch(err => console.log(err))
 }
}

export const openModal = () => {
  return {
    type: 'OPEN_MODAL'
  }
}

export const closeModal = () => {
  return {
    type: 'CLOSE_MODAL'
  }
}

export const toggleModal = () => {
  return {
    type: 'TOGGLE_MODAL'
  }
}

export const deleteMaxItem = (maxId) => {
  return {
    type: 'DELETE_MAX',
    maxId
  }
}

export const deleteMax = (maxId, userHash) => {
  return dispatch => {
    return fetch(`${config.apiUrl}max/${userHash}/${maxId}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({maxId, userHash})
    })
    .then(response => {
      dispatch(deleteMaxItem(maxId))
      dispatch(toggleModal())
      browserHistory.push(`/`)
    })
    .catch(err => console.log(err))
  }
}
