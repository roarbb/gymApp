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

    default: return state;
  }
};

export default max;
