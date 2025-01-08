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
  const regex = /[A-Za-z0-9]/
  let i = 0
  let j = s.length - 1

  while (i < j) {
    if (!regex.test(s[i])) {
      i++
    }

    if (!regex.test(s[j])) {
      j--
    }

    if (regex.test(s[i]) && regex.test(s[j])) {
      if (s[i].toLowerCase() !== s[j].toLowerCase()) return false
      i++
      j--
    }
  }

  return true
}
// @lc code=end
