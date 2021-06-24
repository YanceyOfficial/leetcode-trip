/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let candidate = null,
    count = 0

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i]
      count += 1
    } else {
      count += candidate === nums[i] ? 1 : -1
    }
  }

  return candidate
}

// @lc code=end

var majorityElement = function (nums) {
  if (nums.length === 1) return nums[0]

  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)

      if (map.get(nums[i]) >= nums.length / 2) {
        return nums[i]
      }
    } else {
      map.set(nums[i], 1)
    }
  }
}

// 思路
//
// 第一种: 摩尔投票算法(Boyer-Moore Voting Algorithm)
// 它的思路是先将第一个数设为候选
// 在遍历中, 如果当前元素等于候选元素, 就将 count 加一, 否则减一
// 如果 count 为 0 了, 就把当前元素设为候选
// 遍历完成后, 候选元素就是多数元素
// 时间复杂度 O(n), 空间复杂度 O(1)

// 第二种: 哈希表
// 遍历数组, 将 (元素, 该元素的个数) 放到哈希表中
// 如果一个元素的 value 大于等于 nums.length / 2
// 那么它就是多数元素
// 时间复杂度和空间复杂度都是 O(n)
