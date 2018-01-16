import axios from 'axios'
import store from './../../store'

const initialState = {
  userData: [],
}

const GET_USER_DATA = 'GET_USER_DATA'

export const getUserData = () => {
  const userInfo = axios.get('/api/users')
    .then((res) => {
      console.log('success', res.data)
      return res.data
    }).catch((res) => {
      console.log('failed to get users', res.response)
      return res
    })
  return {
    type: GET_USER_DATA,
    payload: userInfo,
  }
}

export default function reducer(state = initialState, action) {
  const { payload, type } = action
  switch (type) {
    case GET_USER_DATA:
      return Object.assign({}, state, { userData: payload.getUserData === false ? null : payload })
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