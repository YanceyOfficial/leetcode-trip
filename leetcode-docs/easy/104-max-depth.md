---
id: 104-max-depth
title: 二叉树的最大深度
sidebar_label: 104. 二叉树的最大深度
---

## 题目

给定一个二叉树, 找出其最大深度.

:::info 示例

```ts
  3
 / \
9 20
  / \
 15  7
```

输入: root = [3, 9, 20, null, null, 15, 7]

输出: 3
:::

## 题解

和 [111. 二叉树的最小深度](/leetcode/easy/111-min-depth) 类似, 具体可以看这个题.

### 深度优先遍历

时间复杂度: O(n)

空间复杂度: O(height)

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
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}
```

### 广度优先遍历

时间复杂度: O(n)

空间复杂度: O(n)

```ts
var maxDepth = function (root) {
  if (root === null) return 0

  const queue = []
  queue.push(root)
  let depth = 0

  while (queue.length !== 0) {
    const len = queue.length

    for (let i = 0; i < len; i++) {
      const curr = queue.shift()

      if (curr.left !== null) {
        queue.push(curr.left)
      }

      if (curr.right !== null) {
        queue.push(curr.right)
      }
    }

    depth++
  }
  return depth
}
```
