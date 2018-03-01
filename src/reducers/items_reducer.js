import { DELETE_ITEM, CREATE_ITEM, ADD_COMMENT } from '../actions/actions'

function createNewItem(id, item) {
  return {
    id,
    title: item,
    comments: [],
    numComments: 0
  }
}

function addNewComment(item, text) {
  const { id, title } = item
  const comments = [...item.comments, text]
  const newItem = {
    id,
    title,
    comments,
    numComments: comments.length
  }
  return newItem
}

function items(state = [], action) {
  switch (action.type) {
    case CREATE_ITEM:
      return [...state, createNewItem(action.id, action.item)]
    case DELETE_ITEM:
      const items = state.filter(item => item.id !== action.id)
      return items
    case ADD_COMMENT:
      const index = state.findIndex(item => item.id === action.id)
      return [
        ...state.slice(0, index),
        addNewComment(state[index], action.text),
        ...state.slice(index + 1)
      ]
    default:
      return state
  }
}

export default items
