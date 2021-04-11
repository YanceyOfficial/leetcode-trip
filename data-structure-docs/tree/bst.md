---
id: bst
title: 二分搜索树
sidebar_label: 二分搜索树
---

## 性质

- 若任意节点的左子树不空, 则左子树上所有节点的值均小于它的根节点的值;
- 若任意节点的右子树不空, 则右子树上所有节点的值均大于它的根节点的值;
- 任意节点的左、右子树也分别为二叉查找树;
- **BST 的中序遍历结果是有序的(升序).**

## 实现

```ts
// 请看栈那一章节
import { Stack } from '../Stack/ObjectStack'

// 请看队列那一章节
import { Queue } from '../Queue/Queue'

export type TreeNode<T> = Node<T> | null

export interface BST<T> {
  insert(key: T): void // 向树中插入一个新的键
  search(key: T): boolean // 在树中查找一个键. 如果节点存在, 则返回 true;如果不存在, 则返回 false
  remove(key: T): void // 从树中移除某个键
  inOrderTraverse(callback: Function): void // 中序遍历
  preOrderTraverse(callback: Function): void // 先序遍历
  postOrderTraverse(callback: Function): void // 后序遍历
  levelOrderTraverse(callback: Function): void // 层序遍历
  depth(): number // 返回树的深度
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

export type CompareFunction<T> = (a: T, b: T) => number

export class Node<T> {
  public left: Node<T> | null

  public right: Node<T> | null

  constructor(public key: T) {
    this.key = key
    this.left = null
    this.right = null
  }
}

export function defaultCompare<T>(a: T, b: T): number {
  if (a === b) {
    return Compare.EQUALS
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

export class BinarySearchTree<T> implements BST<T> {
  private root: TreeNode<T>

  private count: number

  constructor(protected compareFn: CompareFunction<T> = defaultCompare) {
    this.root = null
    this.count = 0
  }

  private insertNode(parentNode: Node<T>, key: T) {
    let current = parentNode
    const node = new Node(key)

    // 如果 key 小于当前节点的 key
    if (key < current.key) {
      // 如果当前节点的左侧子节点已经被占了
      if (current.left) {
        // 就递归呗
        current = current.left
        this.insertNode(current, key)
      } else {
        // 否则就直接把新节点插到这里
        current.left = node
      }
      // 右侧同理
    } else {
      if (current.right) {
        current = current.right
        this.insertNode(current, key)
      } else {
        current.right = node
      }
    }
  }

  private maxDepth(node: TreeNode<T>) {
    if (!node) return 0

    const left = this.maxDepth(node.left)
    const right = this.maxDepth(node.right)

    return Math.max(left, right) + 1
  }

  // 用迭代的方式实现中序遍历
  private inOrderTraverseByIteration(node: TreeNode<T>, callback: Function) {
    if (node === null) return

    const stack = new Stack<Node<T>>()

    while (!stack.isEmpty() || node !== null) {
      if (node !== null) {
        stack.push(node)
        node = node.left
      } else {
        node = stack.pop() as Node<T>
        callback(node.key)
        node = node.right
      }
    }
  }

  // 用迭代的方式实现先序遍历
  private preOrderTraverseByIteration(node: TreeNode<T>, callback: Function) {
    if (node === null) return

    const stack = new Stack<Node<T>>()
    stack.push(node)

    while (!stack.isEmpty()) {
      const pop = stack.pop() as Node<T>
      callback(pop.key)

      if (pop.right !== null) {
        stack.push(pop.right)
      }
      if (pop.left !== null) {
        stack.push(pop.left)
      }
    }
  }

  // 用迭代的方式实现后序遍历
  private postOrderTraverseByIteration(node: TreeNode<T>, callback: Function) {
    if (node === null) return

    const stack1 = new Stack<Node<T>>()
    const stack2 = new Stack<Node<T>>()

    stack1.push(node)

    while (!stack1.isEmpty()) {
      node = stack1.pop() as Node<T>

      stack2.push(node)

      if (node.left !== null) {
        stack1.push(node.left)
      }

      if (node.right !== null) {
        stack1.push(node.right)
      }
    }

    while (!stack2.isEmpty()) {
      const pop = stack2.pop() as Node<T>
      callback(pop.key)
    }
  }

  private inOrderTraverseNode(node: TreeNode<T>, callback: Function) {
    if (node) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }

  private preOrderTraverseNode(node: TreeNode<T>, callback: Function) {
    if (node) {
      callback(node.key)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }

  private postOrderTraverseNode(node: TreeNode<T>, callback: Function) {
    if (node) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }

  private levelOrderTraverseNode(node: TreeNode<T>, callback: Function) {
    if (node !== null) {
      const queue = new Queue<Node<T>>()
      queue.enqueue(node)

      while (!queue.isEmpty()) {
        const treeNode = queue.dequeue() as Node<T>
        callback(treeNode.key as T)

        if (treeNode.left !== null) {
          queue.enqueue(treeNode.left)
        }

        if (treeNode.right !== null) {
          queue.enqueue(treeNode.right)
        }
      }
    }
  }

  private minNode(node: TreeNode<T>) {
    if (node) {
      let current = node
      while (current.left) {
        current = current.left
      }
      return current
    }
    return null
  }

  private maxNode(node: TreeNode<T>) {
    if (node) {
      let current = node
      while (current.right) {
        current = current.right
      }
      return current
    }
    return null
  }

  private searchNode(node: TreeNode<T>, key: T) {
    if (!node) return false

    if (key < node.key) {
      return this.searchNode(node.left, key)
    }
    if (key > node.key) {
      return this.searchNode(node.right, key)
    }
    return true
  }

  private removeNode(node: TreeNode<T>, key: T) {
    if (node === null) {
      return null
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key)
      return node
    }
    if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key)
      return node
    }
    if (node.left == null && node.right == null) {
      node = null
      return node
    }
    if (node.left == null) {
      node = node.right
      return node
    }
    if (node.right == null) {
      node = node.left
      return node
    }

    const aux = this.minNode(node.right)
    if (aux) {
      node.key = aux.key
      node.right = this.removeNode(node.right, aux.key)
      return node
    }

    return null
  }

  public insert(key: T) {
    if (!this.root) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
    this.count++
  }

  // 先序遍历
  public preOrderTraverse(callback: Function) {
    this.preOrderTraverseNode(this.root, callback)
  }

  // 中序遍历
  public inOrderTraverse(callback: Function) {
    this.inOrderTraverseNode(this.root, callback)
  }

  // 后序遍历
  public postOrderTraverse(callback: Function) {
    this.postOrderTraverseNode(this.root, callback)
  }

  // 层序遍历
  public levelOrderTraverse(callback: Function) {
    this.levelOrderTraverseNode(this.root, callback)
  }

  public depth() {
    return this.maxDepth(this.root)
  }

  public min() {
    return this.minNode(this.root)
  }

  public max() {
    return this.maxNode(this.root)
  }

  public search(key: T) {
    return this.searchNode(this.root, key)
  }

  public remove(key: T) {
    this.removeNode(this.root, key)
  }

  public getRoot() {
    return this.root
  }

  public isEmpty() {
    return this.size() === 0
  }

  public size() {
    return this.count
  }

  public clear() {
    this.root = null
    this.count = 0
  }
}
```
