/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
var rightSideView = function (root) {
  const res = []
  if (!root) return []
  const queue = [root]

  while (queue.length !== 0) {
    const len = queue.length

    for (let i = 0; i < len; i++) {
      const curr = queue.shift()
      if (i === len - 1) {
        res.push(curr.val)
      }

      if (curr.left) queue.push(curr.left)
      if (curr.right) queue.push(curr.right)
    }
  }

  return res
}
// @lc code=end
