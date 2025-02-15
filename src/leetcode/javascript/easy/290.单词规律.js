/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  const words = s.split(' ')
  if (pattern.length !== words.length) return false

  const patternMap = new Map()
  const wordMap = new Map()

  for (let i = 0; i < pattern.length; i++) {
    const p = pattern[i]
    const word = words[i]

    if (patternMap.has(p) && patternMap.get(p) !== word) return false
    if (wordMap.has(word) && wordMap.get(word) !== p) return false

    patternMap.set(p, word)
    wordMap.set(word, p)
  }

  return true
}
// @lc code=end
