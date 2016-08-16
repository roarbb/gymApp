const user = (state = {}, action) => {
  switch (action.type) {
    case 'SAVE_USER':
      return action.response

    default: return state;
  }
};

export default user;
