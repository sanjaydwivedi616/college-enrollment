import { combineReducers } from 'redux'
import collageReducer from './collageList/collageReducer';
import userReducer from './login/loginReducer'

const rootReducer = combineReducers({
  collageList: collageReducer,
  user: userReducer,
})

export default rootReducer;
