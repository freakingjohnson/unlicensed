const initialState = {
  email: '',
  subject: '',
  name: '',
  phone: '',
  message: '',
}

const EMAIL_ME = 'EMAIL_ME'

export default function emailReducer(state = initialState, action) {
  const { type, payload, name } = action

  switch (type) {
    case EMAIL_ME:
      return { ...state, [name]: payload }
    default:
      return state
  }
}

export const formInfo = e => ({
  type: EMAIL_ME,
  name: e.target.name,
  payload: e.target.value,
})