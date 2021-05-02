/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const n = nums.length

  for (let i = 0; i < n; i++) {
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      // 满足在指定范围内, 并且没有放在正确的位置上, 才交换
      // 例如: 数值 3 应该放在索引 2 的位置上
      ;[nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]]
    }
  }

  // [1, -1, 3, 4]
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1
    }
  }
  // 都正确则返回数组长度 + 1
  return n + 1
}
// @lc code=end
console.log(firstMissingPositive([3, 4, -1, 1]))
