export const DELETE_ITEM = 'DELETE_ITEM'
export const ADD_COMMENT = 'ADD_COMMENT'
export const CREATE_ITEM = 'CREATE_ITEM'
export const SET_ACTIVE = 'SET_ACTIVE'

export function removeItem(id) {
  const action = {
    type: DELETE_ITEM,
    id
  }
  return action
}

export function addComment(id, text) {
  const action = {
    type: ADD_COMMENT,
    id,
    text
  }
  return action
}

export function setActiveItem(id) {
  const action = {
    type: SET_ACTIVE,
    id
  }
  return action
}

export function createItem(id, item) {
  const action = {
    type: CREATE_ITEM,
    id,
    item
  }
  return action
}
