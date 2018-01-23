import axios from 'axios'

const initialState = {
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

export const send = (email, password, history) => {
  axios.post('api/addnonpro', { email, password }).then(() => {
    // console.log(res)
  })
  history.push('/')
  return {
    type: RESET,
  }
}

export const reset = () => ({
  type: RESET,
})

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_INFO:
      return { ...state, [action.state]: action.payload }
    case RESET:
      return initialState
    default: return state
  }
}