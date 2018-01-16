const initialState = {
  firstName: '',
  lastName: '',
  phone: '',
  text: false,
  call: false,
  both: false,
  profilePic: '',
  email: '',
  bio: '',
}

const SET_USER = 'SET_USER'


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER':
      return Object.assign({}, state, { [action.state]: action.payload })
    default:
      return state
  }
}

export const personalInfo = (e, checked) => {
  const { value, name } = e.target

  if (name === 'text' || name === 'call' || name === 'both') {
    return {
      type: SET_USER,
      state: name,
      payload: !checked,
    }
  }

  return {
    type: SET_USER,
    state: name,
    payload: value,
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