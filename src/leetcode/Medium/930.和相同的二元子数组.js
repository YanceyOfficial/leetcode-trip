/*
 * @lc app=leetcode.cn id=930 lang=javascript
 *
 * [930] 和相同的二元子数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
var numSubarraysWithSum = function (A, S) {
  const map = new Map([[0, 1]])
  let count = 0
  let sum = 0

  for (const num of A) {
    sum += num
    if (map.has(sum - S)) {
      count += map.get(sum - S)
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
