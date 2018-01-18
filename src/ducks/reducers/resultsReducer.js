import axios from 'axios'

const initialState = {
  userData: [],
  searchData: [],
}

const GET_USER_DATA = 'GET_USER_DATA'

export const getUserData = (userData) => {
  let results = userData
  if (userData.length === 0) {
    results = axios.get('api/users').then(res => res.data).catch(console.log)
  }
  return {
    type: GET_USER_DATA,
    payload: results,
  }
}

const GET_SEARCH_DATA = 'GET_SEARCH_DATA'

export const searchData = (userData, query) => {
  let filtered = userData
  if (userData.length > 0) {
    filtered = userData.filter((el) => {
      if (el.worktype) { return el.worktype.toLowerCase().indexOf(query.toLowerCase()) > -1 }
    })
  }
  return {
    type: GET_SEARCH_DATA,
    payload: filtered,
  }
}

export default function reducer(state = initialState, action) {
  const { payload, type } = action
  switch (type) {
    case `${GET_USER_DATA}_FULFILLED`:
      return { ...state, userData: payload }
    case `${GET_SEARCH_DATA}`:
      return { ...state, searchData: payload }
    default:
      return state
  }
}
