import {combineReducers} from 'redux'
import user from './user'
import max from './max'

const rootReducer = combineReducers({
  user,
  max
});

export default rootReducer;
