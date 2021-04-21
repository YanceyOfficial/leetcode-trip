import { DifferenceArray } from '../src/algorithm-design/difference-array/DifferenceArray'

describe('DifferenceArray', () => {
  test('test DifferenceArray', () => {
    const da = new DifferenceArray([8, 2, 6, 3, 1])
    da.increment(1, 3, 3)
    const res = da.result()
    expect(res).toEqual(expect.arrayContaining([8, 5, 9, 6, 1]))
  })
})
