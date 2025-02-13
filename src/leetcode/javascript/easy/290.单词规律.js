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
  if (pattern.length !== words.length) {
    return false
  }

  const pattern2Word = {}
  const word2Pattern = {}

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i]
    const word = words[i]

    if (pattern2Word[char] && pattern2Word[char] !== word) {
      return false
    }
    if (word2Pattern[word] && word2Pattern[word] !== char) {
      return false
    }

    pattern2Word[char] = word
    word2Pattern[word] = char
  }

  return true
}
// @lc code=end
