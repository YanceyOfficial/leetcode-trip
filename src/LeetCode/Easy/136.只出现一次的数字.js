/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// 首先想到的肯定是 hashmap
var singleNumber = function (nums) {
  const len = nums.length
  const set = new Set()

  for (let i = 0; i < len; i++) {
    const hasCurr = set.has(nums[i])
    if (hasCurr) {
      set.delete(nums[i])
    } else {
      set.add(nums[i])
    }
  }

  return set.keys().next().value
}

var singleNumber = function (nums) {
  return nums.reduce((acc, val) => acc ^ val)
}
// @lc code=end
