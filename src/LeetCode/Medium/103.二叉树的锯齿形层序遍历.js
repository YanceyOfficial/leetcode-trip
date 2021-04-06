/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  const res = []
  const deque = []
  let level = 0
  if (root === null) return res
  const queue = [root]

  while (queue.length !== 0) {
    const len = queue.length

    for (let i = 0; i < len; i++) {
      const curr = queue.shift()

      if (level % 2 === 0) {
        deque.push(curr.val)
      } else {
        deque.unshift(curr.val)
      }

      if (curr.left) queue.push(curr.left)
      if (curr.right) queue.push(curr.right)
    }

    level++
    res.push(deque.slice())
    deque.length = 0
  }

  return res
}
// @lc code=end
