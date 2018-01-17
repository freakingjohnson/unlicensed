const initialState = {
  firstName: '',
  lastName: '',
  phone: '',
  text: false,
  call: false,
  both: false,
  profilePic: '',
  picName: '',
  email: '',
  bio: '',
}

const SET_USER = 'SET_USER',
  PROFILE_PIC = 'PROFILE_PIC'


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, { [action.state]: action.payload })
    case PROFILE_PIC:
      return Object.assign({}, state, { profilePic: action.payload, picName: action.data })
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

export const setProfilePic = file => ({
  type: PROFILE_PIC,
  payload: file.preview,
  data: file.name,
})