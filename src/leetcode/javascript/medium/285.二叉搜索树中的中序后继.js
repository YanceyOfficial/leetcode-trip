/*
 * @lc app=leetcode.cn id=285 lang=javascript
 *
 * [285] 二叉搜索树中的中序后继
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function (root, p) {
  const res = []
  inorder(root, res)

  const idx = res.findIndex((node) => node === p)
  return res[idx + 1] || null
}

var inorder = function (root, res) {
  if (!root) return null

  inorder(root.left, res)
  res.push(root)
  inorder(root.right, res)
}
// @lc code=end
