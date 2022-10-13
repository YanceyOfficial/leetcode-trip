/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map()

  for (let i = 0; i < nums.length; i += 1) {
    const dif = target - nums[i]

    if (map.has(dif)) {
      return [map.get(dif), i]
    }

    map.set(nums[i], i)
  }
}
// @lc code=end

// 思路:
//
// 创建一个哈希表, 遍历数组, 将元素存储到哈希表中
// 如果 target - nums[i] 存在于哈希表中
// 那么就找到了这两个相加等于 target 的元素
// 时间复杂度和空间复杂度都为 O(n)
