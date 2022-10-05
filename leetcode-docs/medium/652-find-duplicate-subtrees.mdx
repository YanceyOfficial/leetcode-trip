---
id: 652-find-duplicate-subtrees
title: 寻找重复的子树
sidebar_label: 652. 寻找重复的子树
keywords:
  - Tree
---

:::success Tips
题目类型: Tree
:::

## 题目

给一棵二叉树, 返回所有的重复子树. 对于同一类重复子树, 你只需要返回其中**任意**一棵根节点即可.

:::info 示例

```ts
    1
   / \
  2   3
 /   / \
4   2   4
   /
  4
```

输出: [2, 4]. 注: 数组里的元素为 TreeNode 节点的引用.

解释: 上面这棵树重复的地方有 2 -> 4(共有两个), 4(共有三个)

:::

## 题解

要想知道以某节点为 root 的子数长什么样, 那就应该先获取它的子树, 再加上它自己, 因此本次的基本框架为**后序遍历**. 因为本题仅仅对比**树的值及其形态**, 因此我们可以把递归出来的子树序列化成字符串的形式, 即 `left + ',' + right + ',' + root.val`.

我们把所有的序列化字符串都存到 hashmap 中, 如果找到重复的, 就把 root 存到 res 中即可. 需要注意的是: 因为会存在多个重复子树, 为保证只存到 res 一个, 只需当**序列化字符串的次数为 1 时, 将 root 存到 res 中**.

:::info Tips
还用到后序遍历的一道题是**计算节点总数**, 具体可查看 [222. 完全二叉树的节点个数](/leetcode/medium/222-count-nodes).
:::

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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  const res = [],
    map = {}
  dfs(root, map, res)
  return res
}

var dfs = function (root, map, res) {
  if (root === null) return ''

  const left = dfs(root.left, map, res)
  const right = dfs(root.right, map, res)

  // 后序遍历
  // 左右子树加上自己, 就是以自己为根的二叉树序列化结果
  const str = `${left},${right},${root.val}`

  const currCount = map[str]

  // 因为重复的子树数量可能不止一个, 比如示例中的 '4' 就有三个相同的
  // 为防止重复 push 到 res 中, 只需当 currCount 为 1 时才将 root
  // 添加到结果集
  if (currCount === 1) {
    res.push(root)
  }

  // 往 hashmap 加入元素
  if (map[str]) {
    map[str] += 1
  } else {
    map[str] = 1
  }

  return str
}
```
