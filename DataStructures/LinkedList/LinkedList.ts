import { Node } from './Node'
import { ILinkedList } from './types'

export class LinkedList<T> implements ILinkedList<T> {
  protected count: number

  protected head: Node<T> | null

  constructor() {
    this.count = 0
    this.head = null
  }

  public push(element: T) {
    const node = new Node(element)
    let current: Node<T> | null = null

    // 如果链表为空, 即 head 为 null, 该节点将放置到链表头部
    if (this.isEmpty()) {
      this.head = node
    } else {
      current = this.head as Node<T>
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
    if (index < 0 || index > this.count - 1) return null

    let current = this.head

    // 如果删除第一个元素
    if (index === 0) {
      this.head = (current as Node<T>).next as Node<T>
    } else {
      const previous = this.getElementAt(index - 1)
      current = (previous as Node<T>).next as Node<T>
      (previous as Node<T>).next = current.next
    }
    this.count--
    return (current as Node<T>).element
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
    // 如果索引越界, 返回 null
    if (index < 0 || index > this.count - 1) return null

    let current = this.head as Node<T>
    for (let i = 0; i < index; i += 1) {
      current = current.next as Node<T>
    }

    return current
  }

  public indexOf(element: T) {
    let current = this.head

    // 遍历链表
    for (let i = 0; i < this.size(); i += 1) {
      if ((current as Node<T>).element === element) {
        return i
      }

      current = (current as Node<T>).next as Node<T>
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
    if (this.head === null) {
      return ''
    }
    let objString = `${this.head.element}`
    let current = this.head.next
    for (let i = 1; i < this.size() && current !== null; i++) {
      objString = `${objString},${(current as Node<T>).element}`
      current = (current as Node<T>).next
    }
    return objString
  }
}
