const initialState = {
  email: '',
  password: '',
  proLoggedIn: false,
  userName: '',
  userId: '',
}

const SET_INFO_PRO = 'SET_INFO_PRO'
const SET_STATE_WITH_SESSIOIN_PRO = 'SET_STATE_WITH_SESSIOIN_PRO'

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_INFO_PRO:
      return { ...state, [action.state]: action.payload }
    case SET_STATE_WITH_SESSIOIN_PRO:
      return { ...state, [action.state]: action.payload, password: '' }
    default: return state
  }
  // case SET_STATE_WITH_SESSIOIN_PRO:
}

export const setProUserInfo = (e) => {
  const { value, name } = e.target
  return {
    type: SET_INFO_PRO,
    state: name,
    payload: value,
  }
}

export const setStateProUserInfo = data => function (dispatch) {
  for (let key in data) {
    dispatch({
      type: SET_STATE_WITH_SESSIOIN_PRO,
      state: key,
      payload: data[key],
    })
  }
}

