---
id: 236-lowest-common-ancestor
title: 二叉树的最近公共祖先
sidebar_label: 236. 二叉树的最近公共祖先
keywords:
  - Tree
---

:::success Tips
题目类型: Tree
:::

## 题目

给定一个二叉树, 找到该树中两个指定节点的最近公共祖先.

最近公共祖先的定义为: "对于有根树 T 的两个节点 p 和 q, 最近公共祖先表示为一个节点 x, 满足 x 是 p 和 q 的祖先且 x 的深度尽可能大(一个节点也可以是它自己的祖先)

:::info 示例

```ts
     3
   /   \
  5     1
 / \    / \
6   2   0  8
   / \
  7   4
```

```ts
输入: p = 5, q = 1
输出: 3
解释: 节点 5 和节点 1 的最近公共祖先是节点 3
```

```ts
输入: p = 5, q = 4
输出: 4
解释: 节点 5 和节点 4 的最近公共祖先是节点 5, 因为根据定义最近公共祖先节点可以为节点本身
```

:::

## 题解

### 递归函数的定义

本题为 LCA(最近公共祖先) 的经典算法, git 里的 `merge` 其实就是利用了该算法.

1. 如果 p 和 q 都在以 root 为根的树中, 函数返回的便是 p 和 q 的最近公共祖先节点, 比如 6 和 2, 最近的就是 5.

2. 如果 p 和 q 都不在以 root 为根的树中, 应该返回 null.

3. 如果 p 和 q 只有一个存在于 root 为根的树中, 返回这个节点即可.

虽然按照本题的题意, 一定会存在 LCA 节点, 但是递归过程中, 这三种情况要考虑到.

### 状态转移

**以 root 为根**转移成**以 root 的子节点为根**

### 递归出口

先卡住 bad case. 如果 root 为空, 肯定得返回 null; 如果 root 本身就是 p 或者 q, 假设 root 就是 p 节点, 如果 q 存在于以 root 为根的树中, 显然 root 就是最近公共祖先; 即使 q 不存在于以 root 为根的树中, 按照 3 的定义, 也应该返回 root 节点.

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 如果 root 不存在, 返回 null
  if (!root) return null

  // 如果 root 本身就是 p 或者 q, 返回 root
  if (root === p || root === q) return root

  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)

  // 如果 p 和 q 都在以 root 为根的树中, 函数返回的便是 p 和 q 的最近公共祖先节点
  if (left !== null && right !== null) return root

  // 如果 p 和 q 都不在以 root 为根的树中, 返回 null
  if (left === null && right === null) return null

  // 如果 p 和 q 只有一个存在于 root 为根的树中, 返回这个节点即可.
  return left === null ? right : left
}
```

对于上面的代码, 因为我们使用的**后序遍历**, 即从下往上走, 因此递归结束的返回值, 也就是离 p, q 最近的了.

## 附: The testing tree instance

```ts
function TreeNode(val, left, right) {
  this.val = val
  this.left = left
  this.right = right
}

const tree = new TreeNode(
  3,
  new TreeNode(
    5,
    new TreeNode(6, null, null),
    new TreeNode(2, new TreeNode(7, null, null), new TreeNode(4, null, null)),
  ),
  new TreeNode(1, new TreeNode(0, null, null), new TreeNode(8, null, null)),
)
```
