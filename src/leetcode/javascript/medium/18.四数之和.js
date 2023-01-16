/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var nSumTarget = function (nums, n, start, target) {
  const len = nums.length
  const res = []

  // 提前过滤掉一些不可能的情况
  // 至少是 2Sum, 且数组大小不应该小于 n
  if (n < 2 || len < n) return res

  if (n === 2) {
    let lo = start,
      hi = len - 1
    while (lo < hi) {
      const sum = nums[lo] + nums[hi]
      const left = nums[lo],
        right = nums[hi]

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
    // n > 2 时, 递归计算 (n-1)Sum 的结果
    for (let i = start; i < len; i++) {
      const items = nSumTarget(nums, n - 1, i + 1, target - nums[i])
      for (const item of items) {
        // (n-1)Sum 加上 nums[i] 就是 nSum
        item.push(nums[i])
        res.push(item)
      }
      while (i < len - 1 && nums[i] === nums[i + 1]) i++
    }
  }

  return res
}

var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b)
  return nSumTarget(nums, 4, 0, target)
}
// @lc code=end

console.log(
  fourSum([1000000000, 1000000000, 1000000000, 1000000000], -294967296),
)
