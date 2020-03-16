import { Node } from './Node'

export interface ILinkedList<T> {
  push(element: T): void // 向链表尾部添加一个新元素
  removeAt(index: number): any // 删除指定位置的元素
  remove(element: T): any // 从链表移除一个元素
  insert(element: T, index: number): boolean // 向链表指定位置插入元素
  getElementAt(index: number): Node<T> | null // 返回链表指定位置的元素, 若找不到返回 null
  indexOf(element: T): number // 返回链表指定元素的索引, 没有则返回 -1
  isEmpty(): boolean // 判断链表是否为空
  size(): number // 获取链表的长度
  getHead(): Node<T> | null // 获取 head
  clear(): void // 清空链表
  toString(): string // 返回链表的字符串形式
}
