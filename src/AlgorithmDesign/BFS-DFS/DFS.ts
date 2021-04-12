import { ITreeNode } from './TreeNode'

// 递归法的深度优先遍历, 实现先序遍历
const DFSByRecursion = <T>(root: ITreeNode<T> | null, callback: Function) => {
  if (root === null) return

  // 遍历节点
  callback(root)

  // 遍历左节点
  DFSByRecursion(root.left, callback)

  // 遍历右节点
  DFSByRecursion(root.right, callback)
}

// 迭代法的深度优先遍历, 使用栈, 实现先序遍历
export const DFSByIteration = <T>(root: ITreeNode<T> | null, callback: Function) => {
  if (root === null) return

  const stack = [root]

  while (stack.length !== 0) {
    const curr = stack.pop() as  ITreeNode<T>

    callback(curr)

    if (curr.right !== null) {
      stack.push(curr.right)
    }

    if (curr.left !== null) {
      stack.push(curr.left)
    }
  }
}
