import axios from 'axios'

const initialState = {
  firstName: '',
  lastName: '',
  zipCode: '',
  email: '',
  password: '',
  verifyPassword: '',
}

const SET_INFO = 'SET_INFO',
  RESET = 'RESET'

export const setInfo = (e) => {
  const { value, name } = e.target
  return {
    type: SET_INFO,
    state: name,
    payload: value,
  }
}

export const send = (firstName, lastName, zipCode, email, password, history) => {
  axios.post('api/addnonpro', {
    firstName, lastName, zipCode, email, password,
  }).then(() => {
    // console.log(res)
  })
  history.push('/')
  return {
    type: RESET,
  }
}

export const login = (email, password, history) => {
  axios.post('api/login', { email, password }).then((res) => {
    console.log(res)
  }).catch((error) => {
    console.log('failed', error)
  })
  history.push('/')
  return {
    type: RESET,
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_INFO:
      return { ...state, [action.state]: action.payload }
    case RESET:
      return initialState
    default: return state
  }
}