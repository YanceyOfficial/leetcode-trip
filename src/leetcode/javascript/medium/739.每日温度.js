/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  const len = T.length
  const stack = []
  const res = new Array(len).fill(0)

  for (let i = 0; i < len; i++) {
    while (stack.length !== 0 && T[stack[stack.length - 1]] < T[i]) {
      let prevIndex = stack.pop()
      res[prevIndex] = i - prevIndex
    }
    stack.push(i)
  }

  return res
}
// @lc code=end
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
