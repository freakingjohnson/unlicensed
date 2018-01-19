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
  location: '',
}

const SET_USER = 'SET_USER',
  PROFILE_PIC = 'PROFILE_PIC',
  PICTURE_URL = 'PROFILE_URL'


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, { [action.state]: action.payload })
    case PROFILE_PIC:
      return Object.assign({}, state, { profilePic: action.payload, picName: action.data })
    case PICTURE_URL:
      return Object.assign({}, state, { profilePicUrl: action.payload })
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
      console.log(response.body.secure_url)
      store.dispatch({
        type: PICTURE_URL,
        payload: response.body.secure_url,
      })
    }
  })
}