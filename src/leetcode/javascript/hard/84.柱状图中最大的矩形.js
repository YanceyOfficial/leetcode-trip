/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  const n = heights.length
  const left = new Array(n).fill(-1)
  const right = new Array(n).fill(n)
  const stack = []

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
      right[stack.pop()] = i
    }

    stack.push(i)
  }

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
      left[stack.pop()] = i
    }

    stack.push(i)
  }

  let max = 0
  for (let i = 0; i < n; i++) {
    const height = heights[i]
    const leftIdx = left[i]
    const rightIdx = right[i]

    max = Math.max(max, height * (rightIdx - leftIdx - 1))
  }

  return max
}
// @lc code=end
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))
console.log(largestRectangleArea([2, 4]))
