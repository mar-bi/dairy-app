import { SET_ACTIVE } from '../actions/actions'

function active(state = 0, action) {
  switch (action.type) {
    case SET_ACTIVE:
      return action.id
    default:
      return state
  }
}

export default active
