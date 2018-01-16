import store from './../../store'

const initialState = {
  string: 'hi',
}

const GET_STRING = 'GET_STRING'

export const getString = change => ({
  type: GET_STRING,
  payload: change,
})

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_STRING':
      return Object.assign({}, state, { string: action.payload })
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