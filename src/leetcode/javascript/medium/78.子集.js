/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const len = nums.length
  const res = []

  const backtracking = (index, track) => {
    res.push(track.slice()) // 调用子递归前, 加入解集

    for (let i = index; i < len; i++) {
      // 枚举出所有可选的数
      track.push(nums[i]) // 选这个数
      backtracking(i + 1, track) // 基于选这个数,继续递归,传入的是i+1
      track.pop() // 撤销选这个数
    }
  }

  backtracking(0, [])

  return res
}
// @lc code=end
