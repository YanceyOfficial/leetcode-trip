---
id: 102-level-order
title: 二叉树的层次遍历
sidebar_label: 102. 二叉树的层次遍历
---

## 题目

编写二叉树的层次遍历算法, 返回每层的值.

:::info 示例

```ts
  3
 / \
9 20
  / \
 15  7
```

输入: `root = [3, 9, 20, null, null, 15, 7]`

输出: `[[3], [9, 20], [15, 7]]`
:::

## 题解

广度优先遍历(层次遍历)的核心思想是**队列**, 具体思想可以看 [深度/广度优先遍历](/algorithm-design/dfs-bfs).

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
var levelOrder = function (root) {
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

    levels.push(temp)
  }

  return levels
}
```
