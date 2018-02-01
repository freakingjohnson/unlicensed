import reducer, { setProjects, addToDescList, addToPicList, addToPicUrls } from '../../reducers/projectReducer'

const initialState = {
  projectPicList: [],
  projectPicUrls: [],
  projectPicNames: [],
  projectDesc: '',
  projectDescList: [],
}

describe('project reducer testing:', () => {
  test('reducer() should return initial state.', () => {
    expect(reducer()).toEqual({
      projectPicList: [],
      projectPicUrls: [],
      projectPicNames: [],
      projectDesc: '',
      projectDescList: [],
    })
  })

  test('setProjects(str) should set projectDesc to equal str', () => {
    expect(setProjects('hello')).toEqual(initialState.projectDesc)
  })

  test('addToDescList(str) should add str to the project desc list', () => {
    expect(addToDescList('hello')).toEqual(initialState.projectDescList[0])
  })

  test('addToPicList() should add the pic input into the projectPicList', () => {
    expect(addToPicList(file)).toEqual(projectPicList[0])
  })

  test('addToPicUrls() should add the input string to projectPicUrls', () => {
    expect(addToPicUrls(file)).toEqual(initialState.projectPicUrls[0])
  })
})
