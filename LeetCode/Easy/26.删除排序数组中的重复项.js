/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const length = nums.length
  if (length === 0) return 0
  // 双指针
  let i = 0
  for (let j = 1; j < length; j++) {
    if (nums[j] !== nums[i]) {
      ++i
      nums[i] = nums[j]
    }
  }
  return i + 1
}
// @lc code=end
removeDuplicates([1,1,2])