const setUser = (data) => {
  localStorage.setItem('user', JSON.stringify(data))
  return data
}

const getDefaultState = () => {
  return JSON.parse(localStorage.getItem('user')) || {}
}

const user = (state = getDefaultState(), action) => {
  switch (action.type) {
    case 'SAVE_FACEBOOK_USER':
      if(!action.response.name) {
        return setUser(state)
      }

      return setUser(action.response)

    case 'SAVE_API_USER':
      if(!action.response.hash) {
        return setUser({})
      }

      const userWithHash = Object.assign({}, state, {
        hash: action.response.hash
      })

      return setUser(userWithHash)

    case 'LOGOUT_USER':
      return setUser({})

    default: return state
  }
}

export default user
