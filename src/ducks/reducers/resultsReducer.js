import axios from 'axios'
import store from './../../store'

const initialState = {
  userData: undefined,
}

const GET_USER_DATA = 'GET_USER_DATA'

export const getUserData = (userData) => {
  let results = userData
  if (userData === undefined) {
    console.log('hit')
    results = axios.get('api/users').then(res => res.data)
      .catch(console.log)
  }
  console.log(results.promise)
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


/*
export const addToUser = (change) => {
  const user = store.getState()
  if (user.userId === undefined) {
    axios.get('api').then(res => (dispatch) => {
      dispatch({
        type: GET_STRING,
        payload: res.data.Id,
      })
})
  } return user.userId
}
*/