import { MySet } from '../DataStructures/Set/Set'

describe('setChecker', () => {
  test('test Set', () => {
    const set = new MySet()
    expect(set).toBeInstanceOf(MySet)
  })
})
