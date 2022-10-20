/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map()

  for (const str of strs) {
    const orderStr = Array.from(str).sort().join()
    if (map.has(orderStr)) {
      map.set(orderStr, [...map.get(orderStr), str])
    } else {
      map.set(orderStr, [str])
    }
  }

  return Array.from(map.values())
}
// @lc code=end
