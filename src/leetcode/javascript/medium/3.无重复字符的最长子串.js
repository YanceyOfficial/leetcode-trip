/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  const map = {}
  let start = 0
  let end = 0
  let res = 0

  while (end < s.length) {
    const endVal = s[end++]

    if (map[endVal]) {
      map[endVal] += 1
    } else {
      map[endVal] = 1
    }

    while (map[endVal] > 1) {
      const startVal = s[start++]
      map[startVal] -= 1
    }

    res = Math.max(res, end - start)
  }

  return res
}
// @lc code=end
