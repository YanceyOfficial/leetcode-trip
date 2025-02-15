/*
 * @lc app=leetcode.cn id=220 lang=javascript
 *
 * [220] 存在重复元素 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, indexDiff, valueDiff) {
  const bucketMap = new Map()
  const size = valueDiff + 1

  var getId = function (num) {
    return Math.floor(num / size)
  }

  for (let i = 0; i < nums.length; i++) {
    const id = getId(nums[i])

    // 检查当前桶
    if (bucketMap.has(id)) {
      return true
    }

    // 检查左边相邻的桶
    if (
      bucketMap.has(id - 1) &&
      Math.abs(nums[i] - bucketMap.get(id - 1)) <= valueDiff
    ) {
      return true
    }

    // 检查右边相邻的桶
    if (
      bucketMap.has(id + 1) &&
      Math.abs(nums[i] - bucketMap.get(id + 1)) <= valueDiff
    ) {
      return true
    }

    // 更新哈希表
    bucketMap.set(id, nums[i])

    // 移除超出窗口范围的桶
    if (i >= indexDiff) {
      bucketMap.delete(getId(nums[i - indexDiff]))
    }
  }

  return false
}
// @lc code=end
