import { combineReducers } from 'redux'
import resultsReducer from './reducers/resultsReducer'
import reducer from './reducers/reducer'
import userReducer from './reducers/userReducer'
import serviceReducer from './reducers/serviceReducer'
import projectReducer from './reducers/projectReducer'

const rootReducer = combineReducers({
  userReducer,
  serviceReducer,
  reducer,
  resultsReducer,
  projectReducer,
})

export default rootReducer