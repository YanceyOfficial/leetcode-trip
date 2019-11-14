import { Node } from './Node'

export interface BST<T> {
  insert(key: T): void // 向树中插入一个新的键
  search(key: T): boolean // 在树中查找一个键。如果节点存在，则返回 true;如果不存在，则返回 false
  remove(key: T): boolean // 从树中移除某个键
  inOrderTraverse(callback: Function): void // 通过中序遍历方式遍历所有节点
  preOrderTraverse(callback: Function): void // 通过先序遍历方式遍历所有节点
  postOrderTraverse(callback: Function): void // 通过后序遍历方式遍历所有节点
  min(): T | null // 返回树中最小的值/键
  max(): T | null // 返回树中最大的值/键
  getRoot(): Node<T> | null // 返回树中最大的值/键
  isEmpty(): boolean // 判断链表是否为空
  size(): number // 获取链表的长度
  clear(): any // 清空链表
}
