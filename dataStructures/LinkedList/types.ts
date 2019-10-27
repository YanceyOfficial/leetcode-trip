export interface ILinkedList {
  push(element: string): void // 向链表尾部添加一个新元素
  insert(element: string, position: number): void // 向链表指定位置插入元素
  getElementAt(index: number): string // 返回链表指定位置的元素，若找不到返回 undefined
  remove(element: string): void // 从链表移除一个元素
  indexOf(element: string): number // 返回链表指定元素的索引，没有则返回 -1
  removeAt(position: number): void // 删除指定位置的元素
  isEmpty(): boolean // 判断链表是否为空
  size(): number // 获取链表的长度
  toString(): string // 返回链表的字符串形式
}
