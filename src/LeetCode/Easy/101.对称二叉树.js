/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
//  * @return {boolean}
 */
var isMirror = function (p, q) {
  if (p === null && q === null) return true

  if (p === null || q === null) return false

  return (
    p.val === q.val && isMirror(p.left, q.right) && isMirror(p.right, q.left)
  )
}

var isSymmetric = function (root) {
  return isMirror(root, root)
}
// @lc code=end
