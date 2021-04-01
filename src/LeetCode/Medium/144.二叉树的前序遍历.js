/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */

var preorderTraversal = function (root) {
  if (root === null) return []

  const stack = [root]
  const res = []

  while (stack.length !== 0) {
    const curr = stack.pop()

    res.push(curr.val)
    if (curr.right !== null) stack.push(curr.right)
    if (curr.left !== null) stack.push(curr.left)
  }

  return res
}
// @lc code=end
