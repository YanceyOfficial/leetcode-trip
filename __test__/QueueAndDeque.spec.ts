import { palindromeChecker } from '../dataStructures/QueueAndDeque/palindromeChecker'

describe('palindromeChecker', () => {
  test('palindromeChecker("德韦恩韦德"): true', () => {
    expect(palindromeChecker('德韦恩韦德')).toBeTruthy()
  })

  test('palindromeChecker("asdfg"): false', () => {
    expect(palindromeChecker('asdfg')).toBeFalsy()
  })

  test('palindromeChecker("7447"): true', () => {
    expect(palindromeChecker('7447')).toBeTruthy()
  })

  test('palindromeChecker("53231323"): false', () => {
    expect(palindromeChecker('53231323')).toBeFalsy()
  })
})
