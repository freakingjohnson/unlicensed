import { combineReducers } from 'redux'
import userReducer from './reducers/userReducer'
import serviceReducer from './reducers/serviceReducer'

const rootReducer = combineReducers({
  userReducer,
  serviceReducer,
})

export default rootReducer