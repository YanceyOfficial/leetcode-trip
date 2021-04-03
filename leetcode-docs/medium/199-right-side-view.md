---
id: 199-right-side-view
title: 二叉树的右视图
sidebar_label: 199. 二叉树的右视图
keywords:
  - Tree
---

:::success Tips
题目类型: Tree
:::

## 题目

给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

:::info 示例

输入: [1,2,3,null,5,null,4]

输出: [1, 3, 4]

解释:

```ts
   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
```

:::

## 题解

其实就是层序遍历, 然后把右边一坨返回出来即可.

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
var rightSideView = function (root) {
  const res = []
  if (!root) return []
  const queue = [root]

  while (queue.length !== 0) {
    const len = queue.length

    for (let i = 0; i < len; i++) {
      const curr = queue.shift()
      if (i === len - 1) {
        res.push(curr.val)
      }

      if (curr.left) queue.push(curr.left)
      if (curr.right) queue.push(curr.right)
    }
  }

  return res
}
```
