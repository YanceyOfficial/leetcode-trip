import { Node } from './Node'
import { Stack } from '../Stack/ObjectStack'
import { Queue } from '../Queue/Queue'
import { BST } from './types'
import { defaultCompare } from '../tools'
import { Compare, ICompareFunction } from '../typings'

export class BinarySearchTree<T> implements BST<T> {
  private root: Node<T> | null

  private count: number

  constructor(protected compareFn: ICompareFunction<T> = defaultCompare) {
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

  private maxDepth(node: Node<T> | null) {
    if (!node) return 0

    const left = this.maxDepth(node.left)
    const right = this.maxDepth(node.right)

    return Math.max(left, right) + 1
  }

  // 用迭代的方式实现中序遍历
  private inOrderTraverseByIteration(node: Node<T> | null, callback: Function) {
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
  private preOrderTraverseByIteration(
    node: Node<T> | null,
    callback: Function,
  ) {
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
  private postOrderTraverseByIteration(
    node: Node<T> | null,
    callback: Function,
  ) {
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
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }

  private postOrderTraverseNode(node: Node<T> | null, callback: Function) {
    if (node) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }

  private levelOrderTraverseNode(node: Node<T> | null, callback: Function) {
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

  private minNode(node: Node<T> | null) {
    if (node) {
      let current = node
      while (current.left) {
        current = current.left
      }
      return current
    }
    return null
  }

  private maxNode(node: Node<T> | null) {
    if (node) {
      let current = node
      while (current.right) {
        current = current.right
      }
      return current
    }
    return null
  }

  private searchNode(node: Node<T> | null, key: T) {
    if (!node) return false

    if (key < node.key) {
      return this.searchNode(node.left, key)
    }
    if (key > node.key) {
      return this.searchNode(node.right, key)
    }
    return true
  }

  private removeNode(node: Node<T> | null, key: T) {
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

const bst = new BinarySearchTree<number>()

bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)

// console.log(bst)
// console.log(bst.size())

const cb = (value: number) => console.log(value)
bst.postOrderTraverse(cb)

// console.log(bst.min())
// console.log(bst.max())
// console.log(bst.search(331))
// console.log(bst.search(7))
