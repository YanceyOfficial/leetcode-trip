/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false

  const map = new Map()

  for (const item of s) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1)
    } else {
      map.set(item, 1)
    }
  }

  for (const item of t) {
    if (!map.has(item)) return false

    if (map.get(item) > 1) {
      map.set(item, map.get(item) - 1)
    } else {
      map.delete(item)
    }
  }

  return map.size === 0
}
// @lc code=end
