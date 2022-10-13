/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var nSumTarget = function (nums, n, start, target) {
  const len = nums.length
  const res = []

  if (n < 2 || len < n) return res

  if (n === 2) {
    let lo = start,
      hi = len - 1

    while (lo < hi) {
      const sum = nums[lo] + nums[hi]
      const left = nums[lo]
      const right = nums[hi]

      if (sum < target) {
        while (lo < hi && nums[lo] === left) lo++
      } else if (sum > target) {
        while (lo < hi && nums[hi] === right) hi--
      } else {
        res.push([left, right])
        while (lo < hi && nums[lo] === left) lo++
        while (lo < hi && nums[hi] === right) hi--
      }
    }
  } else {
    for (let i = start; i < len; i++) {
      const items = nSumTarget(nums, n - 1, i + 1, target - nums[i])
      for (const item of items) {
        item.push(nums[i])
        res.push(item)
      }

      while (i < len - 1 && nums[i] === nums[i + 1]) i++
    }
  }

  return res
}

var threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  return nSumTarget(nums, 3, 0, 0)
}
// @lc code=end

/* 
首先对数组进行排序, 排序后固定一个数 nums[i], 再使用左右指针指向 nums[i]后面的两端, 
数字分别为 nums[L] 和 nums[R], 计算三个数的和 sum 判断是否满足为 0, 满足则添加进结果集

如果 nums[i]大于 0, 则三数之和必然无法等于 0, 结束循环
如果 nums[i] === nums[i−1], 则说明该数字重复, 会导致结果重复, 所以应该跳过
当 sum === 0 时, nums[L] === nums[L+1] 则会导致结果重复, 应该跳过, L++
当 sum === 0 时, nums[R] === nums[R-1] 则会导致结果重复, 应该跳过, R--
*/
