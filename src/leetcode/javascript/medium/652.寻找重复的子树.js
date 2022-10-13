/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
 */

// @lc code=start
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
// @lc code=end
