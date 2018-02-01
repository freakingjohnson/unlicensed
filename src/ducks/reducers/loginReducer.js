import axios from 'axios'

const initialState = {
  firstName: '',
  lastName: '',
  zipCode: '',
  email: '',
  password: '',
  verifyPassword: '',
  loggedIn: false,
}

const SET_INFO = 'SET_INFO',
  SET_STATE_WITH_SESSION_NON_PRO = 'SET_STATE_WITH_SESSION_NON_PRO',
  RESET = 'RESET',
  LOG_OUT = 'LOG_OUT'

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_INFO:
      return {
        ...state, [action.state]: action.payload,
      }
    case SET_STATE_WITH_SESSION_NON_PRO:
      return {
        ...state, [action.state]: action.payload, password: '',
      }
    case RESET:
      return initialState
    case LOG_OUT:
      return initialState
    default: return state
  }
}

export const setInfo = (e) => {
  const { value, name } = e.target
  return {
    type: SET_INFO,
    state: name,
    payload: value,
  }
}

export const setStateNonProInfo = data => (dispatch) => {
  for (let key in data) {
    dispatch({
      type: SET_STATE_WITH_SESSION_NON_PRO,
      state: key,
      payload: data[key],
    })
  }
}

export const send = (firstName, lastName, zipCode, email, password, history) => {
  axios.post('api/addnonpro', {
    firstName, lastName, zipCode, email, password,
  }).then(() => {
  })
  history.push('/')
  return {
    type: RESET,
  }
}