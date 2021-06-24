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

var countPrimes = function (n) {
  const isPrime = new Array(n).fill(true)

  let ans = 0
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      ans += 1
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false
      }
    }
  }
  return ans
}

// @lc code=end

var countPrimes = function (n) {
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
