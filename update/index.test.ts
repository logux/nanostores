import { atom, map, updateKey, getValue, update } from '../index.js'

it('updates store', () => {
  let count = atom(0)
  update(count, value => value + 1)
  update(count, value => value + 10)
  expect(getValue(count)).toEqual(11)
})

it('updates key', () => {
  let user = map({ name: '', age: 0 })
  updateKey(user, 'age', age => age + 1)
  expect(getValue(user)).toEqual({ name: '', age: 1 })
})
