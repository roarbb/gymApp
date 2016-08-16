import fetch from 'isomorphic-fetch'

export const saveUser = (response) => {
  return {
    type: 'SAVE_USER',
    response: response
  }
};
