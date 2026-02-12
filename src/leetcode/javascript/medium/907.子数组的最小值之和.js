/*
 * @lc app=leetcode.cn id=907 lang=javascript
 *
 * [907] 子数组的最小值之和
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  const MOD = 10 ** 9 + 7
  const n = arr.length

  // left[i]: 左边第一个小于 arr[i] 的位置（不存在则为 -1）
  // right[i]: 右边第一个小于等于 arr[i] 的位置（不存在则为 n）
  const left = new Array(n).fill(-1)
  const right = new Array(n).fill(n)

  // 单调递增栈，计算左边第一个小于当前元素的位置
  const stack = []
  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop()
    }
    if (stack.length > 0) {
      left[i] = stack[stack.length - 1]
    }
    stack.push(i)
  }

  // 清空栈，计算右边第一个小于等于当前元素的位置
  stack.length = 0
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
      stack.pop()
    }
    if (stack.length > 0) {
      right[i] = stack[stack.length - 1]
    }
    stack.push(i)
  }

  // 计算每个元素的贡献
  let result = 0
  for (let i = 0; i < n; i++) {
    // 以 arr[i] 为最小值的子数组个数 = (i - left[i]) * (right[i] - i)
    const leftCount = i - left[i]
    const rightCount = right[i] - i
    result = (result + arr[i] * leftCount * rightCount) % MOD
  }

  return result
}
// @lc code=end
