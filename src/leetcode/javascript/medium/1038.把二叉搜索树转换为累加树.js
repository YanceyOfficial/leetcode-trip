/*
 * @lc app=leetcode.cn id=1038 lang=javascript
 *
 * [1038] 把二叉搜索树转换为累加树
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
 * @return {TreeNode}
 */
var bstToGst = function (root) {
  let sum = 0

  var inOrderTraverseNode = function (root) {
    if (root === null) return null
    inOrderTraverseNode(root.right)
    sum += root.val
    root.val = sum
    inOrderTraverseNode(root.left)
  }

  inOrderTraverseNode(root)

  return root
}
// @lc code=end
