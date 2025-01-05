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
  const map = new Map()
  for (const ch of ransomNote) {
    map.set(ch, map.has(ch) ? map.get(ch) + 1 : 1)
  }

  for (const ch of magazine) {
    if (map.has(ch)) {
      if (map.get(ch) > 1) {
        map.set(ch, map.get(ch) - 1)
      } else {
        map.delete(ch)
      }
    }
  }

  return map.size === 0
}
// @lc code=end
