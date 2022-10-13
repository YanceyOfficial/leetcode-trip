/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null

  const rootVal = preorder[0]

  const inorderDivider = inorder.indexOf(rootVal)
  const inorderLefts = inorder.slice(0, inorderDivider)
  const inorderRights = inorder.slice(inorderDivider + 1)

  const preorderDivider = inorderLefts.length + 1
  const preorderLefts = preorder.slice(1, preorderDivider)
  const preorderRights = preorder.slice(preorderDivider)

  const root = new TreeNode(rootVal)

  root.left = buildTree(preorderLefts, inorderLefts)
  root.right = buildTree(preorderRights, inorderRights)

  return root
}
// @lc code=end
