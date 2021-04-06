---
id: 103-zigzag-level-order
title: 二叉树的锯齿形层序遍历
sidebar_label: 103. 二叉树的锯齿形层序遍历
---

## 题目

给定一个二叉树, 返回其节点值的锯齿形层次遍历. (即先从左往右, 再从右往左进行下一层遍历, 以此类推, 层与层之间交替进行).

:::info 示例

输入:

```ts
     3
   /   \
  5     1
 / \    / \
6   2   0  8
   / \
  7   4
```

输出: `[ [ 3 ], [ 1, 5 ], [ 6, 2, 0, 8 ], [ 4, 7 ] ]`
:::

## 题解

本质上还是层序遍历, 只不过要增加一个 level 变量来计算**层数索引**, 当 level 为偶数时, push 到一个数组中; 当 level 为奇数时, shift 到一个临时数组中.

```ts
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

    // 避免按引用传值, 做个浅拷贝
    res.push(deque.slice())
    // 这一层用完之后, 将 deque 置为空
    deque.length = 0
  }

  return res
}
```
