/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const map = new Map([[0, 1]])
  let sum = 0
  let count = 0

  for (const num of nums) {
    sum += num
    if (map.has(sum - k)) {
      count += map.get(sum - k)
    }

    if (map.has(sum)) {
      map.set(sum, map.get(sum) + 1)
    } else {
      map.set(sum, 1)
    }
  }

  return count
}
// @lc code=end

console.log(subarraySum([1, 1, 1], 2))
