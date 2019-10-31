import { Dictionary } from '../dataStructures/Dictionary/Dictionary'

describe('dictionaryChecker', () => {
  test('test Dictionary', () => {
    const dictionary = new Dictionary()
    dictionary.set('Gandalf', 'gandalf@email.com')
    dictionary.set('John', 'johnsnow@email.com')
    dictionary.set('Tyrion', 'tyrion@email.com')

    expect(dictionary).toBeInstanceOf(Dictionary)
    expect(dictionary.hasKey('Gandalf')).toBeTruthy()
    expect(dictionary.hasKey('bitch')).toBeFalsy()
    expect(dictionary).toBeInstanceOf(Dictionary)
    expect(dictionary.keys()).toEqual(['Gandalf', 'John', 'Tyrion'])
    expect(dictionary.values()).toEqual([
      'gandalf@email.com',
      'johnsnow@email.com',
      'tyrion@email.com',
    ])
    expect(dictionary.keyValues()).toEqual([
      ['Gandalf', 'gandalf@email.com'],
      ['John', 'johnsnow@email.com'],
      ['Tyrion', 'tyrion@email.com'],
    ])
    expect(dictionary.get('Tyrion')).toBe('tyrion@email.com')
    expect(dictionary.get('bitch')).toBeUndefined()
    expect(dictionary.remove('Tyrion')).toBeTruthy()
    expect(dictionary.remove('bitch')).toBeFalsy()
    expect(dictionary.size()).toBe(2)
  })
})
