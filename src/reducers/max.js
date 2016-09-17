const max = (state = {loading: false, items: []}, action) => {
  switch (action.type) {
    case 'START_MAX_FETCHING':
      return Object.assign({}, state, {
        loading: true
      })

    case 'SAVE_MAX':
      return Object.assign({}, state, {
        loading: false,
        items: action.response
      })

    case 'INSERT_NEW_MAX':
      return Object.assign({}, state, {
        loading: false,
        items: [
          ...state.items,
          action.max
        ]
      })

    case 'LOGOUT_USER':
      return {
        loading: false,
        items: []
      }

    case 'UPDATE_MAX':
      return Object.assign({}, state, {
        loading: false,
        items: state.items.map(item => {
          if(parseInt(item.id, 10) !== parseInt(action.max.id, 10)) {
            return item
          }

          return action.max
        })
      })

    case 'DELETE_MAX':
      const deletedItemIndex = state.items.findIndex(item => {
        return parseInt(item.id, 10) === parseInt(action.maxId, 10)
      })

      return Object.assign({}, state, {
        loading: false,
        items: [
          ...state.items.slice(0, deletedItemIndex),
          ...state.items.slice(deletedItemIndex + 1)
        ]
      })

    default: return state;
  }
};

export default max;
