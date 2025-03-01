/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  if (!root) return []
  const result = []
  const queue = [root]

  while (queue.length > 0) {
    const n = queue.length

    let ans = 0
    let count = 0
    for (let i = 0; i < n; i++) {
      const node = queue.shift()
      ans += node.val
      count++

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    result.push(ans / count)
  }

  return result
}
// @lc code=end
