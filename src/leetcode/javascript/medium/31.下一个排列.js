/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const n = nums.length

  let i = n - 2
  while (i >= 0 && nums[i + 1] <= nums[i]) {
    i--
  }

  if (i >= 0) {
    let j = n - 1
    while (j >= 0 && nums[j] <= nums[i]) {
      j--
    }

    swap(nums, i, j)
  }

  reverse(nums, i + 1)
}
// @lc code=end

/**
 * @param {number[]} nums
 * @param {number} i
 * @param {number} j
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var swap = function (nums, i, j) {
  const temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}

/**
 * @param {number[]} nums
 * @param {number} start
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var reverse = function (nums, start) {
  let i = start,
    j = nums.length - 1
  while (i < j) {
    swap(nums, i, j)
    i++
    j--
  }
}