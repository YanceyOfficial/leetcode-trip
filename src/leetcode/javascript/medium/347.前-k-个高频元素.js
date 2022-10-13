/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map()

  for (const num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1)
    } else {
      map.set(num, 1)
    }
  }

  const buckets = new Array(nums.length + 1).fill(0)
  map.forEach((val, key) => {
    if (buckets[val] !== 0) {
      buckets[val] = [...buckets[val], key]
    } else {
      buckets[val] = [key]
    }
  })

  const res = []
  for (let i = buckets.length - 1; i > 0; i--) {
    if (Array.isArray(buckets[i]) && res.length < k) {
      res.push(...buckets[i])
    }
  }

  return res
}
// @lc code=end

console.log(topKFrequent([1, 2], 2))
