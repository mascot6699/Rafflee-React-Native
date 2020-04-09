import { combineReducers } from 'redux'
import userInfo from './userInfo'
import homepage from './homepage'
import campaign from './campaign'

const AppReducer  = combineReducers({
  userInfo,
  homepage,
  campaign
});

export default AppReducer;
