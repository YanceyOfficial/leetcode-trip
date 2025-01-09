/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  if (stones.length === 1) return stones[0]
  stones.sort((a, b) => b - a)

  while (stones[1] > 0) {
    if (stones[0] === stones[1]) {
      stones[0] = 0
      stones[1] = 0
    } else {
      stones[0] = stones[0] - stones[1]
      stones[1] = 0
    }

    stones.sort((a, b) => b - a)
  }

  return stones[0]
}
// @lc code=end
