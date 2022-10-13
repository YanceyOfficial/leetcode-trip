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
  const len1 = nums1.length
  const len2 = nums2.length

  const stack = []
  const map = new Map()

  for (let i = 0; i < len2; i++) {
    while (stack.length !== 0 && stack[stack.length - 1] < nums2[i]) {
      map.set(stack.pop(), nums2[i])
    }

    stack.push(nums2[i])
  }

  console.log(map)
  console.log(stack)

  const res = new Array(len1)

  for (let j = 0; j < len1; j++) {
    res[j] = map.get(nums1[j]) ? map.get(nums1[j]) : -1
  }

  return res
}
// @lc code=end

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))
