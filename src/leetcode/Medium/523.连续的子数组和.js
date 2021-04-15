/*
 * @lc app=leetcode.cn id=523 lang=javascript
 *
 * [523] 连续的子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  let sum = 0
  const map = new Map([[0, 1]])

  for (const num of nums) {
    sum += num
    if (map.has(sum) % k === 0 && map.get(sum) >= 2) return true

    if (map.has(sum)) {
      map.set(sum, map.get(sum))
    } else {
      map.set(sum, 1)
    }
  }

  return false
}
// @lc code=end
