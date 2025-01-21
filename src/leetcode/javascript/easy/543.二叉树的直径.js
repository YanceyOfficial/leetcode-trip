/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0

  // 相当于第 104 题
  var maxDepth = function (node) {
    if (!node) return 0

    const leftDepth = maxDepth(node.left)
    const rightDepth = maxDepth(node.right)

    maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth) // 在计算深度的同时更新直径

    return Math.max(leftDepth, rightDepth) + 1
  }

  maxDepth(root)
  return maxDiameter
}
// @lc code=end
