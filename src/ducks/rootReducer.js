import { combineReducers } from 'redux'
import resultsReducer from './reducers/resultsReducer'
import userReducer from './reducers/userReducer'
import serviceReducer from './reducers/serviceReducer'
import projectReducer from './reducers/projectReducer'
import loginReducer from './reducers/loginReducer'
import proLoginReducer from './reducers/proLoginReducer'

const rootReducer = combineReducers({
  userReducer,
  serviceReducer,
  resultsReducer,
  projectReducer,
  loginReducer,
  proLoginReducer,
})

export default rootReducer