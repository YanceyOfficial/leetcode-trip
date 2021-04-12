import { MySet } from '../src/data-structures/Set/Set'

describe('setChecker', () => {
  test('test Set', () => {
    const set = new MySet()
    expect(set).toBeInstanceOf(MySet)
  })
})
