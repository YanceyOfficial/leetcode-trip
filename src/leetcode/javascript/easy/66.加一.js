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
  let n = digits.length - 1

  do {
    if (digits[n] === 9) {
      digits[n] = 0
      if (n === 0) digits.unshift(1)
    } else {
      digits[n] += 1
      break
    }
  } while (n-- >= 0)

  return digits
}

// @lc code=end
console.log(plusOne([9, 9]))
