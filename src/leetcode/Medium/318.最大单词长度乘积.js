/*
 * @lc app=leetcode.cn id=318 lang=javascript
 *
 * [318] 最大单词长度乘积
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  let max = 0
  const bitWords = new Map()

  for (let i = 0; i < words.length; i++) {
    let bitWord = 0

    const word = words[i]
    const wordLen = word.length
    for (const letter of words[i]) {
      bitWord |= 1 << (letter.charCodeAt() - 97)
    }

    if (!bitWords.has(bitWord) || bitWords.get(bitWord) < wordLen) {
      bitWords.set(bitWord, wordLen)
    }
  }

  for (const bitWordA of bitWords.keys()) {
    for (const bitWordB of bitWords.keys()) {
      if ((bitWordA & bitWordB) === 0) {
        max = Math.max(max, bitWords.get(bitWordA) * bitWords.get(bitWordB))
      }
    }
  }

  return max
}
// @lc code=end

console.log(maxProduct(['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef']))
console.log(maxProduct(['a', 'ab', 'abc', 'd', 'cd', 'bcd', 'abcd']))
console.log(maxProduct(['a', 'aa', 'aaa', 'aaaa']))
