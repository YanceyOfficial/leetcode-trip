/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  if (nums.length === 1) return nums[0]

  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)

      if (map.get(nums[i]) >= nums.length / 2) {
        return nums[i]
      }
    } else {
      map.set(nums[i], 1)
    }
  }
}
// @lc code=end

console.log(majorityElement([3, 2, 3]))
