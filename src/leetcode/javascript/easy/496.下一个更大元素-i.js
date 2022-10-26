/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const map = new Map()
  const stack = []

  for (const letter of nums2) {
    while (stack.length > 0 && stack[stack.length - 1] < letter) {
      map.set(stack.pop(), letter)
    }

    stack.push(letter)
  }

  const n = nums1.length
  const res = new Array(n).fill(-1)

  for (let i = 0; i < n; i++) {
    if (map.has(nums1[i])) {
      res[i] = map.get(nums1[i])
    }
  }

  return res
}
// @lc code=end

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))
