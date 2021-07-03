/*
 * @lc app=leetcode.cn id=260 lang=javascript
 *
 * [260] 只出现一次的数字 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let AXORB = 0
  for (let num of nums) {
    AXORB ^= num
  }

  let bitFlag = AXORB & ~(AXORB - 1)
  const res = []

  for (let num of nums) {
    if ((num & bitFlag) == 0) {
      res[0] ^= num
    } else {
      res[1] ^= num
    }
  }
  return res
}
console.log(singleNumber([1, 2, 1, 3, 2, 5]))
// @lc code=end
// var singleNumber = function (nums) {
//   const set = new Set()

//   for (let i = 0; i < nums.length; i++) {
//     if (set.has(nums[i])) {
//       set.delete(nums[i])
//     } else {
//       set.add(nums[i])
//     }
//   }

//   return [...set]
// }
