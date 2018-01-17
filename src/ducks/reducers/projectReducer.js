const initialState = {
  projectPicList: [],
  projectPicNames: [],
  projectDesc: '',
  projectDescList: [],
}

const SET_PROJECT_PIC = 'SET_PROJECT_PIC',
  SET_PROJECT_DESC = 'SET_PROJECT_DESC',
  SET_DESC_LIST = 'SET_DESC_LIST'

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PROJECT_PIC:
      return {
        projectPicList: [...state.projectPicList, action.payload],
        projectPicNames: [...state.projectPicNames, action.data],
        projectDesc: state.projectDesc,
        projectDescList: [...state.projectDescList],
      }
    case SET_PROJECT_DESC:
      return {
        projectPicList: [...state.projectPicList],
        projectPicNames: [...state.projectPicNames],
        projectDesc: action.payload,
        projectDescList: [...state.projectDescList],
      }
    case SET_DESC_LIST:
      return {
        projectPicList: [...state.projectPicList],
        projectPicNames: [...state.projectPicNames],
        projectDesc: '',
        projectDescList: [...state.projectDescList, state.projectDesc],
      }
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

export const addToPicList = file => ({
  type: SET_PROJECT_PIC,
  payload: file.preview,
  data: file.name,
})
