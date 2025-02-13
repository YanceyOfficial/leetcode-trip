/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy = function (n) {
  let fast = n,
    slow = n

  do {
    slow = compute(slow)
    fast = compute(compute(fast))
  } while (fast !== slow)

  return slow === 1
}

/**
 * @param {number} n
 * @return {number}
 */
var helper = function (n) {
  let squareSum = 0

  while (n) {
    squareSum += Math.pow(n % 10, 2)
    n = Math.floor(n / 10)
  }

  return squareSum
}
// @lc code=end
