import { Node } from './Node'
import { ILinkedList } from './types'

export class LinkedList<T> implements ILinkedList {
  protected count: number

  protected head: Node<T> | null

  constructor() {
    this.count = 0
    this.head = null
  }

  public push(element: T) {
    const node = new Node(element)
    let current = null

    // 如果链表为空, 即 head 为 null, 该节点将放置到链表头部
    if (this.isEmpty()) {
      this.head = node
    } else {
      current = this.head
      // 否则一直遍历到链表的尾部
      while (current.next) {
        current = current.next
      }
      // 将该新增节点插入到尾部
      current.next = node
    }
    this.count++
  }

  public removeAt(index: number) {
    if (index < 0 || index > this.count - 1) return undefined

    let current = this.head

    // 如果删除第一个元素
    if (index === 0) {
      this.head = current.next
    } else {
      const previous = this.getElementAt(index - 1)
      current = previous.next
      previous.next = current.next
    }
    this.count--
    return current.element
  }

  public remove(element: T) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  public insert(element: T, index: number) {
    if (index < 0 || index > this.count - 1) return false

    const node = new Node(element)

    if (index === 0) {
      const current = this.head
      node.next = current
      this.head = node
    } else {
      const previous = this.getElementAt(index - 1)
      if (previous) {
        node.next = previous.next
        previous.next = node
      }
    }

    this.count++
    return true
  }

  public getElementAt(index: number) {
    // 如果索引越界, 返回 undefined
    if (index < 0 || index > this.count - 1) return undefined

    let current = this.head
    for (let i = 0; i < index; i += 1) {
      current = current.next
    }

    return current
  }

  public indexOf(element: T) {
    let current = this.head

    // 遍历链表
    for (let i = 0; i < this.size(); i += 1) {
      if (current.element === element) {
        return i
      }
      current = current.next
    }
    return -1
  }

  public isEmpty() {
    return this.size() === 0
  }

  public size() {
    return this.count
  }

  public getHead() {
    return this.head
  }

  public clear() {
    this.head = null
    this.count = 0
  }

  public toString() {
    if (this.head == null) {
      return ''
    }
    let objString = `${this.head.element}`
    let current = this.head.next
    for (let i = 1; i < this.size() && current !== null; i++) {
      objString = `${objString},${current.element}`
      current = current.next
    }
    return objString
  }
}
