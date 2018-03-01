import { combineReducers } from 'redux'
import items from './items_reducer'
import active from './active_reducer'

const rootReducer = combineReducers({
  items,
  active
})

export default rootReducer
