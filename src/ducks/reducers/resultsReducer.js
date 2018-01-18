import axios from 'axios'

const initialState = {
  userData: [],
}

const GET_USER_DATA = 'GET_USER_DATA'

export const getUserData = (userData) => {
  let results = userData
  if (userData.length === 0) {
    results = axios.get('api/users').then(res => res.data)
      .catch(console.log)
  }
  return {
    type: GET_USER_DATA,
    payload: results,
  }
}


export default function reducer(state = initialState, action) {
  const { payload, type } = action
  switch (type) {
    case `${GET_USER_DATA}_FULFILLED`:
      return { ...state, userData: payload }
    default:
      return state
  }
}
