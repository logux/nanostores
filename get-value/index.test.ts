import { jest } from '@jest/globals'

import { atom, map, getValue } from '../index.js'

jest.useFakeTimers()

it.skip('reads store value', () => {
  let store = atom<string>(() => {
    store.set('initial')
  })
  expect(getValue(store)).toEqual('initial')

  let unbind = store.listen(() => {})
  store.set('new')
  expect(getValue(store)).toEqual('new')

  unbind()
  jest.runAllTimers()
  expect(getValue(store)).toEqual('initial')
})

it.skip('reads map store value', () => {
  let store = map<{ a: number }>(() => {
    store.setKey('a', 0)
  })
  expect(getValue(store)).toEqual({ a: 0 })

  let unbind = store.listen(() => {})
  store.setKey('a', 1)
  expect(getValue(store)).toEqual({ a: 1 })

  unbind()
  jest.runAllTimers()
  expect(getValue(store)).toEqual({ a: 0 })
})
