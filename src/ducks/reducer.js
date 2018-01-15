const initialState = {
  string: 'hi',
}

const GET_STRING = 'GET_STRING'

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_STRING:
      return Object.assign({}, state, { string: action.payload })
    default:
      return state
  }
}

export const getString = change => ({
  type: GET_STRING,
  payload: change,
})