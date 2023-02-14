import { legacy_createStore as createStore } from 'redux';
import CombineReducers from './reducer/combineReducer';


const store = createStore(CombineReducers);

export default store;