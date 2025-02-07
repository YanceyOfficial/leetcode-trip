// 节点类
// 一个链表节点包括当前元素和下一个元素的指针
export class Node<T> {
  constructor(
    public element: T,
    public next?: Node<T> | null,
  ) {
    this.element = element
    this.next = null
  }
}
