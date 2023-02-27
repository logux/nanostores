import { atom } from '../atom/index.js'
import { getPath, setPath } from './path.js'

export * from './path.js'

export const deepMap = (initial = {}) => {
  let store = atom(initial)
  store.setKey = (key, value) => {
    if (getPath(store.value, key) !== value) {
      store.value = setPath(store.value, key, value)
      store.notify(key)
    }
  }
  return store
}
