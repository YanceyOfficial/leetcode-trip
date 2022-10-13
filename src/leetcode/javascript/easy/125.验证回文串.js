/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const reg = /[A-Za-z0-9]/
  let i = 0
  let j = s.length - 1
  let flag = true

  while (flag && i < j) {
    if (!reg.test(s[i])) {
      i++
    }

    if (!reg.test(s[j])) {
      j--
    }

    if (reg.test(s[i]) && reg.test(s[j])) {
      flag = s[i].toLowerCase() === s[j].toLowerCase()
      i++
      j--
    }
  }
  return flag
}
// @lc code=end
