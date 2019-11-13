import { MySet } from '../package/DataStructures/Set/Set'

describe('setChecker', () => {
  test('test Set', () => {
    const set = new MySet()
    expect(set).toBeInstanceOf(MySet)
  })
})
