/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const len = nums.length
  const stack = []
  const res = new Array(len).fill(-1)

  for (let i = 0; i < len * 2 - 1; i++) {
    while (
      stack.length !== 0 &&
      nums[stack[stack.length - 1]] < nums[i % len]
    ) {
      res[stack[stack.length - 1]] = nums[i % len]
      stack.pop()
    }

    stack.push(i % len)
  }

  return res
}
// @lc code=end
console.log(nextGreaterElements([2, 1, 2, 4, 3]))
