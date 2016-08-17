const user = (state = {}, action) => {
  switch (action.type) {
    case 'SAVE_LOGGED_USER':
      if(!action.response.name) {
        return state;
      }

      return action.response

    case 'LOGOUT_USER':
      return {};

    default: return state;
  }
};

export default user;
