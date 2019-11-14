import { Node } from './Node'
import { BST } from './types'

export class BinarySearchTree<T> implements BST<T> {
  private root: Node<T> | null

  private count: number

  constructor() {
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

  private inOrderTraverseNode(node: Node<T> | null, callback: Function) {
    if (node) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }

  private preOrderTraverseNode(node: Node<T> | null, callback: Function) {
    if (node) {
      callback(node.key)
      this.inOrderTraverseNode(node.left, callback)
      this.inOrderTraverseNode(node.right, callback)
    }
  }

  private postOrderTraverseNode(node: Node<T> | null, callback: Function) {
    if (node) {
      this.inOrderTraverseNode(node.left, callback)
      this.inOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
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

  public search(key: T) {
    return !!key
  }

  public remove(key: T) {
    return !!key
  }

  public min() {
    return (this.root as Node<T>).key
  }

  public max() {
    return (this.root as Node<T>).key
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

const bst = new BinarySearchTree<number>()

bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
// bst.insert(9)
// bst.insert(8)
// bst.insert(10)
// bst.insert(13)
// bst.insert(12)
// bst.insert(14)
// bst.insert(20)
// bst.insert(18)
// bst.insert(25)

// console.log(bst)
// console.log(bst.size())

const cb = (value: number) => console.log(value)
bst.inOrderTraverse(cb)
