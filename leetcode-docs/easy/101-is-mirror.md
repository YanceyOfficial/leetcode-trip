---
id: 101-is-mirror
title: 对称二叉树
sidebar_label: 101. 对称二叉树
keywords:
  - Tree
---

:::success Tips
题目类型: Tree

相关题目:

- [100. 相同的树](/leetcode/easy/100-is-same-tree)

:::

## 题目

给定一个二叉树, 检查它是否是镜像对称的.

:::info 示例

```ts
    1
   / \
  2   2
 / \ / \
3  4 4  3
```

:::

## 题解

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
//  * @return {boolean}
 */
var isMirror = function (p, q) {
  if (p === null && q === null) return true
  if (p === null || q === null) return false

  return (
    p.val === q.val && isMirror(p.left, q.right) && isMirror(p.right, q.left)
  )
}

var isSymmetric = function (root) {
  return isMirror(root, root)
}
```
