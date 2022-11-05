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
  if (!root) return res
  const queue = [root]

  while (queue.length > 0) {
    res.push(queue[0].val)
    
    const n = queue.length
    for (let i = 0; i < n; i++) {
      const node = queue.shift()

      if (node.right) queue.push(node.right)
      if (node.left) queue.push(node.left)
    }
  }

  return res
}
// @lc code=end
