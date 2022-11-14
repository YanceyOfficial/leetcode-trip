/*
 * @lc app=leetcode.cn id=421 lang=javascript
 *
 * [421] 数组中两个数的最大异或值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums) {
  let res = 0
  let mask = 0

  for (let i = 30; i >= 0; i--) {
    mask |= 1 << i

    const set = new Set()
    for (const num of nums) {
      set.add(num & mask)
    }

    const temp = res | (1 << i)
    for (const prefix of set) {
      if (set.has(prefix ^ temp)) {
        res = temp
        break
      }
    }
  }

  return res
}
// @lc code=end
console.log(findMaximumXOR([3, 10, 5, 25, 2, 8]))
