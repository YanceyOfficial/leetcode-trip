/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  const len = nums.length
  let slow = 0,
    fast = 0

  while (fast < len) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast]
      slow++
    }

    fast++
  }

  console.log(nums)

  return slow
}
// @lc code=end
console.log(removeElement([3, 2, 2, 3], 3))
