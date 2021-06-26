/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) return s

  let l = 0
  let r = 0
  for (let i = 0; i < s.length; i++) {
    // 回文子串长度是奇数
    helper(i, i)
    // 回文子串长度是偶数
    helper(i, i + 1)
  }

  function helper(m, n) {
    while (m >= 0 && n < s.length && s[m] === s[n]) {
      m--
      n++
    }
    // 注意此处 m, n 的值循环完后
    // 是恰好不满足循环条件的时刻, 如果此轮询得到回文串长度大于之前记录, 记录此轮循边界
    if (n - m > r - l) {
      l = m
      r = n
    }
  }
  return s.slice(l + 1, r)
}
// @lc code=end
