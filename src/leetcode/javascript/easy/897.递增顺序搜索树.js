/*
 * @lc app=leetcode.cn id=897 lang=javascript
 *
 * [897] 递增顺序搜索树
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
var increasingBST = function (root) {
  const dummy = new TreeNode(-1)
  let curr = dummy

  var inorder = function (root) {
    if (!root) return

    inorder(root.left)

    root.left = null
    curr.right = root
    curr = root

    inorder(root.right)
  }

  inorder(root)

  return dummy.right
}
// @lc code=end
