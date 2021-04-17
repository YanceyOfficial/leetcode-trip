import { DiffArray } from '../src/algorithm-design/diff-array/DiffArray'

describe('DiffArray', () => {
  test('test DiffArray', () => {
    const da = new DiffArray([8, 2, 6, 3, 1])
    da.increment(1, 3, 3)
    const res = da.result()
    expect(res).toEqual(expect.arrayContaining([8, 5, 9, 6, 1]))
  })
})
