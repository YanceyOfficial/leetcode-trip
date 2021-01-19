import { baseConverter } from '../src/DataStructures/Stack/baseConverter'

describe('baseConverter', () => {
  test('baseConverter(100345, 2): "11000011111111001"', () => {
    expect(baseConverter(100345, 2)).toBe('11000011111111001')
  })

  test('baseConverter(100345, 16): "187F9"', () => {
    expect(baseConverter(100345, 16)).toBe('187F9')
  })
})
