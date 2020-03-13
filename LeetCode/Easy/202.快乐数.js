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
var compute = function(n) {
  let num = 0

  while (n >= 1) {
    const remainder = n % 10
    num += remainder * remainder
    n = (n - remainder) / 10
  }

  return num
}

var isHappy = function(n) {
  let fast = n,
    slow = n

  do {
    slow = compute(slow)
    fast = compute(compute(fast))

    if (slow === 1 || fast === 1) return true
  } while (fast !== slow)

  return false
}
// @lc code=end

// var isHappy = function(n) {
//   let curNum = n
//   const set = new Set()
//   set.add(curNum)

//   while (curNum !== 1) {
//     curNum = compute(curNum)

//     if (set.has(curNum)) {
//       return false
//     }

//     set.add(curNum)
//   }

//   return true
// }

