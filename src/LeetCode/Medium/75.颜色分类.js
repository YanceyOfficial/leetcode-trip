/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let bucket = new Array(2 + 1)
  let sortedIndex = 0
  let length = nums.length
  let bucketLen = 2 + 1

  for (let i = 0; i < length; i++) {
    if (!bucket[nums[i]]) {
      bucket[nums[i]] = 0
    }
    bucket[nums[i]]++
  }

  for (let j = 0; j < bucketLen; j++) {
    while (bucket[j] > 0) {
      nums[sortedIndex++] = j
      bucket[j]--
    }
  }
}
// @lc code=end
