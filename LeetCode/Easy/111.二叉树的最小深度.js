/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) return 0

  //if (root.left === null && root.right === null) return 1

  return (minDepth(root.left) || minDepth(root.right)) + 1
}
// @lc code=end

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

const tree = new TreeNode(1)
tree.left = new TreeNode(2) 
// tree.right = new TreeNode(20)
tree.left.left = new TreeNode(3)
tree.left.left.left = new TreeNode(4)
// tree.right.left = new TreeNode(15)
// tree.right.right = new TreeNode(7)

console.log(minDepth(tree))
