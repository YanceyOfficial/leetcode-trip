/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let left = 0,
    right = k

  const res = []

  while (right <= nums.length) {
    const sub = nums.slice(left, right)
    const max = Math.max(...sub)
    res.push(max)
    left++
    right++
  }

  return res
}
// @lc code=end
