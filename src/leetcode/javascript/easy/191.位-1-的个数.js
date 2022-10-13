/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// n & (n - 1) 用于消除数字 n 的二进制表示中的最后一个 1
var hammingWeight = function (n) {
  let res = 0

  while (n !== 0) {
    n = n & (n - 1)
    res++
  }

  return res
}

//除 K 取余法
var hammingWeight = function (n) {
  let ans = 0
  while (n) {
    ans += n % 2
    n >>= 1
  }
  return ans
}

// 直接判断二进制最低为的数是不是 1
var hammingWeight = function (n) {
  let ans = 0
  while (n) {
    ans += n & 1
    n >>= 1
  }
  return ans
}
// @lc code=end
