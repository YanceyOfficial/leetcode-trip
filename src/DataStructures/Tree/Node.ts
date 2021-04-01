export class Node<T> {
  public left: Node<T> | null

  public right: Node<T> | null

  constructor(public key: T) {
    this.key = key
    this.left = null
    this.right = null
  }
}

export type TreeNode<T> = Node<T> | null
