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

    // 如果链表为空，即 head 为 null，该节点将放置到链表头部
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
linkedList.push('first')
// linkedList.push('second')
// linkedList.push('third')
console.log(linkedList)

// {
//   count: 3,
//   head: {
//     element: 'first',
//     next: {
//       element: 'second',
//       next: {
//         element: 'third',
//         next: null
//       }
//     }
//   }
// }
