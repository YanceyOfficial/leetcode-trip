/*
 * @lc app=leetcode.cn id=918 lang=javascript
 *
 * [918] 环形子数组的最大和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  let totalSum = nums[0]

  let maxEndingHere = nums[0]
  let maxSoFar = nums[0]

  let minEndingHere = nums[0]
  let minSoFar = nums[0]

  for (let i = 1; i < nums.length; i++) {
    maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i])
    maxSoFar = Math.max(maxSoFar, maxEndingHere)

    minEndingHere = Math.min(nums[i], minEndingHere + nums[i])
    minSoFar = Math.min(minSoFar, minEndingHere)

    totalSum += nums[i]
  }

  if (maxSoFar > 0) {
    return Math.max(maxSoFar, totalSum - minSoFar)
  } else {
    return maxSoFar
  }
}
// @lc code=end
console.log(maxSubarraySumCircular([1, -2, 3, -2])) // 3
console.log(maxSubarraySumCircular([5, -3, 5])) // 10
console.log(maxSubarraySumCircular([3, -2, 2, -3])) // 3
