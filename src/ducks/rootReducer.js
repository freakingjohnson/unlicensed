import { combineReducers } from 'redux'
import resultsReducer from './reducers/resultsReducer'
import userReducer from './reducers/userReducer'
import serviceReducer from './reducers/serviceReducer'
import projectReducer from './reducers/projectReducer'
import loginReducer from './reducers/loginReducer';
import favoritesReducer from './reducers/favoritesReducer'

const rootReducer = combineReducers({
  userReducer,
  serviceReducer,
  resultsReducer,
  projectReducer,
  loginReducer,
  favoritesReducer,
})

export default rootReducer