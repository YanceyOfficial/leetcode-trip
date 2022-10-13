/*
 * @lc app=leetcode.cn id=372 lang=javascript
 *
 * [372] 超级次方
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */

const BASE = 1337

var superPow = function (a, b) {
  if (b.length <= 0) return 1

  const last = b.pop()
  const left = customPow(a, last)
  const right = customPow(superPow(a, b), 10)

  // 每次乘法都要求模
  return (left * right) % BASE
}

// 计算 a 的 k 次方然后与 BASE 求模的结果
var customPow = function (a, k) {
  if (k === 0) return 1
  a %= BASE

  if (k % 2 === 1) {
    // k 是奇数
    return (a * customPow(a, k - 1)) % BASE
  } else {
    // k 是偶数
    let sub = customPow(a, k / 2)
    return (sub * sub) % BASE
  }
}
// @lc code=end
