const initialState = {
  email: '',
  password: '',
  proLoggedIn: false,
  userName: '',
  userId: '',
  stripeId: '',
}

const SET_INFO_PRO = 'SET_INFO_PRO',
  SET_STATE_WITH_SESSION_PRO = 'SET_STATE_WITH_SESSION_PRO',
  LOCAL_STORAGE = 'LOCAL_STORAGE'

export default function reducer(state = initialState, action) {
  const { data, type, payload } = action
  switch (type) {
    case SET_INFO_PRO:
      return { ...state, [data]: payload }
    case SET_STATE_WITH_SESSION_PRO:
      return { ...state, [data]: payload, password: '' }
    case LOCAL_STORAGE:
      return { ...state, payload }
    default: return state
  }
  // case SET_STATE_WITH_SESSION_PRO:
}

export const setProUserInfo = (e) => {
  const { value, name } = e.target
  return {
    type: SET_INFO_PRO,
    data: name,
    payload: value,
  }
}

export const setStateProUserInfo = data => (dispatch) => {
  for (let key in data) {
    dispatch({
      type: SET_STATE_WITH_SESSION_PRO,
      data: key,
      payload: data[key],
    })
  }
}

export const resetFromLocalStorage = () => (dispatch) => {
  let pro = localStorage.getItem('pro')
  dispatch({
    type: LOCAL_STORAGE,
    payload: JSON.parse(pro),
  })
}