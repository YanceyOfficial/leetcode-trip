/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
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

// function TreeNode(val, left, right, next) {
//   this.val = val === undefined ? null : val
//   this.left = left === undefined ? null : left
//   this.right = right === undefined ? null : right
//   this.next = next === undefined ? null : next
// }

// const tree = new TreeNode(
//   1,
//   new TreeNode(
//     2,
//     new TreeNode(4, null, null, null),
//     new TreeNode(5, null, null, null),
//     null,
//   ),
//   new TreeNode(
//     3,
//     new TreeNode(6, null, null, null),
//     new TreeNode(7, null, null, null),
//     null,
//   ),
//   null,
// )

// connect(tree)
