import { LinkedList } from './LinkedList'
import { DoublyNode } from './Node/DoublyNode'

export class DoublyLinkedList<T> extends LinkedList<T> {
  protected head: DoublyNode<T> | undefined

  protected tail: DoublyNode<T> | undefined

  constructor() {
    super()
    this.tail = null
  }
}
