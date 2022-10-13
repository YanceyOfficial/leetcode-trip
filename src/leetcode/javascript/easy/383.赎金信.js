/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote === '') return true

  const map = new Map()

  for (let i = 0; i < ransomNote.length; i++) {
    const curVal = map.get(ransomNote[i])
    if (curVal !== undefined) {
      map.set(ransomNote[i], curVal + 1)
    } else {
      map.set(ransomNote[i], 1)
    }
  }

  for (let i = 0; i < magazine.length; i++) {
    const curVal = map.get(magazine[i])
    if (curVal !== 0 && curVal !== undefined) {
      if (curVal - 1 === 0) {
        map.delete(magazine[i])
      } else {
        map.set(magazine[i], curVal - 1)
      }

      if (map.size === 0) return true
    }
  }

  return false
}
// @lc code=end
