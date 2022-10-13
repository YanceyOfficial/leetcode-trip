/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const n = nums.length

  let dup = -1
  for (let i = 0; i < n; i++) {
    const index = Math.abs(nums[i]) - 1
    if (nums[index] < 0) {
      dup = Math.abs(nums[i])
    } else {
      nums[index] *= -1
    }
  }

  let missing = -1
  for (let i = 0; i < n; i++)
    if (nums[i] > 0) {
      missing = i + 1
    }

  return [dup, missing]
}

console.log(findErrorNums([1, 1]))
// @lc code=end
