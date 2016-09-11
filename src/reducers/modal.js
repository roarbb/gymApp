const modal = (state = {isOpen: false}, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return Object.assign({}, state, {
        isOpen: true
      })

    case 'CLOSE_MODAL':
      return Object.assign({}, state, {
        isOpen: false
      })

    case 'TOGGLE_MODAL':
      return Object.assign({}, state, {
        isOpen: !state.isOpen
      })

    default: return state
  }
}

export default modal
