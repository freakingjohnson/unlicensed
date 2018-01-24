import { combineReducers } from 'redux'
import resultsReducer from './reducers/resultsReducer'
import userReducer from './reducers/userReducer'
import serviceReducer from './reducers/serviceReducer'
import projectReducer from './reducers/projectReducer'
<<<<<<< HEAD
import loginReducer from './reducers/loginReducer'
import proLoginReducer from './reducers/proLoginReducer'
=======
import loginReducer from './reducers/loginReducer';
import favoritesReducer from './reducers/favoritesReducer'
import loginReducer from './reducers/loginReducer'
import emailReducer from './reducers/emailReducer'
>>>>>>> master

const rootReducer = combineReducers({
  userReducer,
  serviceReducer,
  resultsReducer,
  projectReducer,
  loginReducer,
<<<<<<< HEAD
  proLoginReducer,
=======
  favoritesReducer,
  emailReducer,
>>>>>>> master
})

export default rootReducer