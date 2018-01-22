// import axios from 'axios'

const initialState = {
  email: '',
  password: '',
  verifyPassword: '',
}

const SET_INFO = 'SET_INFO',
  SUBMIT = 'SUBMIT'

export const setInfo = (e) => {
  const { value, name } = e.target
  return {
    type: SET_INFO,
    state: name,
    payload: value,
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_INFO:
      return { ...state, [action.state]: action.payload }
    case SUBMIT:
      return { ...state }
    default: return state
  }
}