import { combineReducers } from 'redux'
import resultsReducer from './reducers/resultsReducer'
import userReducer from './reducers/userReducer'
import serviceReducer from './reducers/serviceReducer'
import projectReducer from './reducers/projectReducer'
import proLoginReducer from './reducers/proLoginReducer'
import loginReducer from './reducers/loginReducer'
import emailReducer from './reducers/emailReducer'

const rootReducer = combineReducers({
  userReducer,
  serviceReducer,
  resultsReducer,
  projectReducer,
  loginReducer,
  proLoginReducer,
  emailReducer,
})

export default rootReducer