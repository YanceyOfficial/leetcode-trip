/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
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
// @lc code=end
