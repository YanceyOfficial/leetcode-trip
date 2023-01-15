/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var nSumTarget = function (nums, n, start, target) {
  const len = nums.length
  const res = []

  if (n < 2 || len < n) return res

  if (n === 2) {
    let lo = start,
      hi = len - 1

    while (lo < hi) {
      const sum = nums[lo] + nums[hi]
      const left = nums[lo]
      const right = nums[hi]

      if (sum < target) {
        while (lo < hi && nums[lo] === left) lo++
      } else if (sum > target) {
        while (lo < hi && nums[hi] === right) hi--
      } else {
        res.push([left, right])
        while (lo < hi && nums[lo] === left) lo++
        while (lo < hi && nums[hi] === right) hi--
      }
    }
  } else {
    for (let i = start; i < len; i++) {
      const items = nSumTarget(nums, n - 1, i + 1, target - nums[i])
      for (const item of items) {
        item.push(nums[i])
        res.push(item)
      }

      while (i < len - 1 && nums[i] === nums[i + 1]) i++
    }
  }

  return res
}

var threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  return nSumTarget(nums, 3, 0, 0)
}
// @lc code=end
