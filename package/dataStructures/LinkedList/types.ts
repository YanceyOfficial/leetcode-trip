export interface ILinkedList {
  push(element: any): void // 向链表尾部添加一个新元素
  removeAt(index: number): any // 删除指定位置的元素
  remove(element: any): any // 从链表移除一个元素
  insert(element: any, index: number): boolean // 向链表指定位置插入元素
  getElementAt(index: number): any // 返回链表指定位置的元素，若找不到返回 undefined
  indexOf(element: any): number // 返回链表指定元素的索引，没有则返回 -1
  isEmpty(): boolean // 判断链表是否为空
  size(): number // 获取链表的长度
  getHead(): any // 获取 head
  clear(): any // 清空链表
  toString(): string // 返回链表的字符串形式
}
