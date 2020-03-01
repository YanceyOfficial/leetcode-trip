export class Node<T> {
  public left: Node<T> | null

  public right: Node<T> | null

  constructor(public readonly key: T) {
    this.key = key
    this.left = null
    this.right = null
  }
}
