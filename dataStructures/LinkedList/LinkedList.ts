import { Node } from './Node'
import { congruentValue } from '../../shared/utils'
import { ILinkedList } from './types'

export class LinkedList implements ILinkedList {
  private count: number

  private head: any

  constructor() {
    this.count = 0
    this.head = null
  }

  public push(element: any) {
    const node = new Node(element)
    let current = null
    if (!this.head) {
      this.head = node
    } else {
      current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }

  public insert(element: any, position: number) {}

  public getElementAt(index: number) {
    return 1
  }

  public remove(element: any) {}

  public indexOf(element: any) {
    return 1
  }

  public removeAt(position: number) {}

  public isEmpty() {
    return this.count === 0
  }

  public size() {
    return this.count
  }

  public toString() {
    return '1'
  }
}

const linkedList = new LinkedList()
console.log(linkedList)
linkedList.push('第一个节点')
console.log(linkedList)
linkedList.push('第二个节点')
console.log(linkedList)
