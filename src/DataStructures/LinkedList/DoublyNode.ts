import { Node } from './Node'

export class DoublyNode<T> extends Node<T> {
  constructor(
    public element: T,
    public next?: DoublyNode<T> | null,
    public prev?: DoublyNode<T> | null,
  ) {
    super(element, next)
    this.element = element
    this.next = next
    this.prev = prev
  }
}
