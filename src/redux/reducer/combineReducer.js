import { combineReducers } from 'redux'
import getStock from './reducer';

const rootReducer = combineReducers({
  getStock : getStock,
})

export default rootReducer;