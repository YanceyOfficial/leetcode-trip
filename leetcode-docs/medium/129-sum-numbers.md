---
id: 129-sum-numbers
title: 求根节点到叶节点数字之和
sidebar_label: 129. 求根节点到叶节点数字之和
---

## 题目

给你一个二叉树的根节点 root, 树中每个节点的 val 都是 0 到 9 之间的数字, 计算从根节点到叶节点生成的所有数字之和.

:::info 示例

输入:

```ts
    4
  /  \
  9  0
 / \
5   1
```

输出: 1026

解释: 从跟节点到叶子节点有三条链路, 分别是 495, 491 和 40, 因此它们的和为 1026
:::

## 题解

要先把根节点的值当作 dfs 函数的第二个参数. 如果左右节点都为 null, 即到了叶子节点, 返回 sum 即可; 否则向左向右扩展, 以 4 9 5 这条链路为例, 每一次递归, 就变成了当前的 **sum \* 10 + 当前节点的值**.

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
 * @return {number}
 */
var sumNumbers = function (root) {
  if (root === null) return 0

  // root.val 要作为初始值
  return dfs(root, root.val)
}

var dfs = function (root, sum) {
  // 到了叶子节点返回
  if (root.left === null && root.right === null) return sum

  return (
    // 如果存在左边, 通过 sum * 10 + root.left.val 来生成新的 sum
    (root.left !== null ? dfs(root.left, sum * 10 + root.left.val) : 0) +
    // 如果存在右边, 通过 sum * 10 + root.right.val 来生成新的 sum
    (root.right !== null ? dfs(root.right, sum * 10 + root.right.val) : 0)
  )
}
```
