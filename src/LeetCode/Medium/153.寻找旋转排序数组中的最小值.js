/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let low = 0
  let high = nums.length - 1
  let min = nums[0]

  while (low <= high) {
    const mid = ((low + high) / 2) | 0

    if (nums[low] <= nums[mid]) {
      min = min > nums[low] ? nums[low] : min
      low = mid + 1
    } else if (nums[low] > nums[mid]) {
      min = min > nums[mid] ? nums[mid] : min
      high = mid
    }
  }

  return min
}
// @lc code=end
