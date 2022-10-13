/*
 * @lc app=leetcode.cn id=525 lang=javascript
 *
 * [525] 连续数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  const n = nums.length
  const preSum = new Array(n + 1).fill(0)
  const map = new Map([[0, 0]])
  let max = 0

  for (let i = 0; i < n; i++) {
    preSum[i + 1] = preSum[i] + (nums[i] === 0 ? -1 : 1)
  }

  for (let i = 1; i <= n; i++) {
    const sum = preSum[i]
    if (map.has(sum)) {
      max = Math.max(max, i - map.get(sum))
      console.log(max)
    }
    if (!map.has(sum)) {
      map.set(sum, i)
    }
  }

  return max
}
// @lc code=end
console.log(findMaxLength([0, 0, 1, 0, 0, 0, 1, 1]))
