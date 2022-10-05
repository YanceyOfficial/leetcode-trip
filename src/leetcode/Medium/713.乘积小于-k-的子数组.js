/*
 * @lc app=leetcode.cn id=713 lang=javascript
 *
 * [713] 乘积小于 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  const n = nums.length

  let product = 1,
    start = 0,
    end = 0,
    ans = 0

  while (end < n) {
    product *= nums[end]

    while (start <= end && product >= k) {
      product /= nums[start]
      start++
    }

    ans += end - start + 1
    end++
  }

  return ans
}
// @lc code=end
console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100))
