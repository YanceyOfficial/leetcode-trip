/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root !== null) {
    const queue = [root]

    while (queue.length !== 0) {
      const len = queue.length

      // 遍历这一层的所有节点
      for (let i = 0; i < len; i++) {
        const curr = queue.shift()

        // 连接
        if (i < len - 1) {
          curr.next = queue[0]
        }

        // 拓展下一层节点
        if (curr.left !== null) {
          queue.push(curr.left)
        }
        if (curr.right !== null) {
          queue.push(curr.right)
        }
      }
    }
  }

  return root
}
// @lc code=end
