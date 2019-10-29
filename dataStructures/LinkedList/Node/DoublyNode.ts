import { Node } from './Node'

export class DoublyNode<T> extends Node<T> {
  constructor(
    public element: T,
    public next?: DoublyNode<T>,
    public prev?: DoublyNode<T>,
  ) {
    super(element, next)
  }
}
