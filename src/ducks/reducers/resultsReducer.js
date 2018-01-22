import axios from 'axios'

const initialState = {
  userData: [],
  searchData: [],
  user: [],
  reveal: false,
}

const GET_USER_DATA = 'GET_USER_DATA',
  GET_SEARCH_DATA = 'GET_SEARCH_DATA',
  SINGLE_USER = 'SINGLE_USER',
  REVEAL = 'REVEAL'

export const getUserData = (userData) => {
  let results = userData
  if (userData.length === 0) {
    results = axios.get('/api/users').then(res => res.data).catch(console.log)
  }
  return {
    type: GET_USER_DATA,
    payload: results,
  }
}

export const getSearchData = (userData, query, searchBy) => {
  let searchResults;
  if (userData.length > 0) {
    searchResults = userData.filter((el) => {
      if (searchBy === 'worktype' && el.worktype) { return el.worktype.toLowerCase().indexOf(query.toLowerCase()) > -1 } else if (searchBy === 'name' && el.first_name && el.last_name) {
        return (`${el.first_name} ${el.last_name}`).toLowerCase().indexOf(query.toLowerCase()) > -1
      } else if (searchBy === 'city' && el.location || searchBy === 'zip' && el.location) { return el.location.toLowerCase().indexOf(query.toLowerCase()) > -1 }
    })
  }
  return {
    type: GET_SEARCH_DATA,
    payload: searchResults,
  }
}

export const getUser = (userId, userData) => {
  let user = userData.filter((jose) => {
    if (jose.id === userId) {
      return jose
    }
  })
  return {
    type: SINGLE_USER,
    payload: user,
  }
}

export default function reducer(state = initialState, action) {
  const { payload, type } = action
  switch (type) {
    case `${GET_USER_DATA}_FULFILLED`:
      return { ...state, userData: payload }
    case `${GET_SEARCH_DATA}`:
      return { ...state, searchData: payload }
    case SINGLE_USER:
      return { ...state, user: payload }
    case REVEAL:
      return Object.assign({}, state, { reveal: payload })
    default:
      return state
  }
}

export const revealServices = reveal => ({
  type: REVEAL,
  payload: !reveal,
})
