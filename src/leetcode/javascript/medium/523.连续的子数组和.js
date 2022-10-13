/*
 * @lc app=leetcode.cn id=523 lang=javascript
 *
 * [523] 连续的子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  const len = nums.length
  let preSum = 0
  const map = new Map([[0, -1]])

  for (let i = 0; i < len; i++) {
    preSum += nums[i]

    // 这里要小心 k 为 0 的情况, 因为 0 不能做除数
    const key = k === 0 ? preSum : preSum % k
    if (map.has(key)) {
      if (i - map.get(key) >= 2) return true

      // 因为我们需要保存最小索引, 当已经存在时则不用再次存入, 不然会更新索引值
      continue
    }

    map.set(key, i)
  }

  return false
}
// @lc code=end

console.log(checkSubarraySum([23, 2, 5, 6], 7))[(0, 23, 25, 30, 36)]
