---
id: 100-is-same-tree
title: 相同的树
sidebar_label: 100. 相同的树
keywords:
  - Tree
---

:::success Tips
题目类型: Tree
:::

## 题目

:::info 示例

```ts
// 如下的树就是不相等的, 虽然结构相同, 但值不同
   1      1
  / \    / \
 2   3  3   2

// 如下的树就是不相等的, 因为结构已然不同
   1      1
  / \    / \
 2   3  2   2
             \
              3
```

:::

## 题解

使用递归, 找出终止条件:

- 如果 p 和 q 同时到达一棵子树的叶子结点, 说明相同
- 如果 p 和 q 有一棵到达了子树的叶子结点, 另一棵没到, 说明一定不相同(结构不同)
- 如果 p 和 q 的 val 不同, 说明一定不相同(结构相同, 但对应的值不同)

```ts
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === null && q === null) return true
  if (p === null || q === null) return false

  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  )
}
```
