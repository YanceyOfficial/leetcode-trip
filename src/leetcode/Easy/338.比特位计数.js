/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const bits = new Array(n + 1).fill(0)

  for (let i = 1; i <= n; i++) {
    bits[i] = bits[i >> 1] + (i & 1)
  }

  return bits
}
// @lc code=end

/**
 * @param {number} n
 * @return {number[]}
 */

var countBits = function (n) {
  const bits = new Array(n).fill(0)

  for (let i = 0; i <= n; i += 1) {
    bits[i] = computeZero(i)
  }

  return bits
}

var computeZero = function (n) {
  let count = 0

  // 通过  n & (n - 1) 将 n 逐步抹零, 次数就是 1 的个数
  while (n > 0) {
    n = n & (n - 1)
    count += 1
  }

  return count
}
