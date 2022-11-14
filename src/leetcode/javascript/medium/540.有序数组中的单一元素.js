/*
 * @lc app=leetcode.cn id=540 lang=javascript
 *
 * [540] 有序数组中的单一元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  const n = nums.length
  let low = 0,
    high = n - 1

  while (low < high) {
    const mid = Math.floor(low + (high - low) / 2)

    if (nums[mid] === nums[mid ^ 1]) {
      low = mid + 1
    } else {
      high = mid
    }
  }

  return nums[high]
}
// @lc code=end
