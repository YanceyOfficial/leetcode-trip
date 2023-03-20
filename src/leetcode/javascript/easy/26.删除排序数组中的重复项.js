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
var removeDuplicates = function (nums) {
  const n = nums.length

  // 双指针
  let slow = 1,
    fast = 1

  while (fast < n) {
    if (nums[slow - 1] !== nums[fast]) {
      nums[slow] = nums[fast]
      slow++
    }

    fast++
  }

  return slow
}
// @lc code=end
