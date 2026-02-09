/*
 * @lc app=leetcode.cn id=1991 lang=javascript
 *
 * [1991] 找到数组的中间位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
  // Calculate total sum of the array
  const total = nums.reduce((sum, num) => sum + num, 0)

  let leftSum = 0

  for (let i = 0; i < nums.length; i++) {
    // Right sum = total - leftSum - nums[i]
    const rightSum = total - leftSum - nums[i]

    // If left sum equals right sum, we found the middle index
    if (leftSum === rightSum) {
      return i
    }

    // Add current element to left sum for next iteration
    leftSum += nums[i]
  }

  // No middle index found
  return -1
}
// @lc code=end
