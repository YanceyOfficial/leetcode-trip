// 节点类
// 一个链表节点包括当前元素和下一个元素的指针
export class Node {
  public element: any

  public next: any

  constructor(element: any) {
    this.element = element
    this.next = undefined
  }
}
