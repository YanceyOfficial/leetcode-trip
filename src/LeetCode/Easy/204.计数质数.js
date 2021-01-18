/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let count = 0,
    signs = new Array(n + 1)

  for (let i = 2; i < n; i++) {
    if (!signs[i]) {
      count++
      for (let j = 2 * i; j < n; j += i) {
        signs[j] = true
      }
    }
  }

  return count
}

// @lc code=end

var countPrimes = function(n) {
  let count = ''

  for (let i = 2; i < n; i++) {
    if (isPrime(i)) count++
  }

  return count
}

function isPrime(n) {
  for (let i = 2; i * i <= n; i++) if (n % i === 0) return false
  return true
}
