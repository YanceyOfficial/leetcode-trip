import { Node } from './Node'

export interface BST<T> {
  insert(key: T): void // 向树中插入一个新的键
  search(key: T): boolean // 在树中查找一个键。如果节点存在，则返回 true;如果不存在，则返回 false
  remove(key: T): void // 从树中移除某个键
  inOrderTraverse(callback: Function): void // 中序遍历
  preOrderTraverse(callback: Function): void // 先序遍历
  postOrderTraverse(callback: Function): void // 后序遍历
  levelOrderTraverse(callback: Function): void // 层序遍历
  min(): Node<T> | null // 返回树中最小的值/键
  max(): Node<T> | null // 返回树中最大的值/键
  getRoot(): Node<T> | null // 返回树的根节点
  isEmpty(): boolean // 判断树是否为空
  size(): number // 获取树的长度
  clear(): any // 清空树
}

export enum Compare {
  LESS_THAN = -1,
  BIGGER_THAN = 1,
  EQUALS = 0,
}

export type ICompareFunction<T> = (a: T, b: T) => number
