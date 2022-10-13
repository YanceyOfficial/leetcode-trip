/*
 * @lc app=leetcode.cn id=424 lang=javascript
 *
 * [424] 替换后的最长重复字符
 */

// s = "AABABBA", k = 1
// 4

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let left = 0
  let right = 0

  const map = {}

  let max = 0
  let res = 0

  while (right < s.length) {
    const c = s[right]
    map[c] ? (map[c] += 1) : (map[c] = 1)
    max = Math.max(max, map[c])
    right++

    while (k + max < right - left) {
      const d = s[left]
      map[d] -= 1
      left++
    }

    res = Math.max(res, right - left)
  }

  return res
}
// @lc code=end
