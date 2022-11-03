/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  const m = matrix.length
  if (m === 0) return 0
  const n = matrix[0].length

  const allHeights = []
  for (let i = m - 1; i >= 0; i--) {
    const heights = []

    for (let j = 0; j < n; j++) {
      let maxHeight = 0

      for (let k = i; k >= 0; k--) {
        if (matrix[k][j] === '1') {
          maxHeight++
        } else {
          break
        }
      }

      heights.push(maxHeight)
    }

    allHeights.push(heights)
  }

  let max = 0
  for (const heights of allHeights) {
    max = Math.max(max, largestRectangleArea(heights))
  }

  return max
}

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  const n = heights.length

  // 从右往左, 找到比当前元素小的左边界
  // 需要理解为什么默认值为 -1, 比如一个元素左边所有元素都比它大,
  // 这就导致从当前高度往左, 一定是可以拉满当前高度的, 那么左边界就是 -1
  //
  // PS: 一开始没想明白为什么是 -1, 因为 idx = 0, 也就是第一个元素是包含的, 所以边界值就要是 -1
  const left = new Array(n).fill(-1)

  // 从左往右, 找到比当前元素小的右边界
  // 需要理解为什么默认值为 n, 比如一个元素右边所有元素都比它大,
  // 这就导致从当前高度往右, 一定是可以拉满当前高度的, 那么右边界就是 n
  const right = new Array(n).fill(n)

  const stack = []

  // 标准的单调栈框架, 找到比当前元素小的右边界
  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
      right[stack.pop()] = i
    }

    stack.push(i)
  }

  // 标准的单调栈框架, 找到比当前元素小的左边界
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
      left[stack.pop()] = i
    }

    stack.push(i)
  }

  let max = 0

  // 根据左右边界和当前柱子的高度, 来找到最大值
  for (let i = 0; i < n; i++) {
    const height = heights[i]
    const leftIdx = left[i]
    const rightIdx = right[i]
    max = Math.max(max, (rightIdx - leftIdx - 1) * height)
  }

  return max
}
// @lc code=end
console.log(
  maximalRectangle([
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0'],
  ]),
)
