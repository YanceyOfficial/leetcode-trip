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
var isMirror = function(p, q) {
  if (p === null && q === null) return true

  if (p === null || q === null) return false

  return (
    p.val === q.val && isMirror(p.left, q.right) && isMirror(p.right, q.left)
  )
}

var isSymmetric = function(root) {
  return isMirror(root, root)
}
// @lc code=end

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

const tree = new TreeNode(1)
tree.left = new TreeNode(2)
tree.right = new TreeNode(2)
// tree.left.left = new TreeNode(3)
tree.left.right = new TreeNode(3)
tree.right.right = new TreeNode(3)

console.log(isSymmetric(tree))
