---
id: 144-preorder-traversal
title: 二叉树的前序遍历
sidebar_label: 144. 二叉树的前序遍历
keywords:
  - Tree
---

:::success Tips
题目类型: Tree
:::

## 题目

手写二叉树的先序遍历.

:::info 示例

输入: TreeNode 实例

输出: 每个 TreeNode 节点的 val 组成的数组
:::

## 题解

这没啥可说的了, 基本功.

### 迭代版

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
```

### 递归版

```ts
var preorderTraversal = function (root, arr = []) {
  if (root) {
    arr.push(root.val)
    preorderTraversal(root.left, arr)
    preorderTraversal(root.right, arr)
  }

  return arr
}
```
