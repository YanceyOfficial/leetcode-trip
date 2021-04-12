/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const len = digits.length

  let i = len - 1
  while (i >= 0) {
    if (digits[i] === 9) {
      digits[i] = 0
      if (!digits[i - 1]) digits.unshift(1)
    } else {
      digits[i] += 1
      break
    }
    --i
  }

  return digits
}
// @lc code=end
