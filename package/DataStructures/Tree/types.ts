export interface IBinarySearchTree<T> {
  insert(key: T): void // 向树中插入一个新的键
  search(key: T): boolean // 在树中查找一个键。如果节点存在，则返回 true;如果不存在，则返回
  inOrderTraverse(): T[] // 通过中序遍历方式遍历所有节点
  preOrderTraverse(): T[] // 通过先序遍历方式遍历所有节点
  postOrderTraverse(): T[] // 通过后序遍历方式遍历所有节点
  min(): T // 返回树中最小的值/键
  max(): T // 返回树中最大的值/键
  remove(key: T): boolean // 从树中移除某个键
}
