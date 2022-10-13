/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const map = {}

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] !== undefined) {
      map[s[i]] = -1
    } else {
      map[s[i]] = i
    }
  }

  const arr = Object.values(map).filter((val) => val !== -1)

  return arr.length === 0 ? -1 : arr[0]
}
// @lc code=end
