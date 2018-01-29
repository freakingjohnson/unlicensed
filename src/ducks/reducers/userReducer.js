import request from 'superagent'
import store from '../../store'

const initialState = {
  firstName: '',
  lastName: '',
  phone: '',
  text: false,
  call: false,
  both: false,
  profilePic: '',
  profilePicUrl: '',
  picName: '',
  email: '',
  bio: '',
  userPassword: '',
  location: '',
}

const SET_USER = 'SET_USER',
  PROFILE_PIC = 'PROFILE_PIC',
  PICTURE_URL = 'PROFILE_URL',
  TEXT = 'text',
  CALL = 'call',
  BOTH = 'both'


export default function reducer(state = initialState, action) {
  const {
    type, payload, data,
  } = action

  switch (type) {
    case SET_USER:
      return Object.assign({}, state, { [data]: payload })
    case PROFILE_PIC:
      return Object.assign({}, state, { profilePic: payload, picName: data })
    case PICTURE_URL:
      return Object.assign({}, state, { profilePicUrl: payload })
    case TEXT:
      return Object.assign({}, state, { text: payload, call: false, both: false })
    case CALL:
      return Object.assign({}, state, { text: false, call: payload, both: false })
    case BOTH:
      return Object.assign({}, state, { text: false, call: false, both: payload })
    default:
      return state
  }
}

export const personalInfo = (e) => {
  const { value, name } = e.target

  return {
    type: SET_USER,
    data: name,
    payload: value,
  }
}

export const checkBoxes = (e, checked) => {
  const { name } = e.target

  return function (dispatch) {
    return dispatch({
      type: name,
      payload: !checked,
    })
  }
}


export const setProfilePic = (file) => {
  handleUpload(file)

  return {
    type: PROFILE_PIC,
    payload: file.preview,
    data: file.name,
  }
}

const handleUpload = (file) => {
  let upload = request.post(process.env.REACT_APP_CLOUDINARY_UPLOAD_URL).field('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET).field('file', file)

  upload.end((err, response) => {
    if (err) {
      console.log(err)
    }

    if (response.body.secure_url !== '') {
      store.dispatch({
        type: PICTURE_URL,
        payload: response.body.secure_url,
      })
    }
  })
}