/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function (root) {
  if (root === null) return []

  const stack1 = [root]
  const stack2 = []
  const res = []

  while (stack1.length !== 0) {
    root = stack1.pop()

    stack2.push(root)

    if (root.left !== null) {
      stack1.push(root.left)
    }

    if (root.right !== null) {
      stack1.push(root.right)
    }
  }

  while (stack2.length !== 0) {
    const pop = stack2.pop()
    res.push(pop.val)
  }

  return res
}
// @lc code=end
