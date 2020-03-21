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
    const carry = n % 10
    num += carry * carry
    n = (n - carry) / 10
  }

  return num
}

var isHappy = function(n) {
  let fast = n,
    slow = n

  do {
    slow = compute(slow)
    fast = compute(compute(fast))
  } while (fast !== slow)

  return slow === 1
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
