import { combineReducers } from 'redux'
import nav from './nav'
import userInfo from './userInfo'

const AppReducer  = combineReducers({
  nav,
  userInfo
});

export default AppReducer;
