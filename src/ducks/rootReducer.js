import { combineReducers } from 'redux'
import reducer from './reducers/reducer'
import userReducer from './reducers/userReducer'
import serviceReducer from './reducers/serviceReducer'

const rootReducer = combineReducers({
  userReducer,
  serviceReducer,
  reducer,
})

export default rootReducer