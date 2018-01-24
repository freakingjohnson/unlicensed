import { combineReducers } from 'redux'
import resultsReducer from './reducers/resultsReducer'
import userReducer from './reducers/userReducer'
import serviceReducer from './reducers/serviceReducer'
import projectReducer from './reducers/projectReducer'
import loginReducer from './reducers/loginReducer';
import favoritesReducer from './reducers/favoritesReducer'
import loginReducer from './reducers/loginReducer'
import emailReducer from './reducers/emailReducer'

const rootReducer = combineReducers({
  userReducer,
  serviceReducer,
  resultsReducer,
  projectReducer,
  loginReducer,
  favoritesReducer,
  emailReducer,
})

export default rootReducer