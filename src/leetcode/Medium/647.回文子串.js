/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [657] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

var countSubstrings = function (s) {
  const len = s.length
  let total = 0
  for (let i = 0; i < len; i++) {
    total += helpers(i, i)
    total += helpers(i, i + 1)
  }

  function helpers(m, n) {
    let count = 0
    while (m >= 0 && n < len && s[m] === s[n]) {
      count++
      m--
      n++
    }
    return count
  }

  return total
}
// @lc code=end
