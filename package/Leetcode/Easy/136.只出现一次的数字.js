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
var singleNumber = function(nums) {
  const o = {}
  for (let i = 0; i < nums.length; i++) {
    if (o[nums[i]]) {
      delete o[nums[i]]
    } else {
      o[nums[i]] = 1
    }
  }

  return Object.keys(o)[0]
}

// 按位异或(XOR)
// 就很骚
var singleNumber = function(nums) {
  return nums.reduce((acc, val) => acc ^ val)
}
// @lc code=end
