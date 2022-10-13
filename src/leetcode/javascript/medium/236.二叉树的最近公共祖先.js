/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null
  if (root === p || root === q) return root

  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)

  // 情况 1
  if (left !== null && right !== null) return root

  // 情况 2
  if (left === null && right === null) return null

  // 情况 3
  return left === null ? right : left
}
// @lc code=end

function TreeNode(val, left, right) {
  this.val = val
  this.left = left
  this.right = right
}

const tree = new TreeNode(
  3,
  new TreeNode(
    5,
    new TreeNode(6, null, null),
    new TreeNode(2, new TreeNode(7, null, null), new TreeNode(4, null, null)),
  ),
  new TreeNode(1, new TreeNode(0, null, null), new TreeNode(8, null, null)),
)

console.log(lowestCommonAncestor(tree, tree.left.right.left, tree.right.left))
