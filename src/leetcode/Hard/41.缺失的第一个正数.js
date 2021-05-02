/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const n = nums.length
  let min = 1

  nums.sort((a, b) => a - b)

  for (const num of nums) {
    if (num === min) {
      min += 1
      continue
    }
    if (num > min) {
      break
    }
  }

  return min
}
// @lc code=end
console.log(firstMissingPositive([3, 4, -1, 1]))
