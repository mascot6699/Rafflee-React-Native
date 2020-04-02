import { combineReducers } from 'redux'
import userInfo from './userInfo'
import homepage from './homepage'

const AppReducer  = combineReducers({
  userInfo,
  homepage,
});

export default AppReducer;
