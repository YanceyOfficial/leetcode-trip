/*
 * @lc app=leetcode.cn id=1248 lang=javascript
 *
 * [1248] 统计「优美子数组」
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  let oddNum = 0
  let count = 0
  const map = new Map([[0, 1]])

  for (const num of nums) {
    oddNum += num & 1

    if (map.has(oddNum - k)) {
      count += map.get(oddNum - k)
    }

    if (map.has(oddNum)) {
      map.set(oddNum, map.get(oddNum) + 1)
    } else {
      map.set(oddNum, 1)
    }
  }

  return count
}
// @lc code=end
