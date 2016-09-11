import {combineReducers} from 'redux'
import {formReducer, modelReducer} from 'react-redux-form'
import user from './user'
import max from './max'
import modal from './modal'

const rootReducer = combineReducers({
  user,
  max,
  add: modelReducer('add', { name: '', weight: '' }),
  addForm: formReducer('add'),
  modal
});

export default rootReducer;
