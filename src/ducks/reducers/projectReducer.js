import request from 'superagent'
import store from './../../store'

const initialState = {
  projectPicList: [],
  projectPicUrls: [],
  projectPicNames: [],
  projectDesc: '',
  projectDescList: [],
}

const SET_PROJECT_PIC = 'SET_PROJECT_PIC',
  SET_PROJECT_DESC = 'SET_PROJECT_DESC',
  SET_DESC_LIST = 'SET_DESC_LIST',
  SET_PIC_URL = 'SET_PIC_URL'

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PROJECT_PIC:
      return {
        ...state,
        projectPicList: [...state.projectPicList, action.payload],
        projectPicNames: [...state.projectPicNames, action.data],
      }
    case SET_PROJECT_DESC:
      return { ...state, projectDesc: action.payload }
    case SET_DESC_LIST:
      return { ...state, projectDesc: '', projectDescList: [...state.projectDescList, state.projectDesc] }
    case SET_PIC_URL:
      return { ...state, projectPicUrls: [...state.projectPicUrls, action.payload] }
    default:
      return state
  }
}

export const setProjects = (e) => {
  const { value } = e.target

  return {
    type: SET_PROJECT_DESC,
    payload: value,
  }
}

export const addToDescList = () => ({
  type: SET_DESC_LIST,
})

export const addToPicList = (file) => {
  addToPicUrls(file)

  return ({
    type: SET_PROJECT_PIC,
    payload: file.preview,
    data: file.name,
  })
}

export const addToPicUrls = (file) => {
  let upload = request.post(process.env.REACT_APP_CLOUDINARY_UPLOAD_URL).field('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET).field('file', file)

  upload.end((err, response) => {
    if (err) {
      console.log(err)
    }

    if (response.body.secure_url !== '') {
      console.log(response.body.secure_url)
      store.dispatch({
        type: SET_PIC_URL,
        payload: response.body.secure_url,
      })
    }
  })
}