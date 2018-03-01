import { createStore } from 'redux'
import rootReducer from './reducers/index'
import { loadState, saveState } from './localStorage'

const persistedState = loadState()

const store = createStore(rootReducer, persistedState)
console.log('store.getState()', store.getState())

store.subscribe(() => {
  saveState(store.getState())
})

export default store
