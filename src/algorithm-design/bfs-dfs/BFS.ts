import { ITreeNode } from './TreeNode'

export const BFS = <T>(root: ITreeNode<T>, callback: Function) => {
  if (root) {
    const queue = [root]

    while (queue.length !== 0) {
      const currLevelLength = queue.length

      for (let i = 0; i < currLevelLength; i++) {
        const node = queue.shift() as ITreeNode<T>

        callback(node)

        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
      }
    }
  }
}
