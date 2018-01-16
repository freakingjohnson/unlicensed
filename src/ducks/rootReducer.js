import { combineReducers } from 'redux'
import resultsReducer from './reducers/resultsReducer'

import reducer from './reducers/reducer'
import userReducer from './reducers/userReducer'
import serviceReducer from './reducers/serviceReducer'

const rootReducer = combineReducers({
  userReducer,
  serviceReducer,
  reducer,
  resultsReducer,
})

export default rootReducer