/*
 * @lc app=leetcode.cn id=1287 lang=javascript
 *
 * [1287] 有序数组中出现次数超过25%的元素
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
  const k = (arr.length / 4) | 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + k]) return arr[i]
  }
  return 0
}
// @lc code=end
findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10])
