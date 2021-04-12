/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  const len = nums.length
  nums.sort((a, b) => a - b)

  let ans = nums[0] + nums[1] + nums[2]

  for (let i = 0; i < len; i += 1) {
    let start = i + 1,
      end = len - 1

    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end]

      if (Math.abs(target - sum) < Math.abs(target - ans)) {
        ans = sum
      }

      if (sum > target) {
        end--
      } else if (sum < target) {
        start++
      } else {
        return ans
      }
    }
  }
  return ans
}
// @lc code=end

// 思路: 先给数组进行排序, 然后定住一个值, 另外两个值用双指针游走, 时间复杂度 O(n²)
