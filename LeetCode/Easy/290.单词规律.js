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
var wordPattern = function(pattern, str) {
  const strArr = str.split(' ')
  const patternLen = pattern.length

  if (strArr.length !== patternLen) return false

  const map = {}
  let i = 0

  while (i < patternLen) {
    const curr = map[pattern[i]]
    
    if (curr !== undefined) {
      if (curr !== strArr[i]) return false
      i++
    } else {
      if (Object.values(map).includes(strArr[i])) return false
      map[pattern[i]] = strArr[i]
      i++
    }
  }

  return true
}
// @lc code=end
