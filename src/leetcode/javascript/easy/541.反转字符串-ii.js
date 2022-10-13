/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let m = k - 1,
    n = 0

  let res = ''

  for (let i = 0; i < s.length; i += 2 * k) {
    let curr = s.slice(i, i + 2 * k).split('')

    while (n <= m) {
      ;[curr[n], curr[m]] = [curr[m], curr[n]]
      n++
      m--
    }

    res += curr.join('')

    n = 0
    m = k - 1
  }

  return res
}
// @lc code=end
