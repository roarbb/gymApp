const user = (state = {}, action) => {
  switch (action.type) {
    case 'SAVE_FACEBOOK_USER':
      if(!action.response.name) {
        return state;
      }

      return action.response

    case 'SAVE_API_USER':
      if(!action.response.hash) {
        return state;
      }

      return Object.assign({}, state, {
        hash: action.response.hash
      });

    case 'LOGOUT_USER':
      return {};

    default: return state;
  }
};

export default user;
