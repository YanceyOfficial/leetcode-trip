import { Node } from './Node'
import { congruentValue } from '../../shared/utils'
import { ILinkedList } from './types'

export class LinkedList implements ILinkedList {
  private count: number
  private head: any
  private equalsFn: Function

  constructor(equalsFn = congruentValue) {
    this.count = 0
    this.head = undefined
    this.equalsFn = equalsFn
  }

  public push(element: number) {
    const node = new Node(element)

    if (!this.head) {
      // 如果此时链表为空

    }
  }
}
