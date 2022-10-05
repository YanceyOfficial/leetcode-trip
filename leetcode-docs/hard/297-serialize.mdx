---
id: 297-serialize
title: 二叉树的序列化与反序列化
sidebar_label: 297. 二叉树的序列化与反序列化
keywords:
  - Tree
---

:::success Tips
题目类型: Tree
:::

## 题目

序列化和反序列化一棵树, 怎么设计序列化的结构都行, 最后能保证 `deserialize(serialize(root))` 成功执行, 自圆其说就行.

## 题解

序列化用个递归的前序遍历就 ok, 反序列化用个递归也 ok.

```ts
const SEP = ','
const NULL = '#'
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// 序列化
var serialize = function (root) {
  let res = []
  serializeHelper(root, res)
  return res.join('')
}

var serializeHelper = function (root, res) {
  if (root === null) {
    res.push(`${NULL}${SEP}`)
  } else {
    res.push(`${root.val}${SEP}`)
    serializeHelper(root.left, res)
    serializeHelper(root.right, res)
  }

  return res
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
// 反序列化
var deserialize = function (data) {
  const arr = data.split(SEP)
  return deserializeHelper(arr)
}

var deserializeHelper = function (arr) {
  if (arr.length === 0) return null
  const curr = arr.shift()
  if (curr === NULL) return null
  const root = new TreeNode(+curr)

  root.left = deserializeHelper(arr)
  root.right = deserializeHelper(arr)

  return root
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
```

## 参考

[二叉树的题, 就那几个框架, 枯燥至极 🤔](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247485871&idx=1&sn=bcb24ea8927995b585629a8b9caeed01&chksm=9bd7f7a7aca07eb1b4c330382a4e0b916ef5a82ca48db28908ab16563e28a376b5ca6805bec2&scene=21#wechat_redirect) 这篇文章讲了各种序列化/反序列化的方式.
