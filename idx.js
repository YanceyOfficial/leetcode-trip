/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const map1 = new Map()
  for (const word of words) {
    map1.set(word, map1.has(word) ? map1.get(word) + 1 : 1)
  }

  const wordLength = words[0].length
  const subStringLength = wordLength * words.length
  const result = []

  for (let i = 0; i < s.length; i++) {
    if (i + subStringLength > s.length) break

    const map2 = new Map()
    const currSubString = s.slice(i, i + subStringLength)
    for (let j = 0; j < subStringLength; j += wordLength) {
      const subWord = currSubString.slice(j, j + wordLength)

      if (!words.includes(subWord)) break

      map2.set(subWord, map2.has(subWord) ? map2.get(subWord) + 1 : 1)
    }

    if (isEqual(map1, map2)) {
      result.push(i)
    }
  }

  return result
}

/**
 * @param {Map} map1
 * @param {Map} map2
 * @return {boolean}
 */
var isEqual = function (map1, map2) {
  for (const key of map1.keys()) {
    if (map1.get(key) !== map2.get(key)) return false
  }

  return true
}

console.log(findSubstring('barfoofoobarthefoobarman', ['bar', 'foo', 'the']))
// console.log(
//   findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word']),
// )
