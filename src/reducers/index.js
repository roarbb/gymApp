import {combineReducers} from 'redux'
import user from './user'
import max from './max'
import {formReducer, modelReducer} from 'react-redux-form'

const rootReducer = combineReducers({
  user,
  max,
  add: modelReducer('add', { name: '', weight: '' }),
  addForm: formReducer('add')
});

export default rootReducer;
