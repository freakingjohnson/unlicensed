import reducer, { getSearchData, getUser } from '../reducers/resultsReducer'
// these are nathan's tests
const userMockData = [
  {
    bio_info: "Please don't hire me.",
    email: 'kjjenson@gmail.com',
    first_name: 'Eddie',
    id: 1,
    last_name: 'Johnson',
    location: 'Herriman, UT 84096',
    phone: '(435) 840-2741',
    photo_info: 'this is angular',
    profile_photo: 'https://res.cloudinary.com/dhowdfbmx/image/upload/v1516658354/pl0vcm3snogfohozy5ki.jpg',
    stripe_id: null,
    workphotos: 'https://res.cloudinary.com/dhowdfbmx/image/upload/v1516654448/vqdonk6bw241vgwntaw3.png',
    worktype: 'Drywall_and_Insulation, Flooring, Framing_and_Sheetrock, Landscaping, Plumbing',
  },
  {
    bio_info: 'stuff',
    email: 'hiram@perry.com',
    first_name: 'Hiram',
    id: 2,
    last_name: 'Perry',
    location: 'Las Vegas, NV 89117',
    phone: '(908) 987-0987',
    photo_info: ', i think i can do react',
    profile_photo: 'https://res.cloudinary.com/dhowdfbmx/image/upload/v1516658463/dqrdst4n6qr3mcwud1qq.png',
    stripe_id: null,
    workphotos: 'https://res.cloudinary.com/dhowdfbmx/image/upload/v1516658492/rsqecpo3whj0diljxmi8.png',
    worktype: 'Drywall_and_Insulation, Painting, Plumbing, Roofing',
  },
]

describe('results reducer', () => {
  it('should return the intitial state', () => {
    expect(reducer(undefined, {})).toEqual({
      userData: [],
      searchData: [],
      user: [],
      favorites: [],
    })
  })
})

describe('getSearchData', () => {
  it('should return with hiram', () => {
    expect(getSearchData(userMockData, 'painting', 'worktype')).toEqual({
      type: 'GET_SEARCH_DATA',
      payload: [{
        bio_info: 'stuff',
        email: 'hiram@perry.com',
        first_name: 'Hiram',
        id: 2,
        last_name: 'Perry',
        location: 'Las Vegas, NV 89117',
        phone: '(908) 987-0987',
        photo_info: ', i think i can do react',
        profile_photo: 'https://res.cloudinary.com/dhowdfbmx/image/upload/v1516658463/dqrdst4n6qr3mcwud1qq.png',
        stripe_id: null,
        workphotos: 'https://res.cloudinary.com/dhowdfbmx/image/upload/v1516658492/rsqecpo3whj0diljxmi8.png',
        worktype: 'Drywall_and_Insulation, Painting, Plumbing, Roofing',
      }],
    })
  })


  it('should return with eddie', () => {
    expect(getSearchData(userMockData, 'Eddie', 'name')).toEqual({
      type: 'GET_SEARCH_DATA',
      payload: [{
        bio_info: "Please don't hire me.",
        email: 'kjjenson@gmail.com',
        first_name: 'Eddie',
        id: 1,
        last_name: 'Johnson',
        location: 'Herriman, UT 84096',
        phone: '(435) 840-2741',
        photo_info: 'this is angular',
        profile_photo: 'https://res.cloudinary.com/dhowdfbmx/image/upload/v1516658354/pl0vcm3snogfohozy5ki.jpg',
        stripe_id: null,
        workphotos: 'https://res.cloudinary.com/dhowdfbmx/image/upload/v1516654448/vqdonk6bw241vgwntaw3.png',
        worktype: 'Drywall_and_Insulation, Flooring, Framing_and_Sheetrock, Landscaping, Plumbing',
      }],
    })
  })


  it('should return with hiram', () => {
    expect(getSearchData(userMockData, 'Las Vegas', 'city')).toEqual({
      type: 'GET_SEARCH_DATA',
      payload: [{
        bio_info: 'stuff',
        email: 'hiram@perry.com',
        first_name: 'Hiram',
        id: 2,
        last_name: 'Perry',
        location: 'Las Vegas, NV 89117',
        phone: '(908) 987-0987',
        photo_info: ', i think i can do react',
        profile_photo: 'https://res.cloudinary.com/dhowdfbmx/image/upload/v1516658463/dqrdst4n6qr3mcwud1qq.png',
        stripe_id: null,
        workphotos: 'https://res.cloudinary.com/dhowdfbmx/image/upload/v1516658492/rsqecpo3whj0diljxmi8.png',
        worktype: 'Drywall_and_Insulation, Painting, Plumbing, Roofing',
      }],
    })
  })
})

describe('getUser', () => {
  it('should return with hiram', () => {
    expect(getUser(2, userMockData)).toEqual({
      type: 'SINGLE_USER',
      payload: [{
        bio_info: 'stuff',
        email: 'hiram@perry.com',
        first_name: 'Hiram',
        id: 2,
        last_name: 'Perry',
        location: 'Las Vegas, NV 89117',
        phone: '(908) 987-0987',
        photo_info: ', i think i can do react',
        profile_photo: 'https://res.cloudinary.com/dhowdfbmx/image/upload/v1516658463/dqrdst4n6qr3mcwud1qq.png',
        stripe_id: null,
        workphotos: 'https://res.cloudinary.com/dhowdfbmx/image/upload/v1516658492/rsqecpo3whj0diljxmi8.png',
        worktype: 'Drywall_and_Insulation, Painting, Plumbing, Roofing',
      }],
    })
  })
})