import { combineReducers } from 'redux'
import resultsReducer from './reducers/resultsReducer'
import userReducer from './reducers/userReducer'
import serviceReducer from './reducers/serviceReducer'
import projectReducer from './reducers/projectReducer'

const rootReducer = combineReducers({
  userReducer,
  serviceReducer,
  resultsReducer,
  projectReducer,
})

export default rootReducer