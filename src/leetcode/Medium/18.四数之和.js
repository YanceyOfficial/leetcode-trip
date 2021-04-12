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
var fourSum = function(nums, target) {
  if (nums.length < 4) {
    return []
  }
  nums.sort((a, b) => a - b)
  const res = []
  for (let i = 0; i < nums.length - 3; i++) {
    // 若与已遍历过的数字相同, 避免结果中出现重复的数组
    if (i > 0 && nums[i] === nums[i - 1]) continue
    // 若当前循环的前四位数字已大于 target
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break
    for (let j = i + 1; j < nums.length - 2; j++) {
      // 若与已遍历过的数字相同, 避免结果中出现重复的数组
      if (j > i + 1 && nums[j] === nums[j - 1]) continue
      
      let left = j + 1,
        right = nums.length - 1
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right]
        if (sum === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]])
        }
        if (sum <= target) {
          while (nums[left] === nums[++left]);
        } else {
          while (nums[right] === nums[--right]);
        }
      }
    }
  }
  return res
}
// @lc code=end

console.log(fourSum([-3, -1, 0, 2, 4, 5], 0))
