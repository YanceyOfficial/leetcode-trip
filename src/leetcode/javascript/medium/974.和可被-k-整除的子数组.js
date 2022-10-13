/*
 * @lc app=leetcode.cn id=974 lang=javascript
 *
 * [974] 和可被 K 整除的子数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */

var subarraysDivByK = function (A, K) {
  const len = A.length
  const map = new Map([[0, 1]])
  let preSum = 0
  let count = 0

  for (let i = 0; i < len; i++) {
    preSum += A[i]
    const key = ((preSum % K) + K) % K
    if (map.has(key)) {
      count += map.get(key)
    }

    if (map.has(key)) {
      map.set(key, map.get(key) + 1)
    } else {
      map.set(key, 1)
    }
  }

  return count
}
// @lc code=end
console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5))
