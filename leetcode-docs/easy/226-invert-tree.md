---
id: 226-invert-tree
title: 翻转二叉树
sidebar_label: 226. 翻转二叉树
---

## 题目

翻转一棵二叉树.

:::info 示例

输入:

```ts
    4
   /   \
  2     7
 / \   / \
1   3 6   9
```

输出:

```ts
    4
   /   \
  7     2
 / \   / \
9   6 3   1
```

:::

## 题解

其实就是前序遍历(当然你用后序遍历也 ok), 先进行左右节点的交换, 然后递归就行了. 只是做了一点微小的工作, 谢谢大家.

```ts
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
var invertTree = function (root) {
  if (!root) return root

  const temp = root.left
  root.left = root.right
  root.right = temp

  invertTree(root.left)
  invertTree(root.right)

  return root
}
```
