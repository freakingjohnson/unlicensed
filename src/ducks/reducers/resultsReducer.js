import axios from 'axios'

const initialState = {
  userData: [],
  userDataLoaded: false,
  user: [],
  favorites: [],
  reviews: [],
  reviewsLoaded: false,
}

const GET_USER_DATA = 'GET_USER_DATA',
  SINGLE_USER = 'SINGLE_USER',
  REVEAL = 'REVEAL',
  GET_FAVORITES = 'GET_FAVORITES',
  GET_REVIEWS = 'GET_REVIEWS'

export const getReviews = () => async (dispatch) => {
  let reviewResults = await axios.get('/api/reviews')

  return dispatch({
    type: GET_REVIEWS,
    payload: reviewResults.data,
  })
}

export const getFavorites = (favorites) => {
  let favResults = favorites
  favResults = axios.get('/api/favorites').then(res => res.data).catch(console.log)
  return {
    type: GET_FAVORITES,
    payload: favResults,
  }
}

export const getUserData = () => async (dispatch) => {
  let results = await axios.get('/api/users')
  return dispatch({
    type: GET_USER_DATA,
    payload: results.data,
  })
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
    case GET_USER_DATA:
      return { ...state, userData: payload, userDataLoaded: true }
    case SINGLE_USER:
      return { ...state, user: payload }
    case REVEAL:
      return { ...state, reveal: payload }
    case GET_REVIEWS:
      return { ...state, reviews: [...state.reviews, payload], reviewsLoaded: true }
    default:
      return state
  }
}
