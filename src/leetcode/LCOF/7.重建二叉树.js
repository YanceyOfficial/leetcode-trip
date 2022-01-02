/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null

  // 前序遍历的第一个元素是根节点
  const rootVal = preorder[0]

  // 根据中序遍历的左子树长度, 找到前序遍历的左子树和右子树
  const inorderDivider = inorder.indexOf(rootVal)
  const inorderLefts = inorder.slice(0, inorderDivider)
  const inorderRights = inorder.slice(inorderDivider + 1)

  // 根据前序遍历的根节点, 找到中序遍历的左子树和右子树
  const preorderDivider = inorderLefts.length + 1
  const preorderLefts = preorder.slice(1, preorderDivider)
  const preorderRights = preorder.slice(preorderDivider)

  const root = new TreeNode(rootVal)

  root.left = buildTree(preorderLefts, inorderLefts)
  root.right = buildTree(preorderRights, inorderRights)

  return root
}
