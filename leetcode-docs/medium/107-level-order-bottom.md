---
id: 107-level-order-bottom
title: 二叉树的层次遍历-ii
sidebar_label: 107. 二叉树的层次遍历-ii
keywords:
  - Tree
---

:::success Tips
题目类型: Tree
:::

## 题目

自底而上层序遍历一个二叉树.

:::info 示例

```ts
  3
 / \
9 20
  / \
 15  7
```

输入: `root = [3, 9, 20, null, null, 15, 7]`

输出: `[[15, 7], [9, 20], [3]]`
:::

## 题解

本质上还是从下往下一层一层的层序遍历, 但放入结果集的方式要从 `push` 变成 `unshift`.

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
var levelOrderBottom = function (root) {
  const levels = []
  if (!root) return levels

  const queue = [root]

  while (queue.length !== 0) {
    const currLevelLength = queue.length
    const temp = []

    for (let i = 0; i < currLevelLength; i++) {
      const node = queue.shift()
      temp.push(node.val)

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    // 重点
    levels.unshift(temp)
  }

  return levels
}
```
