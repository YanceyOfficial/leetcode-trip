/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const n = nums.length
  nums.sort((a, b) => a - b)
  const results = []

  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) continue
    for (let j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && nums[j - 1] === nums[j]) continue

      let left = j + 1
      let right = n - 1

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right]

        if (sum === target) {
          results.push([nums[i], nums[j], nums[left], nums[right]])
          while (left < right && nums[left] === nums[left + 1]) left++
          while (left < right && nums[right] === nums[right - 1]) right--

          left++
          right--
        } else if (sum < target) {
          left++
        } else {
          right--
        }
      }
    }
  }

  return results
}
// @lc code=end
