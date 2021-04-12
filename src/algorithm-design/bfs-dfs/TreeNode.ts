export interface ITreeNode<T> {
  val: T
  left: ITreeNode<T> | null
  right: ITreeNode<T> | null
}

export function TreeNode<T>(val: T, left: ITreeNode<T>, right: ITreeNode<T>) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
