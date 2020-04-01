import { combineReducers } from 'redux'
import nav from './nav'
import userInfo from './userInfo'
import homepage from './homepage'

const AppReducer  = combineReducers({
  nav,
  userInfo,
  homepage,
});

export default AppReducer;
