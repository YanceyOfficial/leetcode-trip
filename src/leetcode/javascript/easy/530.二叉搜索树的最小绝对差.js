/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
var getMinimumDifference = function (root) {
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
