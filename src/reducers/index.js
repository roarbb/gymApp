import {combineReducers} from 'redux'
import {formReducer, modelReducer} from 'react-redux-form'
import user from './user'
import max from './max'
import modal from './modal'

const rootReducer = combineReducers({
  user,
  max,
  add: modelReducer('add', { discipline: '', max: '' }),
  addForm: formReducer('add', { discipline: '', max: '' }),
  modal
});

export default rootReducer;
