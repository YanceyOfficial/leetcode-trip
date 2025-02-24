/*
 * @lc app=leetcode.cn id=783 lang=javascript
 *
 * [783] 二叉搜索树节点最小距离
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
var minDiffInBST = function (root) {
  let min = Number.MAX_SAFE_INTEGER
  let preVal = null

  var inorder = function (node) {
    if (!node) return

    inorder(node.left)
    if (preVal !== null) {
      min = Math.min(min, Math.abs(preVal - node.val))
    }
    preVal = node.val
    inorder(node.right)
  }

  inorder(root)

  return min
}
// @lc code=end
