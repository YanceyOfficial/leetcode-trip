import { LinkedList } from './LinkedList'
import { DoublyNode } from './DoublyNode'

export class DoublyLinkedList<T> extends LinkedList<T> {
  protected tail: DoublyNode<T> | null

  constructor() {
    super()
    this.tail = null
  }

  public push(element: T) {
    const node = new DoublyNode(element)
    if (this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      if (this.tail) {
        this.tail.next = node
        node.prev = this.tail
        this.tail = node
      }
    }
    this.count++
  }

  public insert(element: T, index: number) {
    if (index < 0 || index > this.count - 1) return false

    const node = new DoublyNode(element)
    return true
  }
}
