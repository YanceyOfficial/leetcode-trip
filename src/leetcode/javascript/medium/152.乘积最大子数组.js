/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const n = nums.length
  if (n === 0) return 0
  let max = -Infinity
  let _max = 1
  let _min = 1

  for (const num of nums) {
    if (num < 0) {
      const temp = _max
      _max = _min
      _min = temp
    }

    _max = Math.max(_max * num, num)
    _min = Math.min(_min * num, num)

    max = Math.max(max, _max)
  }

  return max
}
// @lc code=end
