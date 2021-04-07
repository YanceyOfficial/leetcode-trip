/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (root === null) return true

  const leftHeight = getHeight(root.left)
  const rightHeight = getHeight(root.right)
  return (
    Math.abs(leftHeight - rightHeight) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  )
}

var getHeight = function (root) {
  if (root === null) return 0
  return Math.max(getHeight(root.left), getHeight(root.right)) + 1
}
// @lc code=end
