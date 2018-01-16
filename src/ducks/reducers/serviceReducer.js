export const services = ['Plumbing', 'Cabinets and Coutertops', 'Framing and Sheetrock', 'Drywall and Insulation', 'Electrical', 'Flooring', 'Painting', 'Landscaping', 'Roofing', 'House or Room Remodel']

const initialState = {}

services.forEach((string) => {
  const service = string.replace(/\s/g, '')
  initialState[service] = false
})

const SET_SERVICES = 'SET_SERVICES'

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_SERVICES:
      return Object.assign({}, state, { [action.state]: action.payload })
    default:
      return state
  }
}

export const setServices = (e, checked) => {
  const { name } = e.target
  console.log('hit', checked)
  return {
    type: SET_SERVICES,
    state: name,
    payload: !checked,
  }
}
